/*GAME RULES:- The game has 2 players, playing in rounds- In each turn, a player rolls a dice as many times as he whishes. Ech result get added to his ROUND score- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn- The first player to reach 100 points on GLOBAL score wins the game*/

var scores , roundScore , activePlayer, gamePlaying = true;

function initials()
{
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    

    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
    gamePlaying = true;
    
   
}
initials();
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//console.log(dice);
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
/*var x = document.querySelector('#score-0').textContent;
console.log(x);
*/


//event handler
//here the event is we will roll the dice
document.querySelector('.btn-roll').addEventListener('click', function(){
    // this is the list events to be performed 
    if (gamePlaying)
    {
        // Random no
    var dice = Math.floor(Math.random() * 6 ) + 1;
    
    // Display the results
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    // Update the round score IF the rolled no was NOT a 1 and changing the active player
    if (dice !== 1)
        {
            // add round score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
           
        }
    else
        {
            activeplayer();
            
        }
    }
    
});
        
document.querySelector('.btn-hold').addEventListener('click',function(){
    
    if (gamePlaying)
    {
    // Add current score to global score
    scores[activePlayer] += roundScore;
    //Update the user interface
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //check whether the active player is the winner
    if (scores[activePlayer] >=10)
        {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        }
    else
        {
            activeplayer();
        }
    }
    
});
        
function activeplayer()
{
   //change the active player
             activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
             roundScore = 0;
            
             document.getElementById('current-0').textContent = '0';
             document.getElementById('current-1').textContent = '0';
             document.querySelector('.player-0-panel').classList.toggle('active');
             document.querySelector('.player-1-panel').classList.toggle('active'); 
}
document.querySelector('.btn-new').addEventListener('click',initials);