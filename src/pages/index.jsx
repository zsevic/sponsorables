import Head from 'next/head';
import React from 'react';

export async function getServerSideProps(context) {
  let sponsorables = [];
  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query:
          'query { search(type:USER, query:"location:serbia followers:>40", first:100) { edges { node { ... on User { bio login viewerCanSponsor } } } userCount } }',
      }),
      headers: {
        ContentType: 'application/json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((res) => res.data.search.edges);
    sponsorables = response.filter((user) => user.node.viewerCanSponsor);
    console.log(sponsorables);
  } catch (error) {
    console.error(error);
  }

  return {
    props: { sponsorables }, // will be passed to the page component as props
  };
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>next-starter</title>
        <link rel='icon' href='./favicon.ico' />
      </Head>
      Hello world
    </div>
  );
}
