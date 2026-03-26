// Seperator for clarity
console.log('---------')

// Ways of declaring variables and constants in JavaScript

// Let's create a variable - it can be changed

let school = 'Minneapolis College'
console.log(school) // Minneapolis College
school = 'Saint Paul College'
console.log(school) // Saint Paul College
school = 'Metro State'
console.log(school) // Metro State
school = 'Minneapolis College'
console.log(school) // Minneapolis College

// Seperator for clarity
console.log('---------')

// What about creating constants?

const language = 'JavaScript'
console.log(language) // JavaScript
//language = 'C#' - Becomes error!

// If you have data in your program that you know what it is, and you won't change it,
// it is safer to make a constant because you can't accidentally change it.

// Seperator for clarity
console.log('---------')

let states = ['Minnesota', 'Wisconsin', 'Iowa']
console.log(states) // [ 'Minnesota', 'Wisconsin', 'Iowa' ]
states.push('Michigan')
console.log(states) // [ 'Minnesota', 'Wisconsin', 'Iowa', 'Michigan' ]

// Seperator for clarity
console.log('---------')

const states2 = ['Minnesota', 'Wisconsin', 'Iowa']
// states2 = ['Califorina', 'Oregon'] = error! - replacing the data is not allowed
console.log(states2) // [ 'Minnesota', 'Wisconsin', 'Iowa' ]
states2.push('Michigan') // We are allowed to modify the array
console.log(states2) // [ 'Minnesota', 'Wisconsin', 'Iowa', 'Michigan' ]

// Seperator for clarity
console.log('---------')

// Things to watch out for with constant arrays and objects

const address = {
    number: '1501', 
    street: 'Hennepin Avenue', 
    city: 'Minneapolis'
}

console.log(address) // { number: '1501', street: 'Hennepin Avenue', city: 'Minneapolis' }

// Everything below will cause errors!
// address = 1234
// address = {}
// adress = { number: 100, street: 'Main st.', city: 'Saint Paul'}

address.zip = '55403'
console.log(address) // {number: '1501',street: 'Hennepin Avenue', city: 'Minneapolis', zip: '55403'}

address.street = 'Hennepin Ave'
console.log(address) // {number: '1501',street: 'Hennepin Ave', city: 'Minneapolis', zip: '55403'}

// But you can't replace the entire object

// How to choose between let vs const
// If you are not sure, just use let
// If you know you won't change data, use const
// Finally if you know you need to change the data, use let.

// Seperator for clarity
console.log('---------')