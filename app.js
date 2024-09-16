
const btn = document.getElementById("btn")
const lowerBtn = document.getElementById("lowercase")
const upperBtn = document.getElementById("uppercase")
const symbolsBtn = document.getElementById("symbols")
const numbersBtn = document.getElementById("numbers")
let lengthPassword = document.getElementById("inputlength");
const result = document.getElementById("result")

const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = lowercase.toUpperCase().split("").reverse().join("");
const symbols = "!@#$%^&*{):]',./\|[('}`~;:|-.->_<^.^"
const numbers = "012345678912301234567891230123456789123" ;







btn.addEventListener("click", generate)



function generate ()  {
    let password;
    const value = lengthPassword.value;
    let passwordLength = Number (value);
    // console.log(passwordLength);

    if (passwordLength == ""){
        alert("ENTER LENGTH OF PASSWORD PLS")
    }

    else if (passwordLength != "" && lowerBtn.checked == false && upperBtn.checked == false && symbolsBtn.checked == false && numbersBtn.checked == false){
        alert ("PLS SELECT  A CHECKBOX")
    }

    else{
    
        if(lowerBtn.checked && upperBtn.checked == false && symbolsBtn.checked == false && numbersBtn.checked == false){
            for (i = 0; i < passwordLength; i++ ){
                
                let randomIndex;
                randomIndex = Math.floor(Math.random() * 26)

            
                if (!password){
                    password = lowercase [randomIndex] 
                }
                else{
                
                password += lowercase [randomIndex] 
            
                }
                
            }
        
            
            result.innerText = password.slice(0,passwordLength)

        }

        else if (lowerBtn.checked && upperBtn.checked && symbolsBtn.checked == false  && numbersBtn.checked == false) {
            for (i = 0; i < passwordLength; i++ ){
                
                let randomIndex;
                randomIndex = Math.floor(Math.random() * 26)

            
                if (!password){
                    password = lowercase [randomIndex] + uppercase [randomIndex]
                }
                else{
                
                password += lowercase [randomIndex] + uppercase [randomIndex]
            
                }
                
            }
            result.innerText = password.slice(0,passwordLength)

        }


        else if (lowerBtn.checked && upperBtn.checked && symbolsBtn.checked  && numbersBtn.checked == false) {
            for (i = 0; i < passwordLength; i++ ){
                
                let randomIndex;
                randomIndex = Math.floor(Math.random() * 26)

            
                if (!password){
                    password = lowercase [randomIndex] + uppercase [randomIndex]  + symbols [randomIndex] 
                }
                else{
                
                password += lowercase [randomIndex] + uppercase [randomIndex] + symbols [randomIndex]
            
                }
                
            }
            result.innerText = password.slice(0,passwordLength)

        }
        else if (lowerBtn.checked && upperBtn.checked && symbolsBtn.checked && numbersBtn.checked) {
            for (i = 0; i < passwordLength; i++ ){
                
                let randomIndex;
                randomIndex = Math.floor(Math.random() * 26)

            
                if (!password){
                    password = lowercase [randomIndex] + uppercase [randomIndex]  + symbols [randomIndex] + numbers [randomIndex]
                }
                else{
                
                password += lowercase [randomIndex] + uppercase [randomIndex] + symbols [randomIndex] + numbers [randomIndex]
            
                }
                
            }
            result.innerText = password.slice(0,passwordLength)

        }
            
        
        else if (lowerBtn.checked && symbolsBtn.checked && numbersBtn.checked && upperBtn.checked == false) {
            for (i = 0; i < passwordLength; i++ ){
                
                let randomIndex;
                randomIndex = Math.floor(Math.random() * 26)

            
                if (!password){
                    password = lowercase [randomIndex]  + symbols [randomIndex] + numbers [randomIndex]
                }
                else{
                
                password += lowercase [randomIndex] + symbols [randomIndex] + numbers [randomIndex]
            
                }
                
            }
            result.innerText = password.slice(0,passwordLength)
        }
            
        
        else if (lowerBtn.checked && symbolsBtn.checked  && upperBtn.checked == false && numbersBtn.checked == false) {
            for (i = 0; i < passwordLength; i++ ){
                
                let randomIndex;
                randomIndex = Math.floor(Math.random() * 26)

            
                if (!password){
                    password = lowercase [randomIndex]  + symbols [randomIndex] 
                }
                else{
                
                password += lowercase [randomIndex] + symbols [randomIndex] 
            
                }
                
            }
            result.innerText = password.slice(0,passwordLength)

        }

        
        else if (lowerBtn.checked  && numbersBtn.checked && symbolsBtn.checked == false && upperBtn.checked == false) {
            for (i = 0; i < passwordLength; i++ ){
                
                let randomIndex;
                randomIndex = Math.floor(Math.random() * 26)

            
                if (!password){
                    password = lowercase [randomIndex]  + numbers [randomIndex] 
                }
                else{
                
                password += lowercase [randomIndex] + numbers [randomIndex] 
            
                }
                
            }
            result.innerText = password.slice(0,passwordLength)

        }
            


        else if (upperBtn.checked && lowerBtn.checked == false  && numbersBtn.checked == false && symbolsBtn.checked == false ) {
            for (i = 0; i < passwordLength; i++ ){
                
                let randomIndex;
                randomIndex = Math.floor(Math.random() * 26)

            
                if (!password){
                    password = uppercase [randomIndex]
                }
                else{
                
                password += uppercase [randomIndex] 
            
                }
                
            }
            result.innerText = password.slice(0,passwordLength)

        }


        else if (upperBtn.checked && numbersBtn.checked  && symbolsBtn.checked) {
            for (i = 0; i < passwordLength; i++ ){
                
                let randomIndex;
                randomIndex = Math.floor(Math.random() * 26)

            
                if (!password){
                    password = uppercase [randomIndex] + numbers [randomIndex] + symbols [randomIndex]
                }
                else{
                
                password += uppercase [randomIndex] + numbers [randomIndex] + symbols [randomIndex]
            
                }
                
            }
            result.innerText = password.slice(0,passwordLength)

        }
            
        


        else if (upperBtn.checked && numbersBtn.checked  && symbolsBtn.checked == false ) {
            for (i = 0; i < passwordLength; i++ ){
                
                let randomIndex;
                randomIndex = Math.floor(Math.random() * 26)

            
                if (!password){
                    password = uppercase [randomIndex] + numbers [randomIndex]
                }
                else{
                
                password += uppercase [randomIndex] + numbers [randomIndex]
            
                }
                
            }
            result.innerText = password.slice(0,passwordLength)

        }
            
        


        else if (upperBtn.checked && symbolsBtn.checked  && numbersBtn.checked == false ) {
            for (i = 0; i < passwordLength; i++ ){
                
                let randomIndex;
                randomIndex = Math.floor(Math.random() * 26)

            
                if (!password){
                    password = uppercase [randomIndex] + symbols [randomIndex]
                }
                else{
                
                password += uppercase [randomIndex] + symbols [randomIndex]
            
                }
                
            }
            result.innerText = password.slice(0,passwordLength)
        }


        else if (symbolsBtn.checked && lowerBtn.checked == false  && numbersBtn.checked == false && upperBtn.checked == false ) {
            for (i = 0; i < passwordLength; i++ ){
                
                let randomIndex;
                randomIndex = Math.floor(Math.random() * 26)

            
                if (!password){
                    password = symbols [randomIndex]
                }
                else{
                
                password += symbols [randomIndex] 
            
                }
                
            }
            result.innerText = password.slice(0,passwordLength)
                }

        else if (symbolsBtn.checked  && numbersBtn.checked && lowerBtn.checked == false  && upperBtn.checked == false ) {
            for (i = 0; i < passwordLength; i++ ){
                
                let randomIndex;
                randomIndex = Math.floor(Math.random() * 26)

            
                if (!password){
                    password = symbols [randomIndex] + numbers [randomIndex]
                }
                else{
                
                password += symbols [randomIndex] + numbers [randomIndex]
            
                }
                
            }
            result.innerText = password.slice(0,passwordLength)        
        
        }

        else if (numbersBtn.checked && lowerBtn.checked == false  && upperBtn.checked == false  && symbolsBtn.checked == false) {
            for (i = 0; i < passwordLength; i++ ){
                
                let randomIndex;
                randomIndex = Math.floor(Math.random() * 26)

            
                if (!password){
                    password =  numbers [randomIndex]
                }
                else{
                
                password +=  numbers [randomIndex]
            
                }
                
            }
            result.innerText = password.slice(0,passwordLength)

        }
            
        

    }

}



function copyText() {
    // Get the paragraph element
    const textElement = document.getElementById('result');

    // Create a temporary textarea to use for copying text
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textElement.textContent; // Get the text content from the <p> element
    document.body.appendChild(tempTextArea); // Add textarea to the body

    // Select and copy the text
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);

    // Optionally, you can alert the user
    alert('Password has been copied to clipboard!');
}










// console.log(uppercase);
