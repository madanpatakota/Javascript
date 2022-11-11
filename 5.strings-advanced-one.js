/*******************How to use Plus(+) operator in the string */
var employeeName = "Robert Plant";
var companyName  = " Google";
var extraInfo    = " And i am working with him from last 10 years..";


var output       =  employeeName + " is one of the employee in " 
                     + companyName;
console.log(output);

output           =  output + extraInfo;
console.log(output);

//********************* How to find the length of the string */
var employeeName = "Robert Plant";
                  //0123456789101112

var employeeNameTotalCharctersLength =  employeeName.length  // signature means syntax
//Hey whats your return the value
console.log(employeeNameTotalCharctersLength);


var employeeName = "Robert Plant";
var convertemployeeNameinUpperCase =  employeeName.toUpperCase();
console.log(convertemployeeNameinUpperCase);


var employeeName = "Robert Plant";
var convertemployeeNameinUpperCase =  employeeName.toLowerCase();
console.log(convertemployeeNameinUpperCase);

var employeeName = "Robert Plant";
// Task : i want to get the charcter at the 0 position...
// argument.. | parameter.
var employeeCharAtZeroIndex_1 = employeeName.charAt(2);
console.log(employeeCharAtZeroIndex_1);

//Getting the output by bracket notation syntax
var employeeCharAtZeroIndex_2 = employeeName[2]; 
console.log(employeeCharAtZeroIndex_2);



// concat --- adding the data
var employeeName = "Robert Plant";
var companyName  = " Google";
var extraInfo    = " And i am working with him from last 10 years..";


var output       =   employeeName.concat(companyName);
console.log(output);


var employeeName = "Robert Plant . He is .";
// How to find the last charcter by giving the string?
var employeeLastCharcter = employeeName.charAt(11);  //Hard coded values
console.log(employeeLastCharcter);

var companyName  = " Google";
var companyNameLastCharcter = companyName.charAt(4); //Hard coded values
console.log("***",companyNameLastCharcter);



// How to find the nth charcter by giving the string?
var employeeName_1 = employeeName.charAt(employeeName.length - 1); //soft coded values
console.log(employeeName_1);





/*
  Try to understand below :
  when employeeName is going to call the charAt method by using n parameter
  i am getting the n th value as return type ....
*/




/* Can i create the my own method like charAt ? for me charAt12345 ******
   like employeeName.charAt12345(0);
   A: We do't have the charAt12345 method in JS. we can do by using the prototype.
     Note : you can create your own method in the JS with the help of prototype

   */