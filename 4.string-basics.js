
//** collection of the charcters */
/**********How to declare the string in javascript? **********/
/******************double and single quote */

var firstName           = "John";
console.log(firstName);
//var firstName           = 'John';
var emp_status          = "Yes , it's true";
console.log(emp_status);

var FullName           = "Yes , 'John smith' is a true lengend.";
console.log("single quote ", FullName);

//escape charcter
var FullName            = "Yes , \"John smith\" is a true lengend.";
console.log("double quote ", FullName);


var big_text            =  ` Lorem Ipsum is simply dummy text of the 
                              printing and 
                              typesetting industry.
                              Lorem Ipsum has been the industry's 
                              standard dummy text ever since the 1500s,
                              when an unknown printer took a galley 
                              of type and scrambled it to make a type 
                              specimen book. ` ;
console.log("big text" , big_text);

var paragraph_element    =    "<p id=\"paragraphID\"></p>";
var my_anchor_element   =     "<a href=\"google.com\">Google.com</a>";


/*********** Now time to focus on the What is escape charcter?

\""     double quote

*/

var making_string        =   "Lorem \t Ipsum is \\ simply dummy text of the printing and typesetting industry.\n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
console.log(making_string);