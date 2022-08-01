function validate()
    {
      var password = document.getElementById("password");
      var username = document.getElementById("username");

      if(username.value=="sankey@gmail.com" && password.value=="sankey")
      {
        alert("Login Successfull");
        return true;
      }
      else if((username.value=="sankey@gmail.com" && password.value!="sankey"))
      {
        alert("Pleas Enter Correct Password")
        return false
      }
      else if((username.value!="sankey@gmail.com" && password.value=="sankey"))
      {
        alert("Pleas Enter Correct Username")
        return false
      }
      else
      {
        alert("please enter correct username and password");
        return false
      }

    }