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
      boxShadow: {
        custom: '0 8px 24px -8px rgba(0,0,0,.04), 0 1px 1px rgba(0,0,0,.04)',
      },
    },
  },
};
