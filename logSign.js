
//
let clickHere = document.getElementById('clickHere')
let haveLogin = document.getElementById('haveLogin')

let loginField = document.getElementById('loginField')
let signupField = document.getElementById('signupField')

clickHere.onclick = function (){
    signupField.style.display = "block"
    signupField.style.background = "rgb(77, 74, 74)"
    signupField.style.transition ='2s'
    signupField.style.color = "white"
    loginField.style.display = "none"
}

haveLogin.onclick = function (){
    loginField.style.display = "grid"
    signupField.style.display = "none"
    window.location.reload()
}

    //Validation for Login page//
let loginBtn = document.getElementById('loginBtn')
loginBtn.onclick = function (){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    if(username == ""){
        alert('Input Username')
    }else if(password == ""){
        alert("Input Password")
    }else if(password.length <= 7){
        alert('Atleast must 8 characters')
    }else if(password.length >=11){
        alert('Too much')
    }else{
        alert('Welcome User')
    }
}

    //Validation for Sign-Up page
let finishBtn = document.getElementById('finishBtn')
finishBtn.onclick = function (){
    let signUsername = document.getElementById('signUsername').value
    let signEmail = document.getElementById('signEmail').value
    let signPassword = document.getElementById('signPassword').value
    let signPassword2 = document.getElementById('signPassword2').value
    if(signUsername == ""){
        alert('Required Username')
    }else if(signEmail == ""){
        alert('Input Email')
    }else if(signPassword == ""){
        alert('Input Password')
    }else if(signPassword.length <= 7){
        alert('Atleas 8-10 Characters')
    }else if(signPassword.length >= 11){
        alert('Two much Characters')
    }else if(signPassword2 == ""){
        alert('Input again password')
    }else if(signPassword2 != signPassword){
        alert('Password did not Match!')
    }else{
        alert('Welcome New User')
    }
}