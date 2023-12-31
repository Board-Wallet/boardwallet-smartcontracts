// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.8;

import "../lib/Errors.sol";
import "../lib/Types.sol";

/**
 * @title IBoardWallet
 * @author Peace Foundation
 * @notice Dynamic vaults interface that allows for the transfer of tokens in case of emergency
 */

interface IBoardWallet {
  event TokenAdded(address owner, address token);
  event BeneficiaryAdded(address owner, address beneficiary);
  event BeneficiaryRemoved(address owner, address beneficiary);
  event ProofOfLifeUpdated(address owner, uint128 timestamp);
  event TestamentSucceeded(address owner);
  event BeneficiaryPercentageUpdated(address owner, address beneficiaryAddress, uint128 newInheritancePercentage);
  event accountRepossessed(address owner, address backupAddress);
  event BackupAdded(address owner, address backupAddress);
  event EstablishmentFeeRateUpdated(uint128 newEstablishmentFeeRate);
  event BeneficiariesUpdated(address owner, Types.Beneficiary[] beneficiaries);
  event TestamentCanceled(address owner);

  /**
   * @notice Creates a BoardWallet
   * @param inactivityMaximum The maximum inactivity time
   * @param beneficiaries The beneficiaries that will inherit the vault
   */
  function createTestament(uint128 inactivityMaximum, Types.Beneficiary[] memory beneficiaries) external;

  /**
  * @notice Adds a token to the testament
* @param token The token to be added to the protected tokens list
* @dev there is no function to remove a token since that can be done by decreasing the allowance of this contract. Doing
otherwise would be expensive and unnecessary
*/
  function addToken(address token) external;

  /**
   * @notice Adds beneficiary to the testament
   * @param beneficiary The beneficiary to add
   * @dev The addeed percentage of the beneficiaries should not exceed 100%
   * @dev The total maximum percentage should be 100%
   */
  function addBeneficiary(Types.Beneficiary memory beneficiary) external;

  /**
   * @notice Removes beneficiary from the vault
   * @param beneficiaryAddress The beneficiary to remove
   */
  function removeBeneficiary(address beneficiaryAddress) external;

  /**
@notice Updates the inactivity time of the testament
@param newInactivityMaximum The new inactivity time
 */
  function updateInactivityMaximum(uint128 newInactivityMaximum) external;

  /**
   * @notice Updates the proof of life timestamp
   */
  function signalLife() external;

  /**
   * @notice Transfers the tokens to the beneficiaries
   * @param owner The owner of the BoardWallet
   * @dev The function can only be called after the inactivity period is over
   */
  function succeed(address owner) external;

  /**
   * @notice Transfers the protected tokens to the backup address
   * @param owner The owner of the BoardWallet
   */
  function repossessAccount(address owner) external;

  /**
   * @notice Adds backup address
   * @param backupAddress The address to add
   */
  function addBackup(address backupAddress) external;

  /**
   * @notice Removes backup address
   * @param backupAddress The address to remove
   */
  function removeBackup(address backupAddress) external;

  /**
   * @notice Updates the inheritance percentage of a beneficiary
   * @param names The names of the beneficiaries
   * @param addresses The addresses of the beneficiary
   * @param newInheritancePercentages The new inheritance percentages
   * @param indexes The indexes of the beneficiaries
   */
  function updateBeneficiaries(
    string[] memory names,
    address[] calldata addresses,
    uint128[] calldata newInheritancePercentages,
    uint128[] calldata indexes
  ) external;

  /**
   * @notice Cancels the testament
   */
  function cancelTestament() external;

  // Methods callable only by the owner of the contract

  /**
   * @notice Sets the global establishment fee rate
   **/
  function updateEstablishmentFeeRate(uint128 newEstablishmentFeeRate) external;

  /**
   * @notice Stops all actions on all vaults
   */
  function pause() external;

  /**
   * @notice Unpause vaults. Makes actions available again on all vaults
   **/
  function unpause() external;

  // VIEW METHODS

  /**
   * @notice Returns the testament parameters of a given BoardWallet id
   * @param owner The owner of the BoardWallet
   * @return tokens The approved tokens
   * @return inactivityMaximum The maximum inactivity time
   * @return proofOfLife The last registred proof of life timestamp
   * @return succeeded Whether the BoardWallet has been succeeded
   */
  function getTestamentParameters(
    address owner
  )
    external
    view
    returns (
      address[] memory tokens,
      uint128 inactivityMaximum,
      uint128 proofOfLife,
      bool succeeded,
      string[] memory beneficiariesNames,
      address[] memory beneficiariesAddresses,
      uint256[] memory beneficiariesInheritancePercentages
    );

  /**
   * @notice Returns the backup addresses of a given BoardWallet id
   * @param owner The owner of the BoardWallet
   * @return backupAddresses The backup addresses
   */
  function getBackupAddresses(address owner) external view returns (address[] memory);
}
