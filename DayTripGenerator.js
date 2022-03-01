// use Dans demo to get started, following along and
// then adapting it to this project is ok
// youll need 4 arrays, I keep them all together close to the top of my file
// you'll have the funcion from dans video below your arrays

// then below your function you will need to setup 4 variables 
// set these variables = function call(pass in array)

let listOfDestinations = ["Independence Mall", "Smith Creek Park", "New River Air Station", "Wilmington Ice House", "Topsail Beach"];
let listOfResturants = ["Ducks", "The Basics", "Denny's", "Coastal Wings", "Sears Landing"];
let listOfTransportation = ["Bike", "Car", "Walking", "Uber"];
let listOfEntertainment  = ["Movies", "Picnic", "Beach", "Shopping", "Museum"];
function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
    return randomChoice
}
let randomDestination = randomGenerator(listOfDestinations)
let randomResturant = randomGenerator(listOfResturants)
let randomTransportation = randomGenerator(listOfTransportation)
let randomEntertainment = randomGenerator(listOfEntertainment)

function tripGenerator(){
    let userIsHappy = false;
    while(userIsHappy === false){
        let randomDestination = randomGenerator(listOfDestinations);
        let randomResturant = randomGenerator(listOfResturants);
        let randomTransportation = randomGenerator(listOfTransportation);
        let randomEntertainment = randomGenerator(listOfEntertainment);
        let userResponse = prompt(`Your randomly generated trip is ${randomDestination}, ${randomResturant}, ${randomTransportation} and ${randomEntertainment}. Are you okay with that?`);
        if(userResponse.toLowerCase() === 'yes'){
            alert(`Enjoy ${randomDestination},${randomResturant}, ${randomTransportation} and ${randomEntertainment}!`)
            userIsHappy = true
          }else if(userResponse.toLowerCase() === 'no'){
            userIsHappy = false
          }
      }
    }
    tripGenerator()