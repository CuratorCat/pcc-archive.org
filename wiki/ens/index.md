---
title: .pcc.eth ENS Subdomains
sidebar_position: 50
image: /img/cover/pcc-ens.jpg
description: .pcc.eth ENS subdomains can be claimed with a PCC cat, the ENS is tied to the cat and use that cat as PFP, also points to the wallet address holding the cat.
---

![](./assets/pcc-ens.jpg)

You can only have a **.pcc.eth** if you own a Purrnelopes Country Club [Cat](../collections/cats/index.md). The ENS is tied to the cat, not an additional NFT, not your wallet, the cat itself. If you sell your PCC Cat, the **.pcc.eth** goes with it.

It's free for PCC Cats holders to claim on the [PCC website](https://www.purrnelopescountryclub.com/claim/ens) beside the gas. As long as you hold the cat tied to it, you will have your **.pcc.eth** ENS, the PCC Team pays the annual fees for the primary **pcc.eth** ENS.

ENS domains are booming, and PCC's wizard `hodl.pcc.eth` created a custom [ENS resolver contract](https://etherscan.io/address/0x9b6d20f524367d7e98ed849d37fc662402dca7fb#code) that made PCC the first project that links ERC-721 NFTs to ENS subdomains possible. The contract itself says _feel free to reuse_ it for other projects to use!

<iframe width="100%" height="150" src="https://dune.xyz/embeds/318958/949996/1acb0020-e920-4e6a-8d9a-f3f66207dec3" title="pcc.eth counter" frameborder="0" style={{background: "#F3F0FE", borderRadius: "12px"}}></iframe>

## Features

### Wallet Address

A **.pcc.eth** ENS is your wallet address, but more readable compared to 0x09284530···ac0bef. Carlini's address is `carlini8.pcc.eth` and Papa's address is `papa.pcc.eth`. The **.pcc.eth** ENS subdomain will point to the wallet address holding the cat which has the **.pcc.eth** name.

You can tell others your `yourname.pcc.eth` subdomain when sending ETH or tokens to you, and ENS is supported by most wallet apps.

![How .pcc.eth ENS works](./assets/pcc-ens-works.jpg)

### ENS PFP Avatar

The magic of **.pcc.eth** will use the Cat that has the name as the ENS avatar automatically! All major standard web3 platforms like uniswap etc. will display your **.pcc.eth** name with the cat as the profile image!

### Web3 Social Profile

![](./assets/web3profile.jpg)

**.pcc.eth subdomains** support ENS Text Records, this means you can add information such as your web social accounts to your .pcc.eth ENS subdomain.

There are some services currently support display web3 profile:

