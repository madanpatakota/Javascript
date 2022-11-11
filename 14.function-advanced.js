/* ********************Advanced function****************** */
/* ******************** How to use swith case , if  with return type functions****************** */


//Based on the price and location i want to return the some information about
//the customer
//getCustomerDetails("London", 1000)
function getCustomerDetails(location,price){

    //price is 500
    var customerDetails = [];
    var message = "";

    if(location == "London" && price == 1000){
        customerDetails.push("John");
        customerDetails.push(1);
    } 
    else if(price < 1000){   
        switch(location){
            case "London":
                customerDetails.push("Robert");
                customerDetails.push(2);
                break;
            case "Wasington":
                customerDetails.push("Clerk");
                customerDetails.push(3);
                break;
            default:
                  /*No customer availble in London and Wasington*/
                  customerDetails.push(null); 
                  //null also one kind of datatype which contains the no value.
                  //undefined also one kind of datatype which is not defined.. No defination value.
                 customerDetails.push(0)
            
        }
    }
    else{
        message = "No customer is avaiable";
    }
   return customerDetails;
}


let customerDetails = getCustomerDetails("London", 1000)

console.log(customerDetails);
