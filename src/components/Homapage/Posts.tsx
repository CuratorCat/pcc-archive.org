import React from 'react'
import Link from '@docusaurus/Link'

type PostItem = {
  name: string
  initials: string
  href: string
}

const PostList: PostItem[] = require('./posts.json')

export default function Posts() {
  return (
    <section className="relative max-w-7xl mx-auto px-3 mt-3">
      <h3 className="sr-only">Post Archive</h3>
      <ul role="list" className="grid grid-cols-3 gap-2 md:gap-5 sm:gap-6 sm:grid-cols-3 lg:grid-cols-6 justify-center">
        {PostList.map(post => (
          <Link key={post.name} href={post.href}>
            <li
              key={post.name}
              className="flex flex-col bg-violet-500 bg-opacity-0 hover:bg-opacity-20 rounded-xl md:rounded-2xl group py-3 transition-all duration-300"
            >
              <div className="flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-125 transition-all duration-300">
                {post.initials}
              </div>
              <div className="flex items-center justify-center truncate">
                <div className="px-.5 truncate text-sm sm:text-lg opacity-80 group-hover:opacity-100 text-center font-medium pt-.5 lg:pt-1">
                  {post.name}
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}
