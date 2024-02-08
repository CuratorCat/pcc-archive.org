import React from 'react'
import Link from '@docusaurus/Link'

export default function Club() {
  return (
    <Link
      to="/club"
      className="block relative bg-black lg:col-span-2 rounded-xl md:rounded-2xl overflow-hidden group m-3 mt-0 lg:m-0"
    >
      <h2 className="sr-only">Purrnelope's Country Club</h2>
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover opacity-75 group-hover:opacity-100 transition-all duration-300 rounded-xl md:rounded-2xl"
          src="/img/pcc.jpg"
        />
        <div className="absolute inset-0 bg-black/25 mix-blend-multiply group-hover:bg-violet-800/50 group-hover:mix-blend-multiply transition-all duration-300 rounded-xl md:rounded-2xl" />
      </div>
      <div className="relative py-6 lg:py-0 px-3 h-full flex lg:flex-col items-center justify-center justify-items-center content-center">
        <img
          className="flex w-20 sm:w-24 lg:w-40 aspect-square lg:group-hover:w-52 transition-all duration-300"
          src="/img/pcc-ring.png"
        />
        <div>
          <p className="uppercase text-base sm:text-xl md:text-2xl md:pt-3 text-white pl-5 lg:px-20 lg:text-center font-light">
            Learn about <span className="block font-semibold pt-0 lg:pt-2">Purrnelope's Country Club</span>
          </p>
        </div>
      </div>
    </Link>
  )
}
