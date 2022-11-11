/***************** What is looping ************/

/*
Looping is noting but a sequence of instructions.
and those instructions continually repeated until a certain condition is reached.

Important Loops are in JS are while and For


// executes the statements based on the instuction(s);

//while loop
//for   loop
while(<instruction>){
                     statement ;
                     statement ;
                     statement ;
                  }
*/

// Task 1 : i wanted to print the customerIDs from 1 to 10
// var cusomterIds= [1,2,3,4,5,6,7,8,9,10];


var customersIDs = [];
var index        = 0;
var length       = 10;

//   0    <= 10
while(index  <= 3){
    customersIDs.push(index);
    index += 1;             //  i am adding +1 to the index.
 }

 console.log(customersIDs);


/*   Writing the same code with for loop
                for(initliztionthevalue ; Applythecondition ; targettheinitliztionvalue){
                                    statement ;
                                    statement ;
                                    statement ;
                                 }
*/


//Example 1 : 
var customerIDs_1 = [];
var length = 10;

for(var index = 0 ; index < 10 ; index++){
    console.log("monitoirng the index " , index);
    customerIDs_1.push(index);
 }
 console.log(customerIDs_1);



 //Example 2 : 
//Find Total price by giving the array of prices.
var customerPrices = [101.09, 200.90, 300.89, 410.78, 115.89];
var totalPrice     = 0;


//Here loop will ends when index reach out the 5
//Because the customerPrices.length returns the 5

//continuosly repeated until your condition is going to be satisfied
for(var index = 0; index < customerPrices.length; index++){
    console.log("index number ", index );
    console.log("totalPrice", totalPrice );
    totalPrice += customerPrices[index];
}
console.log(totalPrice);