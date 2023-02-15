

        console.log(Math.floor((Math.random()*3))+1)
        
        let winCount = 0;
        let lossCount =0;
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
        
        function playRound()
        {
            userChoice = getUserChoice(userChoice);
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
                userChoice == 3 && ComputerChoice ==2)
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
        
        while(winCount<5&&lossCount<5)
        {
            playRound();
        }
        
        if (lossCount == 5)
        {
            alert("Wow you're kind of bad at this");
        }
        
        else if (winCount == 5)
        {
            alert('You beat the computer. Congrats!');
        }
        //^^ the above will run the code until 5 wins or 5 losses accrue. At which point a winner is declared.
        