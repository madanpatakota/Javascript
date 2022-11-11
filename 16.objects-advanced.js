
/************object with functions */


function getCustomerExactInfo(key){
    var customer =  {
        "name"            : "Clerk",
        "price"           :  100.09,
        "location"        : "London",
        "isAdmin"         :  true,
        "family_details"  :  [ "Mary", "Robert.J" , 10 ],
        "streetname"      :  null,
        "travelldtoIndia" :  undefined
    };

   var customerExactInfo = customer[key];  //"name"
   return customerExactInfo;
}


  //First approach
  var customerKeyInfo = getCustomerExactInfo("location");
  console.log(customerKeyInfo);

  //Second way
  var customerKey = "price";
  var customerKeyInfo = getCustomerExactInfo(customerKey);
  console.log(customerKeyInfo);




  
/********   Creating the multi-objects in the array ***********/

var customersList = [
    {
        "name"            : "Clerk",
        "price"           :  100.09,
        "location"        : "London",
        "isAdmin"         :  true,
        "family_details"  :  { 
                                "spousename" : "Mary", 
                                 "kids"      : [ "Robert.J", "smith" ]
                             },               
        "streetname"      :  null,
        "travelldtoIndia" :  undefined,
    },
    {
        "name"            : "Peter.Sr",
        "price"           :  200.57,
        "location"        : "Denmark",
        "isAdmin"         :  false,
        "family_details"  :  { 
                                "spousename" : "Milenda", 
                                "kids"       : [ "Peter.Jr1", "Peter.Jr2" ]
                             },
        "streetname"      :  null,
        "travelldtoIndia" :  "Yes"
    }
]

console.log(customersList[0]);   // object to me


//Task 1 : // Task 1 : how to get first customer the familyDetails.

console.log("family details of 0 index customer",customersList[0]["family_details"]);

// "name"            : "Clerk",
//         "price"           :  100.09,
//         "location"        : "London",
//         "isAdmin"         :  true,
//         "family_details"  :  { 
//                                 "spousename" : "Mary", 
//                                  "kids"      : [ "Robert.J", "smith" ]
//                              },               
//         "streetname"      :  null,
//         "travelldtoIndia" :  undefined,
console.log(" kids details" , customersList[0]["family_details"]["kids"]);


// Task :  how you get the first customer - family details - first kid name

console.log(" kids name " , customersList[0]["family_details"]["kids"][1]);



// YourTask : How to Add the ages to the kids
/// Practice as much as possible


// object and array powerful concepts in the JS.