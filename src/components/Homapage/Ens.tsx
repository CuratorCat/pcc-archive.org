import React from "react";
import styles from "./ens.module.scss";
import Link from "@docusaurus/Link";

export default function Ens() {
  return (
    <section className={"relative mt-8 md:mt-12 " + styles.sectionBg}>
      <div className="absolute inset-0 w-full h-full">
        <img
          className={"w-full h-full object-cover " + styles.coverImg}
          src="/img/home/ens-bg.jpg"
          alt=""
        />
      </div>
      <div className="relative max-w-4xl mx-auto text-center py-16 lg:py-24 px-8 sm:px-12 lg:px-3">
        <h3 className="text-5xl uppercase pb-4 tracking-widest">
          .pcc.eth{" "}
          <span className="block pt-1 text-3xl tracking-normal font-light">
            ENS subdomains
          </span>
        </h3>
        <div className="text-base sm:text-xl lg:text-lg xl:text-xl">
          <p>.pcc.eth subdomains are free for PCC Cat holders to claim.</p>
          <p>
            The name transfers with the cat. It's a proof of ownership, a more
            human-readable wallet address, and it also auto-sets the cat as the
            ENS avatar.
          </p>
        </div>
        <div className="pt-8">
          <Link
            className="px-6 py-3 rounded-full bg-pink-500 hover:bg-white group transition-all duration-300"
            to="/ens"
          >
            <span className="text-base font-medium text-white group-hover:text-pink-500">
              Learn More
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
