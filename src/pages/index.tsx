import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import LayoutTw from "@site/src/theme/LayoutTw";

import Hero from "../components/Homapage/Hero";
import Club from "../components/Homapage/Club";
import Collections from "../components/Homapage/Collections";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A place to learn and find information about the Purrnelope's Country Club project"
    >
      <LayoutTw>
        <Hero />
        <main className="pb-12">
          <section className="relative max-w-7xl mx-auto lg:grid grid-cols-1 lg:grid-cols-5 gap-3 lg:px-3">
            <Club />
            <Collections />
          </section>
        </main>
      </LayoutTw>
    </Layout>
  );
}
