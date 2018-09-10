// Code your solution in this file!

function logDriverNames (drivers){
    drivers.forEach(driver => console.log(driver.name));
}

function logDriversByHometown (drivers, hometown){
    const driversbyHomeTown = drivers.filter(driver => driver.hometown === hometown);

    logDriverNames(driversbyHomeTown);
}

function driversByRevenue (drivers){
    const lowToHigh = drivers.slice().sort((a,b) => a.revenue - b.revenue);
    return lowToHigh;

}

function driversByName (drivers){
    const sortedByName = drivers.slice().sort((a,b) => a.name - b.name);
    console.log(sortedByName);
    return sortedByName;
}
