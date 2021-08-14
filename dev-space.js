// Generate a random whole number between min,max

function randomNumBetween(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Initialize a gameOver state as false

var gameOver = false

// Class to generate player and enemy ships

class Ship {

    constructor(
            name,
            hull,
            firepower,
            accuracy
            ) {
      this.name = name
      this.hull = hull
      this.firepower = firepower
      this.accuracy = accuracy
    }

    // Pass a ship object into this method to attack it
  
    attack(ship) {
        ship.hull -= this.firepower
        }

    // Informs player about HP levels and attack damage    

    hits(ship) {
        alert(`${this.name} has ${this.hull} HP. ${ship.name} has ${ship.hull} HP`)
        alert(`${this.name} attacks and HITS for ${this.firepower} damage!`)
    }

    // If player failed the accuracy check, show the player an attack miss
    // If player is dead, show their ship as destroyed

    missOrDead(ship) {
        if (this.hull > 0) {
            alert(`${this.name} has ${this.hull} HP. ${ship.name} has ${ship.hull} HP.`)
            alert(`${this.name} attacks and MISSES!`)
        } else {
            alert(`${this.name} has been DESTROYED`)
        }
    }
  
  }

// Create the ships

const mothership = new Ship(
    'Mothership',
    10,
    4,
    .8)

const alien = new Ship(
    'Alien Raider',
    randomNumBetween(3,5),
    randomNumBetween(2,4),
    (randomNumBetween(6,8) / 10))

const alien2 = new Ship(
    'Alien Beast',
    randomNumBetween(3,5),
    randomNumBetween(2,4),
    (randomNumBetween(6,8) / 10))

const alien3 = new Ship(
    'Alien Marauder',
    randomNumBetween(3,5),
    randomNumBetween(2,4),
    (randomNumBetween(6,8) / 10))

const alien4 = new Ship(
    'Alien Outrider',
    randomNumBetween(3,5),
    randomNumBetween(2,4),
    (randomNumBetween(6,8) / 10))

const alien5 = new Ship(
    'Mutated Alien',
    randomNumBetween(3,5),
    randomNumBetween(2,4),
    (randomNumBetween(6,8) / 10))

const alien6 = new Ship(
    'Alien Striker',
    randomNumBetween(3,5),
    randomNumBetween(2,4),
    (randomNumBetween(6,8) / 10))

// Create an array for the squad of aliens

const fleet = [alien,alien2,alien3,alien4,alien5,alien6]



// If the player passes an accuracy check, they attack the enemy
// If they fail the check, the attack will miss
// If the player has no HP, it's game over

playerAttack = () => {
    if(mothership.hull > 0) {
        if (Math.random() < mothership.accuracy) {
            mothership.hits(fleet[0])
            mothership.attack(fleet[0])
        
        } 
        else{
                mothership.missOrDead(fleet[0])
            }
    } else {
        alert(`GAME OVER`)
    }
}

// If the enemy has a hull and passes an accuracy check, it attacks.
// If the enemy has a hull and fails the check, its attack will miss
// If the enemy has no hull the player is notified it has been destroyed
// A destroyed enemy is no longer part of the alien fleet[]


enemyAttack = () => {
    if(fleet[0].hull > 0){
        if (Math.random() < fleet[0].accuracy){
            fleet[0].hits(mothership)
            fleet[0].attack(mothership)
        } 
        else {
            alert(`${fleet[0].name} attacks and MISSES!`)
        } 
    }
    else{
        alert(`${fleet[0].name} has been DESTROYED!`)
        fleet.shift()
    }
}

runGame = () =>{

alert("It's time for a space battle")
alert("An alien raider approaches...")
 
// Main game engine



while (fleet.length > 0 && mothership.hull > 0 && gameOver == false) {

    let userInput = prompt(`You have ${mothership.hull} HP.  The ${fleet[0].name} has ${fleet[0].hull} HP. Type 'attack' to blast the alien, or 'run' to cower in fear`)
    
    if (userInput.toLowerCase() === 'attack'){
    
    if (mothership.hull > 0){    
        playerAttack()
        
        enemyAttack()
    } 
    else {
        playerAttack()
        return gameOver = true
    } 
} else if (userInput.toLowerCase() === 'run'){
    alert('You try to run, but the aliens are faster.   They mercilessly destroy the Mothership')
    alert('GAME OVER')
    return gameOver = true
    
}
   
}

alert(`GAME OVER`)
}

runGame()





 
