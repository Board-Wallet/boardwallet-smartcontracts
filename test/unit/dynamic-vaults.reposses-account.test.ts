import {MockContract} from '@ethereum-waffle/mock-contract';
import {deployments} from 'hardhat';
import {BoardWallet} from '../../typechain/contracts/BoardWallet';
import {expect} from '../helpers/chai-setup';
import {setupFixture} from '../utils';
import {User} from '../utils/types';
import {setupTestContracts} from './utils/index';

const setup = deployments.createFixture(async () => {
  return setupFixture('all');
});

describe('BoardWallet - repossessAccount', function () {
  let BoardWallet: BoardWallet;
  let owner: string;
  let exploiter: User;
  let testToken: MockContract;
  beforeEach(async () => {
    const {deployer, mocks, users} = await setup();

    const {deployedBoardWallets, testDynamicVaultOwner, testExploiter} =
      await setupTestContracts(deployer, mocks, users);
    BoardWallet = deployedBoardWallets;
    owner = testDynamicVaultOwner.address;
    exploiter = testExploiter;

    testToken = mocks.TestToken;
  });

  it('Calling repossessAccount from an account other than a backup address should revert', async () => {
    await expect(
      exploiter.BoardWallet.repossessAccount(owner)
    ).to.be.revertedWith('T_UNAUTHORIZED');
  });
});
