	//-- TO TEST IF JS BEING HIT --
	// console.log('script.js says "I\'m here"');


//-- Menu Nav Bar scrolling --

	var entireNavBarTag = document.querySelector('nav');
	var navMenuOptions = document.querySelector('.navOptions');

	window.addEventListener('scroll', function () {
	  if (window.pageYOffset > 250) {
		// entireNavBarTag.classList.add('bg-dark', 'shadow'); //Show colour block on scroll on entire nav bar
		navMenuOptions.style.background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )'; //Show transparent colour 
		
		// navMenuOptions.classList.add('bg-dark', 'shadow'); 
		entireNavBarTag.style.background = 'rgba(0,0,0,0.5)'; 

	} else {
		entireNavBarTag.classList.remove('bg-dark', 'shadow');
		navMenuOptions.style.background = '';

		// navMenuOptions.classList.remove('bg-dark', 'shadow'); 
		entireNavBarTag.style.background = ''; 


	 
	
	}
	});
	

	    // window.onscroll = function() {scrollFunction()};
	
	// function scrollFunction() {
	//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		
	// 	document.getElementById("navbar").style.background = "#501e27";
	//   } else {
	   
	// 	document.getElementById("navbar").style.background = "none";
	//   }
	// }















// // This function is called when any of the tab is clicked
// // It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

// function openInfo(evt, tabName) {
// 	document.getElementById(tabName).style.display = "none";

// 	// Get all elements with class="tabcontent" and hide them
// 	tabcontent = document.getElementsByClassName("tabcontent");
// 	for (i = 0; i < tabcontent.length; i++) {
// 		tabcontent[i].style.display = "none";
// 	}

// 	// Get all elements with class="tablinks" and remove the class "active"
// 	tablinks = document.getElementsByClassName("tablinks");
// 	for (i = 0; i < tablinks.length; i++) {
// 		tablinks[i].className = tablinks[i].className.replace(" active", "");
// 	}

// 	// Show the current tab, and add an "active" class to the button that opened the tab
// 	document.getElementById(tabName).style.display = "block";
// 	evt.currentTarget.className += " active";

// }



// // generate a checkbox list from a list of products
// // it makes each product name as the label for the checkbos

// function populateListProductChoices(slct1, slct2) {
// 	var s1 = document.getElementById(slct1);
// 	var s2 = document.getElementById(slct2);

// 	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
// 	s2.innerHTML = "";

// 	// obtain a reduced list of products based on restrictions
// 	var optionArray = restrictListProducts(products, s1.value);

// 	//To sort list of products (Referenced: http://www.javascriptkit.com/javatutors/arraysort2.shtml)
// 	optionArray.sort(function (a, b) {
// 		return a.price - b.price
// 	});

// 	// for each item in the array, create a checkbox element, each containing information such as:
// 	// <input type="checkbox" name="product" value="Bread">
// 	// <label for="Bread">Bread/label><br>

// 	for (i = 0; i < optionArray.length; i++) {

// 		var productName = optionArray[i].name;
// 		var productPrice = optionArray[i].price;

// 		// create the checkbox and add in HTML DOM  [Makes Boxes]
// 		var checkbox = document.createElement("input"); //Creates HTML: <input> </input>
// 		checkbox.type = "checkbox";
// 		checkbox.name = "product";
// 		checkbox.value = productName;
// 		s2.appendChild(checkbox);

// 		// create a label for the checkbox, and also add in HTML DOM  [Title for each Box]
// 		var label = document.createElement('label')
// 		label.htmlFor = productName;
// 		label.htmlFor = productPrice;
// 		label.appendChild(document.createTextNode(productName)); //Creates HTML: text
// 		label.appendChild(document.createElement("br")); //Creates: </br>
// 		label.appendChild(document.createTextNode("$" + productPrice.toFixed(2) + " CAD"));
// 		s2.appendChild(label);

// 		// create a breakline node and add in HTML DOM  [Line Break to separate boxes]
// 		s2.appendChild(document.createElement("br"));
// 		s2.appendChild(document.createElement("br"));
// 	}
// }

// // This function is called when the "Add selected items to cart" button in clicked
// // The purpose is to build the HTML to be displayed (a Paragraph) 
// // We build a paragraph to contain the list of selected items, and the total price

// function selectedItems() {

// 	var ele = document.getElementsByName("product"); //All Products shown on PRODUCTS selection screen
	
// 	//If want to UPDATE cart user confirmation
// 	var updateCart = confirm("Are you sure you want to UPDATE your CART?");
// 	if (!updateCart){ //False: no update cart, exit function w/o modifying
// 		return 0;
// 	}
	
// 	var chosenProducts = []; //Resets list shown in cart

// 	var c = document.getElementById('displayCart'); 
// 	c.innerHTML = "";

// 	// Populate list with CHECKED items selected
// 	var para = document.createElement("P"); //<p>
// 	para.innerHTML = "Purchasing: ";
// 	para.appendChild(document.createElement("br")); //<br>
// 	for (i = 0; i < ele.length; i++) {
// 		if (ele[i].checked) {
// 			para.appendChild(document.createTextNode("- " + ele[i].value));
// 			para.appendChild(document.createElement("br"));
// 			chosenProducts.push(ele[i].value);
// 		}
// 	}
// 	para.appendChild(document.createElement("br"));
// 	para.appendChild(document.createTextNode("-------------------------------------"));

// 	// add paragraph and total price
// 	c.appendChild(para);
// 	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts).toFixed(2) + " CAD"));

// 	// //Confirmation to let user know (Probably excessive)
// 	// if (chosenProducts.length != 0) {
// 	// 	alert("Success! Your CART has been updated.");
// 	// }

// 	openInfo(event, 'Cart');
// }

