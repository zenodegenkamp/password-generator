const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let randomNumbers = []
let randomNumbersTwo = []
let finalPassword = ""
let finalPasswordTwo = ""
let length = document.getElementById("input-length-password").value
let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")
let alreadyUsed = false


function getPassword() {
    length = document.getElementById("input-length-password").value
    
    if (length > 14 && length < 26 && alreadyUsed === false) {
        for (let i = 0; i < length; i++) {
            randomNumber = Math.floor(Math.random() * 64)
            randomNumbers.push(randomNumber)
        }
            for (let j = 0; j < length; j++ ) {
                passwordCharacter = characters[randomNumbers[j]]
                finalPassword += passwordCharacter 
                firstPassword.textContent = finalPassword 
            }   
                for (let k = 0; k < length; k++) {
                randomNumberTwo = Math.floor(Math.random() * 64)
                randomNumbersTwo.push(randomNumberTwo)
                }
                    for (let l = 0; l < randomNumbers.length; l++ ) {
                        passwordCharacter = characters[randomNumbersTwo[l]]
                        finalPasswordTwo += passwordCharacter 
                        secondPassword.textContent = finalPasswordTwo
                    } 
                    finalPasswordTwo = ""
                    finalPassword = ""
                    randomNumbersTwo = []
                    randomNumbers = []
                }        
    else {
        firstPassword.textContent = "Change length"
        secondPassword.textContent = "Change length"
    }  
}

function checkUsage() {
    
}