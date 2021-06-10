'use strict';

let hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let parentt=document.getElementById('parent');

let table = document.createElement('table');



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
  this.customers= [];
  this.cookies= [];
  this.total = 0;
}
LocationName.prototype.getcust = function () {
  for (let i= 0; i < hours.length; i++) {
    this.customers.push(random(this.minCust, this.maxCust));
  }
};


LocationName.prototype.getcookies = function () {
  for (let i = 0; i <hours.length; i++) {
    this.cookies.push(Math.floor(this.customers[i]* this.avgCookie));
  }
};


parentt.appendChild(table);

function hoursRow() {
  let firstRow = document.createElement('tr');
  table.appendChild(firstRow);
  let Name = document.createElement('th');
  firstRow.appendChild(Name);
  Name.textContent = 'Name';

  for (let i = 0; i < hours.length; i++) {
    let headerData= document.createElement ('th');
    firstRow.appendChild(headerData);
    headerData.textContent = hours[i];
  }
  let total= document.createElement('th');
  firstRow.appendChild(total);
  total.textContent= 'total';

  LocationName.prototype.render= function () {
    let data= document.createElement('tr');
    table.appendChild(data);
    let locationName1= document.createElement('td');
    data.appendChild(locationName1);
    LocationName.textContent= this.branchName;
  };
}






hoursRow();

let seattle= new LocationName ('seattle', 23, 65, 6.3);


seattle.getcust();

seattle.getcookies();

console.log(seattle);

let parent= document.getElementById('parent');

let button= document.getElementById ('button');
console.log(button);
button.addEventListener('click', creatParagraph);

function creatParagraph() {
  let para= document.createElement('p');

  parent.appendChild(para);
  para.textContent='hi there';
}

