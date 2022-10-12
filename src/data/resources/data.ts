/* 
DATA FOR https://pcc-archive.org/resources

To submit a resource, make PR to https://github.com/CuratorCat/pcc-archive.org
Or you can create an Issue anonymously at https://github.com/CuratorCat/pcc-archive.org/issues/9

Data Object:
type Resource = {
  title: string
  description: string
  image: string
  website: string
  tags: ['favorite' | 'official' | 'social' | 'tool' | 'marketplace' | 'analytics' | 'other' | 'ens']
}

Image:
images are stored under `/src/data/resources/img/`
preferred image size: 640×320px
preferred image format: jpg
*/

import { Resource } from '.'

// prettier - ignore
export const Resources: Resource[] = [
  {
    title: 'Website (PCC Official)',
    description: 'Official PCC Website purrnelopescountryclub.com',
    image: 'pcc-website.jpg',
    website: 'https://purrnelopescountryclub.com/',
    tags: ['official'],
  },
  {
    title: 'Medium: @Purrnelope',
    description: 'Official PCC Medium account',
    image: 'medium.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['official', 'social'],
  },
  {
    title: 'Merch Store (PCC Official)',
    description: 'Official PCC Merch Store store.purrnelopescountryclub.com',
    image: 'merch-store.jpg',
    website: 'https://store.purrnelopescountryclub.com/',
    tags: ['official', 'other'],
  },
  {
    title: 'Twitter: @PurrnelopesCC',
    description: 'Official PCC Twitter account',
    image: 'twitter-pcc.jpg',
    website: 'https://twitter.com/purrnelopescc/',
    tags: ['official', 'favorite', 'social'],
  },
  {
    title: 'Youtube (PCC Official)',
    description: 'PCC Official Youtube Channel',
    image: 'youtube.jpg',
    website: 'https://www.youtube.com/channel/UCDNEK69wV4wkYeIb-WTshUQ/',
    tags: ['official', 'favorite', 'social'],
  },
  {
    title: 'Twitter: @botpcc1',
    description: 'Official SalesBot on Twitter',
    image: 'salesbot.jpg',
    website: 'https://twitter.com/botpcc1/',
    tags: ['official', 'social'],
  },
  {
    title: 'PCC ENS Subdomain Claim',
    description: 'Official PCC ENS Subdomains Claim Link',
    image: 'ens-claim.jpg',
    website: 'https://www.purrnelopescountryclub.com/claim/ens/',
    tags: ['official', 'ens'],
  },
  {
    title: 'Physical PCC Model Cat Claim',
    description: 'Official PCC Physical Model Cat Claim Link',
    image: 'model-claim.jpg',
    website: 'https://www.purrnelopescountryclub.com/claim/model',
    tags: ['official'],
  },
  {
    title: 'OpenSea',
    description: 'NFT Marketplace, link points to PCC Cats Collection',
    image: 'opensea.jpg',
    website: 'https://opensea.io/collection/purrnelopes-country-club',
    tags: ['marketplace'],
  },
  {
    title: 'LooksRare',
    description: 'NFT Marketplace, link points to PCC Cats Collection',
    image: 'looksrare.jpg',
    website: 'https://looksrare.org/collections/0x9759226B2F8ddEFF81583e244Ef3bd13AAA7e4A1/',
    tags: ['marketplace'],
  },
  {
    title: 'X2Y2',
    description: 'NFT Marketplace, link points to PCC Cats Collection',
    image: 'x2y2.jpg',
    website: 'https://x2y2.io/collection/purrnelopes-country-club/',
    tags: ['marketplace'],
  },
  {
    title: 'NFTX: PCC Cats Pool',
    description: 'NFTX Vault for PCC Cats. Buy, sell, swap, stake cat with the pool.',
    image: 'nftx.jpg',
    website: 'https://nftx.io/vault/0xe581f272706581f9dcc362df3c7934e99192c492/info/',
    tags: ['favorite', 'marketplace'],
  },
  {
    title: 'rarity.tools: PCC Cats',
    description: 'Rarity Check Tool',
    image: 'rarity-tools.jpg',
    website: 'https://rarity.tools/purrnelopes-country-club/',
    tags: ['tool'],
  },
  {
    title: 'Gem',
    description: 'NFT Aggregator, link points to PCC Cats Collection',
    image: 'gem.jpg',
    website: 'https://www.gem.xyz/collection/purrnelopes-country-club/',
    tags: ['marketplace'],
  },
  {
    title: 'Discord (PCC Official)',
    description: "Official Purrnelope's Country Club Discord",
    image: 'discord.jpg',
    website: 'https://discord.gg/purrnelopescountryclub',
    tags: ['official', 'favorite', 'social'],
  },
  {
    title: 'GM Cat Generator',
    description: 'tool by curatorcat.pcc.eth to create custom PCC GM Cat',
    image: 'gmcg.jpg',
    website: 'https://gmcat.pcc.im/',
    tags: ['tool', 'favorite'],
  },
  {
    title: 'Cats w/ Transparent Bg',
    description: '10K Cats without background color in 500px, 1000px sizes and PNG, WebP formats.',
    image: 'cats-no-bg.png',
    website: 'https://github.com/CuratorCat/pcc-cats-nobg/',
    tags: ['other'],
  },
  {
    title: 'pcc.im - ens profile',
    description: 'ens profile display tool created by community memeber curatorcat.pcc.eth',
    image: 'pccim.jpg',
    website: 'https://pcc.im/',
    tags: ['ens', 'favorite'],
  },
  {
    title: 'Grandma Finder',
    description: 'tool to find cat matching grandma, created by community member jack.pcc.eth',
    image: 'grandma-finder.jpg',
    website: 'https://nftbagcheck.com/find-my-grandma',
    tags: ['tool', 'favorite'],
  },
  {
    title: 'flips.finance: PCC Cats',
    description: 'Flips.Finance Purrnelopes Country Club page',
    image: 'flips-finance.jpg',
    website: 'https://www.flips.finance/collection/purrnelopes-country-club',
    tags: ['analytics'],
  },
  {
    title: 'Instagram: @purrnelopes_country_club',
    description: 'Official PCC Instagram account',
    image: 'instagram.jpg',
    website: 'https://www.instagram.com/purrnelopes_country_club/',
    tags: ['official', 'social'],
  },
  {
    title: 'Spotify PCC Community Playlist',
    description: `Collaborative Playlist for Purrnelope's Country Club`,
    image: 'pcc-spotify.jpg',
    website: 'https://open.spotify.com/playlist/5Fh8DZ7UxqCWe6vzxNyn5a',
    tags: ['official', 'other'],
  },
  {
    title: 'Dune Analytics: PCC ENS',
    description: 'Dune analytics dashboard for PCC ENS',
    image: 'dune-pcc-ens.jpg',
    website: 'https://dune.com/curatorcat/pcc-ens/',
    tags: ['ens', 'analytics', 'favorite'],
  },
  {
    title: 'me3 - ens profile',
    description: 'ens profile tool, supports edit pcc.eth subdomain',
    image: 'me3.jpg',
    website: 'https://app.me3.is/',
    tags: ['ens'],
  },
  {
    title: 'NiftySlabs',
    description:
      'Create a unique 1 of 1 printed and slabbed physical collectible of your NFT. Display it. Link points to PCC Collection. This is a paid service',
    image: 'niftyslabs.jpg',
    website: 'https://niftyslabs.com/slabs/?c=PURRNELOPES%2520COUNTRY%2520CLUB',
    tags: ['other'],
  },
  {
    title: 'Team Member of PCC',
    description: 'Link to PCC Team Member page in PCC Archive',
    image: 'pcc-team.jpg',
    website: '/club/team',
    tags: ['official'],
  },
  {
    title: 'Smart Contracts & Important Accounts',
    description: 'Link to Smart Contracts & Important Accounts page in PCC Archive',
    image: 'eth-addresses.jpg',
    website: '/addresses',
    tags: ['official', 'other'],
  },
  {
    title: "Reporter Cat's Blog",
    description:
      "ReporterCat.pcc.eth was investigating the country club and published some reports. Hint for password: Reporter Cat didn't use his typewriter for the blog.",
    image: 'reportercat-blog.jpg',
    website: 'https://reportercat.xyz/',
    tags: ['other'],
  },
  {
    title: 'Wallpaper Generator by Rareboy',
    description: 'Generate PCC NFT Wallpaper for phone and watch. Link to PCC Collection page.',
    image: 'wallpaper-rareboy.jpg',
    website: 'https://rareboy.com/wallpapers/purrnelopes-country-club',
    tags: ['tool'],
  },
]
