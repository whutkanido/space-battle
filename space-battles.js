// Generate a random whole number between min,max
function randomNumBetween(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
} 

// Create objecs for the combatants

const mothership = {
    name: 'Mothership',
    hull: 20,
    firepower: 5,
    accuracy: .8
}

const alien = {
    name: 'Alien Raider',
    hull: randomNumBetween(8,9), 
    firepower: randomNumBetween(2,4),
    accuracy: (randomNumBetween(6,8) / 10)
}



// Player attack phase

const playerAttack = () =>{
    if(alien.hull > 0 && Math.random() < mothership.accuracy){
        alert('The ' + alien.name + ' has ' + alien.hull + ' HP.')
        alert(mothership.name + ' fires torpedos and HITS for ' + mothership.firepower + ' damage.')
        alien.hull -= mothership.firepower
        } 
    else if (alien.hull <= 0){
        alert('The ' + alien.name + ' has been ERADICATED!')
        } 
    else {
        alert(mothership.name + ' fires torpedos and MISSES')
    }
}

// Enemy attack phase

const enemyAttack = () =>{
    if(mothership.hull > 0 && Math.random() < alien.accuracy){
        alert(alien.name + ' blasts the Mothership with toxic slime and does ' + alien.firepower + ' damage.')
        mothership.hull -= alien.firepower
        } 
    else if (mothership.hull <= 0){
        alert('The Mothership has been incinerated.  Game over')
        } 
    else {
        alert(alien.name + ' tries to ram the Mothership and MISSES')
    }
}


runGame = () => {
    alert("It's time for a space battle")
    alert("An alien raider approaches...")

    while (mothership.hull > 0 && alien.hull > 0) {
    
    let userInput = prompt("You have " + mothership.hull + " HP. Type 'attack' to blast the alien, or 'run' to cower in fear")

    if (userInput.toLowerCase() === 'attack'){
        playerAttack()
        enemyAttack()
    } else if (userInput.toLowerCase() === 'run'){
        alert('You try to run, but the aliens are faster.   They mercilessly destroy the Mothership')
        alert('GAME OVER')
        mothership.hull = 0
        break;
    }
}
}

runGame()

