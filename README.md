# Cookiecutter template for a frontend folder using Vite

This Cookiecutter template has been designed to assist you in creating and configuring the front-end tooling for your Django project. The generated code uses Vite.js for compiling and updating your staticfiles when the front-end source code is changed.

## Installing Cookiecutter and Node.js

This project uses **cookiecutter** to handle the code generation task from the template hosted on github. You need to install cookiecutter to use this project. Therefore, if cookiecutter is not already installed on your computer, you can install it globally using the following command:

```
$ pip install cookiecutter
```

You will also need npm to install frontend dependencies. Hence, this project requires you to install Node.js globally on your computer. You can do this by [downloading the appropriate installer](https://nodejs.org/en/download/current) for your operating system (recommended for beginners), or using a node version manager like nvm. 

## Creating the frontend folder

Once having installed the dependencies described above, you can generate the frontend folder at the root of your django projet using the following command:

```
$ cookiecutter gh:placepython/django-vite
```

Then, answer the questions asked by the prompt. TailwindCSS or Bootstrap are optional, but mutually exclusive. 
You cannot install both at the same time.

Once created, read the instructions in the generated folder to install dependencies and configure your django project.

