/** @type {import('next').NextConfig} */

const repo = 'poprigo/next-demo.git'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
    assetPrefix: assetPrefix,
    basePath: basePath,
};

export default nextConfig;


