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
        console.log(mothership.name,'fires torpedos and HITS for',mothership.firepower,'damage.')
        alien.hull -= mothership.firepower
        } 
    else if (alien.hull <= 0){
        console.log('The',alien.name,'has been ERADICATED!')
        } 
    else {
        console.log(mothership.name,'fires torpedos and MISSES')
    }
}

// Enemy attack phase

const enemyAttack = () =>{
    if(mothership.hull > 0 && Math.random() < alien.accuracy){
        console.log(alien.name,'blasts the Mothership with toxic slime and does',alien.firepower,'damage.')
        mothership.hull -= alien.firepower
        } 
    else if (mothership.hull <= 0){
        console.log('The Mothership has been incinerated.  Game over')
        } 
    else {
        console.log(alien.name,'tries to ram the Mothership and MISSES')
    }
}


for(i = 0; i < 5; i++){
playerAttack()
enemyAttack()
}



