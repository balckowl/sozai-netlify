/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.microcms-assets.io"],
        unoptimized: true,
    },
    output: 'export',
};

export default nextConfig;
