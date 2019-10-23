
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
    // console.log(typeof length) //string, I want this to be a # so add a plus sign to make it a number, urnary operator

    //see if values are checked or not, the checked property is true or false
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbols.checked;
    //pass all of these into a function called generate password
    //result will get put into the result element
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
});

//Step 6: Copy password to clipboard
clipboardEl.addEventListener('click', () => {
    //create textarea Element
    const textareaEl = document.createElement('textarea')
    //get result from innerText
    const password = resultEl.innerText;
    if (!password) {
        return
    }
    //add value of password to textarea
    textareaEl.value = password
    //puts in the body
    document.body.appendChild(textareaEl)
    textareaEl.select()
    //copy to clipboard
    document.execCommand('copy')
    //remove text
    textareaEl.remove();
    alert('Password copied to clipboard')

})

//Step 5: GeneratePassword function
function generatePassword(lower, upper, number, symbol, length) {
    //1. Init a password variable
    let generatedPassword = ""
    //2. Filter out un-checked types, if not checked, don't incude
    const typesCount = lower + upper + number + symbol;
    let typesArr = [{ lower }, { upper }, { number }, { symbol }]; //array of objects, lower:true, upper:false
    console.log('typesArr', typesArr)
    //filter unchecked, loop through each item and based on true or false value, filter out anything that equals false - so we need to actually get value of true or false
    //pass in item, an array, and we want the first value 0 - so if it's false, should be filtered out of array
    typesArr = typesArr.filter((item) => {
        console.log('item', Object.values(item))
        return Object.values(item)[0]
    })

    //if there's none checked, don't proceed
    if (typesCount === 0) {
        return "";
    }

    //3. Loop over the length, w/e the length is, we wanna loop over and call a generator function for each type
    //for each true in the array, return an array of keys, and grab the first item in that

    for (let i = 0; i < length; i += typesCount) {
        //for each object in this array {number:true}, get the key of this object and return in an array
        typesArr.forEach(type => {
            //funcName is either upper, lower number or sumbol
            const funcName = Object.keys(type)[0]
            console.log(funcName)
            //append to generated password
            generatedPassword += randomFunc[funcName]();

        })

    }


    //4 Add final password to the password variable and return, 
    //if I put 1 in the password lenght, this is still 4. We need to slice it by length.
    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword

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



// console.log(getRandomLower())
// console.log(getRandomUpper())
// console.log(getRandomNumber())
// console.log(getRandomSymbol())