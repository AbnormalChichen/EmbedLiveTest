var step = 0, username, correct_answers = 0, total_attempts = 0, attempts = 1, randomIndex = 0, question = 0;

var randomNumber = Math.floor((Math.random() * 1000) + 1)
  var questions = [
    ['In feet, how deep is the ocean\'s deepest trench?', 35840], 
    ['In what year was the first newspaper published in the US?', 1690], 
    ['How many feet below sea leavel is The Dead Sea?', 1348], 
    ['How many gallons of water does it take to fill an Olympic sized swimming pool?', 800000],

    ['How many speaking roles were there in the Lord of the Rings movie trilogy?', 114],
    ['How many people auditioned for season 2 of American Idol?', 50000],
    ['In what year were Post-It notes firtst sold nationwide in the US?', 1980],
    ['In 2004, how much did Ken Jennings win on Jeopordy!?', 2522700],

    ['During his 84-years, how many inventions did Thomas Edison patent?', 1093],
    ['How many black keys are on a standard 88-key piano?', 36],
    ['How many weeks was Michael Jackson\'s Thriller #1 on the Billboard 200 album chart' , 37],
    ['How many times did Wayne Gretzky win the NHL Most Valuable Player Award', 9],
    ['In yards, how long is The Golden Gate Bridge', 1400],
    ['In what year did Alan Shepard become the first person to hit a golf ball on the moon?', 1971],
    ['How many fingers did Fred Flintstone have?', 8],
    ['What percent of the earth is covered by water?', 71],

    ['In what year did Leonardo Da Vinci start painting the Mona Lisa/', 1506],
    ['How many years did FDR serve asx President of the United States?', 12],
    ['How many songs did Frank Sintra have that hit the Billboard Hot 100 chart?', 65],
    ['I\'m thinking of a number between 1 and 1000, what number am I thinking of?', randomNumber]
  ];

  //generate a random index value for questions



function roll(){
  randomIndex = Math.floor(Math.random() * questions.length);
  question = questions[randomIndex][0];

  console.log(questions[randomIndex][0]);
  console.log(questions[randomIndex][1]);
}

roll();

step = 1;

function check()
  {
    
    var user_input = document.getElementById("your_answer").value;
    var correct_answer = questions[randomIndex][1];

  
    
    if(step === 1){
      username = user_input;
      document.getElementById("question").innerHTML = 'So... ' + username +' do you wanna play a game?';
//hide input until they answer the question and display two new buttons
      document.getElementById("your_answer").style.display = "none";
      document.getElementById("submit").style.display = "none";
      document.getElementById("message").style.display = "none";

//clear input field 
      

//display other buttons
      document.getElementById("yes").style.display = "block";
      document.getElementById("no").style.display = "block";

      step = 2;

      }else if(step === 2){
        document.getElementById("question").style.display = "none";
        //display new buttons and instructions
        document.getElementById("yes").innerHTML = 'Okay...';
        document.getElementById("no").style.display = "none";

        document.getElementById("instructions").style.display = "block";
        document.getElementById("your_answer").value = '';
        step = 3;
      }else if(step === 3){
        //hide everything else
        document.getElementById("no").style.display = "none";
        document.getElementById("yes").style.display = "none";
        document.getElementById("instructions").style.display = "none";
        //show what's needed

        document.getElementById("question").style.display = "block";
        
        document.getElementById("your_answer").style.display = "inline-block";
        document.getElementById("submit").style.display = "block";
//change back to normal question
        
              
        document.getElementById("question").innerHTML = question;

       
        user_input = parseInt(user_input);

        step = 4;
}else if(step ===4){

         if(user_input < correct_answer){ //less than correct
          document.getElementById("message").innerHTML = 'That\'s kinda low, try a bigger number';
          document.getElementById("message").style.color = "red";
          document.getElementById("message").style.display = "block";

          attempts += 1; 
          total_attempts += 1;

          console.log(total_attempts);

        }else if(user_input > correct_answer){//more than correct
          document.getElementById("message").innerHTML = 'That\'s a bit high, try something smaller';
          document.getElementById("message").style.color = "red";
          document.getElementById("message").style.display = "block";
//change question

          attempts += 1; 
          total_attempts += 1;

          console.log(total_attempts);

        }else if(isNaN(user_input)) {
          document.getElementById("message").innerHTML = 'That answer isn\'t a number';
          document.getElementById("message").style.color = "red";
          document.getElementById("message").style.display = "block";
        } else {
          //hide again
        document.getElementById("message").style.display = "none";
        document.getElementById("your_answer").style.display = "none";
        document.getElementById("submit").style.display = "none";
//change question
          correct_answers += 1;
          

          
          document.getElementById("yes").style.display = "block";
          document.getElementById("no").style.display = 'block';
          document.getElementById("question").innerHTML = 'Nicely done. You got it in ' + attempts + ' tries. Do you want to try another question? <br> You\'ve gotten ' + correct_answers + ' right so far';
          document.getElementById("yes").innerHTML = 'Yes';
          document.getElementById("no").innerHTML = 'Not Really';
          total_attempts += 1;
          attempts = 1;

          console.log(total_attempts);


          roll();

          step = 3;
          
          document.getElementById("your_answer").value = '';

         
          }
    } 
      

      
}


function no(){

  document.getElementById("yes").style.display = "none";
  document.getElementById("no").style.display = 'none';
  document.getElementById("your_answer").value = '';
  document.getElementById("question").innerHTML = 'Well, I guess I\'ll see you later then :\(';
  document.getElementById("attempts").innerHTML = 'You made ' + total_attempts + ' attempts';
  document.getElementById("correct_answers").innerHTML = 'And got ' + correct_answers + ' right';
  if(total_attempts === 0){
    //make sure it's not red from previous changes
    document.getElementById("message").style.display = "block";
    document.getElementById("message").style.color = "black";
    document.getElementById("message").innerHTML = 'Wow... you didn\'t even try. That\'s fine, it\'s not like I wanted you to play anyways. :\'\(';
  }
}





