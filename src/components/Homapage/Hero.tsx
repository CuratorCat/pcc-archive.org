import React from 'react'

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative sm:overflow-hidden">
        <div className="relative px-0 py-4 md:py-8 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-7xl px-4">
            <div className="lg:grid lg:grid-cols-12">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:max-w-3xl lg:text-left">
                <h1>
                  <span className="block text-base uppercase tracking-wide sm:text-xl xl:text-3xl ">WELCOME TO</span>
                  <span className=" block text-4xl font-bold sm:text-5xl xl:text-6xl">PCC ARCHIVE</span>
                </h1>
                <p className="pt-1 text-base sm:pt-3 sm:text-xl lg:text-lg xl:text-xl">
                  PCC Archive is created for people to learn about the Purrnelope's Country Club project.
                </p>
                <p className="pt-1 text-base sm:pt-3 sm:text-xl lg:text-lg xl:text-xl">
                  Anyone is welcomed to{' '}
                  <a href="/contribute">
                    <span className="underline hover:text-violet-500">contribute to the content</span>
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
