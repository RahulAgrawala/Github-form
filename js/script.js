
      function myfun(){
        var a=document.myform.phone.value;
        var e =document.myform.email.value;
        var b =document.myform.name.value;
        var c=document.myform.alterphone.value;
        var d= document.myform.rdio;
        var p=document.myform.pass.value;
        var q=document.myform.confirmpass.value;

        //name valiation
      var correct=/^[a-zA-Z ]*$/;
        if (b==null || b==""){  
          document.getElementById("nammsg").innerHTML="please fill username:";
          return false;
         }    
else if(b.match(correct)){
true;
}
else{
document.getElementById("nammsg").innerHTML="only  alphabets are allows:";
  return false;

}
 
//validation of email...
if(e=="")
{
document.getElementById("eml").innerHTML="please fill Email .";
return false;
}
//validation of password....
if(p==""){
  document.getElementById("password").innerHTML="please fill the password";
  return false;
  }
  
  
  if(p.length<5)
          {
          document.getElementById("password").innerHTML="not less than 6character";
          return false;
         }
        if(p.length>12)
          {
          document.getElementById("password").innerHTML="not more than 10 character";
          return false;
          } 
          if(p.length==7 || p.length==8 || p.length==9 || p.length==10 )
          {
          document.getElementById("password").innerHTML="ok";
         
          } 
  
  if(q==""){
  document.getElementById("confirm").innerHTML="please fill the confirm password";
  return false;
  }
  //validation of confirm password....
  if(p!=q)
          {
          document.getElementById("confirm").innerHTML="Password do not match";
          return false;
          }
          if(p==q)
          {
          document.getElementById("confirm").innerHTML="ok";
          return true;
          }
  
  


//validation of phone no....
if(a=="")
        {
        document.getElementById("phnmsg").innerHTML="please fill mobile no.";
        return false;
       }
       else if(isNaN(a))
        {
        document.getElementById("phnmsg").innerHTML="only numeric digit allow ";
        return false;
        }
       else if(a.length<10)
        {
        document.getElementById("phnmsg").innerHTML="not less than 10 character";
        return false;
       }
      else if(a.length>10)
        {
        document.getElementById("phnmsg").innerHTML="not more than 10 character";
        return false;
        } 
       else if((a.charAt(0)!=9 && a.charAt(0)!=8 && a.charAt(0)!=7 && a.charAt(0)!=6 ))
        {
        document.getElementById("phnmsg").innerHTML="Mobile number should allowed 9,8,7,6";
        return false;
        }
         if(a.length=10)
        {
        document.getElementById("phnmsg").innerHTML="ok";
        }

        //validation of  optional phone no....
        if(c=="")
        {
        document.getElementById("altmsg");
        return true;
       }
        if(isNaN(c))
        {
        document.getElementById("altmsg").innerHTML="only numeric digit allow ";
        return false;
        }
       else if(c.length<10)
        {
        document.getElementById("altmsg").innerHTML="not less than 10 character";
        return false;
       }
      else if(c.length>10)
        {
        document.getElementById("altmsg").innerHTML="not more than 10 character";
        return false;
        } 
       else if((c.charAt(0)!=9 && c.charAt(0)!=8 && c.charAt(0)!=7 && c.charAt(0)!=6 ))
        {
        document.getElementById("altmsg").innerHTML="Mobile number should allowed 9,8,7,6";
        return false;
        }
         if(c.length==10)
        {
        document.getElementById("altmsg").innerHTML="ok";

      }

      // validation of radio
      for(i=0;i<d.length;i++) {
        if(d[i].checked==true)
        return true;
            }
             document.getElementById("ridmsg").innerHTML="please select anyone";
                  return false;


          }


//validation of city

          
          var cty = {};
          cty['morena'] = ['476001'];
          cty['gwalior'] = ['476001'];
          cty['pune'] = ['411013', '411016', '411023'];
          
          function ChangeCarList() {
              var ctylist = document.getElementById("city");
              var pinlist = document.getElementById("pincode");
              var selCar = ctylist.options[ctylist.selectedIndex].value;
              while (pinlist.options.length) {
                  pinlist.remove(0);
              }
              var ct = cty[selCar];
              if (ct) {
                  var i;
                  for (i = 0; i < ct.length; i++) {
                      var car1 = new Option(ct[i], i);
                      pinlist.options.add(car1);
                  }
              }
         
          
          
         
         }
       