import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    exportTrailingSlash: true,
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            // Aquí puedes agregar más rutas si las tienes en tu proyecto
        };
    },
};

export default nextConfig;
