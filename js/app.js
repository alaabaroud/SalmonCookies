'use strict';

let hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];


let Seattle={
  branchName: 'Seattle',
  minCust:23,
  maxCust:65,
  avgCookies:6.3,
  cust:0,
  cust1: [],
  custArr:function () {
    for (let i= 0; i < hours.length; i++){
      this.cust1.push(randomNumber(this.minCust,this.maxCust));
    }
    
  }
};
Seattle.custArr();
console.log( Seattle.cust1);

// this is from w3schooles
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//console.log(seattle);
//console.log(Seattle.cust);

