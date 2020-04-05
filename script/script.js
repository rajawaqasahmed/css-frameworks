// Contact form validation
function validate() {
    var x, text;
    var phBool, emailBool, emailBool, msgBool, fnameBool,
        
    // Get the value of the input field with id="fname"
    firstName = document.getElementById("firstName").value;
    message = document.getElementById("message").value;
    emailText = document.getElementById("email").value;
    phoneText = document.getElementById("telephone").value;

    
    // patterns validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var fonePattern = /^[0-9]{3}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{2}$/;
    
    
    
    // If first name is empty
    if (isNaN(firstName)) {
        text = "Input OK";
        fnameBool = true;
        
    } else {
        text = "Input not valid";
    }
    document.getElementById("fNameText").innerHTML = text;

    // If last name is  empty
    if (isNaN(message)) {
        text = "Input OK";
        msgBool = true;
        
    } else {
        text = "Input not valid";
    }
    document.getElementById("message").innerHTML = text;

    // If email is empty
    if (isNaN(emailText) && emailPattern.test(emailText)) {
        text = "Input OK";
        emailBool = true;
        
    } else {
        text = "Input not valid, example: [email ID]@[abc].[abc]";
    }
    document.getElementById("emText").innerHTML = text;

// If phone is empty
    if (isNaN(phoneText) && fonePattern.test(phoneText)) {
        text = "Input OK";
        phBool = true;
        
    } else {
        text = "Input not ok, Example: XXX-XXX-XX or XXX.XXX.XX";
    }
    document.getElementById("phText").innerHTML = text;
    
    
    if (phBool  && emailBool && msgBool && fnameBool){
        console.log("Form validated successfully");
        alert("Form validated successfully");
    }
    else{
        return false;
    }
}

