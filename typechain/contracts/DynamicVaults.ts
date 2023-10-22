/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace Types {
  export type BeneficiaryStruct = {
    name: PromiseOrValue<string>;
    address_: PromiseOrValue<string>;
    inheritancePercentage: PromiseOrValue<BigNumberish>;
  };

  export type BeneficiaryStructOutput = [string, string, BigNumber] & {
    name: string;
    address_: string;
    inheritancePercentage: BigNumber;
  };

  export type TestamentStruct = {
    inactivityMaximum: PromiseOrValue<BigNumberish>;
    proofOfLife: PromiseOrValue<BigNumberish>;
    succeeded: PromiseOrValue<boolean>;
    beneficiaries: Types.BeneficiaryStruct[];
    tokens: PromiseOrValue<string>[];
    status: PromiseOrValue<BigNumberish>;
  };

  export type TestamentStructOutput = [
    BigNumber,
    BigNumber,
    boolean,
    Types.BeneficiaryStructOutput[],
    string[],
    number
  ] & {
    inactivityMaximum: BigNumber;
    proofOfLife: BigNumber;
    succeeded: boolean;
    beneficiaries: Types.BeneficiaryStructOutput[];
    tokens: string[];
    status: number;
  };
}

export interface DynamicVaultsInterface extends utils.Interface {
  functions: {
    "addBackup(address)": FunctionFragment;
    "addBeneficiary((string,address,uint128))": FunctionFragment;
    "addToken(address)": FunctionFragment;
    "cancelTestament()": FunctionFragment;
    "createTestament(uint128,(string,address,uint128)[])": FunctionFragment;
    "dynamicVaults(address)": FunctionFragment;
    "getBackupAddresses(address)": FunctionFragment;
    "getTestamentParameters(address)": FunctionFragment;
    "initialize(uint128)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "removeBackup(address)": FunctionFragment;
    "removeBeneficiary(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "repossessAccount(address)": FunctionFragment;
    "signalLife()": FunctionFragment;
    "succeed(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateBeneficiaries(string[],address[],uint128[],uint128[])": FunctionFragment;
    "updateEstablishmentFeeRate(uint128)": FunctionFragment;
    "updateInactivityMaximum(uint128)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addBackup"
      | "addBeneficiary"
      | "addToken"
      | "cancelTestament"
      | "createTestament"
      | "dynamicVaults"
      | "getBackupAddresses"
      | "getTestamentParameters"
      | "initialize"
      | "owner"
      | "pause"
      | "paused"
      | "removeBackup"
      | "removeBeneficiary"
      | "renounceOwnership"
      | "repossessAccount"
      | "signalLife"
      | "succeed"
      | "transferOwnership"
      | "unpause"
      | "updateBeneficiaries"
      | "updateEstablishmentFeeRate"
      | "updateInactivityMaximum"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addBackup",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addBeneficiary",
    values: [Types.BeneficiaryStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "addToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelTestament",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createTestament",
    values: [PromiseOrValue<BigNumberish>, Types.BeneficiaryStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "dynamicVaults",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBackupAddresses",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTestamentParameters",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeBackup",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeBeneficiary",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repossessAccount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "signalLife",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "succeed",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateBeneficiaries",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateEstablishmentFeeRate",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateInactivityMaximum",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "addBackup", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelTestament",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createTestament",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dynamicVaults",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBackupAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTestamentParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeBackup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repossessAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "signalLife", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "succeed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateBeneficiaries",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateEstablishmentFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateInactivityMaximum",
    data: BytesLike
  ): Result;

  events: {
    "BackupAdded(address,address)": EventFragment;
    "BeneficiariesUpdated(address,tuple[])": EventFragment;
    "BeneficiaryAdded(address,address)": EventFragment;
    "BeneficiaryPercentageUpdated(address,address,uint128)": EventFragment;
    "BeneficiaryRemoved(address,address)": EventFragment;
    "EstablishmentFeeRateUpdated(uint128)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "ProofOfLifeUpdated(address,uint128)": EventFragment;
    "TestamentCanceled(address)": EventFragment;
    "TestamentSucceeded(address)": EventFragment;
    "TokenAdded(address,address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "accountRepossessed(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BackupAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeneficiariesUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeneficiaryAdded"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "BeneficiaryPercentageUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeneficiaryRemoved"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "EstablishmentFeeRateUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProofOfLifeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TestamentCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TestamentSucceeded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "accountRepossessed"): EventFragment;
}

export interface BackupAddedEventObject {
  owner: string;
  backupAddress: string;
}
export type BackupAddedEvent = TypedEvent<
  [string, string],
  BackupAddedEventObject
>;

export type BackupAddedEventFilter = TypedEventFilter<BackupAddedEvent>;

export interface BeneficiariesUpdatedEventObject {
  owner: string;
  beneficiaries: Types.BeneficiaryStructOutput[];
}
export type BeneficiariesUpdatedEvent = TypedEvent<
  [string, Types.BeneficiaryStructOutput[]],
  BeneficiariesUpdatedEventObject
>;

export type BeneficiariesUpdatedEventFilter =
  TypedEventFilter<BeneficiariesUpdatedEvent>;

export interface BeneficiaryAddedEventObject {
  owner: string;
  beneficiary: string;
}
export type BeneficiaryAddedEvent = TypedEvent<
  [string, string],
  BeneficiaryAddedEventObject
>;

export type BeneficiaryAddedEventFilter =
  TypedEventFilter<BeneficiaryAddedEvent>;

export interface BeneficiaryPercentageUpdatedEventObject {
  owner: string;
  beneficiaryAddress: string;
  newInheritancePercentage: BigNumber;
}
export type BeneficiaryPercentageUpdatedEvent = TypedEvent<
  [string, string, BigNumber],
  BeneficiaryPercentageUpdatedEventObject
>;

export type BeneficiaryPercentageUpdatedEventFilter =
  TypedEventFilter<BeneficiaryPercentageUpdatedEvent>;

export interface BeneficiaryRemovedEventObject {
  owner: string;
  beneficiary: string;
}
export type BeneficiaryRemovedEvent = TypedEvent<
  [string, string],
  BeneficiaryRemovedEventObject
>;

export type BeneficiaryRemovedEventFilter =
  TypedEventFilter<BeneficiaryRemovedEvent>;

export interface EstablishmentFeeRateUpdatedEventObject {
  newEstablishmentFeeRate: BigNumber;
}
export type EstablishmentFeeRateUpdatedEvent = TypedEvent<
  [BigNumber],
  EstablishmentFeeRateUpdatedEventObject
>;

export type EstablishmentFeeRateUpdatedEventFilter =
  TypedEventFilter<EstablishmentFeeRateUpdatedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface ProofOfLifeUpdatedEventObject {
  owner: string;
  timestamp: BigNumber;
}
export type ProofOfLifeUpdatedEvent = TypedEvent<
  [string, BigNumber],
  ProofOfLifeUpdatedEventObject
>;

export type ProofOfLifeUpdatedEventFilter =
  TypedEventFilter<ProofOfLifeUpdatedEvent>;

export interface TestamentCanceledEventObject {
  owner: string;
}
export type TestamentCanceledEvent = TypedEvent<
  [string],
  TestamentCanceledEventObject
>;

export type TestamentCanceledEventFilter =
  TypedEventFilter<TestamentCanceledEvent>;

export interface TestamentSucceededEventObject {
  owner: string;
}
export type TestamentSucceededEvent = TypedEvent<
  [string],
  TestamentSucceededEventObject
>;

export type TestamentSucceededEventFilter =
  TypedEventFilter<TestamentSucceededEvent>;

export interface TokenAddedEventObject {
  owner: string;
  token: string;
}
export type TokenAddedEvent = TypedEvent<
  [string, string],
  TokenAddedEventObject
>;

export type TokenAddedEventFilter = TypedEventFilter<TokenAddedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface accountRepossessedEventObject {
  owner: string;
  backupAddress: string;
}
export type accountRepossessedEvent = TypedEvent<
  [string, string],
  accountRepossessedEventObject
>;

export type accountRepossessedEventFilter =
  TypedEventFilter<accountRepossessedEvent>;

export interface DynamicVaults extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DynamicVaultsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addBackup(
      backupAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addBeneficiary(
      beneficiary: Types.BeneficiaryStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelTestament(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createTestament(
      inactivityMaximum: PromiseOrValue<BigNumberish>,
      beneficiaries: Types.BeneficiaryStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dynamicVaults(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [Types.TestamentStructOutput, BigNumber] & {
        testament: Types.TestamentStructOutput;
        ESTABLISHMENT_FEE_RATE: BigNumber;
      }
    >;

    getBackupAddresses(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getTestamentParameters(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        string[],
        BigNumber,
        BigNumber,
        boolean,
        string[],
        string[],
        BigNumber[]
      ] & {
        tokens: string[];
        inactivityMaximum: BigNumber;
        proofOfLife: BigNumber;
        succeeded: boolean;
        beneficiariesNames: string[];
        beneficiariesAddresses: string[];
        beneficiariesInheritancePercentages: BigNumber[];
      }
    >;

    initialize(
      establishmentFeeRate_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    removeBackup(
      backupAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeBeneficiary(
      address_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    repossessAccount(
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    signalLife(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    succeed(
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateBeneficiaries(
      names: PromiseOrValue<string>[],
      addresses: PromiseOrValue<string>[],
      newInheritancePercentages: PromiseOrValue<BigNumberish>[],
      indexes: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateEstablishmentFeeRate(
      newEstablishmentFeeRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateInactivityMaximum(
      newInactivityMaximum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addBackup(
    backupAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addBeneficiary(
    beneficiary: Types.BeneficiaryStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addToken(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelTestament(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createTestament(
    inactivityMaximum: PromiseOrValue<BigNumberish>,
    beneficiaries: Types.BeneficiaryStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dynamicVaults(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [Types.TestamentStructOutput, BigNumber] & {
      testament: Types.TestamentStructOutput;
      ESTABLISHMENT_FEE_RATE: BigNumber;
    }
  >;

  getBackupAddresses(
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getTestamentParameters(
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [
      string[],
      BigNumber,
      BigNumber,
      boolean,
      string[],
      string[],
      BigNumber[]
    ] & {
      tokens: string[];
      inactivityMaximum: BigNumber;
      proofOfLife: BigNumber;
      succeeded: boolean;
      beneficiariesNames: string[];
      beneficiariesAddresses: string[];
      beneficiariesInheritancePercentages: BigNumber[];
    }
  >;

  initialize(
    establishmentFeeRate_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  removeBackup(
    backupAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeBeneficiary(
    address_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  repossessAccount(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  signalLife(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  succeed(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateBeneficiaries(
    names: PromiseOrValue<string>[],
    addresses: PromiseOrValue<string>[],
    newInheritancePercentages: PromiseOrValue<BigNumberish>[],
    indexes: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateEstablishmentFeeRate(
    newEstablishmentFeeRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateInactivityMaximum(
    newInactivityMaximum: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBackup(
      backupAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addBeneficiary(
      beneficiary: Types.BeneficiaryStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    addToken(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelTestament(overrides?: CallOverrides): Promise<void>;

    createTestament(
      inactivityMaximum: PromiseOrValue<BigNumberish>,
      beneficiaries: Types.BeneficiaryStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    dynamicVaults(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [Types.TestamentStructOutput, BigNumber] & {
        testament: Types.TestamentStructOutput;
        ESTABLISHMENT_FEE_RATE: BigNumber;
      }
    >;

    getBackupAddresses(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getTestamentParameters(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        string[],
        BigNumber,
        BigNumber,
        boolean,
        string[],
        string[],
        BigNumber[]
      ] & {
        tokens: string[];
        inactivityMaximum: BigNumber;
        proofOfLife: BigNumber;
        succeeded: boolean;
        beneficiariesNames: string[];
        beneficiariesAddresses: string[];
        beneficiariesInheritancePercentages: BigNumber[];
      }
    >;

    initialize(
      establishmentFeeRate_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    removeBackup(
      backupAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeBeneficiary(
      address_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    repossessAccount(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    signalLife(overrides?: CallOverrides): Promise<void>;

    succeed(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    updateBeneficiaries(
      names: PromiseOrValue<string>[],
      addresses: PromiseOrValue<string>[],
      newInheritancePercentages: PromiseOrValue<BigNumberish>[],
      indexes: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    updateEstablishmentFeeRate(
      newEstablishmentFeeRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateInactivityMaximum(
      newInactivityMaximum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BackupAdded(address,address)"(
      owner?: null,
      backupAddress?: null
    ): BackupAddedEventFilter;
    BackupAdded(owner?: null, backupAddress?: null): BackupAddedEventFilter;

    "BeneficiariesUpdated(address,tuple[])"(
      owner?: null,
      beneficiaries?: null
    ): BeneficiariesUpdatedEventFilter;
    BeneficiariesUpdated(
      owner?: null,
      beneficiaries?: null
    ): BeneficiariesUpdatedEventFilter;

    "BeneficiaryAdded(address,address)"(
      owner?: null,
      beneficiary?: null
    ): BeneficiaryAddedEventFilter;
    BeneficiaryAdded(
      owner?: null,
      beneficiary?: null
    ): BeneficiaryAddedEventFilter;

    "BeneficiaryPercentageUpdated(address,address,uint128)"(
      owner?: null,
      beneficiaryAddress?: null,
      newInheritancePercentage?: null
    ): BeneficiaryPercentageUpdatedEventFilter;
    BeneficiaryPercentageUpdated(
      owner?: null,
      beneficiaryAddress?: null,
      newInheritancePercentage?: null
    ): BeneficiaryPercentageUpdatedEventFilter;

    "BeneficiaryRemoved(address,address)"(
      owner?: null,
      beneficiary?: null
    ): BeneficiaryRemovedEventFilter;
    BeneficiaryRemoved(
      owner?: null,
      beneficiary?: null
    ): BeneficiaryRemovedEventFilter;

    "EstablishmentFeeRateUpdated(uint128)"(
      newEstablishmentFeeRate?: null
    ): EstablishmentFeeRateUpdatedEventFilter;
    EstablishmentFeeRateUpdated(
      newEstablishmentFeeRate?: null
    ): EstablishmentFeeRateUpdatedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "ProofOfLifeUpdated(address,uint128)"(
      owner?: null,
      timestamp?: null
    ): ProofOfLifeUpdatedEventFilter;
    ProofOfLifeUpdated(
      owner?: null,
      timestamp?: null
    ): ProofOfLifeUpdatedEventFilter;

    "TestamentCanceled(address)"(owner?: null): TestamentCanceledEventFilter;
    TestamentCanceled(owner?: null): TestamentCanceledEventFilter;

    "TestamentSucceeded(address)"(owner?: null): TestamentSucceededEventFilter;
    TestamentSucceeded(owner?: null): TestamentSucceededEventFilter;

    "TokenAdded(address,address)"(
      owner?: null,
      token?: null
    ): TokenAddedEventFilter;
    TokenAdded(owner?: null, token?: null): TokenAddedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "accountRepossessed(address,address)"(
      owner?: null,
      backupAddress?: null
    ): accountRepossessedEventFilter;
    accountRepossessed(
      owner?: null,
      backupAddress?: null
    ): accountRepossessedEventFilter;
  };

  estimateGas: {
    addBackup(
      backupAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addBeneficiary(
      beneficiary: Types.BeneficiaryStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelTestament(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createTestament(
      inactivityMaximum: PromiseOrValue<BigNumberish>,
      beneficiaries: Types.BeneficiaryStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dynamicVaults(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBackupAddresses(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTestamentParameters(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      establishmentFeeRate_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    removeBackup(
      backupAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeBeneficiary(
      address_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    repossessAccount(
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    signalLife(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    succeed(
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateBeneficiaries(
      names: PromiseOrValue<string>[],
      addresses: PromiseOrValue<string>[],
      newInheritancePercentages: PromiseOrValue<BigNumberish>[],
      indexes: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateEstablishmentFeeRate(
      newEstablishmentFeeRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateInactivityMaximum(
      newInactivityMaximum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBackup(
      backupAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addBeneficiary(
      beneficiary: Types.BeneficiaryStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelTestament(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createTestament(
      inactivityMaximum: PromiseOrValue<BigNumberish>,
      beneficiaries: Types.BeneficiaryStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dynamicVaults(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBackupAddresses(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTestamentParameters(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      establishmentFeeRate_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeBackup(
      backupAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeBeneficiary(
      address_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    repossessAccount(
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    signalLife(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    succeed(
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateBeneficiaries(
      names: PromiseOrValue<string>[],
      addresses: PromiseOrValue<string>[],
      newInheritancePercentages: PromiseOrValue<BigNumberish>[],
      indexes: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateEstablishmentFeeRate(
      newEstablishmentFeeRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateInactivityMaximum(
      newInactivityMaximum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
