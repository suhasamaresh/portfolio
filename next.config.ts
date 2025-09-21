import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};

export default nextConfig;
