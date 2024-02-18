## React + Vite

#Setup in Local Machine

1. Clone the project in your local machine
2. Change to the project directory and run `npm install` to install all the required dependencies.
3. Create a new `.env` file in the root of the project and update the `.env` file with the necessary environment variables, consult the project owner for the variables.
4. Install [nvm](https://github.com/nvm-sh/nvm) (node version manager) for strictly using the required node version.

**NOTE:**
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- vite-plugin-env-compatible/ used for making the project compatible with environment variables import.
