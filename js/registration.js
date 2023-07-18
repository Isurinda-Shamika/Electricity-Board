/* IT21268144 | Jayasinghe J.A.M.P*/
function enableButton()
      {
        if(document.getElementById("checkBox").checked){
          document.getElementById("submitbtn").disabled=false;
        }
        else{
          document.getElementById("submitbtn").disabled=true;
        }
      }
function checkPassword(){
          if(document.getElementById("pwd").value!=document.getElementById("cnfrmpwd").value)
          {
            alert("password mismatch");
          return false;
          }
          else{
            alert("Successfully Registered");
            return true;
          }
        }	

/*function validate()
  {

var fname=document.getElementById("fname").value;
var Lname=document.getElementById("Lname").value;
var address=document.getElementById("address").value;
var Accnumber=document.getElementById("Accnumber").value;
var city=document.getElementById("city").value;
var province=document.getElementById("province").value;
var email=document.getElementById("email").value;
var phone=document.getElementById("phone").value;
var pwd=document.getElementById("pwd").value;
//first name validation
if(fname=="")
{
  alert("enter the name");
  return false;
}
if(!isNaN(fname))
{
  alert("name should be in character");
  return false;
}
//Last name validation
if(Lname=="")
{
  alert("enter the name");
  return false;
}
if(!isNaN(Lname))
{
  alert("name should be in character");
  return false;
}
//Address validation
if(address=="")
{
  alert("enter address");
  return false;
}

//phone validation
if(phone=="")
{
  alert("enter phone number");
  return false;
}
if(!isNaN(phone))
{
  alert("Phone number should be in digit");
  return false;
}
if(phone.length!=10)
{
  alert("must be 10 digit number")
}
   
  }*/
const fname=document.getElementById('fname')
const pwd=document.getElementById('pwd')
const form=document.getElementById('form')
const errorElement=document.getElementById('error')

form.addEventListener('submit',(e)=>{
  let message=[]
  if(fname.value===''||fname.value==null)
  {
    message.push('Name is required')
  }
  if(pwd.value.length<=5){
    message.push('password must be longer than 5 characters')
  }
  if(pwd.value.length>=20){
    message.push('password must be less than 20 characters')
  }
  if(pwd.value==='password'){
    message.push('password cannot be password')
  }
  if(message.length>0){
    errorElement.innerText=message.join(', ')
  }
})