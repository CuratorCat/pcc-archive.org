import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import LayoutTw from '@site/src/theme/LayoutTw'

import Hero from '../components/Homepage/Hero'
import Club from '../components/Homepage/Club'
import Collections from '../components/Homepage/Collections'
import Ens from '../components/Homepage/Ens'
import KittyVault from '../components/Homepage/KittyVault'
import Posts from '../components/Homepage/Posts'
// import ActiveEvents from '../components/Homepage/ActiveEvents'
import RecentPosts from '../components/Homepage/RecentPosts'

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A place to learn and find information about the Purrnelope's Country Club project"
    >
      <LayoutTw>
        {/* <ActiveEvents /> */}
        <Hero />
        <main className="pt-0">
          <section className="relative max-w-7xl mx-auto lg:grid grid-cols-1 lg:grid-cols-5 gap-3 lg:px-3">
            <Club />
            <Collections />
          </section>
          <Posts />
          <RecentPosts />
          <Ens />
          <KittyVault />
        </main>
      </LayoutTw>
    </Layout>
  )
}
