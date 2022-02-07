// Code your solution in this file!
const returnFirstTwoDrivers=(drivers)=>{
    
    return drivers.slice(0,2);
};

const returnLastTwoDrivers=(drivers)=>{
    return drivers.slice(-2);
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier){
    return function (fare) {
        return fareMultiplier*fare};
}

function fareDoubler(fare){
    return fare*2;
}

function fareTripler(fare){
    return fare*3;
}

function selectDifferentDrivers(drivers, argument){
    if(argument ===returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }else{
        return returnLastTwoDrivers(drivers);
    }
}