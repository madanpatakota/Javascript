
/************************Introduction the class ******************

 * 1. What is class ?
 *    class a special type of the function which mantains the group the relative members.
 *    Here members are : 1. constructor(special method)
 *                       2. properties
 *                       2. methods    (normal  methods)
 * 
 * 2. Is it part of the Javascript?
 *    JavaScript didn't originally have classes. Classes were added with the introduction of ECMASCRIPT6 (es6) i mean 2015year version,
 * 
 * 
 *  How to declare the class : syntax
 *       class <classname>{
 *  
 *           constructor(){                //optional
 *                         <statement(s)>
 *                        }
 
 *               }

 *  What is constructor ?
 *  A constructor is a  speical method(void) in a class 
 *  which automatically 
 *  triggers when the class gets instantiated(created with object).

*/


//Declare the class
class employee_ctr{
    
    // Declaring the constructor
            constructor(){
                         console.log("From employee_ctr Class Constructor is calling");
                      }
    }


    /***********************How to call the class********************** 
 * Note : Based on the instance of the class (use new keyword to create the instance)
 * 
 * 
 * */
  var emp_c = new employee_ctr();



  //emp_c which reference of the class and useful for access the class members



   /*************How to add the properties to the class */

   class employee_pro{
    /*properties*/
     employeeID;
     employeeName;

     /*constructor*/
     constructor(){
        console.log("From employee_pro Class constructor is calling.......");
         //here we have to use the ------this------ keyword for use the employeeID and employeeName
           /*What is this keyword
              this keyword which refers the current object
           */
          this.employeeID = 1;
          this.employeeName = "Wiliam";

          console.log(`employee_pro - CONSTRUCTOR ::: - employeeID ${this.employeeID} and employee Name ${this.employeeName}`);
     }
   }

/*calling*/
  var emp_p = new employee_pro();
   
  

  /*************How to pass the parameters to the class constructor..... */

/*Declaration*/
class employee_ctr_parms{

    /*Properties*/
    employeeID;
    employeeName ;

    /*Constructor*/
    constructor(id,name){
           console.log("From employee_ctr_parms Class constructor is calling.......");
           //here we have to use the ------this------ keyword for use the employeeID and employeeName
           /*What is this keyword
              this keyword which refers the current object
           */
            this.employeeID = id;
            this.employeeName = name;

            console.log(`employee_ctr_parms - CONSTRUCTOR ::: - employeeID ${this.employeeID} and employee Name ${this.employeeName}`);

    }
}

/*Calling*/
var emp_p = new employee_ctr_parms(1 , "William");



/*Declaration*/
class employee_mtd{

   /*Properties*/
   employeeID;
   employeeName ;

   /*Constructor - speical method*/
   constructor(id,name){
          console.log("From employee_mtd Class constructor is calling.......");
          //here we have to use the ------this------ keyword for use the employeeID and employeeName
          /*What is this keyword
             this keyword which refers the current object
          */
           this.employeeID = id;
           this.employeeName = name;

           console.log(`From employee_mtd Clas ::: - employeeID ${this.employeeID} and employee Name ${this.employeeName}`);

   }

   /** we have to manullay called . so i can say  this is normal methods */

   getEmployee(){
       console.log("Calling the get employee method");
       console.log(`METHOD :::: - employeeID ${this.employeeID} and employee Name ${this.employeeName}`);
   }



}

/*Calling*/
var emp_m = new employee_mtd(1 , "William");
emp_m.getEmployee();




  /*************How to Add the methods to the class */
/*declaration*/


  var emp_database = [{
   "name"     :  "Clerk",
   "location" :  "London",
   "Price"    :   190.09
 },
 {
   "name"     :  "Peter",
   "location" :  "New York",
   "Price"    :   145.09
 },
 {
   "name"     :  "Rober",
   "location" :  "London",
   "Price"    :   987.09
 }]

 
 class employee_mtd_params{
   /*Properties*/
   employeeID;
   employeeName ;

   /*Constructor*/
   constructor(id,empname){
       console.log("From employee_pro Class constructor is calling.......");
       /*  Here we have to use the ------this------ keyword for gets the employeeID and employeeName

           What is this keyword?
           this keyword which refers the current object
       */
           this.employeeID = id;
           this.employeeName = empname;

           console.log(`CONSTRUCTOR ::: - employeeID ${this.employeeID} and employee Name ${this.employeeName}`);

   }

     /*method
            Every method is a function in the class.
        */
         getEmployee(){
               console.log("Calling the get employee method");
               console.log(`METHOD :::: - employeeID ${this.employeeID} and employee Name ${this.employeeName}`);
           }
         getEmployeeByLocaiton(emplocation){
               var customerRecords = emp_database.filter(employee=>{
                  return employee.location == emplocation
               })
               return customerRecords;
         }
   }


/*calling*/
  var emp             = new employee_mtd_params(1,"William");
  var employeeRecords = emp.getEmployeeByLocaiton("New York");
  console.log(employeeRecords);


/**** How to communicate(inheritance) one class to another class */

/* By using the extends keyword */


class emp_class_1{
   constructor(id,officeName){
       console.log(`emp_class_1 : CONSTRUCTOR ::: - employeeID ${id} and employee Name ${officeName}`);
   }
}

class emp_class_2 extends emp_class_1{
   constructor(){
       super(1,"Misard");
       console.log("emp_class_2 : emp_class_2 is calling....");
   }
}


var emp_class_2_obj = new emp_class_2();