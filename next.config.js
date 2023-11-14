/** @type {import('next').NextConfig} */
const nextConfig = {
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
                hostname: 'i.robertify.me',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 'i.ajani.me',
                port: ''
            }
        ]
    },
}

module.exports = nextConfig
