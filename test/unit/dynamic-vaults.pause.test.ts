import {deployments} from 'hardhat';
import {BoardWallet} from '../../typechain';
import {expect} from '../helpers/chai-setup';
import {setupFixture} from '../utils';
import {User} from '../utils/types';
import {setupTestContracts} from './utils/index';

const setup = deployments.createFixture(async () => {
  return setupFixture('all');
});

describe('BoardWallet - Pause ', function () {
  let BoardWallet: BoardWallet;
  let exploiter: User, governance: User;
  beforeEach(async () => {
    const {deployer, mocks, users} = await setup();

    const {deployedBoardWallets, testExploiter, testGovernance} =
      await setupTestContracts(deployer, mocks, users);
    BoardWallet = deployedBoardWallets;
    exploiter = testExploiter;
    governance = testGovernance;
  });

  it('Pausing the contract without being the owner should revert', async () => {
    await expect(exploiter.BoardWallet.pause()).to.be.revertedWith(
      'Ownable: caller is not the owner'
    );
  });

  it('Unpausing the contract without being the owner should revert', async () => {
    await expect(exploiter.BoardWallet.unpause()).to.be.revertedWith(
      'Ownable: caller is not the owner'
    );
  });

  it('Pausing the contract while it was already paused should revert', async function () {
    await expect(governance.BoardWallet.pause()).to.emit(
      governance.BoardWallet,
      'Paused'
    );
    await expect(governance.BoardWallet.pause()).to.be.revertedWith(
      'Pausable: paused'
    );
  });

  it('Unpausing the contract while it was already unpaused should revert', async function () {
    await expect(governance.BoardWallet.unpause()).to.be.revertedWith(
      'Pausable: not paused'
    );
  });

  it('Pausing the contract while it is unpaused should update the pause status', async function () {
    await expect(governance.BoardWallet.pause()).to.emit(
      governance.BoardWallet,
      'Paused'
    );
    expect(await governance.BoardWallet.paused()).to.be.true;
  });

  it('Unpausing the contract while it is paused should update the pause status', async function () {
    await expect(governance.BoardWallet.pause()).to.emit(
      governance.BoardWallet,
      'Paused'
    );
    await expect(governance.BoardWallet.unpause()).to.emit(
      governance.BoardWallet,
      'Unpaused'
    );
    expect(await governance.BoardWallet.paused()).to.be.false;
  });
});
