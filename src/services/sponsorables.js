import * as githubApi from "./github-api";

export async function getSponsorables(location) {
  try {
    const response = await githubApi.getUsersBy(location);
    return response
      .filter(
        (user) => user.node.viewerCanSponsor || user.node.login === "zsevic"
      )
      .map((user) => ({
        bio: user.node.bio,
        username: user.node.login,
      }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
