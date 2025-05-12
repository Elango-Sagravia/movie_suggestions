/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hedonova.b-cdn.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     { source: "/sitemap.xml", destination: "/sitemap" },
  //     { source: "/sitemap_main.xml", destination: "/sitemap_main" },
  //     { source: "/sitemap_blogs.xml", destination: "/sitemap_blogs" },
  //     { source: "/sitemap_policies.xml", destination: "/sitemap_policies" },
  //     { source: "/sitemap_pages.xml", destination: "/sitemap_pages" },
  //     { source: "/sitemap_archives.xml", destination: "/sitemap_archives" },
  //   ];
  // },
};

export default nextConfig;
