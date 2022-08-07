import React from "react";
import Link from "@docusaurus/Link";

export default function ActiveEvents() {
  return (
    <section className={"relative max-w-7xl mx-auto my-3 sm:my-6"}>
      <div className="bg-gradient-to-br from-violet-400 to-violet-800 rounded-xl md:rounded-2xl p-5 mx-3">
        <p className="text-center text-lg sm:text-xl">
          <span className=" text-white font-medium">
            nacho.pcc.eth is hosting #WhereMyPurrsGo competition for PCC
            community on Twitter
          </span>
          <Link
            className=""
            to="https://twitter.com/ElNachoCrypto/status/1555945883413336064"
            target={"_blank"}
          >
            <span className="block md:inline-block ml-0 md:ml-3 mt-3 md:mt-0 px-2 py-1 sm:px-3 sm:py-2 rounded-xl bg-white hover:bg-blue-500 font-medium text-base text-blue-500 hover:text-white transition-all duration-300">
              See on Twitter
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
}
