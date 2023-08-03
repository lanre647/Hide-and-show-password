let password = document.getElementById("password");
let eyeicon = document.getElementById("eyeicon");

eyeicon.onclick = function() {
    if(password.type === "password") {
        password.type = "test";
        eyeicon.src = "images/eye-open.png"
    }

    else{
        password.type = "password";
        eyeicon.src = "images/eye-close.png"
    }
}