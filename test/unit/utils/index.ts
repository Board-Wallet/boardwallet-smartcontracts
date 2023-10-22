import {parseEther} from 'ethers/lib/utils';
import {ethers} from 'hardhat';
import {BoardWallet} from '../../../typechain';

import {setupUser} from '../../utils';
import {
  ESTABLISHMENT_FEE_RATE,
  INACTIVITY_MAXIMUM,
} from '../../utils/constants';
import {Deployer, Mocks, User} from '../../utils/types';

//Functional setup for Position Contract Tests :
//Deploying Contracts, mocking return values, returning users
export const setupTestContracts = async (
  deployer: Deployer,
  mocks: Mocks,
  users: ({address: string} & Deployer)[]
): Promise<{
  deployedBoardWallets: BoardWallet;
  testGovernance: User;
  testDynamicVaultOwner: User;
  testBeneficiary1: User;
  testBeneficiary2: User;
  testUser1: User;
  testExploiter: User;
}> => {
  const deployedBoardWallets = await deployer.BoardWalletsF.deploy();

  await deployedBoardWallets
    .connect(await ethers.getSigner(users[1].address))
    .initialize(ESTABLISHMENT_FEE_RATE);

  // setup users
  const testGovernance = await setupUser(users[1].address, {
    BoardWallet: deployedBoardWallets,
  });

  const testDynamicVaultOwner = await setupUser(users[2].address, {
    BoardWallet: deployedBoardWallets,
  });

  const testBeneficiary1 = await setupUser(users[3].address, {
    BoardWallet: deployedBoardWallets,
  });

  const testBeneficiary2 = await setupUser(users[4].address, {
    BoardWallet: deployedBoardWallets,
  });

  const testUser1 = await setupUser(users[5].address, {
    BoardWallet: deployedBoardWallets,
  });

  const testExploiter = await setupUser(users[6].address, {
    BoardWallet: deployedBoardWallets,
  });

  // setup mocks
  await mocks.TestToken.mock.transfer.returns(true);
  await mocks.TestToken.mock.transferFrom.returns(true);

  await testDynamicVaultOwner.BoardWallet.createTestament(INACTIVITY_MAXIMUM, [
    {
      name: 'test',
      address_: testBeneficiary1.address,
      inheritancePercentage: parseEther('50'),
    },
  ]);

  return {
    deployedBoardWallets,
    testGovernance,
    testDynamicVaultOwner,
    testBeneficiary1,
    testBeneficiary2,
    testUser1,
    testExploiter,
  };
};
