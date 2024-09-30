// next.config.js
/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          net: false,
          tls: false,
        };
      }
      return config;
    },
    images: {
      domains: [
        "static1.srcdn.com",
        "s.yimg.com",
        "discoverscifi.com",
        "wp.penguin.co.uk",
        "miro.medium.com",
        "cdn.shopify.com",
        "blueroseone.com",
        "img1.rapidleaks.com",
        "assets.penguinrandomhouse.com",
        "thewritepractice.com",
        "demo2.pavothemes.com",
        "i.ibb.co.com",
        "i.ibb.co",
        "demo2.pavothemes.com",
        "i.ibb.co",
        "encrypted-tbn0.gstatic.com",
        "cdn.freebiesupply.com",
        "d3bzyjrsc4233l.cloudfront.net",
        "demo2.pavothemes.com",
        "upload.wikimedia.org",
        "lh3.googleusercontent.com",
        "readymadeui.com",
        "avatars.githubusercontent.com",
        "*",
      ],
    },
  };
  
  export default nextConfig;
