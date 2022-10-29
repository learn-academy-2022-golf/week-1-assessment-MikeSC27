// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: [tangerine, magenta, lilac, daffodil, indigo]
// b) Verify and explain: I remembered the mutator .push added the new value to the end of the array, I forgot its only output is the length of array not a display of all values. 

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The .length function for strings returns the amount of charaters including spaces in the string. 

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: l
// b) Verify and explain: I forgot to count the zero index again. However silly it sounds, I know it starts at zero, I am just so use to start counting at one.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: JavaScript
// b) Verify and explain: Same as above Q&A, I answered these to quickly, and I counted normally instead of codingStyle.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: weekendDays.toUpperCase is not a function of the array, if it would have been a string then, "I belive" my answer would have been right.  

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: An error code
// b) Verify and explain: I am confused on the typeof_dataTypes.length, I thought the space after typeof would have caused an error.  I am a bit confused about typeof and why it brought up the zero index value. I will have to look that up. Besides it looks all wrong because I know there are SIX primitive data types.........Extra credit :)
