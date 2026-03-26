
// Basic function: (common)
// function printMessage(message) {
//     console.log('Your message is: ' + message)
// } 

// Same as above but with const: (Least common version)
// const printMessage = function(message) {
//     console.log('Your message is: ' + message)
// }

// Again, same. (common)
const printMessage = (message) => { // Can remove () around message
    console.log('Your message is: ' + message)
}

// All three versions print the same thing:
printMessage('hello') // Your message is: hello
printMessage('Hello programmers') // Your message is: Hello programmers

// Basic function: (common)
// function printWelcome() {
//     console.log('Welcome!')
// }

// Cleaner format: (common)
const printWelcome = () => {
    console.log('Welcome!')
}

// Both print 'Welcome!'
printWelcome() // Welcome!