function Login() 
{
    var username=document.getElementById('text').value;
    var password=document.getElementById('password').value;


    if (userName=="admin"&& password=="user")
    {
        alert("Login Successfull");
        return false;
    } 
    else {
        alert("Login Failed");
        return false;
    }
}