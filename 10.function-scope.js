/*  What is scope in JS ?
    The way of the access about the varable
    (or)
    The way of visibility about the variable

    Variable which is declared outside of the function i.e. then that is the global scope. customerName
    Variable which is declared inside  of the function i.e. then that is the local scope.  customerPassword

*/

var customerName  = "R.John";

function getCustomerBankDetails(){
    var customerPassword = "Qw@13#*";
    console.log("customerName inside of the function" , customerName);
    console.log("customerPassword inside of the function" , customerPassword);
}

getCustomerBankDetails();

console.log("customerName outside of the function" , customerName);
console.log("customerPassword outside of the function" , customerPassword);

//Note : debugging the code will explain into the coming lessions






