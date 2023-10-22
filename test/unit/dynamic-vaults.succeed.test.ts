import {BigNumber} from 'ethers';
import {deployments, ethers} from 'hardhat';
import {BoardWallet} from '../../typechain/contracts/BoardWallet';
import {FDAI} from '../../typechain/contracts/mocks/FDAI';
import {expect} from '../helpers/chai-setup';
import {setupFixture, setupUser} from '../utils';
import {APPROVE_AMOUNT, INACTIVITY_MAXIMUM} from '../utils/constants';
import {User} from '../utils/types';
import {setupTestContracts} from './utils/index';

const setup = deployments.createFixture(async () => {
  return setupFixture('all');
});

describe('BoardWallet - succeed', function () {
  let BoardWallet: BoardWallet;
  let owner: string;
  let dynamicVaultOwner: User, beneficiary1: User;
  let FDAI: FDAI;
  beforeEach(async () => {
    const {deployer, mocks, users} = await setup();

    const {deployedBoardWallets, testDynamicVaultOwner, testBeneficiary1} =
      await setupTestContracts(deployer, mocks, users);
    BoardWallet = deployedBoardWallets;
    owner = testDynamicVaultOwner.address;
    beneficiary1 = testBeneficiary1;

    const deployedFDAI = await deployer.FDAIF.deploy();
    FDAI = deployedFDAI;
    dynamicVaultOwner = await setupUser(users[2].address, {
      BoardWallet: deployedBoardWallets,
      FDAI: deployedFDAI,
    });
    FDAI.mint(dynamicVaultOwner.address, APPROVE_AMOUNT);
  });

  it('Calling the succeed function when the owner has not transcended should revert', async () => {
    await expect(beneficiary1.BoardWallet.succeed(owner)).to.be.revertedWith(
      'T_NO_TRANSCENDENCE'
    );
  });

  it('Calling the succeed function as someone that is not the claimer should revert', async () => {
    await expect(BoardWallet.succeed(owner)).to.be.revertedWith(
      'T_UNAUTHORIZED'
    );
  });

  it('Calling the succeed function more than once should revert', async () => {
    await ethers.provider.send('evm_increaseTime', [
      INACTIVITY_MAXIMUM.toNumber(),
    ]);

    await ethers.provider.send('evm_mine', []);

    await expect(beneficiary1.BoardWallet.succeed(owner)).to.emit(
      beneficiary1.BoardWallet,
      'TestamentSucceeded'
    );

    await expect(beneficiary1.BoardWallet.succeed(owner)).to.be.revertedWith(
      'T_SUCCEEDED'
    );
  });

  it('A successful succeed should increase the beneficiary funds accordingly to the inheritance percentage', async () => {
    await expect(
      dynamicVaultOwner.FDAI?.approve(BoardWallet.address, APPROVE_AMOUNT)
    ).to.emit(dynamicVaultOwner.FDAI, 'Approval');
    await expect(dynamicVaultOwner.BoardWallet.addToken(FDAI.address)).to.emit(
      dynamicVaultOwner.BoardWallet,
      'TokenAdded'
    );

    await ethers.provider.send('evm_increaseTime', [
      INACTIVITY_MAXIMUM.toNumber(),
    ]);
    await ethers.provider.send('evm_mine', []);

    await beneficiary1.BoardWallet.succeed(owner);

    const finalBalance = await FDAI.balanceOf(beneficiary1.address);

    // On the setup the beneficiary1 is set to inherit 50% of the funds
    expect(finalBalance).to.be.equal(APPROVE_AMOUNT.div(BigNumber.from(2)));
  });
});
