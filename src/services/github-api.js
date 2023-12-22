export async function getUsersBy(location) {
  return fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: `query { search(type:USER, query:"location:${location} is:sponsorable", first:100) { edges { node { ... on User { bio login viewerCanSponsor } } } userCount } }`,
    }),
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  })
    .then((resp) => resp.json())
    .then((resp) => resp.data?.search?.edges || []);
}
