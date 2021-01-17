var FamilyRecipe = artifacts.require('FamilyRecipe');

module.exports = function(deployer) {
  deployer.deploy(FamilyRecipe);
};
