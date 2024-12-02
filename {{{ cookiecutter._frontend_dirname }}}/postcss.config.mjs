{{%- if cookiecutter.use_tailwindcss -%}}
export default {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    "postcss-preset-env": {
      features: { "nesting-rules": false },
    },
  },
};
{{%- else -%}}
export default {
  plugins: {
    autoprefixer: {}
  },
};{{% endif %}}
