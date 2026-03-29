

// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("SupplyChainProvenanceModule", (m) => {
  // If your SupplyChainProvenance contract does not require constructor arguments, use an empty array
  const supplyChainProvenance = m.contract("SupplyChainProvenance", []);

  return { supplyChainProvenance };
});
