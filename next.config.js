/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'via.placeholder.com' },
            { protocol: 'https', hostname: 'secure-content.meetupstatic.com' },
            { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
        ],
    },
};

export default nextConfig;
