/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ["images.microcms-assets.io"],
        unoptimized: true,
    },
    output: 'export', //
    reactStrictMode: false, 
}

export default nextConfig;
