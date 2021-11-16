/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        destination: "/general",
        permanent: true,
        source: "/",
      },
    ];
  },
};
