const Driver =  require("./Driver.js");
const fs = require('fs');
const express = require("express");
const path = require('path')

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const jsonString = JSON.parse(fs.readFileSync('Drivers.json', 'utf8'));
const jsonObject = parseDrivers(jsonString);

app.get("/", (req, res) => {
    res.render("sampletitle", {"drivers": jsonObject})
})

app.get("/:id", (req, res) => {
    let driver = new Driver("Default Name", "Default Car Number", "Default Age", "Default Team", "Default Hometown", "Default Championship", "Default Wins", "Corben is My Hot Gay Roommate.");
    let id = req.params.id;
    if (jsonObject[id] != undefined)
    {
        driver = new Driver(jsonObject[id].name, jsonObject[id].carNumber, jsonObject[id].age, jsonObject[id].team, jsonObject[id].home, jsonObject[id].championship, jsonObject[id].wins ,jsonObject[id].desc);
    }
    console.log(driver.hometown)
    console.log(driver.name)

    res.render("tinder", {"name": driver.name,"carNumber": driver.carNumber,"age": driver.age,"team": driver.team,"home": driver.home,"championship": driver.championship,"wins": driver.wins, "desc": driver.desc})
})


app.listen(3000);


function parseDrivers(data) {
    const drivers = [];
    data.drivers.forEach(function(driverData) {
        const {name, carNumber, age, team, home, championship, wins, desc} = driverData;
        const driver = new Driver(name, carNumber, age, team, home, championship, wins, desc);
        drivers.push(driver);
    });
    return drivers;
}