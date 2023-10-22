import {deployments, ethers} from 'hardhat';
import {BoardWallet} from '../../typechain';
import {expect} from '../helpers/chai-setup';
import {setupFixture} from '../utils';
import {INACTIVITY_MAXIMUM} from '../utils/constants';
import {User} from '../utils/types';
import {setupTestContracts} from './utils/index';

const setup = deployments.createFixture(async () => {
  return setupFixture('all');
});

describe('BoardWallet - cancel', function () {
  let BoardWallet: BoardWallet;
  let governance: User, dynamicVaultOwner: User, beneficiary1: User;
  beforeEach(async () => {
    const {deployer, mocks, users} = await setup();

    const {
      deployedBoardWallets,
      testDynamicVaultOwner,
      testExploiter,
      testGovernance,
      testBeneficiary1,
    } = await setupTestContracts(deployer, mocks, users);
    BoardWallet = deployedBoardWallets;
    governance = testGovernance;
    dynamicVaultOwner = testDynamicVaultOwner;
    beneficiary1 = testBeneficiary1;
  });

  it('Canceling a testament should work', async () => {
    await expect(dynamicVaultOwner.BoardWallet.cancelTestament()).to.emit(
      dynamicVaultOwner.BoardWallet,
      'TestamentCanceled'
    );
  });

  it('Trying to succeed a testament that was canceled should revert', async () => {
    await expect(dynamicVaultOwner.BoardWallet.cancelTestament()).to.emit(
      dynamicVaultOwner.BoardWallet,
      'TestamentCanceled'
    );

    await ethers.provider.send('evm_increaseTime', [
      INACTIVITY_MAXIMUM.toNumber(),
    ]);

    await ethers.provider.send('evm_mine', []);

    await expect(
      beneficiary1.BoardWallet.succeed(dynamicVaultOwner.address)
    ).to.be.revertedWith('T_CANCELED');
  });
});
