function checkQuantity() {
    //Get the number of pizzas to order from user (input)
    var qty = document.getElementById("quantity").value;
    var total, divby3, mod;
    var pricefor3 = 14.00;
    var pricefor2 = 12.00;
    var pricefor1 = 6.45;
    //Check if the input is missing 
    if (qty == "") {
        document.getElementById("message").innerHTML = "Missing input(s)";
    }
    //Check if the input is not a number 
    else if (isNaN(qty)) {
        document.getElementById("message").innerHTML = "You must Enter Numbers Only";
    }
    //Check if number of pizzas less than zero (Negative number) 
    else if (qty < 0) {
        document.getElementById("message").innerHTML = "Negative numbers Not Allowed";
    }
    //Check if number of pizzas equal zero
    else if (qty == 0) {
        document.getElementById("message").innerHTML = "You entered 0 number of pizza";
    }
    else
    {     //To Get the best option to buy 
        //Divide the number of pizzas by 3 and check the remainder
         divby3 = (qty - 0) / 3;
         divby3 = parseInt(divby3);
         mod = (qty-0) % 3;

            switch (mod)
            {
                case 0:
                total = pricefor3 * divby3;
                    break;
                case 1:
                total = (pricefor3 * divby3) + pricefor1;
                    break;
                case 2:
                total = (pricefor3 * divby3) + pricefor2;
                    break;
            }
            //Print out the total price which is the best option to buy the ordered pizza
            document.getElementById("message").innerHTML = "The Total Price is: $" + total;
       }
    return false;
}// This Script Written By Huda Abusal
