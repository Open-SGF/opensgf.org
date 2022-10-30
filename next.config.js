/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'via.placeholder.com',
            'secure-content.meetupstatic.com',
            'avatars.githubusercontent.com'
        ],
    },
};

module.exports = nextConfig;
