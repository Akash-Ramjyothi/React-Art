/**
 * PostCSS Configuration
 * Enhances TailwindCSS with production optimizations
 */

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      grid: "autoplace", // Better CSS Grid support
      flexbox: "no-2009", // Avoid legacy flexbox prefixes
    },
    ...(process.env.NODE_ENV === "production"
      ? {
          cssnano: {
            preset: "default", // Minify & optimize CSS in production
          },
        }
      : {}),
  },
};
