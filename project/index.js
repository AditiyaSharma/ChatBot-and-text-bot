let username=document.getElementById("Username");
let user_password=document.getElementById("Password");
function printinfo(){
    console.log(username.value);
    console.log(user_password.value);
    let count=1;
    while(count>0)
    {
        count--;
        if(username.value==="Shubham Kumar" && user_password.value==="thegreatwarriour")
        {
            console.log("jkvfbvijfvf");
            console.log(username.value);
            console.log(user_password.value);
            // location.replace("hello.html"); 
            //window.location.href = "hello.html";
            return true;
        }
        else
        {
            console.log("NO");
            username.style.border="solid 2px red";
            user_password.style.border="solid 2px red";
            username.focus();
            return false;
        }
        username.value="";
        user_password.value="";
    }
}