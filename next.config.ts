import type { NextConfig } from 'next';

// Only GitHub Pages needs the repository prefix and static export.
// Vercel and local development serve the portfolio at the domain root.
const githubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  ...(githubPages ? {
    output: 'export',
    basePath: '/Portfolio-Webiste_Phindile-Sandi',
    assetPrefix: '/Portfolio-Webiste_Phindile-Sandi',
  } : {}),
  images: { unoptimized: true },
};

export default nextConfig;
