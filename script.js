
let pass="";
let confirmP="";
password.addEventListener("input", ()=> {
    const password= document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    pass=password.value;
    if(confirmP !==  pass){
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
    }else{
        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
    }
});

confirmPassword.addEventListener("input", ()=> {
    const password= document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    confirmP=confirmPassword.value;
    
    if(confirmP !==  pass){
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
    }else{
        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
    }
});