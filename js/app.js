'use strict';

let hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];


/*let Seattle={
  branchName: 'Seattle',
  minCust:23,
  maxCust:65,
  avgCookies:6.3,
  cust:0,
  cust1: [],
  custArr:function () {
    for (let i= 0; i < hours.length; i++){
      this.cust1.push(randomNumber(this.minCust,this.maxCust)*this.avgCookies);
    }
  }
};
Seattle.custArr();
console.log( Seattle.cust1);

// this is from w3schooles
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
*/
//console.log(seattle);
//console.log(Seattle.cust);
// this is from w3schooles
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function LocationName(branchName, minCust, maxCust, avgCookie) {
  this.branchName= branchName;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avgCookie=avgCookie;
  this.customers=[];
  this.cookies=[];
}
LocationName.prototype.cust1=function () {
  for (let i= 0; i < hours.length; i++){
    this.customers.push(random(this.minCust,this.maxCust));
  }
};
LocationName.prototype.cookies1=function () {
  for (let index = 0; index <hours.length; index++) {
    this.cookies.push(Math.floor(this.customers[index]* this.avgCookie));
  }
};

let seattle= new LocationName ('seattle', 23, 65, 6.3);
seattle.cookies1();
//seattle.cust1();
console.log(seattle);

//let parent=document.getElementById('parent');

