'use strict';


let hours = ['6 am', '7 am', '8am', '9am', '10am', '11am', '12 pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let seattle = {
//   name: 'seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   total: 0,
//   custPerHour: [],
//   cookies: [],
//   total :0,

//   custPerHour1: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.custPerHour.push(randomNumber(this.min, this.max));
//     }
//   },
//   CookiesPerHour:function(){
//     for(let i=0 ; i<hours.length ;i++){
//       this.cookies.push(Math.floor(this.custPerHour[i]*this.avg));
//       this.total+=this.cookies[i];



let generalTable = document.getElementById('parent');
let Table = document.createElement('table');
generalTable.appendChild(Table);
let tr = document.createElement('tr');
Table.appendChild(tr);
let th = document.createElement('th');
tr.appendChild(th);

for (let i = 0; i < hours.length; i++) {
  let th= document.createElement('th');
  tr.appendChild(th);
  th.textContent = hours[i];

}

// // this is from w3schooles
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
let stores =[];
function LocationName(branchName, minCust, maxCust, avgCookie){

  this.branchName= branchName;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avgCookie=avgCookie;
  this.Total=0;
  this.customers=[];
  this.cookies=[];
  stores.push(this);
}
LocationName.prototype.customers1=function () {
  for (let i= 0; i < hours.length; i++){
    let random= Math.floor(Math.random()*(this.maxCust - this.minCust)+ this.minCust);
    this.customers.push(random);

  }

};

LocationName.prototype.cookies1=function () {
  for (let i = 0; i <hours.length; i++) {
    let cookie = this.avgCookie * this.customers[i];
    this.cookies.push(Math.floor(cookie));
  }
};
LocationName.prototype.getTotalcookies=function () {
  for (let i = 0; i < this.cookies.length; i++) {
    this.Total =this.Total+ this.cookies[i];

  }
  return this.Total;
};

let total  = document.createElement('th');
tr.appendChild(total);
total.textContent = 'Total ';

LocationName.prototype.render = function () {
  let tr1 = document.createElement('tr');

  Table.appendChild(tr1);
  tr1.textContent = this.branchName;

  let td;
  for (let i = 0; i < this.cookies.length; i++) {
    td = document.createElement('td');
    tr1.appendChild(td);
    td.textContent = this.cookies[i];
  }

  let td1 = document.createElement('td');
  tr1.appendChild(td1);
  td1.textContent = this.Total;
};




let seattle= new LocationName ('seattle',23,65,6.3);
seattle.customers1();
seattle.cookies1();
seattle.getTotalcookies();
seattle.render();

let tokyo= new LocationName ('tokyo',3,24,1.2);
tokyo.customers1();
tokyo.cookies1();
tokyo.getTotalcookies();
tokyo.render();

let dubai= new LocationName ('dubai',11,38,3.7);
dubai.customers1();
dubai.cookies1();
dubai.getTotalcookies();
dubai.render();

let paris= new LocationName ('paris',20,38,2.3);
paris.customers1();
paris.cookies1();
paris.getTotalcookies();
paris.render();

let lima = new LocationName ('lima',2,16,4.6);
lima.customers1();
lima.cookies1();
lima.getTotalcookies();
lima.render();



let locations =[seattle,tokyo,dubai,paris,lima];

totalOfTotal();

function totalOfTotal () {
  let totaltr =document.createElement('tr');
  Table.appendChild(totaltr);
  totaltr.textContent='Total';

  let summmation=0;
  let sum;
  let td;
  for (let i = 0; i < hours.length; i++) {
    sum=0;
    for (let j = 0; j < locations.length; j++) {
      sum=sum+locations[j].cookies[i];

    }

    td =document.createElement('td');
    totaltr.appendChild(td);
    td.textContent=sum;
    summmation += sum;
  }

  td = document.createElement('td');
  totaltr.appendChild(td);
  td.textContent=summmation;
}
