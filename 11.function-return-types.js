/*************  Discussion :  function with  return type value is not return type **********/


function getCustomerName(){
    var customerName = "Rober J";
    return customerName;
}

var customer_1 = getCustomerName();
console.log("customer_1" , customer_1);




//non-return type function or we can say void function
function getCustomerName_2(){
    var customerName = "Rober J";
}

var customer_2 = getCustomerName_2();
console.log("customer_2" , customer_2);

/********** undefined is also datatype which do't contains the nothing
            it doesnot contains the any defined value
***********/



// Example 3

function getCustomerIDs(list,listitem){
    list.push(listitem);   /// which will add the new value to (customerIDs) at last position
    list.shift();          /// which will remove the value from (customerIDs) at first position
    return list;           /// latest customerIDs
} 

// o/p : [2,3,4,5];

var customerIDs = [1,2,3,4];
console.log(customerIDs);

// How to convert the array to string? // Inerview question...
console.log( "Before the function call ::: ", JSON.stringify(customerIDs));
//calling the function
getCustomerIDs(customerIDs , 5);
console.log( "After the function call ::: ", JSON.stringify(customerIDs));



