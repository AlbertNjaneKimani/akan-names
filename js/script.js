var CC, YY, MM, DD, d, birthDay;
const weekDay = ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];
const khanMales = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var khanFemales = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

const validateInputs = () => {
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var genders = document.getElementsByName("gender");
    //validate year
    if (year == "" || year.length != 4 || year > 2100 || year <= 1900) {
        alert("Please enter a valid year of birth");
        document.getElementById("year").focus();
        return false;
    }
    //validate month
    else if (month == "" || isNaN(month) || month > 12 || month <= 0) {
        alert("Please enter a valid month of birth");
        document.inputForm.month.focus();
        return false;
    }
    //validate day
    else if (day == "" || isNaN(day) || day > 31 || day <= 0) {
        alert("Please enter a valid date of birth");
        document.inputForm.day.focus();
        return false;
    }
    //validate gender
    else if (document.getElementById('female').checked == false && document.getElementById('male').checked == false) {
        alert("please select gender");
        return false;
    } else {
        return true;
    }
}
const calculateDayFromFormular = () => {
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0, 2));
    YY = parseInt(year.substring(2, 4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("day").value);
    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    // birthDay =(Math.floor(d))
    return (Math.floor(d));

}
const getGenderName = () => {
    //var genders = document.getElementByName("gender");
    if (document.getElementById('male').checked == true) {
        var gender = "male";
    } else if (document.getElementById('female').checked == true) {
        var gender = "female";
    } else {
        return false;
    }
    switch (gender) {
        case "male":
            if (birthDay == 1) {
                alert("Your Akan name is " + khanMales[0]);
            } else if (birthDay == 2) {
                alert("Your Akan name is " + khanMales[1]);
            } else if (birthDay == 3) {
                alert("Your Akan name is " + khanMales[2]);
            } else if (birthDay == 4) {
                alert("Your Akan name is " + khanMales[3]);
            } else if (birthDay == 5) {
                alert("Your Akan name is " + khanMales[4]);
            } else if (birthDay == 6) {
                alert("Your Akan name is " + khanMales[5]);
            } else if (birthDay == 7) {
                alert("Your Akan name is " + khanMales[6]);
            }
            break;
        case "female":
            if (birthDay == 1) {
                alert("Your Akan name is " + khanFemales[0]);
            } else if (birthDay == 2) {
                alert("Your Akan name is " + khanFemales[1]);
            } else if (birthDay == 3) {
                alert("Your Akan name is " + khanFemales[2]);
            } else if (birthDay == 4) {
                alert("Your Akan name is " + khanFemales[3]);
            } else if (birthDay == 5) {
                alert("Your Akan name is " + khanFemales[4]);
            } else if (birthDay == 6) {
                alert("Your Akan name is " + khanFemales[5]);
            } else if (birthDay == 7) {
                alert("Your Akan name is " + khanFemales[6]);
            }
            break;
        default:
    }
}

const getAkanName = () => {
    birthDay = calculateDayFromFormular();
    getGenderName();

}