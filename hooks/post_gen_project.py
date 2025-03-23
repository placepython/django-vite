from pathlib import Path
import shutil


def remove_bootstrap_files():
    shutil.rmtree("src/styles/base")
    Path("src/styles/app.scss").resolve().unlink()
    Path("src/postcss.config.mjs").resolve().unlink()

def remove_tailwind_files():
    Path("tailwind.config.js").resolve().unlink()

def remove_controllers_folder():
    shutil.rmtree("src/controllers")


def main():
    {{%- if cookiecutter.use_bootstrap %}}
    Path("src/styles/app.css").resolve().unlink(){{% endif %}}

    {{%- if not cookiecutter.use_bootstrap %}}
    remove_bootstrap_files(){{% endif %}}

    {{%- if not cookiecutter.use_tailwindcss %}}
    remove_tailwind_files(){{% endif %}}

    {{%- if not cookiecutter.use_stimulus %}}
    remove_controllers_folder(){{% endif %}}

main()
