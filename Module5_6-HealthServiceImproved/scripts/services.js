// -- THIS FILE CONTAINS ALL RELATED TO SERVICES and USER VALIDATION -- 
	
	//-- TO TEST IF JS BEING HIT (View Browser's Console) --
	// console.log('script.js says "I\'m here at services.js"');

//Note: DATE fails for 1 day after?! After error input, as long as filled will pass and go thru


//-- Appointment Booking USER VALIDATION --
//DATE
function dateValidation() {
	var dateSelected = document.getElementById("bookedDate").value; //value = "2021-06-14"
	var currentDate = new Date();
	  
	//DATE PAST (NOT ALLOWED) 
	if (new Date(dateSelected).getTime() < currentDate.getTime()) {
		alert("That date has already PAST! Please select another date");
		return false;
	}
	return true;
}

//TIME
function dateTimeValidation() {
	var dateSelected = document.getElementById("bookedDate").value;

	var timeSelected = document.getElementById("bookedTime").value; //value = "20:27"
	var hourSelected = timeSelected.split(":")[0];
	var minutesSelected = timeSelected.split(":")[1];

	var currently = new Date();
	var currentHour = currently.getHours();
	var currentMinute = currently.getMinutes();

	//TIME PAST (NOT ALLOWED)
	if ( (new Date(dateSelected).getTime() < currently.getTime()   
	&& hourSelected <= currentHour
	&& minutesSelected <= currentMinute) ) {
		alert("That time has already PAST or is too close to the current time! Please select another time slot");
		return false;
	}
	return true;
}

//PHONE number validation
/* NOTE:
- Regex considers these VALID cases:
	(123) 456-7890
	(123)456-7890
	123-456-7890
	1234567890
*/
function validatePhoneNumber() {
    var phoneSelected = document.getElementById('phoneInput').value;

	var isValid;
	var telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	isValid = telephoneRegex.test(phoneSelected)
	
	if (!isValid) alert("NOT a VALID PHONE number format. Please follow proper convention.") 
	return false;
}

//EMAIL format validation
/* NOTE:
- Regex considers these VALID cases:
	mysite@ourearth.com
	my.ownsite@ourearth.org
	mysite@you.me.net
*/
function validateEmail() 
{
	var emailSelected = document.getElementById('emailInput').value;

	var isValid;
	var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	isValid = emailRegex.test(emailSelected)
	
	if (!isValid) alert("NOT a VALID EMAIL format. Please follow proper convention.") 
	return false;
}

//CC NUMBER
function validateCCNum() 
{
	var ccNumSelected = document.getElementById("ccNumber").value; 
	
	var trimInput = ccNumSelected.split(/\s+/).join('') //removes all white spaces in string
	trimInput = trimInput.replace(/[^0-9]/g, ''); //removes all else EXCEPT numbers in string

	//DATE PAST (NOT ALLOWED) 
	if (trimInput.length != 12) {
		alert("INCORRECT credit card number length");
		return false;
	}
	return true;
}

//CC Expire (mm/yy)
function validateCCExpire()
{
	// var ccExpireSelected = document.getElementById('ccExpire').value;

	// var isValid;
	// var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
	// isValid = date_regex.test(ccExpireSelected)
	
	// if (!isValid) alert("NOT a VALID Expiry Date format. Please follow proper convention.") 
	// return false;
}


//CC CVV 
function validateCCCVV()
{
	var ccCVVSelected = document.getElementById("ccCvv").value; 
	let isNum = /^\d+$/.test(ccCVVSelected); //check if string contains only digits

	if (ccCVVSelected.length != 3 || !isNum) {
		alert("INCORRECT CVV length and format. Try again with proper convention");
		return false;
	}
	return true;
}




