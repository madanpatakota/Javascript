/**********************************************Arrow function*********************************************************
        Arrow function is one of the features introduced in the 2015( ES6) version of JavaScript. 
        It allows you to create functions in a cleaner way compared to regular functions

        Notes : 
        * 1. we have to remove the function keyword
        * 2. Decorate with () => { } Syntax
 */


/*************Normal | regular function *************/
function getName(){
    return "Peter.Jr";
}
var customer_name_1 = getName();
console.log("customer_name_1" , customer_name_1);


/*****************************Before going to second approach */

var customer_name_2 = "Peter.Jr";
console.log("customer_name_1" , customer_name_2);


/*************** Even i can handle the same thing in another approach(
 * 
 * variable assigned by the function directly
 * 
 * ) .. Another trick **************/ 

 var customer_name_3  = function(){                  //Anonomus function....
                                    return "James"
                                 };
console.log("customer_name_3" , customer_name_3());


/*********************With the help of the arrow function *****************/

/* Notes : 
 1. we have to remove the function keyword
// * 2. Decorate with () => {  
                              statment(s)
//                          }
*/

var customer_name_4    =    () => {
                                  return "William"
                                 };

console.log("customer_name_4" , customer_name_4());



/**************Passing the parameter to normal | regular function */

function getCustomerName(cutomerName){
    return cutomerName;
}
var customer_name_5 = getCustomerName("Peter.Jr");
console.log("customer_name_5" , customer_name_5);


/*************** Even i can handle the same thing in another approach(variable assigned by the function directly) .. Another trick **************/ 
var customer_name_6 =  function(cutomerName){
    return cutomerName;
}

console.log("customer_name_6" , customer_name_6("Andy"));




/**************Passing the parameter to arrow function */
var customer_name_7  =  (customerName) => {
                                            return customerName
                                          };

console.log("customer_name_7" , customer_name_7("William"));


/************* Passing the multiple parameters to the arrow functions ******************/

var customer_name_location =  (customername,customerlocation) => {
                                   return customername + " " +customerlocation;
                                   };

console.log("customer_name_location" , customer_name_location("William","New york"));



/******************************  One more way you can write the for gets the output **********************************/

var customer_name_location_1 =  (customername,customerlocation) => customername + "  " + customerlocation;

console.log("customer_name_location" , customer_name_location_1("William","New york"));


//*************************************** arrow functions in real time scenerios */


var customers =  [{
    "name"            : "Clerk",
    "price"           :  200.09,
    "location"        : "London",
 },
 {
    "name"            : "William",
    "price"           :  100.09,
    "location"        : "London",
 },
 {
    "name"            : "Andy",
    "price"           :  312.09,
    "location"        : "Washington",
 },
 {
    "name"            : "Andy",
    "price"           :  56.09,
    "location"        : "Bern",
 }];


/*** How to get the customers who is having the name = 'Andy ( i am doing the filter)  */
 /*  Here filter is expecting the method signature
          syntax : <arrayvalue>.filter(function(value){});
 */

 var customersbyName = customers.filter(function(customer){
       if(customer.name == "Andy"){
         return customer
       }
 })

 console.log("By customers name" , customersbyName);



 /*************** without arrow function **/
 var customersbyLocation = customers.filter(function(customer){
    if(customer.location == "London"){
      return customer
    }
})

console.log("By customers location" , customersbyLocation);



/*************** With the arrow function **/

var customersbyLocation = customers.filter((customer) => {
    if(customer.location == "London"){
      return customer
    }
})

console.log("By customers location" , customersbyLocation);


 /****Take your own example with one normal function. implement the array filter into that ***/