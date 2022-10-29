// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

    //pseudo code 
        //Conditional: Eval two strings and output the string with the most characters, not be confused with the most character.
        //Inputs: [fruit1, fruit2, fruit3, fruit4]
        //Output: the string with the most characters.
            //Issues;( I was trying to combine all four into an array and spit out both answers (as seen below) but it was taking longer than my brain wanted,so I went back to basics. 

if(fruit1.length > fruit2.length) {
    console.log(fruit1) 
        }   else if(fruit1.length < fruit2.length) {
            console.log(fruit2) 
                }

if(fruit3.length > fruit4.length) {
    console.log(fruit3) 
        }   else if(fruit3.length < fruit4.length) {
            console.log(fruit4)
                }

        // var span = [fruit1, fruit2, fruit3, fruit4]       

        // const breadth = (fruit1, fruit2) => {
        //     if(fruit1.length > fruit2.lenght) {
        //         return fruit1 
        //         }   else if(fruit1.length < fruit2.length) {
        //                 return fruit2
        //             }
        //         }
        // // console.log(breadth(fruit1, fruit2))
        // console.log(span [1], [2])
        
        // const wide = (fruit3, fruit4) => {
        //     if(fruit3.length > fruit4.lenght) {
        //         return fruit3 
        //         }   else if(fruit3.length < fruit4.length) {
        //                 return fruit4
        //             }
        //         }
        // // console.log(wide(fruit3, fruit4))
        // console.log(span [2], [3])


// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:

    //Pseudo code 
        //Conditional: compare using relational operators (if) given const (temp1, temp2, temp3) against given boiling point of 212°F.  Then return if it is below, above, or at boiling point.
        //Inputs: temp1, temp2, temp3
        //Outputs: "temp°F is below, above, or at boiling point"

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

if(temp1 > 212){
    console.log(`${temp1}°F is above boiling point`) 
 }else if(temp1 < 212){
    console.log(`${temp1}°F is below boiling point`)
 }else if(temp1 === 212){
        console.log(`${temp1}°F is at boiling point`)
}

if(temp2 > 212){
    console.log(`${temp2}°F is above boiling point`) 
 }else if(temp2 < 212){
    console.log(`${temp2}°F is below boiling point`)
 }else if(temp2 === 212){
        console.log(`${temp2}°F is at boiling point`)
}

if(temp3 > 212){
    console.log(`${temp3}°F is above boiling point`) 
 }else if(temp3 < 212){
    console.log(`${temp3}°F is below boiling point`)
 }else if(temp3 === 212){
        console.log(`${temp3}°F is at boiling point`)
}

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
    //Pseudo code 
        //Combined two given arrays with built in method .concat and .length.
        //Inputs: padres1984WorldSeriesRuns, & padres1998WorldSeriesRuns
        //Output: Length of both arrays combined

        const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
        const padres1998WorldSeriesRuns = [6, 3, 5, 3]
        // Expected output: 9
        
var padresWorldSeriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(padresWorldSeriesRuns.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.


// Describe your process:
    //Pseudo code 
        //Create Mirror Image function with built in methods, .split, .reverse, and .join.  
            // I tried making it an array but that did not work out, so looked up reverse with strings and thats when I read what we were taught in class about .split a string into each character, then .reverse and .join to bring it back together again, and thank you for showing us how to stack.  It sounds easy now, I think I could explain it in an interview :) 
        //Inputs: currentCohort string
        //Output: Mirror Image of original currentCohort string.  "2202 floG".  (Note to flog someone is not nice, ask anyone in the Navy when flogging was still allowed.) 

        const currentCohort = "Golf 2022"

        function reverse(currentCohort){
            return currentCohort.split("").reverse("").join("");
        }
        console.log(reverse(currentCohort))
        //all my failed attempt below ;(
        // const coolCurrentCohort = ["Golf 2022"]
        // console.log(coolCurrentCohort.reverse())
        // console.log(coolCurrentCohort)
        // console.log(currentCohort.reverse())
        // console.log(currentCohort)
        // console.log(currentCohort.reverse());
        // console.log(currentCohort)
        // currentCohort.reverse();
        // console.log(currentCohort);
        // const flogging = currentCohort.reversed(); 
        // console.log('flogging:', flogging);
        // console.log('currentCohort:', currentCohort);

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:

    //Pseudo Code
        //Utilize assessor .lastIndexOf to find last given value of requested number from givenValue1 & givenValue2.
            //At first this one confused me until I remembered in my notes .indexOf and I had written down .lastIndexOf after looking up online during the coding challenge after the lecture. This one was the quickest for me so far hehe.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
 // Expected output: 7
console.log(myNumbers.lastIndexOf(givenValue1))
            
const givenValue2 = 10
// Expected output: 8
console.log(myNumbers.lastIndexOf(givenValue2))

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:

        //Pseudo Code:  Utilizing given arrays sanDiegoSummerTemperatures, & sanDiegoWinterTemperatures, sort from largest to smallest numbers with .sort and then stacking with .reverse.   
            //again thank you for demonstrating stacking in your lecture when someone asked about it. Made this easy, I just double checked the Mutator list in my notes and saw the warning about stacking Mutators and that the order is important.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

console.log(sanDiegoSummerTemperatures.sort().reverse())

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

console.log(sanDiegoWinterTemperatures.sort().reverse())
