import Header from 'components/header';
import SearchBar from 'components/search';
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>sponsorables</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Header/>
      <SearchBar/>
    </div>
  );
}