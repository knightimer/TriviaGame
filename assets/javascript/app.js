
//TIMER FUNCTION//
var number = 20;
var intervalId;
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {
    number--;
    $(".countDownTimer").text(number);
    if (number === 0) {
      stop();
      console.log("You are out of time!");
    }
  
  function stop() {
    clearInterval(intervalId);
  }

  //I Dont know how to proceed!!//

  // //QUESTIONS//
  // //   var questions = [
  //         $(".quiz1").append("Captain Kirk played in the first series of Star Trek");
  //         $(".quiz1").append("<input type='radio' name='opt' id='1'>YES");
  //         $(".quiz1").append("</label><input type='radio' name='opt' id='2'>NO");
          
  //         $(".quiz1").append("Spock was a captain in the series.");
  //         $(".quiz1").append("<input type='radio' name='opt' id='1'>YES");
  //         $(".quiz1").append("</label><input type='radio' name='opt' id='2'>NO");    
      
  //         $(".quiz1").append("Bones was the nickname of the doctor.");
  //         $(".quiz1").append("<input type='radio' name='opt' id='1'>YES");
  //         $(".quiz1").append("</label><input type='radio' name='opt' id='2'>NO");
              
  //         $(".quiz1").append("Scotty was the Cheif Engineer for the Enterprise.");
  //         $(".quiz1").append("<input type='radio' name='opt' id='1'>YES");
  //         $(".quiz1").append("</label><input type='radio' name='opt' id='2'>NO");
                  
  //         $(".quiz1").append("Sulu was the first officer in the series.");
  //         $(".quiz1").append("<input type='radio' name='opt' id='1'>YES");
  //         $(".quiz1").append("</label><input type='radio' name='opt' id='2'>NO");    

  
