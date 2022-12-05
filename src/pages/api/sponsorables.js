import { getSponsorables } from "services/github-api";

export default async function handler(req, res) {
  const { location } = req.query;
  if (!location) {
    return res.status(400).json({ message: "Location parameter is required" });
  }
  const sponsorables = await getSponsorables(location);
  return res.status(200).json({ data: sponsorables });
}
