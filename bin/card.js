#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

let boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: 'double-single'
}

let info = {
    'name': chalk.white.bold('Andrés Giustini'),
    'degree': chalk.white('🤓 Software engineer\n🎓 Universidad Jaume I (Castellón, Spain)'),
    'web': chalk.yellow('https://giustini.github.io'),
    'github': chalk.yellow('https://github.com/giustini'),
    'linkedIn': chalk.yellow('www.linkedin.com/in/andrés-giustini'),
    'npx': chalk.white('npx giustini')
}

let name = `${info.name}`;
let degree = `${info.degree}`;
let web = chalk.white.bold('      Web:  ') + info.web;
let github = chalk.white.bold('   GitHub:  ') + info.github;
let linkedIn = chalk.white.bold(' LinkedIn:  ') + info.linkedIn;
let npx = chalk.white.bold('     Card:  ') + info.npx;

let card =
    name + '\n' +
    degree + '\n\n' +
    web + '\n' +
    github + '\n' +
    linkedIn + '\n\n' +
    npx;

console.log(chalk.cyan(boxen(card, boxenOptions)));