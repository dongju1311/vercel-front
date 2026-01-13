const nextConfig = {
  /* config options here */
  reactCompiler: true,
    output: "standalone",
    async rewrites() {
      return[
          {
              source: '/api/:path*',
              destination: 'http://54.180.89.176:9000/api/:path*',
          },
      ];
    },
};

export default nextConfig;
