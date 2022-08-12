let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");

confirmPassword.addEventListener("keyup", comparePass)
password.addEventListener("keyup", comparePass)


function comparePass() {
    if (password.value != confirmPassword.value) {
        confirmPassword.className = "invalid-pass"
    } else {
        confirmPassword.className = "valid-pass"
    }
}

function passCheck() {
    if (password.value != confirmPassword.value) {
        confirmPassword.focus();
        return false
    } else {
        return true
    }
}