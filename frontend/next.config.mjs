// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
//     output: "standalone",
//     async rewrites() {
//     return destination: 'http://54.180.155.93'
//   [
//         {
//           source: '/api/:path*',
//           destination: 'http://54.180.155.93/api/:path*',
//         },
//         // CSRF 관련 주소도 rewrite에 추가하세요
//         {
//           source: '/csrf/:path*',
//           destination: 'http://54.180.155.93/csrf/:path*',
//         },
//   ];
//     },
// };
const nextConfig = {
    output: "standalone",
    reactCompiler: true,
   };
export default nextConfig;