// password 
let password = document.querySelector('#password');
let checkBox = document.querySelector('#checkBox');
checkBox.addEventListener('change',function(){
     let getAttr = password.getAttribute('type');
     if(getAttr==='password'){
        password.setAttribute('type','text');
     }
     else{
        password.setAttribute('type','password');
     }

})

// Confirm password 
let cpassword = document.querySelector('#cpassword');
let ccheckBox = document.querySelector('#ccheckBox');
ccheckBox.addEventListener('change',function(){
     let getAttr = cpassword.getAttribute('type');
     if(getAttr==='password'){
        cpassword.setAttribute('type','text');
     }
     else{
        cpassword.setAttribute('type','password');
     }

})
// salary 
let range = document.querySelector('#range');
range.addEventListener('input',function(){
 let emptySpan = document.querySelector('#salarySpan');
 emptySpan.innerHTML=range.value;
})
// start the Form Validation 

// username 
let registerBtn = document.querySelector('#regBtn');
registerBtn.addEventListener('click',function(forms){
forms.preventDefault();
    if(validation()){
        alert("Form Submitted Successfully")
    }
    else{
        alert('Something Went Wrong !.. Please Check out and Fill the Missing or incorrect Information on the Form')
    }
})
validation=()=>{
    // checkUserName(); // check userName 
    // checkemail(); // check Email
    // checkpasswords() // check Password
    // checkcpasswords() // check and match the password with another
    return (checkUserName() && checkemail() && checkpasswords()&&checkcpasswords());
}

// check UserName 
checkUserName=()=>{
let username =document.querySelector('#username');
let usernameFeedback = document.querySelector('#usernameFeedback');
let regEx = /^[a-zA-Z0-9]{5,10}$/
if(regEx.test(username.value)){
    username.style.border='2px solid green';
    usernameFeedback.innerHTML='';
    return true
}else{
    username.style.borderColor="red"
    usernameFeedback.innerHTML='Please Enter vaild Username';
    usernameFeedback.style.color='red'
    return false
}
}

// email 
checkemail=()=>{
    let email =document.querySelector('#email');
    let emailFeedback = document.querySelector('#emailFeedback');
    let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(regEx.test(email.value)){
        email.style.border='2px solid green';
        emailFeedback.innerHTML='';
        return true;
}else{
        email.style.borderColor="red"
        emailFeedback.innerHTML='Please Enter Valid Email';
        emailFeedback.style.color='red'
        return false;
}
}
// email 
checkemail=()=>{
    let email =document.querySelector('#email');
    let emailFeedback = document.querySelector('#emailFeedback');
    let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(regEx.test(email.value)){
        email.style.border='2px solid green';
        emailFeedback.innerHTML='';
     return true ;
}else{
        email.style.borderColor="red"
        emailFeedback.innerHTML='Please Enter Valid Email';
        emailFeedback.style.color='red'
        return false;
}}

// password 
checkpasswords=()=>{
    let password =document.querySelector('#password');
    let passwordFeedback = document.querySelector('#passwordFeedback');
    let inputGroup = document.querySelector('#input-group');
    let regEx =/^[A-Za-z0-9!@#$%^&*]{7,20}$/;
if(regEx.test(password.value)){
    inputGroup.style.borderRadius="11px"
    inputGroup.style.border='2px solid green';
       passwordFeedback.innerHTML='';
       return true ;
}else{
    inputGroup.style.borderColor="red"
        passwordFeedback.innerHTML='Please Enter Valid Password';
        passwordFeedback.style.color='red'
        return false;
}}

// confirm password 
checkcpasswords=()=>{
    let cpassword =document.querySelector('#cpassword');
    let cpasswordFeedback = document.querySelector('#cpasswordFeedback');
    let cinputGroup = document.querySelector('#cinput-group');
    let password = document.querySelector('#password');
    let regEx =/^[A-Za-z0-9!@#$%^&*]{7,20}$/;
if(password.value===cpassword.value & regEx.test(cpassword.value)){
    cinputGroup.style.borderRadius="11px"
    cinputGroup.style.border='2px solid green';
       cpasswordFeedback.innerHTML='';
       return true ;
}else{
    cinputGroup.style.borderColor="red"
        cpasswordFeedback.innerHTML='Password not Match';
        cpasswordFeedback.style.color='red'
        return false;
}}

// ranger 
checksalary=()=>{

}
