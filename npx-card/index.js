#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const figlet = require("figlet");
const chalkRainbow = require('chalk-rainbow');

const data = {
    name: "Caroline Verpoorten",
    work: chalk.white("Junior Web Developer ") + chalk.red.bold("@BeCode"),
    github: chalk.grey("https://github.com/") + chalk.yellow("CarolineVerpoorten"),
    linkedin: chalk.grey("https://www.linkedin.com/in/") + chalk.green("caroline-verpoorten-ba11411a9/"),
    specialSkills: chalk.blue("coding, camera operation and being a dumbass"),
    card: chalk.white("npx") + " " + chalk.magenta("@carolineverpoorten") + chalk.white("/card"),
    labelWork: chalk.white.bold("Work:"),
    labelGithub: chalk.white.bold("Github:"),
    labelLinkedin: chalk.white.bold("Linkedin:"),
    labelSpecialSkills: chalk.white.bold("Special skills:"),
    labelCard: chalk.white.bold("Card:"),
};

console.log(
    chalk.cyan(
        boxen([
            chalkRainbow(figlet.textSync(`${data.name}`, {
                font: 'Standard',
                horizontalLayout: 'fitted',
                verticalLayout: 'default',
                width: 100,
                whitespaceBreak: true,
            })),
            "",
            `${data.labelWork} ${data.work}`,
            "",
            `${data.labelGithub} ${data.github}`,
            `${data.labelLinkedin} ${data.linkedin}`,
            `${data.labelSpecialSkills} ${data.specialSkills}`,
            "",
            `${data.labelCard} ${data.card}`,
        ].join("\n"),
        {
            padding: 1,
            margin: 1,
            borderColor: "cyan",
        },
        ),
    ),
)