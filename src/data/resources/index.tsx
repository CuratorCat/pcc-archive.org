/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { Resources } from './data'
import { sortBy } from '@site/src/utils/jsUtils'

export type TagType = 'favorite' | 'official' | 'social' | 'ens' | 'tool' | 'marketplace' | 'analytics' | 'other'

// prettier - ignore

export type Resource = {
  title: string
  description: string
  image: string
  website: string
  source?: string | null
  tags: TagType[]
}

export type Tag = {
  label: string
  description: string
  color: string
}

export const Tags: { [type in TagType]: Tag } = {
  favorite: {
    label: 'Favorite',
    description: '',
    color: '#58439F',
  },

  official: {
    label: 'Official',
    description: '',
    color: '#F7B500',
  },

  social: {
    label: 'Social Media',
    description: '',
    color: '#E72961',
  },

  tool: {
    label: 'Tool',
    description: '',
    color: '#8FC756',
  },

  ens: {
    label: 'ENS',
    description: '',
    color: '#1D9BF0',
  },

  marketplace: {
    label: 'Marketplace',
    description: '',
    color: '#446A8E',
  },

  analytics: {
    label: 'Analytics',
    description: '',
    color: '#A91A32',
  },

  other: {
    label: 'Other',
    description: '',
    color: '#987050',
  },
}

export const TagList = Object.keys(Tags) as TagType[]
function sortResources() {
  let result = Resources
  // Sort by site name
  result = sortBy(result, resource => resource.title.toLowerCase())
  // Sort by favorite tag, favorites first
  result = sortBy(result, resource => !resource.tags.includes('favorite'))
  return result
}

export const sortedResources = sortResources()
