function processUserInput(callback) {
    let userInput = "Hello, World!";
    callback(userInput);
}

function displayMessage(message) {
    console.log(message);
}

processUserInput(displayMessage);
// This code defines a function `processUserInput` that takes a callback function as an argument. It simulates getting user input and then calls the callback with that input. The `displayMessage` function is passed as the callback, which logs the message to the console when invoked.