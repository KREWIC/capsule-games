

        console.log(Math.floor((Math.random()*3))+1)
        
        let winCount = 0;
        let lossCount = 0;
        //^^ Track overall wins and losses
        
        let userChoice=0;
        let computerChoice=0;
        //^^ user and computer choice
        
        function getUserChoice(val)
        {
          val = prompt('Paper \n Rock \n Scissors \n make a selection');
          //^^ Takes in user input expects string value
        
          val = val.toUpperCase();
          //^^ Catch all for any case, sets it to a standard
        
          if (val == 'PAPER')
          {
            return val = 1;
            
          }
        
          if (val =='ROCK')
          {
            return val = 2;
            
          }
        
          if (val == 'SCISSORS')
          {
            return val = 3;
          }
          //^^ Above lines convert the text to a numerical value to be compared to the Computer choice
        }
        
        
        function computerSelect(Num)
        {
         return Num = Math.floor((Math.random()*3)+1)
        }
        //^^ computer selects a random choice from 1 - 3
        
        function playRound(playerNum)
        {
            userChoice = playerNum
            computerChoice = computerSelect(computerChoice);
            console.log(computerChoice);
            //^^Actual choices first in the round
        
            if (userChoice == computerChoice)
            {
                alert('tie');
            }
            //^^ For all ties
        
            else if (userChoice == 1 && computerChoice == 3 ||
                userChoice == 2 && computerChoice == 1||
                userChoice == 3 && computerChoice ==2)
                {
                    alert('You lose');
                    lossCount+=1;
                    return;
                }
            //^^ For losses
        
                else
                {
                    alert('You win');
                    winCount+=1;
                    return;
                }
                //^^ For wins
        }
        
        console.log(Math.random(1,5))

        const button1 = document.querySelector('#Paper');
        button1.addEventListener('click', () =>{ playRound(1)});

        const button2 = document.querySelector('#Rock');
        button2.addEventListener('click', () => {playRound(2)});

        const button3 = document.querySelector('#Scissors');
        button3.addEventListener('click', () => {playRound(3)});


        
        //^^ the above will run the code until 5 wins or 5 losses accrue. At which point a winner is declared.
        