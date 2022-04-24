import React from "react";
import Link from "@docusaurus/Link";

type PostItem = {
  name: string;
  initials: string;
  href: string;
  bgColor: string;
};

const PostList: PostItem[] = require("./posts.json");

export default function Posts() {
  return (
    <section className="relative max-w-7xl mx-auto px-3 mt-3">
      <h3 className="sr-only">Post Archive</h3>
      <ul
        role="list"
        className="grid grid-cols-3 gap-2 md:gap-5 sm:gap-6 sm:grid-cols-3 lg:grid-cols-6 justify-center"
      >
        {PostList.map((post) => (
          <Link key={post.name} href={post.href}>
            <li
              key={post.name}
              className={
                post.bgColor +
                " flex flex-col bg-opacity-20 hover:bg-opacity-40 rounded-2xl group py-3 transition-all duration-300"
              }
            >
              <div className="flex-shrink-0 flex items-center justify-center text-2xl sm:text-3xl">
                {post.initials}
              </div>
              <div className="flex-1 flex items-center justify-between truncate">
                <div className="flex-1 px-.5 truncate text-sm sm:text-lg opacity-80 group-hover:opacity-100 text-center font-medium pt-.5 lg:pt-1">
                  {post.name}
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
