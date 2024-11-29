/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
      return [
        {
          source: '/api/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, s-maxage=60, stale-while-revalidate=30',
            },
          ],
        },
      ];
    },
  };
export default nextConfig;
