/** @type {import('next').NextConfig} */

import withExportImages from 'next-export-optimize-images';

const nextConfig = withExportImages({
    images: {
        domains: ["images.microcms-assets.io"],
        // unoptimized: true,
    },
    images: { loader: "custom" },
    transpilePackages: ["next-image-export-optimizer"],
    output: 'export', // 
})

export default nextConfig;
