/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "{{{ cookiecutter.django_base_dir.rstrip('\\/') }}}/**/templates/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

