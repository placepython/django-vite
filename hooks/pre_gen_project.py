import sys

if {{{cookiecutter.use_tailwindcss}}} and {{{cookiecutter.use_bootstrap}}}:
    print(
        "You should either use TailwindCSS or Bootstrap 5, "
        "but not both of them !"
    )
    sys.exit(1)

if {{{cookiecutter.use_daisyui}}} and not {{{cookiecutter.use_tailwindcss}}}:
    print("You cannot use Daisy UI without using TailwindCSS !")
    sys.exit(1)
