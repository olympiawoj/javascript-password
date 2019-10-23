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