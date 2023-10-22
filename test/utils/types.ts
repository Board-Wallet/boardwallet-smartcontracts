import {MockContract} from '@ethereum-waffle/mock-contract';
import {BigNumber} from 'ethers';

import {BoardWallet, BoardWallets__factory, FDAI} from '../../typechain';
import {Types} from '../../typechain/contracts/BoardWallet';
import {FDAI__factory} from '../../typechain/factories/contracts/mocks/FDAI__factory';

export type TestamentCreationParams = [
  claimant: string,
  inactivityMaximum: BigNumber,
  Beneficiaries: Types.BeneficiaryStruct[]
];

export type Deployer = {
  BoardWallet: BoardWallet;
  BoardWalletsF: BoardWallets__factory;
  FDAIF: FDAI__factory;
};

export type Mocks = {
  TestToken: MockContract;
  BoardWallet: MockContract;
};

export type User = {
  address: string;
  BoardWallet: BoardWallet | MockContract;
  FDAI?: FDAI | MockContract;
};
