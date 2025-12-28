// const add = (a, b, callback) => {
//   const result = a + b;
//   callback(result);
// };

// add(3, 10098, (result) => {
//   console.log("Addition successful:", result);
// });

// const fs = require("fs");
// const os = require("os");

// const user = os.userInfo();
// console.log(user);
// console.log("Current user info:", user.username);

// fs.appendFile("user.txt", `Logged in user: ${user.username}`, (err) => {
//   if (err) throw err;
//   console.log("Username written to file");
// });
// console.log(os);
// console.log(fs);

// const notes = require("./notes.js");

// console.log(notes);
// var age =notes.age;
// console.log(age);
// console.log('Result is now :'+notes.addnumber(5,6));
// console.log(notes.person);


// var _=require('lodash');
// const arr = [1, 2, 2, 3, 4, 4, 5,6,7,8];
// const result = _.chunk(arr, 2);
// console.log(result);
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log(_.uniq(numbers));
// console.log(_.capitalize("node js is powerful"));
// console.log(_.isArray(arr));


// const data = {
//   name: "Afraj",
//   role: "Node Learner"
// };

// const jsonData = JSON.stringify(data);
// console.log(jsonData);
// console.log(typeof jsonData);

// const objData = JSON.parse(jsonData);
// console.log(objData);
// console.log(typeof objData);


const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World 3000!');
});


app.get('/chicken', (req, res) => {
  res.send('Welcome to the Chicken page!');
});


app.get('/DOSA', (req, res) => {
  res.send('Welcome to the DOSA page!');
});

app.get('/idli', (req, res) => {
  var idliMenu = {
    name: "Idli",
    price: 30,
    type: "Breakfast"
  }
  res.send(idliMenu)
});
app.get('/daal', (req, res) => {
  var daalMenu = {
    name: "DAAL",
    price: 30,
    type: "DInner"
  }
  res.send(daalMenu)
});

app.post('/person', (req, res) => {
  res.send('POST request to the /person endpoint');
  res.end();
});
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


console.log("Server.js is running");

