import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap | Lynxify - Our Journey & Future Plans",
  description: "From ETH Denver hackathon victory to production-ready DeFi infrastructure. Explore Lynxify's completed milestones and upcoming developments.",
  openGraph: {
    title: "Roadmap | Lynxify - Our Journey & Future Plans",
    description: "From ETH Denver hackathon victory to production-ready DeFi infrastructure. Explore Lynxify's completed milestones and upcoming developments.",
    url: "https://lynxify.xyz/roadmap",
  },
  twitter: {
    title: "Roadmap | Lynxify - Our Journey & Future Plans",
    description: "From ETH Denver hackathon victory to production-ready DeFi infrastructure. Explore Lynxify's completed milestones and upcoming developments.",
  },
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
