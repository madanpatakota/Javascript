
/******** boolean is a datatype which returns the true or false */

var isAdminRole     = true;       // I enquired that wheather he is having the admin role or not
var isSalesRepRole  = false;      // I enquired that wheather he is having the salesrep role or not

/*
 * Scenerio :  How to use the boolean value .
 *             Mostly we are using the boolean values is in the conditional statements....
 *             Conditional statements with if and else 
 * syntax : if(<condition>) {
 *                statement ;
 *                }
 *          else {
 *                statement ;
 *               } 
 */


/* Conditionally you writing the statements*/
if(isAdminRole) {
   console.log("Hey !! He is a admin");
}
else {
   console.log("Hey !! He is a not the admin");
} 


// we use else if statement between the if and else condition.

 /* syntax : if(<condition>) {
 *              statement ;
 *                }
 *          else if(<condition>) {
 *              statement ;
 *                }
 *          else {
 *               statement ;
 *               } 
 */

var isAdminRole     = false;       // I enquired that wheather he is having the admin role or not
var isSalesRepRole  = false;      // I enquired that wheather he is having the salesrep role or not

if(isAdminRole){                  // in this loop | wrapper | open flower bracket close bracket.
    console.log("Hey!! He is a admin");
}
else if(isSalesRepRole){
    console.log("Hey!! He is a sales rep");
}
else{
    console.log("Hey!! He is a not admin and not salesrep ... I think he might be different role..");
}


/********How to check the value is correct or not in conditional statement. */
//       Use == (double equal) operator.

var customerID = 1;

// here customerID is giving the 1 not true

if(customerID == 1){          // That means checking the value is 1 or not in if conidtion
                             // By using double equal operator
        console.log("Customer Id is 1");
}
else{
        console.log("Customer Id is not 1");
}


var customerID = 1;
var customerName = "John";

// customerid and(&&) customerName
// customerid or (||) customername


/*  ******* How to use the and(&&) or(||) in the conditional statements. 

//10th class syllabus
            &&(and) operator
            T && T  ->  T  
            T && F  ->  F
            F && T  ->  F
            F && F  ->  F

            ||(or) operator
            T || T  ->  T  
            T || F  ->  T
            F || T  ->  T
            F || F  ->  F
*/


// Example 1
// customerid and(&&) customerName
// customerid or (||) customername
var customerID = 1;
var customerName = "John";

if(customerID == 1 && customerName == "John"){
    console.log("Example 1 : correct values");
}
else{
    console.log("Example 1 : wrong values");
}

// Example 2
if(customerID == 2 && customerName == "John"){
    console.log("Example 2 : correct values");
}
else{
    console.log("Example 2 : wrong values");
}


// Example 3
//F || T  ->  T
//T || F  ->  T
if(customerID == 1 || customerName == "John123"){
    console.log("Example 3 : correct values");
}
else{
    console.log("Example 3 : wrong values");
}

// Example 4

var customerPrice = 1000 ;
if( customerPrice < 100 ){
   console.log("Price is greter than 100 rupees")
}
else{
    console.log("Price is not greter than 100 rupees")
}



// Example 4

var customerPrice = 1000 ;
if( customerPrice >= 1000 ){
   console.log("Price is greter than equal 1000 rupees")
}
else{
    console.log("Price is not greter than equal 1000 rupees")
}



// Task : Apply the lessthan and eqal to here.
//Example 5
var customerPrice_1 = 500 ;
var customerPrice_2 = 2000 ;

//             F                          T
if(customerPrice_1 >= 1000  && customerPrice_2 <= 2000){
    console.log("Prices are OK to the customers");
}
else{
    console.log("Customers are not satified about prices");
}




/*How to use the if and else in funcitons*/

//declaration..
function getLocationFullNameDetails(location){

    var location_name = "";
    if(location == "AUS"){
        location_name = "Austraila";
    }
    else if(location == "SA"){
        location_name = "South Africa";
    }
    else{
        location_name = "Location is not available";
    }
    return location_name;
}


//calling the function.
let location_details = getLocationFullNameDetails("SA");
console.log("You are passing the value is ", location_details);


//== , !=

/*Note : implement < , > , != , == operators in the functions.*/