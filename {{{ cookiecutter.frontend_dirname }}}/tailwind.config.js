/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "{{{ cookiecutter.django_base_dir.rstrip('\\/') }}}/**/src/**/*.{js,css,scss,html}",
    "{{{ cookiecutter.django_base_dir.rstrip('\\/') }}}/**/templates/**/*.{js,css,scss,html}"
  ],
  theme: {
    extend: {},
  },
  plugins: [{{% if cookiecutter.use_daisyui %}}
    require('daisyui'),
  {{% endif %}}],
}

