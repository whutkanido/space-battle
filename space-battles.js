// Generate a random whole number between min,max
function randomIntBetween(min,max) {
    return Math.floor(Math.random() * (max - min) + min + 1)
} 

// Create objecs for the combatants

const mothership = {
    name: 'Mothership',
    hull: 20,
    firepower: 2, // need function randomIntBetween(4,7)
    accuracy: .7
}

const alien = {
    name: 'Alien Raider',
    hull: 5, //between 3-6
    firepower: 3, //between 2-4
    accuracy: .6 //between .6 - .8
}

// Player attack phase

const playerAttack = () =>{
    if(alien.hull > 0 && Math.random() < mothership.accuracy){
        console.log(mothership.name,'fires torpedos and HITS for',mothership.firepower,'damage.')
        alien.hull -= mothership.firepower
        console.log(alien.name,'has',alien.hull,'HP remaining')
    } else if (alien.hull <= 0){
        console.log('The',alien.name,'has been ERADICATED!')
    } else {
        console.log(mothership.name,'fires torpedos and MISSES')
    }
}



