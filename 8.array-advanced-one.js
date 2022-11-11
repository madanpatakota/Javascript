 /***** How to push the new value to the array *******/

 var customerIDs_1 = [1,2,3];      //Note : make it proper reference variable name
//  Work or Task : i want to push 4 into the customerIDs_1
customerIDs_1.push(4);
console.log(customerIDs_1);


//Example 2
var customerNames_1 = ["John" , "Robert" , "Peter"]; //Note : make it proper reference variable name
customerNames_1.push("James");
console.log(customerNames_1);


//Example 3
var customerDetails_1 = [ "John" , 1200.09 , "Londan"];
customerDetails_1.push( ["Mary", 10, "London"] );
//conclusion : After i push the value i could see that latest value place in last position 
console.log(customerDetails_1);


 /***** How to pop(remove) the last value to the array *******/
 var customerIDs_2 = [ 1,2,3 ];      //Note : make it proper reference variable name
 customerIDs_2.pop();
 console.log(customerIDs_2);


 //Example 2 
 var customerNames_2 = ["John" , "Robert" , "Peter"]; //Note : make it proper reference variable name
 customerNames_2.pop();
 console.log(customerNames_2);

  //Example 3 
 var customerPersonalDetails_3 = [ ["smith", 10, "London"]  , "John" , 1200.09 , "Londan"];
 customerPersonalDetails_3.pop();
 console.log(customerPersonalDetails_3);


/***** How to shift(first remove) the value to the array *******/
var customerIDs_3 = [ 1,2,3 ];      //Note : make it proper reference variable name
customerIDs_3.shift();
console.log(customerIDs_3);

var customerIDs_3_1 = ["John" , "Robert" , "Peter"]; //Note : make it proper reference variable name
customerIDs_3_1.shift();
 console.log("customerIDs_3_1 " , customerIDs_3_1);




 /***** How to unshift(first add) the value to the array *******/
 var customerIDs_4 = [ 1,2,3 ];      //Note : make it proper reference variable name
 customerIDs_4.unshift(0);
 console.log(customerIDs_4);


var customerIDs_4_1 = ["Robert" , "Peter"]; //Note : make it proper reference variable name
customerIDs_4_1.unshift("John");
console.log("customerIDs_4_1",customerIDs_4_1);














