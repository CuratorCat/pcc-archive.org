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
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['official'],
  },
  {
    title: 'Medium: @Purrnelope',
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['official', 'social'],
  },
  {
    title: 'Merch Store (PCC Official)',
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['official', 'other'],
  },
  {
    title: 'Twitter: @PurrnelopesCC',
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['official', 'favorite', 'social'],
  },
  {
    title: 'Youtube (PCC Official)',
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['official', 'favorite', 'social'],
  },
  {
    title: 'Twitter: @botpcc1',
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['official', 'social'],
  },
  {
    title: 'PCC ENS Subdomain Claim',
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['official', 'ens'],
  },
  {
    title: 'PCC Physicals Redeem Link',
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['official'],
  },
  {
    title: 'OpenSea',
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['marketplace'],
  },
  {
    title: 'LooksRare',
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['marketplace'],
  },
  {
    title: 'X2Y2',
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['marketplace'],
  },
  {
    title: 'NFTX: PCC Cats Pool',
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['favorite', 'marketplace'],
  },
  {
    title: 'rarity.tools: PCC Cats',
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['tool'],
  },
  {
    title: 'Gem',
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['marketplace'],
  },
  {
    title: 'Discord (PCC Official)',
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['official', 'favorite', 'social'],
  },
  {
    title: 'GM Cat Generator',
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['tool', 'favorite'],
  },
  {
    title: 'Cats w/ Transparent Bg',
    description: 'Official PCC Medium account',
    image: 'discord.jpg',
    website: 'https://purrnelope.medium.com/',
    tags: ['other'],
  },
]
