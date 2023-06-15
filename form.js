
function validate()
{
    var fullname = document.getElementById("user").value;
    if(fullname=="")
    {
        alert("user name required");
        return false;
    }
    if(!isNaN(fullname))
    {
      alert("Only Character allowed");
      return false;
    }
    if (fullname.length<=2)
    {
        alert("username must be greater than 2 charater");
        return false;

    }  
     
    // validation for email 
     var email = document.getElementById("email").value;
     if(email=="") 
     {
        alert("email required");
        return false;
 }
     if (email.indexOf("@")==0)
     {
        alert("@ at invalid position");
        return false;
     }
     // validation for Number 
     var phonenumber = document.getElementById("phone").value;
     if(phonenumber.length<=9 || phonenumber.length>=11)
     {  
     alert("phone number is only 10 digit");
     return false;
    }
//  validation for username
      var username = document.getElementById("user1").value;
        if(username.length<=5){
     alert("Username must be greater than 5 ");
         return false;
      }
   // validation for password  
      var password = document.getElementById("password").value;
        if(password=="")
           {
              alert("password can not be blank");
                return false;
           }
    // password length
         if (password.length<=5)
            {
             alert("week password, password must have minimum 8 character");
            return false;
            }

    
    // validation for password 
    var confirmpassword=document.getElementById("confirmpassword").value;
    if(password!=confirmpassword)
    {
        alert("password does not match");
        return false;
    }

    // validation for radio button
     var gender = document.getElementsByName("gender");
     //alert(gender);
     if(!gender[0].checked || gender[1].checked)
     {
        alert("please select gender");
        return false;
     }
}