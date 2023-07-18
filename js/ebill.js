/*IT21268076*/
/*H.M.C.H.Karunathilaka*/


function enableButton()
          {
            if(document.getElementById("checkBox").checked){
              document.getElementById("submitbtn").disabled=false;
            }
            else{
              document.getElementById("submitbtn").disabledt=true;
            }
          }
    function checkPassword(){
              if(document.getElementById("pwd").value!=document.getElementById("cnfrmpwd").value)
              {
                alert("password mismatch");
              return false;
              }
              else{
                alert("You have successfully registered to the E-bill service. From now on, all bills will be sent to your email via eBill. Thank you.. ");
                return true;
              }
            }	 


/*const fname=document.getElementById('fname')
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
})*/
