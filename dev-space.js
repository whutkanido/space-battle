// this is a dev file for trying new things

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

    hits() {
        console.log(`The ${this.name} has ${this.hull} HP.`)
        console.log(`${this.name} attacks and HITS for ${this.firepower} damage!`)
    }

    missOrDead() {
        if (this.hull > 0) {
            console.log(`The ${this.name} has ${this.hull} HP.`)
            console.log(`${mothership.name} attacks and MISSES!`)
        } else {
            console.log(`${this.name} has been DESTROYED`)
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

// 

const fleet = [alien,alien2,alien3,alien4,alien5,alien6]

console.log(fleet,mothership)

// If the player passes an accuracy check, they attack the enemy
// If they fail the check, the attack will miss

playerAttack = () => {
    if (Math.random() < mothership.accuracy) {
        mothership.hits()
        mothership.attack(fleet[0])
        
    } 
    else{
            mothership.missOrDead()
        }
}

// If the enemy has a hull and passes an accuracy check, it attacks.
// If the enemy has a hull and fails the check, its attack will miss
// If the enemy has no hull the player is notified it has been destroyed
// A destroyed enemy is no longer part of the alien fleet[]


enemyAttack = () => {
    if(fleet[0].hull > 0){
        if (Math.random() < fleet[0].accuracy){
            fleet[0].hits()
            fleet[0].attack(mothership)
        } 
        else {
            console.log(`${fleet[0].name} attacks and MISSES!`)
        } 
    }
    else{
        console.log(`${fleet[0].name} has been DESTROYED!`)
        fleet.shift()
    }
}

// alert("It's time for a space battle")
// alert("An alien raider approaches...")

// Main game engine


while (fleet.length > 0 && gameOver == false) {
    
    if (mothership.hull > 0){    
        playerAttack()
        
        enemyAttack()
    } 
    else {
        return gameOver = true
    } 
   
}

console.log(`GAME OVER`)


// GLITCH:   Only returns game over when player kills all aliens, but not when aliens kill 
// its because playerAttack needs formatted same way as enemyAttack





 
// runGame = () => {
//     alert("It's time for a space battle")
//     alert("An alien raider approaches...")

//     while (mothership.hull > 0 && alien.hull > 0) {
    
//     let userInput = prompt("You have " + mothership.hull + " HP. Type 'attack' to blast the alien, or 'run' to cower in fear")

//     if (userInput.toLowerCase() === 'attack'){
//         playerAttack()
//         enemyAttack()
//     } else if (userInput.toLowerCase() === 'run'){
//         alert('You try to run, but the aliens are faster.   They mercilessly destroy the Mothership')
//         alert('GAME OVER')
//         mothership.hull = 0
//         break;
//     }
// }
// }

// runGame()

