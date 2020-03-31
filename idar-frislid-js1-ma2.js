// JavaScript 1
// Module Assignment 2
// 5.4.2020

// Question 1
const myFunctionExpression = function() {
    console.log("Idar Frislid");
};

// Question 2
document.querySelector(".btn").addEventListener("click", function() {
    console.log("I was clicked");
});

// Question 3
document.querySelector("#firstName").addEventListener("keydown", function() {
    console.log(event.key);
});

// Question 4
document.querySelector("button").addEventListener("mouseover", function() {
    this.classList.add("hover");
});

// Question 5
document.querySelector("[data-animal='dog']").addEventListener("mouseout", function() {
    this.classList.remove("hover");
})

// Question 6
const li = document.querySelectorAll("ul li");

li.forEach(function(item) {
    item.addEventListener("mouseover", function() {
        console.log(event.target.dataset.animal);
    })
});

// Question 7
const animal = "cow";

switch(animal) {
    case "cat": console.log("Meow");
    break;
    case "cow": console.log("Moo");
    break;
    case "bird": console.log("Tweet");
    break;
    default: console.log("Harrumph");
}

// Question 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheep) {
    console.log(sheep);
});

// Question 9
let counter = 0;
const interval = setInterval(logHello, 500);

function logHello() {
    console.log("hello");
    counter++;

    if(counter === 6) {
        clearInterval(interval);
    }
}

// Question 10
setTimeout(function() {
    document.querySelector(".container").innerHTML = "Text updated";
}, 2000);
