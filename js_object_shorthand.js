// Seperator for clarity
console.log('---------')

// Common type of object (Doesn't matter with const or let)
const address = {
    number: '1501', 
    street: 'Hennepin Avenue', 
    city: 'Minneapolis', // Tralling comma in case you need to add more info
}

console.log(address)

// Seperator for clarity
console.log('---------')

// Often can create objects from data in variables, for example

// Can be done with either let or const
const number = '1501'
const street = 'Hennepin Ave'
const city = 'Minneapolis'

const newAddress = {
    houseNumber: number, // Need to only use this method if property name and property don't exactly match.
    street, // Can mix and match shortcut
    city: city,
}

console.log(newAddress) // { number: '1501', street: 'Hennepin Ave', city: 'Minneapolis' }

// Seperator for clarity
console.log('---------')

// JS offers us a shorthand - if you create an object with variables, you can optionally omit the property name
// and JS will use the variable name as the property name.

let newNewAddress = {
    number, // Assumes property name is same as 'number'
    street, 
    city
}

console.log(newNewAddress) // { number: '1501', street: 'Hennepin Ave', city: 'Minneapolis' } Same result, less typing!

// Seperator for clarity
console.log('---------')