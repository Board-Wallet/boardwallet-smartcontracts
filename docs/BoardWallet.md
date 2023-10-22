# BoardWallet

*Peace Foundation*

> BoardWallet

Dyanmic vaults contract that allows for the transfer of tokens in case of emergency



## Methods

### addBackup

```solidity
function addBackup(address backupAddress) external nonpayable
```

Adds backup address



#### Parameters

| Name | Type | Description |
|---|---|---|
| backupAddress | address | The address to add |

### addBeneficiary

```solidity
function addBeneficiary(Types.Beneficiary beneficiary) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| beneficiary | Types.Beneficiary | undefined |

### addToken

```solidity
function addToken(address token) external nonpayable
```

Adds a token to thedynamicVault 

*there is no function to remove a token since that can be done by decreasing the allowance of this contract. Doing otherwise would be expensive and unnecessary*

#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | The token to be added to the protected tokens list |

### cancelTestament

```solidity
function cancelTestament() external nonpayable
```

Cancels the testament




### createTestament

```solidity
function createTestament(uint128 inactivityMaximum, Types.Beneficiary[] beneficiaries) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| inactivityMaximum | uint128 | undefined |
| beneficiaries | Types.Beneficiary[] | undefined |

### dynamicVaults

```solidity
function dynamicVaults(address) external view returns (struct Types.Testament testament, uint128 ESTABLISHMENT_FEE_RATE)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| testament | Types.Testament | undefined |
| ESTABLISHMENT_FEE_RATE | uint128 | undefined |

### getBackupAddresses

```solidity
function getBackupAddresses(address owner) external view returns (address[])
```

Returns the backup addresses of a given BoardWallet id



#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | The owner of the BoardWallet |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[] | backupAddresses The backup addresses |

### getTestamentParameters

```solidity
function getTestamentParameters(address owner) external view returns (address[] tokens, uint128 inactivityMaximum, uint128 proofOfLife, bool succeeded, string[] beneficiariesNames, address[] beneficiariesAddresses, uint256[] beneficiariesInheritancePercentages)
```

Returns the testament parameters of a given BoardWallet id



#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | The owner of the BoardWallet |

#### Returns

| Name | Type | Description |
|---|---|---|
| tokens | address[] | The approved tokens |
| inactivityMaximum | uint128 | The maximum inactivity time |
| proofOfLife | uint128 | The last registred proof of life timestamp |
| succeeded | bool | Whether the BoardWallet has been succeeded |
| beneficiariesNames | string[] | undefined |
| beneficiariesAddresses | address[] | undefined |
| beneficiariesInheritancePercentages | uint256[] | undefined |

### initialize

```solidity
function initialize(uint128 establishmentFeeRate_) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| establishmentFeeRate_ | uint128 | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### pause

```solidity
function pause() external nonpayable
```

Stops all actions on all vaults




### paused

```solidity
function paused() external view returns (bool)
```



*Returns true if the contract is paused, and false otherwise.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### removeBackup

```solidity
function removeBackup(address backupAddress) external nonpayable
```

Removes backup address



#### Parameters

| Name | Type | Description |
|---|---|---|
| backupAddress | address | The address to remove |

### removeBeneficiary

```solidity
function removeBeneficiary(address address_) external nonpayable
```

Removes beneficiary from the vault



#### Parameters

| Name | Type | Description |
|---|---|---|
| address_ | address | The beneficiary to remove |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### repossessAccount

```solidity
function repossessAccount(address owner) external nonpayable
```

Transfers the protected tokens to the backup address



#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | The owner of the BoardWallet |

### signalLife

```solidity
function signalLife() external nonpayable
```

Updates the proof of life timestamp




### succeed

```solidity
function succeed(address owner) external nonpayable
```

Transfers the tokens to the beneficiaries

*The function can only be called after the inactivity period is over*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | The owner of the BoardWallet |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### unpause

```solidity
function unpause() external nonpayable
```

Unpause vaults. Makes actions available again on all vaults*




### updateBeneficiaries

```solidity
function updateBeneficiaries(string[] names, address[] addresses, uint128[] newInheritancePercentages, uint128[] indexes) external nonpayable
```

Updates the inheritance percentage of a beneficiary



#### Parameters

