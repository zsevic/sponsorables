import { Header } from "components/header";
import { SearchBar } from "components/search";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sponsorables</title>
        <link rel="icon" href="./favicon.svg" />
      </Head>
      <Header />
      <SearchBar />
    </div>
  );
}
