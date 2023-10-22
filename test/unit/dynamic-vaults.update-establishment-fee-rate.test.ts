import {parseEther} from 'ethers/lib/utils';
import {deployments} from 'hardhat';
import {BoardWallet} from '../../typechain';
import {expect} from '../helpers/chai-setup';
import {setupFixture} from '../utils';
import {User} from '../utils/types';
import {setupTestContracts} from './utils/index';

const setup = deployments.createFixture(async () => {
  return setupFixture('all');
});

describe('BoardWallet - Establishment fee', function () {
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

  it('Updating the establishment fee without being the owner should revert', async () => {
    await expect(
      exploiter.BoardWallet.updateEstablishmentFeeRate(parseEther('0.05'))
    ).to.be.revertedWith('Ownable: caller is not the owner');
  });

  it('Updating the establishment fee while being the owner should succeed', async () => {
    await expect(
      governance.BoardWallet.updateEstablishmentFeeRate(parseEther('0.05'))
    ).to.emit(governance.BoardWallet, 'EstablishmentFeeRateUpdated');
  });
});
