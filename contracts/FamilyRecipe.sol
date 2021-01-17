pragma solidity ^0.6.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract FamilyRecipe is ERC721{
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIdentifiers;
  mapping(string => uint8) public hashes;

  constructor() public ERC721('FamilyRecipe', 'REC') {

  }

  function mintREC(address recipient, string memory hash, string memory metadata) public returns(uint256) {
    require(
      hashes[hash] != 1,
      "Hash has already been used!"
    );
  // Set hash to 1 to indicate that it's been used
    hashes[hash] = 1;
  // Incrementing ID to create new tokenn
    _tokenIdentifiers.increment();
    uint256 newRECIdentifier = _tokenIdentifiers.current();
    _mint(recipient, newRECIdentifier);
    _setTokenURI(newRECIdentifier, metadata);
    return newRECIdentifier;
  }
}
