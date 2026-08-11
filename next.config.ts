import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.distromatch.tech',
            },
        ],
    },
};

export default nextConfig;