| Name | Type | Description |
|---|---|---|
| names | string[] | The names of the beneficiaries |
| addresses | address[] | The addresses of the beneficiary |
| newInheritancePercentages | uint128[] | The new inheritance percentages |
| indexes | uint128[] | The indexes to modify |

### updateEstablishmentFeeRate

```solidity
function updateEstablishmentFeeRate(uint128 newEstablishmentFeeRate) external nonpayable
```

Sets the global establishment fee rate*



#### Parameters

| Name | Type | Description |
|---|---|---|
| newEstablishmentFeeRate | uint128 | undefined |

### updateInactivityMaximum

```solidity
function updateInactivityMaximum(uint128 newInactivityMaximum) external nonpayable
```

Updates the inactivity time of thedynamicVault 



#### Parameters

| Name | Type | Description |
|---|---|---|
| newInactivityMaximum | uint128 | The new inactivity time |



## Events

### BackupAdded

```solidity
event BackupAdded(address owner, address backupAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner  | address | undefined |
| backupAddress  | address | undefined |

### BeneficiariesUpdated

```solidity
event BeneficiariesUpdated(address owner, Types.Beneficiary[] beneficiaries)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner  | address | undefined |
| beneficiaries  | Types.Beneficiary[] | undefined |

### BeneficiaryAdded

```solidity
event BeneficiaryAdded(address owner, address beneficiary)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner  | address | undefined |
| beneficiary  | address | undefined |

### BeneficiaryPercentageUpdated

```solidity
event BeneficiaryPercentageUpdated(address owner, address beneficiaryAddress, uint128 newInheritancePercentage)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner  | address | undefined |
| beneficiaryAddress  | address | undefined |
| newInheritancePercentage  | uint128 | undefined |

### BeneficiaryRemoved

```solidity
event BeneficiaryRemoved(address owner, address beneficiary)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner  | address | undefined |
| beneficiary  | address | undefined |

### EstablishmentFeeRateUpdated

```solidity
event EstablishmentFeeRateUpdated(uint128 newEstablishmentFeeRate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newEstablishmentFeeRate  | uint128 | undefined |

### Initialized

```solidity
event Initialized(uint8 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint8 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### Paused

```solidity
event Paused(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

### ProofOfLifeUpdated

```solidity
event ProofOfLifeUpdated(address owner, uint128 timestamp)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner  | address | undefined |
| timestamp  | uint128 | undefined |

### TestamentCanceled

```solidity
event TestamentCanceled(address owner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner  | address | undefined |

### TestamentSucceeded

```solidity
event TestamentSucceeded(address owner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner  | address | undefined |

### TokenAdded

```solidity
event TokenAdded(address owner, address token)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner  | address | undefined |
| token  | address | undefined |

### Unpaused

```solidity
event Unpaused(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

### accountRepossessed

```solidity
event accountRepossessed(address owner, address backupAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner  | address | undefined |
| backupAddress  | address | undefined |



## Errors

### MATH_DIVISION_BY_ZERO

```solidity
error MATH_DIVISION_BY_ZERO()
```






### MATH_MULTIPLICATION_OVERFLOW

```solidity
error MATH_MULTIPLICATION_OVERFLOW()
```






### T_ADDRESS_ZERO

```solidity
error T_ADDRESS_ZERO()
```






### T_BACKUP_ADDRESS_ALREADY_EXISTS

```solidity
error T_BACKUP_ADDRESS_ALREADY_EXISTS()
```






### T_BACKUP_ADDRESS_IS_OWNER

```solidity
error T_BACKUP_ADDRESS_IS_OWNER()
```






### T_CANCELED

```solidity
error T_CANCELED()
```






### T_INHERITANCE_PERCENTAGE_EXCEEDED

```solidity
error T_INHERITANCE_PERCENTAGE_EXCEEDED()
```






### T_NO_TRANSCENDENCE

```solidity
error T_NO_TRANSCENDENCE()
```






### T_SUCCEEDED

```solidity
error T_SUCCEEDED()
```






### T_TESTAMENT_ALREADY_EXISTS

```solidity
error T_TESTAMENT_ALREADY_EXISTS()
```






### T_UNAUTHORIZED

```solidity
error T_UNAUTHORIZED()
```







