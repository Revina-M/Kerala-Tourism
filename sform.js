let sName = document.getElementById("sName");
let sEmail = document.getElementById("sEmail");
let sPhone = document.getElementById("sPhone");
// let sPassword1 = document.getElementById("sPassword1");
let sPassword1Re = document.getElementById("sPassword1Re");
let e0 = document.getElementById("e0");
let e1 = document.getElementById("e1");
let e2 = document.getElementById("e2");
let e3 = document.getElementById("e3");
let e4 = document.getElementById("e4");
var flagE = 0;
var flagC = 0;
var flagP = 0;






const input = document.querySelector("#password");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const btn = document.querySelector(".submit-btn");
btn.classList.add("disabled");
var no=  0 ;
let regExpWeak = /[a-z]+/;
let regExpMedium = /\d+/;
let regExpCapital =/[A-Z]+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
function checkPassword() {
    if (input.value != "") {
        if (input.value.length <  8 && (input.value.match(regExpWeak) || input.value.match(regExpCapital) || input.value.match(regExpMedium) || input.value.match(regExpStrong))) no = 1;
        if (input.value.length >= 8 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpCapital) && input.value.match(regExpMedium)) || (input.value.match(regExpCapital) && input.value.match(regExpStrong)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong)))) no = 2;
        if (input.value.length >= 8 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpCapital) && input.value.match(regExpStrong)) no = 3;
        if (no == 1) {
        // input.style.borderColor = "#e74c3c";
        input.style.borderColor = "red";
        input.style.borderWidth = "thick";
        input.style.background = "#fceae9";
        weak.style.display = "block";
        medium.style.display = "none";
        strong.style.display = "none";
        }
        if (no == 2) {
        // input.style.borderColor = "#4df3cds";
        input.style.borderColor = "orange";
        input.style.borderWidth = "thick";
        input.style.background = "rgb(255, 243, 205, 0.5)";
        weak.style.display = "none";
        medium.style.display = "block";
        strong.style.display = "none";
        }
        if (no == 3) {
        // input.style.borderColor = "#27ae60";
        input.style.borderColor = "green";
        input.style.borderWidth = "thick";
        input.style.background = "#eafaf1";
        strong.style.display = "block";
        weak.style.display = "none";
        medium.style.display = "none";
        btn.classList.remove("disabled");
        }
        } else {
        input.style.borderColor = "blue";
        input.style.borderWidth = "thin";
        input.style.background = "white";
        strong.style.display = "none";
        weak.style.display = "none";
        medium.style.display = "none";
        btn.classList.add("disabled");
        }
        
}


function svalidate(){
    e0.innerText = "";
    e1.innerText = "";
    e2.innerText = "";
    // e4.innerText = "";
    e0.style.color = "red";
    e1.style.color = "red";
    e2.style.color = "red";

    if(sName.value.trim() === ''){
        e0.innerText = "Name required";
    }

  
    if(sEmail.value.trim() === ''){
        e1.innerText = "Email required";
    }
    else{
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
   
        if(regexp.test(sEmail.value)){
            flagE=1;
        }
        else{
            e1.innerText = "Invalid Email format";
            sEmail.value = "";
        }

    }
   

    // let regexp = /^([\d{3}])\-([\d{3}])\-([\d{4}])|([\d{3}])\.([\d{3}])\.([\d{4}])|([\d{3}]) ([\d{3}]) ([\d{4}])$/;
    if(sPhone.value.trim() === ''){
        e2.innerText = "Contact number required";
    }
    else{

    let regexp = /^(\d{3})(\.|-| )?(\d{3})(\.|-| )?(\d{4})$/;
    if(regexp.test(sPhone.value)){

           flagC = 1;
           
        }
        else{
            e2.innerText = "Invalid Contact number";
            sPhone.value = "";
        }

    
    }

    if(sPassword1Re.value.trim() === ''){
      
        e4.innerText = "Re-enter password";
    }
    else if(input.value !==sPassword1Re.value){
      
        e4.innerText = "Password doesn't match";
    }
    else{
        flagP = 1;
    }    
   
    if(flagE==1 && flagC==1 && flagP==1){
        return true;
    }
    else{
        return false;
    }

  
}  

// const iinput = document.querySelector("#lPassword1");
lEmail = document.getElementById("lEmail");
iinput = document.getElementById("lPassword");
ee0 = document.getElementById("ee0");
ee1 = document.getElementById("ee1");
var flagEE = 0;
var flagPP = 0;
var noo = 0;

function login_validate(){
    ee0.innerText = "";
    ee1.innerText = "";
    ee0.style.color = "red";
    ee1.style.color = "red";


    

  
    if(lEmail.value.trim() === ''){
        ee0.innerText = "Email field cannot blank";

    }
    else{
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
   
        if(regexp.test(lEmail.value)){
            flagEE=1;
        }
        else{
            ee0.innerText = "Invalid Email format";
            lEmail.value = "";
        }

    }
    console.log(iinput);
    console.log(iinput.value);
    if(iinput.value.trim() === ''){
      
        ee1.innerText = "Password field cannot be blank";
        
    }
    else{
        if (iinput.value != "") {
            if (iinput.value.length <  8 && (iinput.value.match(regExpWeak) || iinput.value.match(regExpMedium) || iinput.value.match(regExpStrong))) noo = 1;
            if (iinput.value.length >= 8 && ((iinput.value.match(regExpWeak) && iinput.value.match(regExpMedium)) || (iinput.value.match(regExpMedium) && iinput.value.match(regExpStrong)) || (iinput.value.match(regExpWeak) && iinput.value.match(regExpStrong)))) noo = 2;
            if (iinput.value.length >= 8 && iinput.value.match(regExpWeak) && iinput.value.match(regExpMedium) && iinput.value.match(regExpCapital) && iinput.value.match(regExpStrong)) noo = 3;
            if (noo == 1) {
            iinput.style.borderColor = "#e74c3c";
            iinput.style.background = "#fceae9";
            ee1.innerText = "Invalid Password";
            }
            if (noo == 2) {
            iinput.style.borderColor = "#4df3cds";
            iinput.style.background = "rgb(255, 243, 205, 0.5)";
            ee1.innerText = "Invalid Password";
            ee1.style.color = "orange";
            }
            if (noo == 3) {
            iinput.style.borderColor = "#27ae60";
            iinput.style.background = "#eafaf1";
            flagPP=1;
            }
            } else {
            iinput.style.borderColor = "blue";
            iinput.style.background = "white";
        
            }
            
    }
    console.log(flagEE);
    console.log(flagPP);
    if(flagPP==1 && flagEE==1){
        return true;
    }
    else{
        return false;
    }
   
}