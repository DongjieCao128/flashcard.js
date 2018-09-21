var inquirer = require("inquirer");

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

var firstPresident = new BasicCard("_____ was the first president of the United States?", "George Washington");
var second = new BasicCard("Earth is ____", "round");
var third = new BasicCard("Pencil is ____", "sharp");
var fourth = new BasicCard("Apple is ______", "red");


inquirer.prompt([
    {
        type: "input",
        name: "Q1",
        message: firstPresident.front
    }
]).then(function (response) {


    if (response.Q1 === firstPresident.back) {
        console.log("correct!");
    }
    else {
        console.log("wrong!");
    }
}).then(function () {
    inquirer.prompt([
        {
            type: "input",
            name: "Q2",
            message: second.front
        }
    ]).then(function (response) {
        if (response.Q2 === second.back) {
            console.log("correct!")
        }
        else {
            console.log("wrong!");
        }
    })
}).then(function (response) {


    if (response.Q3 === third.back) {
        console.log("correct!");
    }
    else {
        console.log("wrong!");
    }
}).then(function () {

    inquirer.prompt([
        {
            type: "input",
            name: "Q3",
            message: third.front
        }
    ]).then(function (response) {


        if (response.Q3 === third.back) {
            console.log("correct!");
        }
        else {
            console.log("wrong!");
        }

        //     {
        //         type: "input",
        //         name:"Q2",
        //         message:second.front
        //     },
        //     {
        //         type: "input",
        //         name:"Q3",
        //         message:third.front
        //     },
        //     {
        //         type: "input",
        //         name:"Q4",
        //         message:fourth.front
        //     }
        // ])
        module.exports = basicCard;