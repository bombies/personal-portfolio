/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com',
                port: ''
            }
        ]
    },
}

module.exports = nextConfig
