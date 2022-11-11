// Concept : switch statment;
// we are going the check the condition based on the case.


var role = "";    //hard-coded value

if(role == "Trainee"){
    console.log("He is a fresher and having the no expereince.")
}
else if(role == "SE"){
   console.log("He is a software engineer and having the 3 years of expereince")
}
else if(role == "SSE"){
    console.log("He is a senior software engineer and having the 6 years of expereince")
}
else if(role == "TL"){
    console.log("He is a Team Leader and having the 8 years of expereince")
}
else if(role == "Asst.MGR"){
    console.log("He is a Assistant Manager and having the 10 years of expereince")
}
else if(role == "MGR"){
    console.log("He is a  Manager and having more than 10 years of expereince")
}
else{
    console.log("Record is not matching. Please check with another value.");
}


/* Same output we can do by using the swtich statements....*/

/* think about switch board in your home. and each switch is the case */

/* syntax
   switch(<value to be check>){
        case <value> :
            Statement; 
            ---------
            ---------
            break;
        
        case <value> : {
            Statement; 
            ---------
            ---------
            break;
        }

        -----
        -----
        
        default : {
            Statement; 
            ---------
            ---------
        }
   }
*/


var role = "SSE";    //hard-coded value

switch(role) {
    // role will be SE
    case "Trainee" :
        console.log("He is a fresher and having the no expereince.")
        break;
    case "SE" :
        console.log("He is a software engineer and having the 3 years of expereince")
        break;
    case "SSE":
        console.log("He is a senior software engineer and having the 6 years of expereince");
        break ;
    case "TL":
        console.log("He is a Team Leader and having the 8 years of expereince");
        break ;
    case "Asst.MGR":
        console.log("He is a Assistant Manager and having the 10 years of expereince")
        break ;
    case "MGR":
        console.log("He is a  Manager and having more than 10 years of expereince");
        break ;
    default:{
        console.log("Record is not matching. Please check with another value.");
    }
}


/*Note : when you are having mutli if else conditions better use the switch statement.*/


/************* switch case in the function */
//declation..
function getUserRole(role){
    switch(role){
        case "admin":
            console.log("He is administrator. he can modify anything in the application");
            break;
        case "salerep":
            console.log("He is a Sales rep. He can modify few pages.");
            break;
        case "enduser":
            console.log("He is a enduser. He just view the few pages.");
            break;
        default:
            console.log("Record is not exists. Please check with another role");
    }
}


//calling
getUserRole("");