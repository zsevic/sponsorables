export default async function handler(req, res) {
  const { location } = req.query;
  let sponsorables = [];

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify({
        query: `query { search(type:USER, query:"location:${location} followers:>40", first:100) { edges { node { ... on User { bio login viewerCanSponsor } } } userCount } }`,
      }),
      headers: {
        ContentType: "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => resp.data.search.edges);
    sponsorables = response
      .filter((user) => user.node.viewerCanSponsor)
      .map((user) => ({
        bio: user.node.bio,
        url: `https://github.com/${user.node.login}`,
      }));
  } catch (error) {
    console.error(error);
  }

  res.status(200).json({ sponsorables });
}
