

        console.log(Math.floor((Math.random()*3))+1)
        
        let winCount = 0;
        let lossCount = 0;
        //^^ Track overall wins and losses
        
        let userChoice=0;
        let computerChoice=0;
        //^^ user and computer choice

        const button1 = document.querySelector('#Paper');
        const button2 = document.querySelector('#Rock');
        const button3 = document.querySelector('#Scissors');
        //^^Player buttons

        const compImage = document.querySelector('#computerImage');

        const scoreTextComp = document.querySelector('#compScore');
        const scoreTextPlayer = document.querySelector('#playerScore');
        //^^ Score text
        
        
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
                console.log('tie');
            }
            //^^ For all ties
        
            else if (userChoice == 1 && computerChoice == 3 ||
                userChoice == 2 && computerChoice == 1||
                userChoice == 3 && computerChoice ==2)
                {
                    
                    lossCount+=1;
                    console.log(lossCount);
                    scoreTextComp.textContent = lossCount;

                    if (lossCount >= 5)
                    {
                      alert("You Lose");
                    }

                    return;
                }
            //^^ For losses
        
                else
                {
                    
                    winCount+=1;
                    scoreTextPlayer.textContent = winCount;  
                    
                    if(winCount >= 5)
                      {
                        alert("You Win");
                      }

                    return;
                }
                //^^ For wins
        }
        
        console.log(Math.random(1,5))

        
        button1.addEventListener('click', () =>{ playRound(1)});

       
        button2.addEventListener('click', () => {playRound(2)});

        
        button3.addEventListener('click', () => {playRound(3)});
//^^ the above will run the code until 5 wins or 5 losses accrue. At which point a winner is declared.
        