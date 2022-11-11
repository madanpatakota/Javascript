
// /ctrl + p

/**  Convert to the string to number (or) integer        */

var customerID_1_string = "1";
var customerID_1_number = parseInt(customerID_1_string);




/***************NaN (Not a Number)
    NaNmeans not a number which indicates that 
    wheather given output in number format or not
*/
var customerID_2_string = "c1";
var customerID_2_number = parseInt(customerID_2_string);
console.log(customerID_2_number);

// isNaN
if(isNaN(customerID_2_string)){
    console.log("Its not the number");
}
else{
    console.log("Its the number")
}


/********************************** Ternary Operaor *************************
 *   1. Ternary Operator is a conditional operator
 *   2. Its having the  3 operands
 *        a.first operand for check the condition ( weather its return true or value)
 *        b.Apply     '?'(question) for handle the true  value. 
 *        c.Write the ':'(colon)    for handle the false value.
 * 
 *   Note   : Here condition can be anything ( <= , >= , == , != )
 * 
 *   Syntax : <vaiable> =  <assignment> ? <handleincasetrue>: <handleincasefalse> ;
 * 
*/


  if(100 == 100){
     console.log("Price is 100");
  }
  else{
     console.log("Price is not 100");
  }


 /* By using the Ternary operator we can get the same output.
    Note : Use terynary operator where you are having the single statment in if and else conditions.
*/

//Example 1 :
var customer_price_1  = 100 == 100 ? "Price is 100" : "Price is not 100";
console.log("customer_price_1" , customer_price_1);



// Example 2:
var customerName     = "Clerk";
var customer_name_2 = customerName == "xyz" ? "He is Clerk" : "He is not the Clerk";
console.log("customer_name_2" , customer_name_2)


/************************ How to use mutli ternary operators ***********************/
var number = 100;      // 0  > 0                        -1   < 0
var number_status = number > 0 ? "Positive number" : number < 0 ? "negative" : "Zero";
console.log(number_status);

//***********************  How to check the data type strictly ************************/

var customerID = "1";

if( customerID === 1){                    // check the data without type
    console.log("Your input is correct");
}
else{
    console.log("Your input is Incorrect");
}


if(null == undefined){
    console.log("Your input is correct - 1");
}
else{
    console.log("Your input is Incorrect - 1");
}


