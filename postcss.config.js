export default {
  plugins: {
    'postcss-preset-env': {
      stage: 0, // Enables all modern CSS features
      features: {
        'color-functional-notation': true, // Enables modern color syntax
        'custom-properties': true,
        'nesting-rules': true,
      },
    },
    tailwindcss: {},
    autoprefixer: {},
  },
}
