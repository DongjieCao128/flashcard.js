var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");

var array = [
    new ClozeCard("George Washington was the first president of the USA.", "George Washington", "was the first president of the USA"),
    new ClozeCard("One year has 365 days", "365 days", "One year has"),
    new ClozeCard("The sky is blue", "blue", "The sky is"),
    new ClozeCard("Kevin is a girl", "girl", "kevin is a"),
    new ClozeCard("Kevin is 3444 years old", "3444 years old", "Kevin is"),
    new ClozeCard("Kevin accomplished his dream and become a successful web developer", "web developer", "Kevin accomplished his dream and become a successful"),
    new ClozeCard("Kevin loves eat humberger", "humberger", "Kevin loves eat")
]
var score = 0;


inquirer.prompt([
    {
        type: "list",
        name: "Q1",
        message: array[0].partial,
        choices: ["Jimmy Carter", "Brack Obama", "Donald Trump", array[0].cloze]
    },
    {
        type: "list",
        name: "Q2",
        message: array[1].partial,
        choices: ["500 days", "200 days", "300 days", array[1].cloze]
    },
    {
        type: "list",
        name: "Q3",
        message: array[2].partial,
        choices: ["Red", "Yellow", "purple", array[2].cloze]
    },
    {
        type: "list",
        name: "Q4",
        message: array[3].partial,
        choices: ["male", array[3].cloze, "Boy", "Female"]
    },
    {
        type: "list",
        name: "Q5",
        message: array[4].partial,
        choices: ["3455 years old", "3449 years old", "347 years old", array[4].cloze]
    },
    {
        type: "list",
        name: "Q6",
        message: array[5].partial,
        choices: ["swimmer", "Artist", array[5].cloze, "actor"]
    },
    {
        type: "list",
        name: "Q7",
        message: array[6].partial,
        choices: [array[6].cloze, "banana", "ice tea", "water"]

    }
]).then(answers => {
    if (answers.Q1 === array[0].cloze) {
        console.log("you are right");
        score++;
    }
    else {
        console.log("Q1 are wrong!");
        console.log("The correct answer is " + array[0].cloze)
    }
    if (answers.Q2 === array[1].cloze) {
        console.log("you are right");
        score ++;
    }
    else {
        console.log("Q2 are wrong!");
        console.log(array[1].text);
    }

    if (answers.Q3 === array[2].cloze) {
        console.log("Q3 are right");
        score++;
    }
    else {
        console.log("Q3 are wrong!");
        console.log(array[2].text);
    };

    if (answers.Q4 === array[3].cloze) {
        console.log("you are right");
        score++;
    }
    else {
        console.log("Q4 are wrong!");
        console.log(array[3].text);
    };

    if (answers.Q5 === array[4].cloze) {
        console.log("you are right");
        socre ++;
    }
    else {
        console.log("Q5 are wrong!");
        console.log(array[4].text);
    };

    if (answers.Q6 === array[5].cloze) {
        console.log("you are right");
        score ++;
    }
    else {
        console.log("Q6 are wrong!");
        console.log(array[5].text);
    };

    if (answers.Q7 === array[6].cloze) {
        console.log("you are right");
        score ++;
    }
    else {
        console.log("Q7 are wrong!");
        console.log(array[6].text);
    };

console.log("You get " +  score  + "/" + array.length);

})