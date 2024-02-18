# React + Vite

## Setup in Local Machine

1. Clone the project in your local machine
2. Change to the project directory and run `npm install` to install all the required dependencies.
3. Create a new `.env` file in the root of the project and update the `.env` file with the necessary environment variables, consult the project owner for the variables.
4. Install [nvm](https://github.com/nvm-sh/nvm) (node version manager) for strictly using the required node version.
5. Run the project with `npm run dev` command

## Pre commit hooks
[lint-staged](https://github.com/okonet/lint-staged) is used for ensuring codes that are pushed to remote git adheres to eslint guidelines for ReactJS and JS.

Can use [review-dog](https://github.com/reviewdog/reviewdog) to automate posting comments over merge request by integrating with linters tools. Review-dog uses an output of lint tools and posts them as a comment if findings are in diff of patches to review.

**NOTE:**
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- vite-plugin-env-compatible/ used for making the project compatible with environment variables import.


## Folder Structure (src)
```
├── src

│   ├── api (All APIs are defined in here)

│   ├── assets (All app assets are saved in here)

│   │   ├── icons (All icons used in the app)

│   │   ├── images (All image files used in the app)

│   │   ├── scss (All sass files for styling the app)

│   ├── components (All re-usable components used in the app)

│   ├── constants (All constants required in the app)

│   ├── contextApi (All context required in the app)

│   ├── pages (All pages in the app are defined here)

│   |── App.jsx

│   ├── main.jsx (Entry point for the project)
```

