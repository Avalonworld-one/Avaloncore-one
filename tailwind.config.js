module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        "Inter var, sans-serif",
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
  },
  variants: {
    extend: {
      textColor: ['group-hover'],
      stroke: ['group-hover'],
    },
  },
};
