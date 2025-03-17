/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css,scss,html}",
    "{{{ cookiecutter.django_base_dir.rstrip('\\/') }}}/**/templates/**/*.html"
    {{%- if cookiecutter.use_tailwindcss and cookiecutter.use_crispy_tailwind %}},
    "{{{ cookiecutter.venv_base_dir.rstrip('\\/') }}}/**/crispy_forms/**/*.{html,py,js,css}"{{%- endif %}}
  ],
  theme: {
    extend: {},
  },
}

