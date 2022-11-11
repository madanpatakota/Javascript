/* object is nothing but a key-value pair combination  */

//var customerid = 1

/*
    var obj = {
                <key> : <value>,
                <key> : <value>,
                <key> : <value>,
                --------------
    }

    Here <value> can be anything :      Like number , string , array , undefined , null ,
                                          boolean again object also
                                          
    Key                        :      You can represent in either string format 
                                            or without string format.
    Recommndation              :      Use string format for the key.
    because spaces in the key  with out string representation not allowed to create the object.

    i used to say sometimes property name(key)    and    property value(value).
*/

// Example 1 :
var customer_1  = {
                    "name" : "John"
                  };
console.log("customer_1" , customer_1);


//Example 2 : 

var customer_2 =  {
                    "name"            : "Clerk",
                    "price"           :  100.09,
                    "location"        : "London",
                    "isAdmin"         :  true,
                    "family_details"  :  [ "Mary", "Robert.J" , 10 ],
                    "streetName"      :  null,   //defined but nothing in that  
                    "travelldToIndia" :  undefined  // not defined
                  };
console.log("customer_2" , customer_2);

// Tecnically : i am stroring the object datatype in the customer_2 varaible
// So here object contains the 7 key-value pair
// and here i noticed that every value having the differeent datatype


//Example 3 : 

// Like number , string , array , undefined , null ,
// boolean again object also
var customer_3 =  {
                    "name"            : "Clerk",
                    "price"           :  100.09,
                    "location"        : "London",
                    "isAdmin"         :  true,
                    "family_details"  : {
                                            "spouse_name" :  "Mary",
                                            "kid_name"    :   "Robert.J",
                                            "kid_age"     :   10
                                        },
                    "streetname"      :  null,
                    "travelldtoIndia" :  undefined
                };
console.log("customer_3", customer_3);





/*********** How to create Array with List of the objects */

//Example 4

//var ids = [1,2,3,4];

var customer_4 = [
                    {
                        "name"      :  "john",
                        "location"  :  "Washington"
                    },
                    {
                        "name"      :  "Clerk",
                        "location"  :  "New Jersey"
                    }
                 ];

/* Array : collection of the values . values . values . values
   Examples : number , string , array , undefined , null , boolean , array , object
*/

console.log("customer_4" , customer_4);


/* How to access the value from the object

syntax : var data  =  obj["key"]
                      obj.key

 Answer : with the help of the key

    Way  :  By dot(.) notation
            or index([]) signature
*/

// Example 1 :
var customer_1  = {
      "name" : "John"
  };
console.log("by .     ::::" , customer_1.name);
console.log("by index ::::" , customer_1["name"]);



//From Example 2 : 
var customer_2 =  {
    "name"            : "Clerk",
    "price"           :  100.09,
    "location"        : "London",
    "isAdmin"         :  true,
    "family_details"  :  [ "Mary", "Robert.J" , 10 ],
    "streetname"      :  null,
    "travelldtoIndia" :  undefined
};
console.log("customer_2 name  " , customer_2["name"]);    // Here name is the  property key  //"Clerk" --- property value
console.log("customer_2 price " , customer_2["price"]);   // Here price is the property key  // 100.09 --- property value



/*Note : Time to remind the property of the length from string
  Example : var name       = "John";
            var namelength =  name.length;  Here length is the property
*/

//Example 3
var customerID = 1;
var cusomer_5  = {
                    1 : "Peter.Jr"
                 }

console.log("Example 3 :: " , cusomer_5[customerID]);  



/******************How to use the function in the object **************/

/* I already practiced upto yesterday regaring the function and string. 
   
My question is here :
   How i can use the return function in the object ?
*/


// Example 5 :
var customer_5 =  {
                     "name" : "John"
                  };

//Declaration
function getCustomerName(){
                            return "John smith";
                          }
// Example 6 :
var customer_6 =  {
    "name" : getCustomerName()  //fired | triggered | executed | hit
 };

 var customer_name = customer_6["name"];  // wehn i am going to call the name key
 var customer_name = customer_6.name; 
 console.log(customer_name);



 
/******* How to modify the value of the object ********/

//From Example 2 : 
var customer_2 =  {
  "name"            : "Clerk",
  "price"           :  100.09,
  "location"        : "London",
  "isAdmin"         :  true,
  "family_details"  :  [ "Mary", "Robert.J" , 10 ],
  "streetname"      :  null,
  "travelldtoIndia" :  undefined
};
 
console.log(customer_2.name);            // Here "name" is the property key.
                                         // We gets the output by calling the property key.



customer_2.name = "Clerk.Jr";
console.log("customer_2 latest value..." , customer_2);


customer_2.price = 201.09;
console.log("customer_2 latest value..." , customer_2);

customer_2.location = "Washington";
console.log(customer_2.location);        
// Now location of the customer_2 is the 'Washington'


/*******How to Add new property to the object********/

var customer_3 =  {
  "name"            : "Clerk",
  "price"           :  100.09,
  "location"        : "London",
  "isAdmin"         :  true,
  "streetname"      :  null,
  "travelldtoIndia" :  undefined
};

//console.log("customer_3", customer_3);

//customer_3["dateofbirth"] = "10-10-1967";
//customer_3["habits"]      = ["Watching Movies" , "Playing tennis", "Travelling"];

customer_3.dateofbirth = "10-10-1967";
customer_3.habits      = ["Watching Movies" , "Playing tennis", "Travelling"];


console.log("customer_3", customer_3);
// console.log("After adding the new property customer_3", customer_3);



/*******How to delete a property from the object********/

//Example - 6
var customer_6 =  {
  "name"            : "Clerk",
  "price"           :  100.09,
  "location"        : "London",
  "isAdmin"         :  true,
  "family_details"  :  [ "Mary", "Robert.J" , 10 ],
  "streetname"      :  null,
  "travelldtoIndia" :  undefined
};

delete customer_6.streetname;
console.log("Deleting streetname from the customer_6 variable" , customer_6)


delete customer_6.travelldtoIndia;
console.log("Deleting travelldtoIndia from the customer_6 variable" , customer_6);







