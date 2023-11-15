

document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password =  document.querySelector("#password").value;

    if (username == "Krutika Jain" && password == "12345") {
       
        window.location.href = "student.html";
    }
        else if (username == "Samrin Mohd" && password == "12345") {
       
            window.location.href = "student.html";
        } 
        else{
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }

}