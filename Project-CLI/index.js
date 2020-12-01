#!/usr/bin/env node

const { getCode, getNames } = require("country-list");
const axios = require("axios").default;
const chalk = require("chalk");

let date = new Date();
let getFullYears = date.getFullYear();

let country = process.argv.slice(2);
let countryYears = process.argv.slice(3)[0];
let getCountry = country[0];
let getNamesArray = [];


if (getCountry != undefined) {
  let countryCode = getCode(getCountry);

  countryCodeVerification(countryCode, country);
} else {
  console.log(chalk.red("ERROR"));
}

function countryCodeVerification(countryCode, getCountry) {
  getNamesArray.push(getNames());

  const found = getNamesArray[0].find((element) => element == getCountry[0]);

  if (found != undefined) {
    if (
      countryYears != undefined &&
      countryYears <= getFullYears &&
      countryYears > 0
    ) {
      getHolidates(countryCode);
    } else {
      countryYears = getFullYears;
      getHolidates(countryCode);
    }
  } else {
    console.log(
        chalk.red("ERROR : Country name invalid. Make sure it's in English and starts with an uppercase !")
    );
  }
}

function getHolidates(countryCode) {
  axios
    .get(
      "https://date.nager.at/api/v2/PublicHolidays/" +
        countryYears +
        "/" +
        countryCode
    )
    .then(function (response) {
        const dataSet = response.data;

        dataSet.forEach(data => {
            date = new Date(data.date);
            console.log(chalk.bold(data.name) + " : " + date.toLocaleDateString("fr-FR") + " \n ");
        });
    })
    .catch(function (error) {
      console.log(error);
      console.log(chalk.red("error"));
    })
    .finally(function () {
    });
}