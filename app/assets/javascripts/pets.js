 // Place all the behaviors and hooks related to the matching controller here.
 // All this logic will automatically be available in application.js.
 // You can use CoffeeScript in this file: http://coffeescript.org/

var options = {
  valueNames: ['name'],
  item: '<li><h3 class="name"></h3><p class="born"></p></li>'
};

var values = [
    { name: 'Pickles', age:'young' }
    , { name: 'Noodles', age:'old' }
];

var petsList = new List('pet-list', options, values);

petsList.add({
    name: "Gustaf Lindqvist",
    age: 'old'
  })

// var options = {
//   valueNames: [ 'name', 'born' ],
//   item: '<li><h3 class="name"></h3><p class="born"></p></li>'
// };

// var values = [{
//     name: 'Jonny Strömberg',
//     born: 1986
//   },
//   {
//     name: 'Jonas Arnklint',
//     born: 1985
//   },
//   {
//     name: 'Martina Elm',
//     born: 1986
// }];

// var userList = new List('users', options, values);

// userList.add({
//   name: "Gustaf Lindqvist",
//   born: 1983
// });
