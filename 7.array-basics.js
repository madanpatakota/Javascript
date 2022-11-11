/*  What is Array ? 
    Array is nothing but the collection of the values.
    (or) Array is nothing but the List of the values
    Array we are going to declare by the [] . open bracket and close bracket

    [  <values you have to be declared here>  ].
    Here values can be anything.
    Like number , string , decimal or again array also
*/


var customerIDs     = [ 1, 2, 3 ];  //Note : make it proper reference variable name
var customerNames   = [ "John" , "Robert" , "Peter" ]; //Note : make it proper reference variable name
var customerPrices  = [999.99 , 100.09, 10000.90]; //Note : make it proper reference variable name
var customerDetails = [ 1  , "John" , 1200.09 , "London" ]; //Note : make it proper reference variable name


console.log(customerIDs);
console.log(customerNames);
console.log(customerPrices);
console.log(customerDetails);


var customerPersonaDetails = [ [ "Smith", 10, "London" ] ,  1  , "John" , 1200.09 , "London" ]; //Note : make it proper reference variable name
console.log(customerPersonaDetails);

/*********** How to access the value from the list    *****************
          A : By using the index signature
 ***********/

var customerDetails = [ 1  , "John" , 1200.09 , "London" ]; //Note : make it proper reference variable name
console.log(customerDetails[2]);

//Example : 2 .....                   0      1
var customerOnePersonalDetails = [ ["smith",10]  , "John" , 1200.09 , "London"];
//                             =     0                1         2          3  ;
 
console.log(customerOnePersonalDetails[0][1]);


//Example : 3 .....
var customerTwoPersonalDetails = [ "Robert" , 1200.09 , "London" , ["warner", 12 ]];
//                             =     0           1         2            3  ;                                                                    
console.log(customerTwoPersonalDetails[3][0]);
