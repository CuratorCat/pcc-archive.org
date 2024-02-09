import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import LayoutTw from '@site/src/theme/LayoutTw'

import Ens from '../components/Homepage/Ens'

import Hero from '../components/Homepage/Hero'
import Club from '../components/Homepage/Club'
import Collections from '../components/Homepage/Collections'
import KittyVault from '../components/Homepage/KittyVault'
import Posts from '../components/Homepage/Posts'
import ActiveEvents from '../components/Homepage/ActiveEvents'
import RecentPosts from '../components/Homepage/RecentPosts'

import ShowcaseTagSelect from './resources/_components/ShowcaseTagSelect'
import ShowcaseFilterToggle, { type Operator, readOperator } from './resources/_components/ShowcaseFilterToggle'
import ShowcaseCard from './resources/_components/ShowcaseCard'
import { sortedResources, Tags, TagList, type Resource, type TagType } from '@site/src/data/resources'
import styles from './resources/styles.module.css'
import clsx from 'clsx'
import { useFilteredResources, SearchBar} from './resources/index'
import Translate, { translate } from '@docusaurus/Translate'


export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  const filteredResources = useFilteredResources()
  const favoriteResources = sortedResources.filter(resource => resource.tags.includes('favorite'))
  const otherResources = sortedResources.filter(resource => !resource.tags.includes('favorite'))

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A place to learn and find information about the Purrnelope's Country Club project"
    >
      <LayoutTw>

        <Ens />
        
        {/* <ActiveEvents /> */}
        {/* <RecentPosts /> */}
        {/* <Hero /> */}
        {/* <main className="pt-0"> */}
          {/* <section className="relative max-w-7xl mx-auto lg:grid grid-cols-1 lg:grid-cols-5 gap-3 lg:px-3">
            <Club />
            <Collections />
          </section> */}
          {/* <Posts /> */}
          {/* <RecentPosts /> */}
          {/* <KittyVault /> */}
        {/* </main> */}

        <section className="max-w-7xl px-3 sm:px-6 mx-auto ">
          <div className="p-4 bg-white/50 dark:bg-black/20 rounded-2xl">
            <div className={clsx('margin-bottom--sm', styles.filterCheckbox)}>
              <div>
                <h2>Filters</h2>
                <span>({filteredResources.length})</span>
              </div>
              <ShowcaseFilterToggle />
            </div>
            <ul className={clsx('clean-list list-none', styles.checkboxList)}>
              {TagList.map((tag, i) => {
                const { label, description, color } = Tags[tag]
                const id = `showcase_checkbox_id_${tag}`

                return (
                  <li key={i} className={styles.checkboxListItem}>
                    <ShowcaseTagSelect tag={tag} id={id} label={label} text={description} color={color} />
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <section className="py-6">
          {filteredResources.length === sortedResources.length ? (
            <>
              <div className="max-w-7xl px-3 sm:px-6 mx-auto">
                <div className={clsx('margin-bottom--md', styles.showcaseFavoriteHeader)}>
                  <h2>Favorites</h2>
                  <span>💜</span>
                  <SearchBar />
                </div>
                <ul className={clsx('max-w-7xl px-3 sm:px-6 mx-auto', 'clean-list', styles.showcaseList)}>
                  {favoriteResources.map(resource => (
                    <ShowcaseCard key={resource.title} resource={resource} />
                  ))}
                </ul>
              </div>

              <div className="max-w-7xl px-3 sm:px-6 mx-auto margin-top--lg">
                <div className={clsx('margin-bottom--md', styles.showcaseFavoriteHeader)}>
                  <h2>
                    <Translate id="showcase.usersList.allUsers">All</Translate>
                  </h2>
                </div>
                <ul className={clsx('clean-list', styles.showcaseList)}>
                  {otherResources.map(resource => (
                    <ShowcaseCard key={resource.title} resource={resource} />
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="max-w-7xl px-6 mx-auto">
              <div className={clsx('margin-bottom--md', styles.showcaseFavoriteHeader)}>
                <SearchBar />
              </div>
              <ul className={clsx('clean-list', styles.showcaseList)}>
                {filteredResources.map(resource => (
                  <ShowcaseCard key={resource.title} resource={resource} />
                ))}
              </ul>
            </div>
          )}
        </section>
      </LayoutTw>
    </Layout>
  )
}
