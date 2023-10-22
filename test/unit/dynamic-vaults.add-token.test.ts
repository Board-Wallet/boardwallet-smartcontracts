import {deployments, ethers} from 'hardhat';
import {BoardWallet} from '../../typechain/contracts/BoardWallet';
import {expect} from '../helpers/chai-setup';
import {setupFixture} from '../utils';
import {User} from '../utils/types';
import {setupTestContracts} from './utils/index';

const setup = deployments.createFixture(async () => {
  return setupFixture('all');
});

describe('BoardWallet - backup', function () {
  let BoardWallet: BoardWallet;
  let owner: string;
  let dynamicVaultOwner: User, beneficiary1: User, exploiter: User;
  beforeEach(async () => {
    const {deployer, mocks, users} = await setup();

    const {
      deployedBoardWallets,
      testDynamicVaultOwner,
      testBeneficiary1,
      testExploiter,
    } = await setupTestContracts(deployer, mocks, users);
    BoardWallet = deployedBoardWallets;
    owner = testDynamicVaultOwner.address;
    dynamicVaultOwner = testDynamicVaultOwner;
    beneficiary1 = testBeneficiary1;
    exploiter = testExploiter;
  });

  it('Adding the zero address as a backup should revert', async () => {
    await expect(
      dynamicVaultOwner.BoardWallet.addBackup(ethers.constants.AddressZero)
    ).to.be.revertedWith('T_ADDRESS_ZERO');
  });

  it('Adding yourself as the backup address should revert', async () => {
    await expect(
      dynamicVaultOwner.BoardWallet.addBackup(dynamicVaultOwner.address)
    ).to.be.revertedWith('T_BACKUP_ADDRESS_IS_OWNER');
  });

  it('Adding a backup address that was already added should revert', async () => {
    await dynamicVaultOwner.BoardWallet.addBackup(beneficiary1.address);
    await expect(
      dynamicVaultOwner.BoardWallet.addBackup(beneficiary1.address)
    ).to.be.revertedWith('T_BACKUP_ADDRESS_ALREADY_EXISTS');
  });
});
