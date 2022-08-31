/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useMemo, useEffect } from 'react'
import clsx from 'clsx'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import Translate, { translate } from '@docusaurus/Translate'
import { useHistory, useLocation } from '@docusaurus/router'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import LayoutTw from '@site/src/theme/LayoutTw'
import { sortedResources, Tags, TagList, type Resource, type TagType } from '@site/src/data/resources'
import ShowcaseTagSelect, { readSearchTags } from './_components/ShowcaseTagSelect'
import ShowcaseFilterToggle, { type Operator, readOperator } from './_components/ShowcaseFilterToggle'
import ShowcaseCard from './_components/ShowcaseCard'

import styles from './styles.module.css'

const TITLE = 'Resources'
const DESCRIPTION = 'Resources around PCC'

type ResourceState = {
  scrollTopPosition: number
  focusedElementId: string | undefined
}

function restoreResourceState(resourceState: ResourceState | null) {
  const { scrollTopPosition, focusedElementId } = resourceState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  }
  // // @ts-expect-error: if focusedElementId is undefined it returns null
  document.getElementById(focusedElementId)?.focus()
  window.scrollTo({ top: scrollTopPosition })
}

export function prepareResourceState(): ResourceState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    }
  }

  return undefined
}

const SearchNameQueryKey = 'name'

function readSearchName(search: string) {
  return new URLSearchParams(search).get(SearchNameQueryKey)
}

function filterResources(
  resources: Resource[],
  selectedTags: TagType[],
  operator: Operator,
  searchName: string | null
) {
  if (searchName) {
    // eslint-disable-next-line no-param-reassign
    resources = resources.filter(resource => resource.title.toLowerCase().includes(searchName.toLowerCase()))
  }
  if (selectedTags.length === 0) {
    return resources
  }
  return resources.filter(resource => {
    if (resource.tags.length === 0) {
      return false
    }
    if (operator === 'AND') {
      return selectedTags.every(tag => resource.tags.includes(tag))
    }
    return selectedTags.some(tag => resource.tags.includes(tag))
  })
}

function useFilteredResources() {
  const location = useLocation<ResourceState>()
  const [operator, setOperator] = useState<Operator>('OR')
  // On SSR / first mount (hydration) no tag is selected
  const [selectedTags, setSelectedTags] = useState<TagType[]>([])
  const [searchName, setSearchName] = useState<string | null>(null)
  // Sync tags from QS to state (delayed on purpose to avoid SSR/Client
  // hydration mismatch)
  useEffect(() => {
    setSelectedTags(readSearchTags(location.search))
    setOperator(readOperator(location.search))
    setSearchName(readSearchName(location.search))
    restoreResourceState(location.state)
  }, [location])

  return useMemo(
    () => filterResources(sortedResources, selectedTags, operator, searchName),
    [selectedTags, operator, searchName]
  )
}

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p className="text-lg">{DESCRIPTION}</p>
      <p>
        <Link href="https://github.com/CuratorCat/pcc-archive.org/blob/main/src/data/resources/data.ts">
          <span className="underline hover:text-violet-500 rounded px-1 py-0.5 ">submit a new resource</span>
        </Link>
      </p>
    </section>
  )
}

function ShowcaseFilters() {
  const filteredResouces = useFilteredResources()
  return (
    <section className="container ">
      <div className="p-4 bg-slate-100 dark:bg-slate-500/25 rounded-2xl">
        <div className={clsx('margin-bottom--sm', styles.filterCheckbox)}>
          <div>
            <h2>Filters</h2>
            <span>({filteredResouces.length})</span>
          </div>
          <ShowcaseFilterToggle />
        </div>
        <ul className={clsx('clean-list list-none', styles.checkboxList)}>
          {TagList.map((tag, i) => {
            const { label, description, color } = Tags[tag]
            const id = `showcase_checkbox_id_${tag}`

            return (
              <li key={i} className={styles.checkboxListItem}>
                <ShowcaseTagSelect
                  tag={tag}
                  id={id}
                  label={label}
                  text={description}
                  icon={
                    tag === 'favorite' ? (
                      <span>💜</span>
                    ) : (
                      <span
                        style={{
                          backgroundColor: color,
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          marginLeft: 8,
                        }}
                      />
                    )
                  }
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

const favoriteResources = sortedResources.filter(resource => resource.tags.includes('favorite'))
const otherResources = sortedResources.filter(resource => !resource.tags.includes('favorite'))

function SearchBar() {
  const history = useHistory()
  const location = useLocation()
  const [value, setValue] = useState<string | null>(null)
  useEffect(() => {
    setValue(readSearchName(location.search))
  }, [location])
  return (
    <div className={styles.searchContainer}>
      <input
        id="searchbar"
        placeholder={translate({
          message: 'Search for site name...',
          id: 'showcase.searchBar.placeholder',
        })}
        value={value ?? undefined}
        onInput={e => {
          setValue(e.currentTarget.value)
          const newSearch = new URLSearchParams(location.search)
          newSearch.delete(SearchNameQueryKey)
          if (e.currentTarget.value) {
            newSearch.set(SearchNameQueryKey, e.currentTarget.value)
          }
          history.push({
            ...location,
            search: newSearch.toString(),
            state: prepareResourceState(),
          })
          setTimeout(() => {
            document.getElementById('searchbar')?.focus()
          }, 0)
        }}
      />
    </div>
  )
}

function ShowcaseCards() {
  const filteredResouces = useFilteredResources()

  if (filteredResouces.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <h2>No result</h2>
          <SearchBar />
        </div>
      </section>
    )
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredResouces.length === sortedResources.length ? (
        <>
          <div className="container">
            <div className={clsx('margin-bottom--md', styles.showcaseFavoriteHeader)}>
              <h2>Favorites</h2>
              <span>💜</span>
              <SearchBar />
            </div>
            <ul className={clsx('container', 'clean-list', styles.showcaseList)}>
              {favoriteResources.map(resource => (
                <ShowcaseCard key={resource.title} resource={resource} />
              ))}
            </ul>
          </div>

          <div className="container margin-top--lg">
            <h2 className={styles.showcaseHeader}>
              <Translate id="showcase.usersList.allUsers">All sites</Translate>
            </h2>
            <ul className={clsx('clean-list', styles.showcaseList)}>
              {otherResources.map(resource => (
                <ShowcaseCard key={resource.title} resource={resource} />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="container">
          <div className={clsx('margin-bottom--md', styles.showcaseFavoriteHeader)}>
            <SearchBar />
          </div>
          <ul className={clsx('clean-list', styles.showcaseList)}>
            {filteredResouces.map(resource => (
              <ShowcaseCard key={resource.title} resource={resource} />
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export default function Showcase(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <LayoutTw>
        <main className="margin-vert--lg">
          <ShowcaseHeader />
          <ShowcaseFilters />
          <ShowcaseCards />
        </main>
      </LayoutTw>
    </Layout>
  )
}
