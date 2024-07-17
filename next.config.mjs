/** @type {import('next').NextConfig} */

import withExportImages from 'next-export-optimize-images';

const nextConfig = withExportImages({
    images: {
        domains: ["images.microcms-assets.io"],
        // unoptimized: true,
    },
   output: 'export', // 
})

export default nextConfig;
