/*  Basics about the function with the strings */
/*  ================ function =========================

    Q) What is the function ?
    A: Collection of the statements .
       We can executes all statements at a single time by the function name.

    Q) How to declare the sample function and how to call that?
       I mean syntax
        function <function_name>(){ 
            -----------------------;   // 1. statement.
            -----------------------;   // 2. statement.
        }
        
        i am getting the Hello world as the return type.... 


    **********VVVIMP : functions are 2 types
             1. return type function.
             2. non-return type function.
*/


/* declartion */
function first_method_one(){            
     var name = "hello world";   // 1. statement.
     return name;                // 2. statement.
}

//Note : function are 2 types 
//1. return type function 
//.. 2. non-retuntype function.
/* calling function */
console.log("***First method one****" ,first_method_one());


/* declartion */
function first_method_two(){            
    var name = "hello world";   // 1. statement.
}

//Note : function are 2 types 
//1. return type function 
//.. 2. non-retuntype function will gives the undefined.
/* calling function */
console.log("***First method two****" , first_method_two());


/*undefined ---> which is not defined status*/