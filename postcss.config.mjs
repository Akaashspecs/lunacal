const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          fontFamily: {
            jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
          },
        },
      },
    },
  },
};

export default config;
