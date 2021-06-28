// -- THIS FILE CONTAINS ALL RELATED TO COSMETIC USER INTERACTIONS --

	//-- TO TEST IF JS BEING HIT (View Browser's Console) --
	// console.log('script.js says "I\'m here at main.js"');

//-- Menu Nav Bar scrolling --
	var entireNavBarTag = document.querySelector('nav');
	var navMenuOptions = document.querySelector('.navOptions');

	window.addEventListener('scroll', function () {
	//-- Base Case --
	if (window.pageYOffset < 250) {
		// entireNavBarTag.classList.remove('bg-dark', 'shadow');
		entireNavBarTag.style.background = ''; 

		navMenuOptions.style.background = '';
		// navMenuOptions.classList.remove('bg-dark', 'shadow'); 
	}

	if (window.pageYOffset > 250) {
		//-- Show bkg colour on ENTIRE NAV BAR on scroll --
		entireNavBarTag.style.background = 'rgba(0,0,0,0.5)'; 
		// entireNavBarTag.classList.add('bg-dark', 'shadow');
		
		//-- Show bkg colour on menu OPTIONS --
		navMenuOptions.style.background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )'; //Show transparent colour 
		// navMenuOptions.classList.add('bg-dark', 'shadow'); 
	}  

	});



// -- Book Appointment Form (Inspired by Codepen) --
//jQuery time  
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

//Going to NEXT page after next button clicked with animation
$(".next").click(function(){

	//Check if ALL set REQUIRED field inputs filled before proceed
	let allAreFilled = true;
	document.getElementById("appointmentForm").querySelectorAll("[required]").forEach(function(i) {
	  if (!i.value) allAreFilled = false;
	})
	if (!allAreFilled){
		alert('Fill all the fields first! Cant proceed until then');
		return;
	} 


	console.log("hellow");
	// submittedAppointmentInfo();
	console.log("world");


	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

//Going to PREVIOUS page after next button clicked with animation
$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide(); 
			animating = false;
			previous_fs.css ({'position': 'relative'}); // To fix prev button to work properly (Properly scales transfomed box & bkg to fit)
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

//SUBMIT button function
$(".submit").click(function(){


	return false;

})
	