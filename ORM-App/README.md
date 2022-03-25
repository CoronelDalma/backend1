#### Proyecto de NodeJs

### inicio
npm init -y
npm i express
npm i express-session
npm i nodemon -D

## sequelize
npm i sequelize
npm i sequelize-cli -D
npx sequelize-cli init

## ejs
npm i ejs
npm i express-ejs-layouts

## Tailwind
npm i tailwindcss -D
npx tailwindcss init
tailwind.config.js : module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [],
}
npx tailwindcss -i ./static/css/tailwindbase.css -o ./static/css/styles.css --watch

### npm-run-all --save-dev
npm i npm-run-all --save-dev
package.json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "css": "npx tailwindcss -i ./static/css/tailwindbase.css -o ./static/css/styles.css --watch",
    "start-dev": "npx nodemon index.js",
    "dev": "npm-run-all -p -r css start-dev"
  },

### dotenv
npm i dotenv

### morgan
npm i morgan

### mysql2
npm i mysql2