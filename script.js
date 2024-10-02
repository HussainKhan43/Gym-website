function data() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let nameerror =document.getElementById("nameerror");
    let emailerror =document.getElementById("emailerror");

    if (name === "" || email === "" || message === "") {
        alert("All Fields Are Mandatory!");
        return false;
    } 
    else if (name.length <= 2 || name.length >= 30) {
        nameerror.innerText="Username length must be between 3 and 30 characters";
        return false;
    }
    else if (!/^[A-Za-z._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/.test(email)) {
        emailerror.innerText="Please enter a valid email";
        return false;
    }    
    else {
        alert("Data Submitted Successfully");
        return true;
    }
}
