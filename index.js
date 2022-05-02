const user = document.getElementById("username")
const cpass= document.getElementById("cpassword")
const pass = document.getElementById("password")
const agree = document.getElementById("check")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

let isGood = false;  


//password

function passValidation(){
    
    const uppercase = document.getElementById("uppercase")
    const lowercase = document.getElementById("lowercase")
    const number = document.getElementById("number")
    const specialchar = document.getElementById("specialchar")
    const characters = document.getElementById("characters")
  



    //check uppercase
    if(pass.value.match(/[A-Z]/)){
        uppercase.style.color= 'green'
    }
    else{
        uppercase.style.color='red'
    }

    if(pass.value.match(/[a-z]/)){
        lowercase.style.color= 'green'
    }
    else{
        lowercase.style.color='red'
    }
 

    //check number
     
       if(pass.value.match(/[0-9]/)){
        number.style.color='green'
    }
    else{
        number.style.color='red'
    }

    //check special character

    if(pass.value.match(/[!\@\#\$\%\^\&\*\(\)\-\=\+\_]/)){
        specialchar.style.color= 'green'
    }
    else{
        specialchar.style.color='red'
    }

    //check minimum character
    if(pass.value.length > 6){
        characters.style.color= 'green'
    }
    else{
        characters.style.color='red'
    }

    //check all

    if( uppercase.style.color == 'green' &&  lowercase.style.color == 'green' && number.style.color == 'green' && specialchar.style.color == 'green' && characters.style.color == 'green') {
        isGood = true;
    }
    else{
        isGood = false;
    }

   
}





form.addEventListener("submit", (e) =>{
    let message =[]


    if ( user.value.length < 8 || user.value.length >12){
        message.push("Username must be between 8 and 12 characters ")
        user.classList.add("error")
    }

    if (pass != cpass){
        message.push("Confirm password should match with password")
        cpass.classList.add("error")
    }

    if(isGood == false){
        message.push("Password is not good");
        pass.classList.add("error")
    }
  

    if (message.length > 0){
        e.preventDefault()
        errorElement.innerText = message.join("\r\n")
    }

})


