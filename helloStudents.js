"use strict";

// 1. Read the JSON file into a variable called students
const students = require('./students.json')

// 2. Iterate over the students array and print Hello with their full names to the console
students.forEach(function(student){ 
    console.log(`Hello ${student.firstName} ${student.lastName}`) 
})

// 3. Print out the number of last names starting with the letter D

let total = 0;
students.forEach(function(student){ 
    let name = new Array(student.lastName).filter(last => student.lastName.charAt(0) == 'D')
    if (name.length === 1) {
        total++;
    }
})

console.log("Count of all last names starting with D is " + total);