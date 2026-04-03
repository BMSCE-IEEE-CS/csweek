import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/synthverse",
        destination: "https://synthverse-hackathon.vercel.app/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
