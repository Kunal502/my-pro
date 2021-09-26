function adduser(){
    //save user name in variable
    user_name = document.getElementById("user_name").value;
    //Save user Name in localStorage
    localStorage.setItem("user_Name" , user_name);
    //refer to next page
    window.location = "kwitter_room.html";
}