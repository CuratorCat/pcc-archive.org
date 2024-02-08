import React from 'react'
import Link from '@docusaurus/Link'

// @dev
// This component is to display a list of recent posts
// Currently only showing posts under /welovethepurrs
// by using a json file generated during the build process
//
// To get all posts and tags, have to write a custom plugin for that
// but I don't think I'll do that for now, but PR for that is welcome
//
// - curatorcat.pcc.eth

type PostItem = {
  title?: string
  permalink?: string
  tag?: string
  tagLink?: string
}
let Posts: PostItem[] = []

const welovethepurrsPosts = require('../../../.docusaurus/docusaurus-plugin-content-blog/welovethepurrs/blog-post-list-prop-welovethepurrs.json')

welovethepurrsPosts.items.slice(0, 3).map(item => {
  Posts.push({
    title: item.title,
    permalink: item.permalink,
    tag: 'WeLoveThePurrs',
    tagLink: '/welovethepurrs',
  })
})

export default function RecentPosts() {
  return (
    <section className="relative max-w-7xl px-3 mt-3 md:mt-0 bg-violet-500 bg-opacity-10 md:bg-opacity-0 p-3 mx-3 md:mx-auto rounded-xl">
      <h3 className="text-center p-3 md:hidden">💜 WeLoveThePurrs</h3>
      <div className="grid md:grid-cols-3 gap-0 md:gap-3 text-center">
        {Posts.map((item, index) => (
          <Link
            key={index}
            href={`${item.permalink}`}
            className="bg-violet-500 bg-opacity-0 hover:bg-opacity-20 rounded-xl md:rounded-2xl py-3 px-4 flex flex-col justify-between md:border border-violet-500/25 group hover:border-violet-500/0 text-left md:text-center transition-colors duration-300"
          >
            <div className="text-base md:text-lg font-medium opacity-80 group-hover:opacity-100 flex">
              <span className="mr-2 md:hidden">·</span>
              <span>{item.title}</span>
            </div>
            <div className="hidden md:block text-xs md:text-sm mt-3 mb-1">
              <Link
                href={`${item.tagLink}`}
                className="bg-violet-500/25 hover:bg-violet-500 hover:text-white rounded-full px-2 py-1 opacity-75 hover:opacity-100 transition-all duration-300"
              >
                💜 {item.tag}
              </Link>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4 mb-2 text-center md:hidden">
        <Link href="/welovethepurrs" className="contents-center">
          <span className="px-4 py-2 rounded-full bg-violet-500 hover:bg-white hover:shadow-lg hover:shadow-violet-500 text-sm font-medium text-white hover:text-violet-500 transition-all duration-300 hover:-translate-y-1 ">
            more in WeLoveThePurrs
          </span>
        </Link>
      </div>
    </section>
  )
}
