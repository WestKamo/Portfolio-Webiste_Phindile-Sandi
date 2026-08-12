cat << 'EOF' > next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Portfolio-Webiste_Phindile-Sandi',
  assetPrefix: '/Portfolio-Webiste_Phindile-Sandi',
};

export default nextConfig;
EOF
