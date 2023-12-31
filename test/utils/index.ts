import {Contract, ContractFactory} from 'ethers';
import {
  artifacts,
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';

import {deployMockContract} from '@ethereum-waffle/mock-contract';

import {
  BoardWallet,
  BoardWallets__factory,
  FDAI__factory,
} from '../../typechain';

export async function setupUsers<
  T extends {[contractName: string]: Contract | ContractFactory}
>(addresses: string[], contracts: T): Promise<({address: string} & T)[]> {
  const users: ({address: string} & T)[] = [];
  for (const address of addresses) {
    users.push(await setupUser(address, contracts));
  }
  return users;
}

export async function setupUser<
  T extends {[contractName: string]: Contract | ContractFactory}
>(address: string, contracts: T): Promise<{address: string} & T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = {address}; // user type is cast on the return statement
  for (const key of Object.keys(contracts)) {
    user[key as keyof typeof user] = contracts[key].connect(
      await ethers.getSigner(address)
    );
  }
  return user as {address: string} & T;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function setupFixture(fixtureName: string) {
  await deployments.fixture(fixtureName);
  const {deployer} = await getNamedAccounts();
  const signerDeployer = await ethers.getSigner(deployer);

  const BoardWallet = await artifacts.readArtifact('BoardWallet');
  const IERC20 = await artifacts.readArtifact('IERC20');

  const BoardWalletsM = await deployMockContract(
    signerDeployer,
    BoardWallet.abi
  );
  const TestTokenM = await deployMockContract(signerDeployer, IERC20.abi);

  const contracts = {
    FDAIF: <FDAI__factory>await ethers.getContractFactory('FDAI'),

    BoardWallet: <BoardWallet>await ethers.getContract('BoardWallet'),
    BoardWalletsF: <BoardWallets__factory>(
      await ethers.getContractFactory('BoardWallet')
    ),
  };

  const users = await setupUsers(await getUnnamedAccounts(), contracts);

  return {
    ...contracts,
    mocks: {
      BoardWallet: BoardWalletsM,
      TestToken: TestTokenM,
    },
    users,
    deployer: await setupUser(deployer, contracts),
  };
}

export async function getTimeStamp(): Promise<number> {
  const blockNum = await ethers.provider.getBlockNumber();
  const block = await ethers.provider.getBlock(blockNum);
  return block.timestamp;
}
