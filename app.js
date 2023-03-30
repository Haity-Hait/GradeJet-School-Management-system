// Variables
let email = document.getElementById('email')
let email2 = document.getElementById('email2')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')
let Confirm_pass = document.getElementById('conpassword')
let name_user = document.getElementById('Name')
var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');



darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})
function signup() {
    localStorage.setItem('Email', email2.value)
    localStorage.setItem('Name', name_user.value)
    localStorage.setItem('Password', password2.value)
    alert("You've sucessfully created an account with Gradejet. Move to Sign in page to log in your account.")
}
let getEmail = localStorage.getItem('Email')
let getName = localStorage.getItem('Name')
let getPassword = localStorage.getItem('Password')
function login(event){
    event.preventDefault()
    if(email.value !== getEmail && password.value !== getPassword){
        alert("Not an existing User. Go and sign up First")
    }
    if(password.value !== getPassword){
        alert("Incorrect Password.")
    }
    if(email.value == getEmail && password.value == getPassword){
        window.location.href = "Student dashboard.html"
    }
    
}

let passworda = document.getElementById('passworda')
    let emaila = document.getElementById('emaila')
    function set(){
        window.location.href = "Admin Dashboard.html"
    }





