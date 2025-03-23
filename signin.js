let bottomRightCont = document.querySelector(".bottomRightCont");
bottomRightCont.addEventListener("click", goTosignupPage);
function goTosignupPage(){
    window.location.href = "signup.html"
}

let login = document.querySelector(".requestOtp");
login.addEventListener("click", goToHomePage);

function goToHomePage(){
    window.location.href = "index.html"
}