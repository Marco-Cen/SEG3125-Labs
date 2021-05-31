	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

//-- At least 10 total products in list [Array of Objects] --
var products = [
	//Lactose Free
	{
		name: "Almond Granola Bar (230g)",
		lactoseFree: true,
		nutFree: false,
		organic: true, 
		price: 3.99
	},
	{
		name: "Almond Milk",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 3.79
	},
	{
		name: "Peanut Butter (2Kg)",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 9.99
	},
	{
		name: "Unsalted Mixed Nuts (1.13Kg)",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 14.95
	},

	//Nut Free
	{
		name: "Yogurt",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 1.99
	},
	{
		name: "2% Milk (1L)",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 3.45
	},
	{
		name: "Croissant (12 pcs)",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 7.95
	},
	{
		name: "Sliced Brioche (500g)",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 5.99
	},

	//Lactose and Nut Free
	{
		name: "Smoked Salmon (550g)",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 22.64
	},
	{
		name: "Apple (1pc)",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 0.20
	},
	{
		name: "Eggs (12 pcs)",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 4.99
	},
	{
		name: "Heinz Ketchup (1L)",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price:3.99
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let filteredProducts = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Organic") && (prods[i].organic == true)){
			filteredProducts.push(prods[i]);
		}
		else if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			filteredProducts.push(prods[i]);
		}
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			filteredProducts.push(prods[i]);
		}
		else if ((restriction == "LactoseNutFree") && (prods[i].lactoseFree == true && prods[i].nutFree == true)){
			filteredProducts.push(prods[i]);
		}
		else if ((restriction == "NotOrganic") && (prods[i].organic == false)){
			filteredProducts.push(prods[i]);
		}
		else if (restriction == "None"){
			filteredProducts.push(prods[i]);
		}
	}
	return filteredProducts;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}