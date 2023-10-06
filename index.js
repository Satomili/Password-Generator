let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"]

let lengthInput = document.getElementById("length")
let lengthDisplay = document.getElementById("length-display")
let numbersInput = document.getElementById("numbers")
let symbolsInput = document.getElementById("symbols")
let passwordOneEl = document.getElementById("passwordOne")
let passwordTwoEl = document.getElementById("passwordTwo")

lengthInput.addEventListener('input', function(){
    lengthDisplay.textContent = lengthInput.value
})

function getRandomChar() {
    let useCharacters = characters.slice()
    let password = ""
    
    if(numbersInput.checked) {
        useCharacters = useCharacters.concat(numbers)
    }
    
    if(symbolsInput.checked) {
        useCharacters = useCharacters.concat(symbols)
    }
    
    for( let i = 0; i < lengthInput.value; i++ ){
        let randomIndex = Math.floor(Math.random()*useCharacters.length)
        password += useCharacters[randomIndex]
    }
    return password
}

function generatePasswords() {
    let passwordOne = getRandomChar()
    let passwordTwo = getRandomChar()
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
}


