import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import LayoutTw from '@site/src/theme/LayoutTw'

import Hero from '../components/Homapage/Hero'
import Club from '../components/Homapage/Club'
import Collections from '../components/Homapage/Collections'
import Ens from '../components/Homapage/Ens'
import KittyVault from '../components/Homapage/KittyVault'
import Posts from '../components/Homapage/Posts'
// import ActiveEvents from '../components/Homapage/ActiveEvents'
import RecentPosts from '../components/Homapage/RecentPosts'

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
