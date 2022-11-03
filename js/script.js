const weekDays = ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];
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
        return false;
    }
    //validate month
    else if (month == "" || isNaN(month) || month.length != 2 || month > 12 || month <= 0) {
        alert("Please enter a valid month of birth");
        return false;
    }
    //validate day
    else if (day == "" || isNaN(day) || day.length != 2 || day > 31 || day <= 0) {
        alert("Please enter a valid date of birth");
        return false;
    }
    //validate gender
    else if (genders[0].checked == false || genders[1].checked == false) {
        alert("Please select gender");
        return false;
    }
    else {
        return true;
    }
};