- **[ENS App](https://app.ens.domains/)**: [app.ens.domains/name/curatorcat.pcc.eth/details](https://app.ens.domains/name/curatorcat.pcc.eth/details)
- **[eth.xyz](https://eth.xyz)**: [eth.xyz/curatorcat.pcc.eth](https://eth.xyz/curatorcat.pcc.eth)
- **[me3.is](https://me3.is)**: [me3.eth.limo/#/curatorcat.pcc.eth](https://me3.eth.limo/#/curatorcat.pcc.eth)

### Follow `.pcc.eth` on Twitter

![](./assets/twitter.pcc.eth.jpg)

.pcc.eth is the best way to find members of the PCC community! To follow `.pcc.eth` users on Twitter, use this [Twitter Search](https://twitter.com/search?q=.pcc.eth&src=typed_query&f=user).

### And more

**.pcc.eth** is more than a name and avatar, it's **Proof of Ownership**, **Your Wallet Address**, **Searchable Profile Picture**, **Your Community**, **Proof of Flex, Marketing for your Community**, **Integrates your Brand**, **Bot Integratable**. Read more on [Carlini8's Tweet Thread On .pcc.eth](/posts/2022/04/14/post/carlini8-tweet-pcc-eth)

## Guides {#guides}

See [Guides Page](guides.md) for all Guide for .pcc.eth ENS Subdomains.

### General Guides

- [Claim .pcc.eth ENS (name your Cat)](guides.md#claim-pcceth-ens-name-your-cat)
- [Set Primary ENS Record](guides.md#set-primary-ens-record)
- [Transfer .pcc.eth ENS to Another Wallet](guides.md#transfer-pcceth-ens-to-another-wallet)

### Advanced Guides

- [Claim .pcc.eth ENS with Contract](guides.md#claim-pcceth-ens-with-contract)
- [Remove Cat's name with Contract](guides.md#remove-name)
- [Set Primary ENS Record with Contract](guides.md#set-primary-ens-record-with-contract)
- [Update Social Accounts and Other Records with contract](guides.md#setText)
- [Check .pcc.eth subdomain NodeHash](guides.md#domainMap)

## FAQ {#faq}

### 1. How do I get mine?

- **You have to own a PCC Cat**, and the cat must not be tied to a .pcc.eth subdomain.

- Official PCC ENS Claim Page: [purrnelopescountryclub.com/claim/ens](https://www.purrnelopescountryclub.com/claim/ens).

### 2. Do I own that .pcc.eth ENS?

- **No, your cat owns it**.

- But you own the cat, so technically you own the .pcc.eth in a way as long as you have the cat.

### 3. Can I transfer a name from a cat to another cat?

- **No**, currently the name is tied to the cat and can not be transferred to another cat.

### 3. Rules and restrictions?

- **The name follows the cat**, if you sell your cat, you'll lose that **.pcc.eth** ENS.

- **The name of the cat can not be transferred to another cat** for now.

- **Each wallet address can only name 1 cat every 12 weeks** for now. It's defined by `reset_period` in the [contract](https://etherscan.io/address/0x9b6d20f524367d7e98ed849d37fc662402dca7fb#readContract).

  If you want to name multiple cats and don't want to wait, name them using different wallet addresses, and send them back to the wallet you'd like to hold them.

- **Name length or special characters?**

  **The name can be any length** e.g. `x.pcc.eth` is possible but it is already taken.

  Well, **only `0-1` and `a-z` are allowed** using the claim page.

  But the contract itself supports more characters and emojis same as the main ENS registry contract. You can interact with the contract using `setDomain` function to set a name with other characters.

### 4. How to know if a Cat has been named? {#faq-check}

- **The correct way is to look up the blockchain.**

  You can look up the PCC ENS Resolver contract on [Etherscan](https://etherscan.io/address/0x9b6d20f524367d7e98ed849d37fc662402dca7fb#readContract):

![](./assets/faq-etherscan-gettokendomains.jpg)

- Another quicker way is to look up [PCC ENS on Dune Analytics](https://dune.xyz/curatorcat/pcc-ens).

  Enter cat ID in the search box. But it is not always up-to-date on Dune and the name may be removed from the cat. It's just easier and faster than Etherscan.

  And it is also convenient to check for a name that has been used or not. If you want to buy a Cat with no name, use Etherscan.

### 5. Does it override if I have an existing .eth domain?

- **No. You can have as many inbound addresses as you like.**

  An extra subdomain does not remove or replace your .eth domain. However, if you set your subdomain.pcc.eth as your primary address, this will be the address that shows on Uniswap, OpenSea, Snapshot, etc. Your avatar will also be your Purr rather than the generic MetaMask image!

### 6. Why doesn’t it show on UniSwap/OS?

- **You have to set your subdomain.pcc.eth as the primary name.**

  This can be done on the [claim page](https://www.purrnelopescountryclub.com/claim/ens) once you have a cat owns a name:

![](./assets/set-primary.png)

If it shows on Uniswap but not OpenSea yet, it's most likely (99.9%) that it’s OpenSea being slow! It will sort itself out eventually! You can also connect your wallet to https://app.ens.domains/ to see if it's working.

### 7. Can I change a Cat's name? {#faq-change-name}

- **Yes, you can change a cat's name**. You can remove a name from a cat and then give your cat a new name.

- **But once the name is removed from the cat, no cat can be named using that name ever again!**

- You can search cat `6926` on the [PCC ENS Dune Analytics](https://dune.xyz/curatorcat/pcc-ens) page, you will see that cat has been named more than once. Because the name `deliciousgrizzly` was removed from the cat, then the cat has been given a new name.

- If you made spelling mistakes to name a cat, and would like to rename the cat. Follow [Remove Cat's name](guides.md#remove-name) in [Guides Page](guides.md) and give your cat a new name after 30 minutes the name is removed.

## Learn more

- Claim Page: [purrnelopescountryclub.com/claim/ens](https://www.purrnelopescountryclub.com/claim/ens)
- Team Post: [PCC — ENS subdomains](/posts/2021/12/14/post/pcc-ens-subdomains)
- PurrCast: [ENS subdomains with hodl.pcc.eth](/posts/2022/04/20/purrcast/)
- Video: [PCC Sub Domains: Explained](/posts/explained/202112-ens-subdomains)

## Stats

Dune Analytics: https://dune.xyz/curatorcat/pcc-ens

### .pcc.eth Named Cats{#named-cats}

<iframe width="100%" height="315" src="https://dune.xyz/embeds/608635/1136329/1d177c7e-8c88-4907-bd9a-67c45e792a95" title="New pcc.eth" frameborder="0" style={{background: "#F3F0FE", borderRadius: "12px"}}></iframe>

## All PCC ENS {#all-pcc-ens}

All PCC related ENS currently owned by PCC Team.

### Registered by Team

The wallet address of **purrnelope.pcc.eth** is likely managed by carlini8.pcc.eth

- **pcc.eth** on [Nov-25-2021](https://etherscan.io/tx/0x33c8aa697ecf67de868f7c0f557403c7694523cadf436e9582c5375a28ed1964) by purrnelope.pcc.eth
- **purrnelopescountryclub.eth** on [Jul-28-2021](https://etherscan.io/tx/0x8c0e14299483d4d01d293f61c2ce223be66771431f6593eaa4f949157b3b1a19) by purrnelope.pcc.eth
- **purrnelopecommunitywallet.eth** on [Aug-11-2021](https://etherscan.io/tx/0x69efb7dff166fa78d2fc31debf53b04651c5e7da2e3db8fa929c1b808eec40ea) by 0x1F···1Df3
- **kittybank.eth** on [Aug-05-2021](https://etherscan.io/tx/0xe0f4a400bb19e3b93f83f8d1f063424b356e3d96efe777241958238fa9c036aa) by 0x1d···8e93

### Registered by Others

> ENS here are not registered by PCC Team but transferred to the team.

- **purrnelope.eth** on [Apr-06-2022](https://etherscan.io/tx/0xa61fb36464a70da993d6e7ca9be4354db181daab711e96ae7d87608f5ea31dd0) by 0x46···bdb1
- **kittyvault.eth** on [Apr-09-2022](https://etherscan.io/tx/0x948f00e73e012351b18bb39e11e853f9d29be06ab7ac906cafc19f794c4b798e) by 0xf0···E12F
- **purrcast.eth** on [Apr-10-2022](https://etherscan.io/tx/0x50c229f5d5dce3cf306d9c180b754c62fa883a0df33b64d0272842271373eaea) by 0xf0···E12F
- **purrks.eth** on [Apr-10-2022](https://etherscan.io/tx/0x663c6ff36d33c5bd7ce41b31173446ce401707c6e4c5df520db30286aa98dd3b) by 0xf0···E12F
