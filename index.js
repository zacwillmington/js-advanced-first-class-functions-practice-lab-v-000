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
    const sortedByName = drivers.slice().sort((a,b) => a.name.localeCompare(b.name));

    return sortedByName;
}

function addnumbers (num) {
    let to;
     to = num++;
     console.log(to);
}

function totalRevenue (drivers){
    const total = driversByRevenue(drivers).reduce(addnumbers);

}
