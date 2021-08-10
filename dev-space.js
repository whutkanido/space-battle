// this is a dev file for trying new things

// Generate a random whole number between min,max

function randomNumBetween(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
} 

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
        if (Math.random() < this.accuracy) {
            console.log('The ' + ship.name + ' has ' + ship.hull + ' HP.')
            console.log(this.name + ' attacks and HITS for ' + this.firepower + ' damage.')
            ship.hull -= this.firepower
        } else {
                    console.log(this.name + ' attacks and MISSES')
                }
    }
  
  }

// Create the ships

const mothership = new Ship(
    'Mothership',
    20,
    5,
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

// 

const fleet = [alien,alien2,alien3]

console.log(fleet,mothership)

// alert("It's time for a space battle")
// alert("An alien raider approaches...")

while (fleet.length > 0) {
    if (fleet[0].hull > 0){
        
        mothership.attack(fleet[0])
        fleet[0].attack(mothership)
        
    } else {
        fleet.shift()
    }
}









// Player attack phase

// const playerAttack = () =>{
//     if(alien.hull > 0 && Math.random() < mothership.accuracy){
//         alert('The ' + alien.name + ' has ' + alien.hull + ' HP.')
//         alert(mothership.name + ' fires torpedos and HITS for ' + mothership.firepower + ' damage.')
//         alien.hull -= mothership.firepower
//         } 
//     else if (alien.hull <= 0){
//         alert('The ' + alien.name + ' has been ERADICATED!')
//         } 
//     else {
//         alert(mothership.name + ' fires torpedos and MISSES')
//     }
// }

// // Enemy attack phase

// const enemyAttack = () =>{
//     if(mothership.hull > 0 && Math.random() < alien.accuracy){
//         alert(alien.name + ' blasts the Mothership with toxic slime and does ' + alien.firepower + ' damage.')
//         mothership.hull -= alien.firepower
//         } 
//     else if (mothership.hull <= 0){
//         alert('The Mothership has been incinerated.  Game over')
//         } 
//     else {
//         alert(alien.name + ' tries to ram the Mothership and MISSES')
//     }
// }


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

