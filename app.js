

let form = document.getElementById("registration");
let input = document.getElementById("input");
let alertMessage = document.getElementById("alertMessage");

// alertMessage.style.display="none"
form.addEventListener("submit", function (event) {
    if(!isValidEmail(input.value)){
        // alertMessage.style.display="block"
        alertMessage.textContent = "Oops! Please check your email";
        event.preventDefault();
    }else{
        alertMessage.textContent = "";
        // alertMessage.style.display="none"

    }
})


function isValidEmail(email){
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}