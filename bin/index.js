#!/usr/bin/env node


const boxen = require("boxen");
const terminalImage = require("terminal-image");
const chalk = require("chalk");
const CFonts = require("cfonts");
const path = require("path");


(async () => {
  console.log(
    boxen(

      CFonts.render('Jin-Roh', {
        font: 'chrome',
        colors: ['red'],
        background: 'transparent',
      }).string +

      (await terminalImage.file(path.resolve(__dirname, "../data/dbz.jpeg"))) +

      chalk.italic.underline.bold(`\nAndy krause AKA Jin-Rôh\n`) +
      chalk.white.bgBlack(`\n          Junior Web developper at BeCode           `) +
      chalk.white.bgBlack(`\n       Github: https://github.com/krauseAndy        `) +
      chalk.white.bgBlack(`\n        NPM: https://www.npmjs.com/~jinroy          `) +
      chalk.white.bgBlack(`\n linkedIn : https://www.linkedin.com/in/andy-krause `) +
      chalk.white.bgBlack(`\n   FB : https://www.facebook.com/andy.krause.758    `),


      {
        padding: 1,
        margin: 1,
        borderStyle: "double",
        align: "center",
        float: "center"
      }

    ));

})();