// Scenerio : Array and function combination....

/* Scenerio : Prepare the CustomersList .  */

// childArray in Array
// var customersList_1 = [ 
//                         [ "James" , 50 , "London" ] ,
//                         [ "M.Gates" , 50 , "Washington" ] 
//                       ] ;

/* Scenerio : Push the new value with the help of the function.*/


// Declaration of the function
function getnewCustomersList(){
    var customersList_1 = [ 
                            [ "James" , 50 , "London" ] ,
                            [ "M.Gates" , 50 , "Washington" ] 
                         ] ;

        customersList_1.push(["Smith", 60 , "Melborn"]);
        return customersList_1;
}

//Calling the function
var newCustomersList_1 = getnewCustomersList(); // I know that its return the new customer values.
                                               // Just i am stroing that into the newCustomersList_1
console.log("newCustomerList_1" , newCustomersList_1);

// ************VVIMP note : Apply | declare the varibale reference only to the return type function.


//Example : 1
function mathsAddition(first , second){
    // I want to add the addtion..
  console.log("first and second " , first + second);  
}

mathsAddition(10 , 5);



//Example : 2
function getAnotherNewCustomersList(newList){
    var customersList_2 = [ [ "James" , 50 , "London" ] , [ "M.Gates" , 50 , "Washington" ] ] ;
    customersList_2.push(newList);
    return customersList_2;
}
var newCustomersList_2 = getAnotherNewCustomersList(["Smith" , 60 , "Melborn"]);  // I know that its return the new customersList.
                                                                                 // Just i am stroing that into the getAnotherNewCustomersList
console.log(newCustomersList_2);

// ************ VVIMP note 1 : declare the varibale reference only to the return type function.
//                    note 2 : We can pass more than 1 (like n number) of the arguments | parameter to function 


