/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/login',
            permanent: false, // Set to true if you want the redirect to be permanent
          },
        ];
      },

};

export default nextConfig;
