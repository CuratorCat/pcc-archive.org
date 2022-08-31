import React from 'react'
import Link from '@docusaurus/Link'

export default function KittyVault() {
  return (
    <section className="relative my-8 md:my-12">
      <div className="relative max-w-xl mx-auto px-8 md:max-w-5xl ">
        <div className="relative sm:grid md:grid-cols-2 lg:gap-8 lg:items-center bg-slate-500/10 hover:bg-slate-500/20 rounded-3xl px-8 py-8 md:py-12 group transition-all duration-300">
          <div className="mb-4 md:mb-0 relative lg:mt-0 items-center" aria-hidden="true">
            <img
              className="relative mx-auto my-auto w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] group-hover:animate-pulse"
              src="/img/kittyvault-s.png"
              alt=""
            />
          </div>

          <div className="relative">
            <h3 className="text-center md:text-left text-3xl md:text-5xl uppercase pb-4">Kitty Vault</h3>
            <p className="mt-6 text-center md:text-left text-base sm:text-xl lg:text-lg xl:text-xl">
              The KittyVault is a vault of NFTs that backs every PCC Cat and KV Purrks airdrops. The idea is that the
              Vault will operate as a 'Gold Standard' so PCC collections will always have some inherent worth.
            </p>
            <p className="pt-2 text-center md:text-left text-base sm:text-xl lg:text-lg xl:text-xl font-bold">
              The KittyVault is valued at 929.08 ETH.
            </p>
            <p className="opacity-50 text-center md:text-left text-sm font-bold">
              Based on the floor price of NFTs inside by Apr 22, 2022.
            </p>
            <div className="block pt-8 pb-4 md:pb-0 text-center md:text-left">
              <Link to="/kittyvault">
                <span className="inline-block px-6 py-3 rounded-full bg-pink-500 hover:bg-white hover:shadow-lg hover:shadow-pink-500 text-base font-medium text-white hover:text-pink-500 transition-all duration-300 hover:-translate-y-1">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
