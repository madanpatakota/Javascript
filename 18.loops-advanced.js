/**************************** How to use loop in the functions *******************************/


var customersList = [
    {
        "name"            : "Clerk",
        "price"           :  100.09,
        "location"        : "London",
        "isAdmin"         :  true,
        "streetname"      :  null,
        "travelldtoIndia" :  undefined,
    },
    {
        "name"            : "Peter.Sr",
        "price"           :  200.57,
        "location"        : "Denmark",
        "isAdmin"         :  false,
        "streetname"      :  null,
        "travelldtoIndia" :  "Yes"
    }
]


/**  Task       : I want to get the customerObject based on the customerName 
   
     Parameter  : customerName 
     return     : customerObject     
*/



function getCustomerRecordByName(customerName){
    var customer = null;    // No value is available.
    for(var index = 0; index < customersList.length; index++){  
        //Here customerPrices.length is 2
        //console.log("********* start - looping number *******" , index);
        //console.log("current value in the loop " , customersList[index]);
        if(customersList[index].name == customerName){
            customer = customersList[index];
        }
        //console.log("********* end - looping number *******" , index);
    }
    return customer;
}

var cutomerRecord = getCustomerRecordByName("Clerk");
console.log(cutomerRecord);