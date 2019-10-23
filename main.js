
//Step 3: Select all DOM elements that we need
//get result, span with id of result
//Ctrl D to select next instance
const resultEl = document.getElementById("result")
const lengthEl = document.getElementById("length")
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const numbersEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")
const generateEl = document.getElementById("generate")
const clipboardEl = document.getElementById("clipboard")

//Step 4: Think about events - 2 events, click generate pass button and click clipboard
//pass in event listener type and functino to run when listener goes off
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    console.log(typeof length) //string, I want this to be a # so add a plus sign to make it a number, urnary operator

    //see if values are checked or not, the checked property is true or false
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbols.checked;
    //pass all of these into a function called generate password
    //result will get put into the result element
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
});

//Step 5: GeneratePassword function
function generatePassword(lower, upper, number, symbol, length) {
    //1. Init a password variable
    const password = ""
    //2. Filter out un-checked types, if not checked, don't incude
    //3. Loop over the length, w/e the length is, we wanna loop over and call a generator function for each type
    //4 Add final password to the password variable and return

}


//Step 2: Object of diff functions
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

//Step 1: Four Generator Functions - http://www.net-comber/charset.html

function getRandomLower() {
    //lowercase #97-122
    //on String object, method fromCharCode, we can get certain characters based on their code
    // Math.random() generates a random decimal, multiply by limit we want to set (up to 26) so then we get a decimal between 1 & 26
    //Wrap in  Math.floor() to round down b/c we don't want a decimal
    //26 letters in alphabet so multiply by our limit 26, and round using Math.floor
    //we want to get from 97 to 122 - so all we need to do is add a random number to 97
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper() {
    //uppercase #65
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    //48 to 57, a span of 10

    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}+/,."

    return symbols[Math.floor(Math.random() * symbols.length)]
}



console.log(getRandomLower())
console.log(getRandomUpper())
console.log(getRandomNumber())
console.log(getRandomSymbol())