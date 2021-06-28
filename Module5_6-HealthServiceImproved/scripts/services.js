// -- THIS FILE CONTAINS ALL RELATED TO SERVICES and USER VALIDATION -- 

//-- TO TEST IF JS BEING HIT (View Browser's Console) --
// console.log('script.js says "I\'m here at services.js"');

//Note: 
//- DATE fails for 1 day after. After error input, as long as filled will pass and go thru
//- ccNum always fails for first attempt?

//-- Confirmation Tab (Review contents of what user submitted) --
function submittedAppointmentInfo() {

	//User has change to proceed or not
	var confirmContinue = confirm('If the payment information entered is invalid, your appointment can be subject to a cancellation without refund');
	if (!confirmContinue) {
		return false;
	}
	else { //PROCEED with info submitted
		// The purpose is to build the HTML to be displayed (a Paragraph) 
		// We build a paragraph to contain the list of submitted info in appointment by user


		console.log("start");


		var finalResults = document.getElementById("displaySubmittedResult");
		finalResults.innerHTML = "";

		var para = document.createElement("P"); //<p>
		para.innerHTML = "User Appointment Information: ";
		para.appendChild(document.createElement("br")); //<br>
	
		//user info
			// var name = document.getElementById("fname").value + " " + document.getElementById("lname").value;
			var email = document.getElementById("emailInput").value;
			var phone = document.getElementById("phoneInput").value;
			var service = document.getElementById("selectedService").value;
			if(service == "1" ) return service = "Musculoskeletal Physiotherapy"
			if(service == "2" ) return service = "Rehabilitation and Pain Management"
			if(service == "3" ) return service = "Sports Physiotherapy"
			if(service == "4" ) return service = "Pelvic Floor Rehabilitation"
			if(service == "5" ) return service = "Neurological Physiotherapy"
			if(service == "6" ) return service = "Cardiorespiratory/pulmonary/vascular Physiotherapy"
			var physio = document.getElementById("expertSelect").value;
			var date = document.getElementById("bookedDate").value + " " + document.getElementById("bookedTime").value;
			var description = document.getElementById("descriptionPain").value;
			var ccName = document.getElementById("ccName").value;
			var ccNumber = document.getElementById("ccNumber").value;
			var ccExpire = document.getElementById("ccExpire").value;

		//convert to HTML to display
			// para.appendChild(document.createTextNode("Name: " + name));
			para.appendChild(document.createElement("br"));
			para.appendChild(document.createTextNode("Contact: " + email + "\n" + phone));
			para.appendChild(document.createElement("br"));
			para.appendChild(document.createTextNode("Service Selected: " + service));
			para.appendChild(document.createElement("br"));
			para.appendChild(document.createTextNode("Physiotherapist Selected: " + physio));
			para.appendChild(document.createElement("br"));
			para.appendChild(document.createTextNode("Appointment Date: " + date));
			para.appendChild(document.createElement("br"));
			para.appendChild(document.createTextNode("Additional Information: " + description));
			para.appendChild(document.createElement("br"));
			para.appendChild(document.createElement("br"));
			para.appendChild(document.createElement("br"));
			para.appendChild(document.createTextNode("Credit Card Info: " + ccName));
			para.appendChild(document.createElement("br"));
			para.appendChild(document.createTextNode("Credit Card Number: " + ccNumber));
			para.appendChild(document.createElement("br"));
			para.appendChild(document.createTextNode("Credit Card Expiry Date: " + ccExpire));
			para.appendChild(document.createTextNode("Credit Card CVV:  [Will Not Be Shown due to confidentiality]"));
			
		para.appendChild(document.createElement("br"));
		para.appendChild(document.createTextNode("-------------------------------------"));

		finalResults.appendChild(para);


		console.log("end");


		//Show results:
		document.getElementById("apptPage3").style.display = "none";	
		document.getElementById("apptPage3").style.display = "block";




		// var allUserInfo = document.getElementById("appointmentForm").value;

		// console.log(allUserInfo); //TEST

		// var c = document.getElementById('displaySubmittedResult');
		// c.innerHTML = "";

		// var para = document.createElement("P"); //<p>
		// para.innerHTML = "User Appointment: ";
		// para.appendChild(document.createElement("br")); //<br>
		// for (i = 0; i < allUserInfo.length; i++) {
		// 	para.appendChild(document.createTextNode("- " + allUserInfo[i].value));
		// 	para.appendChild(document.createElement("br"));
		// 	allInfoSubmitted.push(allUserInfo[i].value);
		// }
		// para.appendChild(document.createElement("br"));
		// para.appendChild(document.createTextNode("-------------------------------------"));

		// // add paragraph and total price
		// c.appendChild(para);
	}

}


//-- Final Submit --
function finalSubmitToBook(){
	var isComplete = confirm('Confirm the information was reviewed and will be submitted to book an appointment');
	
	if (!isComplete){
		return false;
	}
	else if (isComplete){
	 	alert("Nice. Information was successfully submitted. See you soon!");
		 location.reload();
		 return true;
	} 


}




//-- Appointment Booking USER VALIDATION --
//DATE
function dateValidation() {
	var dateSelected = document.getElementById("bookedDate").value; //value = "2021-06-14"
	var currentDate = new Date();

	// //special case: input is always at midnight, BUT there is error where the next day doesnt change to day number even when its midnight so have to manually do here
	// if ( (new Date(dateSelected).getMonth() == currentDate.getMonth()) 
	// && (new Date(dateSelected).getFullYear() == currentDate.getFullYear())
	// && (new Date(dateSelected).getDay() == currentDate.getDay()) ) 
	// { 
	// 	return true;
	// }
	if (new Date(dateSelected).getTime() < currentDate.getTime() ) {
		alert("That date has already PAST or is already FULLY BOOKED! Please select another date");
		return false;
	}
	else if (new Date(dateSelected).getDay() == 6){ //6 == sunday, 5 == saturday
		alert("That date is a SUNDAY! That's the ONLY day we close. Please select another date");
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
	if ((new Date(dateSelected).getTime() < currently.getTime()
		&& hourSelected <= currentHour
		&& minutesSelected <= currentMinute)) {
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
function validateEmail() {
	var emailSelected = document.getElementById('emailInput').value;

	var isValid;
	var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	isValid = emailRegex.test(emailSelected)

	if (!isValid) alert("NOT a VALID EMAIL format. Please follow proper convention.")
	return false;
}

//CC NUMBER
function validateCCNum() {
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
function validateCCExpire() {
	var ccExpireSelected = document.getElementById('ccExpire').value;

	var isValid;
	var ccExpireRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
	isValid = ccExpireRegex.test(ccExpireSelected)

	if (!isValid) alert("NOT a VALID Expiry Date format. Please follow proper convention.")
	return false;
}


//CC CVV 
function validateCCCVV() {
	var ccCVVSelected = document.getElementById("ccCvv").value;
	let isNum = /^\d+$/.test(ccCVVSelected); //check if string contains only digits

	if (ccCVVSelected.length != 3 || !isNum) {
		alert("INCORRECT CVV length and format. Try again with proper convention");
		return false;
	}
	return true;
}




