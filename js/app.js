'use strict';


let hours = ['6 am', '7 am', '8am', '9am', '10am', '11am', '12 pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let seattle = {
  name: 'seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  total: 0,
  custPerHour: [],
  cookies: [],
  total :0,

  custPerHour1: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custPerHour.push(randomNumber(this.min, this.max));
    }
  },
  CookiesPerHour:function(){
    for(let i=0 ; i<hours.length ;i++){
      this.cookies.push(Math.floor(this.custPerHour[i]*this.avg));
      this.total+=this.cookies[i];

    }
  },

  render: function () {
    let parent = document.getElementById('parent');
    let nameElement = document.createElement('h2');
    parent.appendChild(nameElement);
    nameElement.textContent = this.name;
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);
    for(let i=0 ; i < hours.length ; i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent= `${hours[i]} : ${this.cookies[i]} cookies`;

    }

    let totall=document.createElement('li');
    ulElement.appendChild(totall);
    totall.textContent= `total : ${this.total} cookies.`;

  }

};

seattle.custPerHour1();
seattle.CookiesPerHour();
seattle.render();


let tokyo = {
  name: 'tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  total: 0,
  custPerHour: [],
  cookies: [],
  total :0,

  custPerHour1: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custPerHour.push(randomNumber(this.min, this.max));
    }
  },
  CookiesPerHour:function(){
    for(let i=0 ; i<hours.length ;i++){
      this.cookies.push(Math.floor(this.custPerHour[i]*this.avg));
      this.total+=this.cookies[i];

    }
  },

  render: function () {
    let parent = document.getElementById('parent');
    let nameElement = document.createElement('h2');
    parent.appendChild(nameElement);
    nameElement.textContent = this.name;
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);
    for(let i=0 ; i < hours.length ; i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent= `${hours[i]} : ${this.cookies[i]} cookies`;

    }

    let totall=document.createElement('li');
    ulElement.appendChild(totall);
    totall.textContent= `total : ${this.total} cookies.`;
  }

};

tokyo.custPerHour1();
tokyo.CookiesPerHour();
tokyo.render();

let dubai = {
  name: 'dubai',
  min: 11,
  max: 38,
  avg: 307,
  total: 0,
  custPerHour: [],
  cookies: [],
  total :0,

  custPerHour1: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custPerHour.push(randomNumber(this.min, this.max));
    }
  },
  CookiesPerHour:function(){
    for(let i=0 ; i<hours.length ;i++){
      this.cookies.push(Math.floor(this.custPerHour[i]*this.avg));
      this.total+=this.cookies[i];

    }
  },

  render: function () {
    let parent = document.getElementById('parent');
    let nameElement = document.createElement('h2');
    parent.appendChild(nameElement);
    nameElement.textContent = this.name;
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);
    for(let i=0 ; i < hours.length ; i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent= `${hours[i]} : ${this.cookies[i]} cookies`;

    }

    let totall=document.createElement('li');
    ulElement.appendChild(totall);
    totall.textContent= `total : ${this.total} cookies.`;
  }

};


dubai.custPerHour1();
dubai.CookiesPerHour();
dubai.render();



let paris = {
  name: 'paris',
  min: 20,
  max: 38,
  avg: 203,
  total: 0,
  custPerHour: [],
  cookies: [],
  total :0,

  custPerHour1: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custPerHour.push(randomNumber(this.min, this.max));
    }
  },
  CookiesPerHour:function(){
    for(let i=0 ; i<hours.length ;i++){
      this.cookies.push(Math.floor(this.custPerHour[i]*this.avg));
      this.total+=this.cookies[i];

    }
  },

  render: function () {
    let parent = document.getElementById('parent');
    let nameElement = document.createElement('h2');
    parent.appendChild(nameElement);
    nameElement.textContent = this.name;
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);
    for(let i=0 ; i < hours.length ; i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent= `${hours[i]} : ${this.cookies[i]} cookies`;

    }

    let totall=document.createElement('li');
    ulElement.appendChild(totall);
    totall.textContent= `total : ${this.total} cookies.`;

  }

};

paris.custPerHour1();
paris.CookiesPerHour();
paris.render();


let lima = {
  name: 'lima',
  min: 2,
  max: 16,
  avg: 4.6,
  total: 0,
  custPerHour: [],
  cookies: [],
  total :0,

  custPerHour1: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custPerHour.push(randomNumber(this.min, this.max));
    }
  },
  CookiesPerHour:function(){
    for(let i=0 ; i<hours.length ;i++){
      this.cookies.push(Math.floor(this.custPerHour[i]*this.avg));
      this.total+=this.cookies[i];

    }
  },

  render: function () {
    let parent = document.getElementById('parent');
    let nameElement = document.createElement('h2');
    parent.appendChild(nameElement);
    nameElement.textContent = this.name;
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);
    for(let i=0 ; i < hours.length ; i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent= `${hours[i]} : ${this.cookies[i]} cookies`;

    }

    let totall=document.createElement('li');
    ulElement.appendChild(totall);
    totall.textContent= `total : ${this.total} cookies.`;

  }

};

lima.custPerHour1();
lima.CookiesPerHour();
lima.render();

// let Seattle={
//   branchName: 'Seattle',
//   minCust:23,
//   maxCust:65,
//   avgCookies:6.3,
//   cust:0,
//   cust1: [],
//   custArr:function () {
//     for (let i= 0; i < hours.length; i++){
//       this.cust1.push(randomNumber(this.minCust,this.maxCust)*this.avgCookies);
//     }
//   }
// };
// Seattle.custArr();
// console.log( Seattle.cust1);

// // this is from w3schooles
// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }



// //console.log(seattle);
// //console.log(Seattle.cust);




// // this is from w3schooles
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// function LocationName(branchName, minCust, maxCust, avgCookie) {
//   this.branchName= branchName;
//   this.minCust=minCust;
//   this.maxCust=maxCust;
//   this.avgCookie=avgCookie;
//   this.customers=[];
//   this.cookies=[];
// }
// LocationName.prototype.cust1=function () {
//   for (let i= 0; i < hours.length; i++){
//     this.customers.push(random(this.minCust,this.maxCust));
//   }
// };
// LocationName.prototype.cookies1=function () {
//   for (let index = 0; index <hours.length; index++) {
//     this.cookies.push(Math.floor(this.customers[index]* this.avgCookie));
//   }
// };

// let seattle= new LocationName ('seattle', 23, 65, 6.3);
// seattle.cookies1();
// //seattle.cust1();
// console.log(seattle);

// //let parent=document.getElementById('parent');
