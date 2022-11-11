
/*

 Why the ECMA Script?
  (European Computer Manufacturers Association Script)
  ECMAScript is a general-purpose programming language that is implemented in Javascript and some other languages. 
  It is the scripting language that formed the basis of browser-based Javascript

 Javascript is using the ECMAScript standards.
 Current ECMAScript latest release is ECMA2022 June 13 =

 Note : Ecmascript first version is 1997

 Now a days people are thinking javascript contains the ecma latestversion

 In my current project we are using the ecma script 2015 version or es6 version.

 you can use ecma stadards in js
 you can use ecma standard in ts

 ts = js + new features.

 */


 /* By using the var keyword we can declare the same variable more than 1.
    By using the let keyword we can declare the same variable only once.
 */


    /*********************************** var ***************/
//  var customerName = "Clerk";
//  var customerName = "Peterson";
//  console.log(customerName);


/*********************************** let ****************/


//  let customerName = "Clerk";
//      customerName = "Peterson";
//      customerName = "William";
 
//  console.log(customerName);


/******* More about the let */

function checkingScope_let(){
    let scopeStatus = "**********function block scope***********";   
    if(true){ 
        let letscope = "---------block scope-------------";   // value is overriding from function block scope to block scope
        console.log("Block scope status is " , letscope);
    }
    console.log("Function block scope status is " , scopeStatus);
    //console.log(" block scope status is " , letscope);
    //console.log("Looking Executing.....");
 }

 //checkingScope_let();


 /******* Here let i am using in different ways */
function checkingScope_var(){
      var scopestatus = "**********function block scope***********";      
    if(true){ 
          var varStatus = "---------block scope-------------";  
          console.log("Block scope status is " , scopestatus);
    }
    console.log("Function block scope status is " , scopestatus);
    console.log("---------block scope------------- " , varStatus); 
 }

// checkingScope_var();




 /*********************************** const ****************/

 const customer_name_1 = "Clerk";
 //customer_name_1 = "Peterson"; //Assignment
 console.log(customer_name_1);
 
 
/***********************************How to handle the exceptions 
 *  Exception halding is the process of handle the errors by try , catch and finally 
 *  and mantain the regular JavaScript code
 * 
 * Syntax 
 *    try {
 *             <block of the code>
 *        }
 *    catch(ex){
 *             <block of the code>
 *        }
 *    finally{                       //optional
 *             <block of the code>
 *     }
*/




function checkingScope_let_eh(){
    let scopeStatus = "**********function block scope***********";   
    if(true){ 
        let letscope = "---------block scope-------------";   // value is overriding from function block scope to block scope
        console.log("Block scope status is " , letscope);
    }
    console.log("Function block scope status is " , scopeStatus);
    
    try{
       console.log(" block scope status is " , letscope);
    }
    catch(ex){
       console.log("...letscope is not defined. please cross-check the code");
    }
    console.log(".....Executing......");
 }

//checkingScope_let_eh();


/*************** we can Mutate(change) the value by array */

const customerNames    = ["John" , "Clerk"]; 
 //     cusotmerNames    = ["asdfas","asdfas"]
      customerNames[0] = "Peterson";
      customerNames[1] = "Robert.J";

console.log(customerNames);



/*************** we can Mutate(change) the value by object */

//Example - 1
const employee = { 
    ID : 1 , 
    Name : "John" ,
    Location : "London" 
 };

 function getEmployeeLocation(employeeName){
    if(employeeName == "John"){
        employee.ID = 2;
    }
    return employee;
 }

 let employeeDetails = getEmployeeLocation("John");
 console.log(employeeDetails);


 /***********How to prevent(stop) the modification the value in obj by freeze method */


 // Example - 2
 const employee_1 = { 
    ID : 1 , 
    Name : "John" ,
    Location : "London" 
 };

 function getEmployeeLocation_1(employeeName){
    Object.freeze(employee_1);  // we can use Object.freeze for the freeze(wo't allow update) the values
    if(employeeName == "John"){
        employee_1.ID = 2;
    }
    return employee_1;
 }

 let employee_details_1 = getEmployeeLocation_1("John");
 console.log(employee_details_1);



//  var let const

// var declare and assign multi

// let decalre(once)  assign multi

// const declare and assing single