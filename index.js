const prompt = require('prompt-sync')({sigint : true});


var n = 2;
function guessFunction(range, level=2) {
    this.range = range
    this.level = level;
}
var obj = new guessFunction(this.range);


let count = 1;
let correct_guess = false;
console.log("Hit 'Ctrl + C' to quit")
console.log('This game has only 10 chances \n')
let name = prompt('Please enter your name:  ')

while (!correct_guess) {
            var user_guess = prompt(`Guess a number from 1 to ${obj.level}: ` );
            user_guess = Number(user_guess)
            obj.range = Math.floor(Math.random()*n)+1;
    
        if(user_guess == obj.range) {
        
            console.log(`Congratulations ${name} !!! You have moved to level ${obj.level}`)
            console.log(`Your current score is: ${obj.level - 1} \n`)

            obj.level += 1;
            n++
            
              
            } else{
                console.log('Wrong guess, try again ')
            }
            
            console.log(`You have ${10 - count} chances left \n`)
            if (count === 10) {
                break;
            }
    
    count++
    
}

