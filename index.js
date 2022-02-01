
const drivers = ['Tom', 'Mary', 'Jorge', "Mia", "Stan"];

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice (2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function fareCalculator () {
        return fare * fare
    }
}

function fareDoubler(fare) {
    return fare * 2
}

/*const fareMult = createFareMultiplier();
console.log(createFareMultiplier(2));

function fareDoubler(num) {
  return () => num * 2;
}*/

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
   return returnFirstTwoDrivers(drivers)
}