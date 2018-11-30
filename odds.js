//
//

/* for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
      console.log(current);
      break;
    }
  } */
 // This is a bad piece of code 

 function odd()
 {
     // if a number is divisble by 2 it an even number.
     // if a number is not divisble by 2 it odd.
     // Always precise equally (===)
     
     //gets the number submitted by the user
     var currentNumber = Number(prompt("Please enter number: "));
     document.getElementById("num").innerHTML = currentNumber;
    
     if (currentNumber % 2 === 0)
     {
        var msg = "The number: " + currentNumber + " is even.";
        document.getElementById("result").innerHTML = msg;

     } 
     else
     {
        var msg2 = "The number: " + currentNumber + " is odd." ;
        document.getElementById("result").innerHTML = msg2;
     }
    
 }

 //start your engines!!
    /*  odd(30);
    odd(1);
    odd(5);
    odd(24);
    odd(48);
    odd(#);
    */
 