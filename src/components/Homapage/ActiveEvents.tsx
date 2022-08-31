import React from 'react'
import Link from '@docusaurus/Link'
import styles from './active.events.module.scss'

export default function ActiveEvents() {
  // className={"relative my-8 md:my-12 group " + styles.sectionBg}

  return (
    <section className={'relative max-w-full mx-auto '}>
      <div className={'p-2 px-3 sm:p-3 ' + styles.sectionBg}>
        <p className="text-center">
          <span className=" text-white font-medium">
            nacho.pcc.eth is hosting #WhereMyPurrsGo competition for PCC community on Twitter
          </span>
          <Link className="" to="https://twitter.com/ElNachoCrypto/status/1555945883413336064" target={'_blank'}>
            <span className="ml-3 px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg bg-white hover:bg-blue-500 font-medium text-blue-500 hover:text-white transition-all duration-300">
              See on Twitter
            </span>
          </Link>
        </p>
      </div>
    </section>
  )
}
