const passwordBox= document.getElementById("Password") ; 
const lenght  = 12 ; //this is the length of the password

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
const lowerCase = "abcdefghijklmnopqrstuvwxyz" ; 
const numbers ="0123456789"; 
const symbols = "@#$%^&*()_+~|}{[]<>/-=" ; 

const allChar = upperCase + lowerCase + numbers + symbols ; 

function createPassword(){
    let password ="";
     password += upperCase [Math.floor(Math.random() * upperCase.length)];
     password += lowerCase [Math.floor(Math.random() * lowerCase.length)]; 
     password += number [Math.floor(Math.random() * number.length)]; 
     password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    } 
    passwordBox.value = password ; 
}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}