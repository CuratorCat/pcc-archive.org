---
sidebar_position: 30
title: 👵🏻 Purrnelope's Grandmas
sidebar_label: 👵🏻 Grandmas
image: /img/cover/pcc-grandmas.jpg
description: Purrnelope's Grandmas are the 2nd companion to the cats in PCC Universe with 10,000 randomly generated NFTs that exist on the Ethereum Blockchain. Grandmas are Tier 3 NFTs.
---

👵🏻
[Contract](https://etherscan.io/address/0x9e5bF3026A4F77971057cad44C0B6e02EFA9a7cD) ·
[OpenSea](https://opensea.io/collection/purrnelopes-grandmas) ·
[LooksRare](https://looksrare.org/collections/0x9e5bF3026A4F77971057cad44C0B6e02EFA9a7cD)
👵🏻
![](./assets/pcc-grandmas.jpg)

## What are Grandmas

Purrnelope's Grandmas are the 2nd companion to the [Cats](../cats/index.md) in PCC Universe with 10,000 randomly generated NFTs on the Ethereum Blockchain. Grandmas are Tier 3 NFTs.

### Mint / Claim

Grandmas are claimed with [Grandma's Nightstand](../kittyvault-purrks/8-grandma-s-nightstand.md), 1 Nightstand for 1 Grandma. Public Grandmas Claim window: May 16 to Jun 13, 2022, and was extended to Jun 23.

Public Claim Link [purrnelopescountryclub.com/claim/grandma](https://www.purrnelopescountryclub.com/claim/grandma).

![](./assets/claim-grandmas.jpg)

Grandmas `#1 - #20` are not revealed. They are reserved for The Team for mysterious plan? Maybe.

All unclaimed Grandmas will be minted by the team.

### Clubhouse Access

Grandmas owners can access **Clubhouse** channel in [PCC Discord](http://discord.gg/purrnelopescountryclub).

### Earn $Token

Grandmas are Tier 3 NFTs, will earn 1 $TOKEN per day per Grandma.

:::info

Details for Tiers & $TOKEN has not been released yet.

:::

### Redeem for KittyVault Fractions

Once the [KittyVault](../../kittyvault/index.md) is fractionalized, Grandmas can be redeemed(burned) for [KittyBank Token](../../kittyvault/index.md#kittybank-token-token).

### Cats & Grandmas

**If you reunite the Grandma and the [Cat](../cats/index.md) with the same ID by having them in the same wallet**, the image of the Grandma will change, the Grandma will hold a photo frame of the Cat! And if they got seperated by not in the same wallet, the image of the Grandma will change back to not holding the photo frame.

![](./assets/cats-grandmas.jpg)

PCC community member [jack.pcc.eth](https://twitter.com/jkdaleMU) built a tool for finding your grandma match, check it out: https://nftbagcheck.com/find-my-grandma

If the KittyVault owns the Grandma with the matching number of the Cat you own, you can use [Grandma Swap Shop](#swap-shop) to get that Grandma.

## Learn More

- Video: [Grandma's Nightstand: Explained!](/posts/explained/202205-nightstand)

### Grandma Swap Shop {#swap-shop}

If the KittyVault(kittyvault.pcc.eth) owns the Grandma with the matching number of your Cat, you can send it to the vault and open a ticket in PCC Discord to get the Grandma with the matching number of the Cat you own.

See all Grandmas in the KittyVault on [OpenSea](https://opensea.io/kittyvault.pcc.eth/purrnelopes-grandmas?search[sortBy]=LISTING_DATE)

## Events

- 2022-05-13: PCC Team minted Grandmas #1 - #20 @ [07:34:26 PM +UTC](https://etherscan.io/tx/0xcffd4c0be97732136798b54a9cb1830490c9625f8c2c8c36afecfd1041590d75)
- 2022-05-16: Public Grandmas mint/claim started
- 2022-06-06: Grandma Swap Service vote passed on [Snapshot](https://snapshot.org/#/purrnelopescountryclub.eth/proposal/0x133d577cc08adb87b32b9cb99abaac862627a395514046143328448887b436f6)
- 2022-06-23: Unredeemed Grandma's Nightstands were pulled back to purrnelope.pcc.eth [Etherscan](https://etherscan.io/tx/0xaa7fd0e0a6bdb5154659b4cf6643bb7eb03f6136471988f67e03b2d559b53017)

## The Grandmas Contract {#contract}

Grandmas are ERC-721 NFTs ([Etherscan](https://etherscan.io/address/0x9e5bF3026A4F77971057cad44C0B6e02EFA9a7cD)). And the contract itself is named **PurrnelopesGrandmas**. And here are some unique features in the Grandmas contract:

### Mint Related

#### `devMint` Function <sup>private</sup>

This is a private function and can not be used by anyone after the contract is deployed. Using this function can mint Grandmas with sequential ID.

This was used during the contract deployment, Grandmas #1 - #20 were minted for the team. ([Etherscan](https://etherscan.io/tx/0xcffd4c0be97732136798b54a9cb1830490c9625f8c2c8c36afecfd1041590d75))

> This function is the same as the [Kittens Contract](../kittens/index.md#contract)

<details><summary>See Code</summary>

```js
function devMint(uint256 _quantity, address _to) private {
    uint256 remaining = MaxSupplyCount - CurrentTokenId.current();
    for(uint256 i; i < _quantity; i++){
        CurrentTokenId.increment();
        remaining--;
        _safeMint(_to, CurrentTokenId.current());
        Ids[i] = Ids[remaining] == 0 ? remaining : Ids[remaining];
    }
}

constructor() ERC721("Purrnelopes Grandmas", "PG"){
    devMint(20, 0x112E62d5906F9239D9fabAb7D0237A328F128e22);
}
```

</details>

#### `internalMint` Function <sup>private</sup>

This is a private function for minting Grandmas using other functions in this contract.

This function makes public Grandmas minting have non-sequential token IDs. And it used `getRandomNumber` function defined in this contract to arhieve that.

> This function is the same as the [Kittens Contract](../kittens/index.md#contract)

<details><summary>See Code</summary>

```js
function internalMint(address _to, uint256 _quantity) private {
    require(_quantity <= MaxMintCount && _quantity > 0, "Incorrect mint quantity");
    require(_quantity.add(CurrentTokenId.current()) <= MaxSupplyCount, "Cannot exceed max supply");

    uint256 remaining = MaxSupplyCount - CurrentTokenId.current();

    for(uint256 i; i < _quantity; i++){

        remaining--;
        uint256 tokenId = CurrentTokenId.current();
        uint256 index = getRandomNumber(remaining, i * tokenId);

        _safeMint(_to, ((Ids[index] == 0) ? index : Ids[index]) + 1);

        Ids[index] = Ids[remaining] == 0 ? remaining : Ids[remaining];
        CurrentTokenId.increment();
    }
}

//"random" number.... using chainlink for VRF seems overkill
function getRandomNumber(uint256 maxValue, uint256 salt) private view returns(uint256) {
    if (maxValue == 0)
        return 0;

    uint256 seed =
        uint256(
            keccak256(
                abi.encodePacked(
                        block.difficulty +
                        ((uint256(keccak256(abi.encodePacked(tx.origin, msg.sig)))) / (block.timestamp)) +
                        block.number +
                        salt
                )
            )
        );
    return seed.mod(maxValue);
}
```

</details>

#### `mint` Function

This function only accepts Grandmas mint by the [KittyVault Purrks](../kittyvault-purrks/index.md) contract, the Purrks contract uses this function to mint Grandmas to whom redeemed their [Grandma's Nightstand](../kittyvault-purrks/8-grandma-s-nightstand.md) Purrks.

This was used for mint Grandmas using the Grandma's Nightstand Purrks.

> This function is the same as the [Kittens Contract](../kittens/index.md#contract)

<details><summary>See Code</summary>

```js
function mint(address _to, uint256 _quantity) override public {
    require(msg.sender == AllowedAddress || msg.sender == owner(), "Not allowed minting address");
    internalMint(_to, _quantity);
}
```

</details>

#### `mintGrandmas` Function

This is for minting Grandmas by paying with Ether(ETH).

To use this, the `PublicMintingOpen` toggle needs to be opened. But it is never used since the Grandmas now are redeemed with Grandma's Nightstand. But this function leaves possiblities to make that happen. And a price for minting a Grandmas was set to 0.1 ETH during the contract deployment, which can be changed later.

> This function is the same as the [Kittens Contract](../kittens/index.md#contract)

<details><summary>See Code</summary>

```js
function mintGrandmas(uint256 _quantity) payable public nonReentrant {
    require(msg.value == _quantity.mul(UnitPrice), "Incorrect ETH amount");
    require(PublicMintingOpen, "Public minting is not currently open");

    internalMint(msg.sender, _quantity);
}
```

</details>

### Token Metadata Related

#### `tokenURI` Function {#tokenURI}

This is very unique function in PCC. The tokenURI will change based on the owner of the Grandma. Kittens have 2 sets of tokenURIs, but Grandmas have 3 sets:

1. If the Grandma is in the burn(blackhole) address `0x0000····dEaD`, this function will return `BurnUri`
1. If the Grandma is held by an address has the Cat of the same tokenID, this function will return `oBaseURI + tokenID`
1. If the Grandma id held by an address doesn't has the Cat of the same tokenID, this function will return `BaseURI + tokenID`

<details><summary>See Code</summary>

```js
function tokenURI(uint256 _tokenId) public view override returns (string memory) {
    require(_exists(_tokenId), "ERC721Metadata: URI query for nonexistent token");

    string memory baseURI = _baseURI();
    string memory uri = bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, _tokenId.toString())) : "";
    string memory alternate_uri = bytes(baseURI).length > 0 ? string(abi.encodePacked(oBaseURI, _tokenId.toString())) : "";

    return (ownerOf(_tokenId) == BurnAddress) ? BurnUri : isOwnerOfCat(_tokenId) ? alternate_uri : uri;
}

function isOwnerOfCat(uint256 _tokenId) private view returns (bool){
    address catOwner;
    try CatContractAddress.ownerOf(_tokenId) {
        catOwner = CatContractAddress.ownerOf(_tokenId);
    }
    catch {
        catOwner = address(69420);
    }

    return catOwner == ownerOf(_tokenId);
}
```

</details>

#### `setBaseURI` Function {#setBaseURI}

This is for updating metadata for Grandmas not in the burn(blackhole) address.

This function sets `BaseURI` and `oBaseURI`, those 2 URIs are used in [tokenURI Function](#tokenURI).

<details><summary>See Code</summary>

```js
function setBaseURI(string calldata _uri, string calldata _uri2) public onlyOwner{
    BaseURI = _uri;
    oBaseURI = _uri2;
}
```

</details>

#### `updateBurnUri` Function {#updateBurnUri}

This is for updating metadata for "\*burned(redeemed)" Grandmas.

Grandmas contract does not have a function to actually burn the Grandmas, the Grandmas NFT will always exist on blockchain. But "\*burned" Grandmas are transferred to the burn(blackhole) address `0x0000····dEaD`. When querying token uri of a Grandma in the burn(blackhole) address, the contract will return to a unique token uri set by this function.

> This function is the same as the [Kittens Contract](../kittens/index.md#contract)

<details><summary>See Code</summary>

```js
function updateBurnUri(string memory _uri) public onlyOwner{
    BurnUri = _uri;
}
```

</details>

### KittyVault Fractions Related

#### `redeemKittyBankFractions` Function

This is likely to be used for redeem Grandmas for KittyVault Fractions. But it is also possible to create another contract to archive that.

Using this function will transferred the Grandmas to the burn(blackhole) address `0x0000····dEaD`, and give back the KittyVault Fractions Token back to the owner that gave up his Grandma. And the Grandmas transferred to the burn(blackhole) address will never get their image back, which explained in [`updateBurnUri`](#updateBurnUri) function.

And this function even supports redeeming multiple Grandmas at once! What a cruel function!

> This function is the same as the [Kittens Contract](../kittens/index.md#contract)

<details><summary>See Code</summary>

```js
function redeemKittyBankFractions(uint256[] calldata ids) public {
    require(RedeemOpen, "ERC-20 redeem is not currently open");
    require(FractionsPerNFT > 0, "Fractions per NFT currently not set");
    uint256 amount = FractionsPerNFT.mul(ids.length);
    require(FractionsContract.balanceOf(address(this)) >= amount, "Not enough balance of tokens to redeem");

    for(uint256 i; i < ids.length; i++){
        //we don't need to check the owner of the tokens because this is checked in transferFrom method
        this.transferFrom(msg.sender, BurnAddress, ids[i]);
    }

    FractionsContract.transfer(msg.sender, amount);
}
```

</details>

## See Also

### Secondary Markets

- [OpenSea](https://opensea.io/collection/purrnelopes-grandmas)
- [LooksRare](https://looksrare.org/collections/0x9e5bF3026A4F77971057cad44C0B6e02EFA9a7cD)
