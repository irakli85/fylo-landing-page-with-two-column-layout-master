function mainMailCheck() {
    let mail = document.getElementById("main-email").value;
    let format =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
        if( !mail.match(format) && mail != ''){
          document.getElementById("main-mail-error").innerHTML = "Please check your mail";
          document.getElementById("main-mail-error").style.color = "red";
          document.getElementById("main-email").style.border = "2px solid red";
          return false;
        }else{
          document.getElementById("main-mail-error").innerHTML = "";
          document.getElementById("main-email").style.border = "none";
          return true;
        }
    }
  
    function secondMailCheck() {
        let mail = document.getElementById("second-email").value;
        let format =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         
            if( !mail.match(format) && mail != ''){
              document.getElementById("sec-two-mail-error").innerHTML = "Please check your mail";
              document.getElementById("sec-two-mail-error").style.color = "red";
              document.getElementById("second-email").style.border = "2px solid red";
              return false;
            }else{
              document.getElementById("sec-two-mail-error").innerHTML = "";
              document.getElementById("second-email").style.border = "none";
              return true;
            }
        }
