import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Necesario para exportación estática
    },
};

export default nextConfig;
