// Script for Form Page

// Nama: Valentio Stanley Gunadi
// NIM: 2540096011

const submitBtn = document.getElementById("btn-submit");
submitBtn.addEventListener('click', () => {
    console.log("click");
})

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    let fullName = document.getElementById("fullName").value;
    let numberPhone = document.getElementById("numberPhone").value;
    let email = document.getElementById("email").value;
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let gender = document.querySelector('input[name = "gender"]:checked');
    
    e.preventDefault();
    console.log("submitted");
    // name
    if(!fullName){
        alert('The name must be filled!');
        return;
    }
    if(fullName.length <= 5 ){
        alert('The name must be longer than 5 characters');
        return;
    }else if(fullName.length >= 30){
        alert('The name must be less than 30 characters');
        return;
    }

    // number phone
    if(!numberPhone){
        alert('The number phone must be filled!');
        return;
    }
    if (numberPhone.length < 5) {
        alert("The number phone must be longer than 5 numbers");
        return;
    }else if (numberPhone.length >= 17) {
        alert("The number phone must be less than 5 numbers");
        return;
    }
    if(!isNumber(numberPhone)){
        alert('Please input the numbers not characters')
        return;
    }

    // gender
    if(!gender){
        alert("The gender must be selected!");
        return;
    }

    // date of birth
    if(!dateOfBirth){
        alert("The date of birth must be selected!");
        return;
    }

    // email
    if(!validateEmail(email)){
        alert('Email is invalid!');
        return;
    }

    // make sure
    let confirmMsg = confirm('Are you sure that your data is correct?');
    if(confirmMsg){
        console.log("Registered");
    }
    else{
        console.log("Cancelled");
    }

    // display success message after sure.
    if((fullName==fullName) && (numberPhone==numberPhone) && (gender==gender) && (dateOfBirth==dateOfBirth) && (validateEmail==validateEmail)){
        alert("Submit Successfully");
        return;
    }
})

function isNumber(value) {
    return /^-?\d+$/.test(value);
}

function validateEmail(email) {
    return email.indexOf("@") != -1 && email.endsWith(".com");
}