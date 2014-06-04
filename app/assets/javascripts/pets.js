 // Place all the behaviors and hooks related to the matching controller here.
 // All this logic will automatically be available in application.js.
 // You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready(function() {
  var petsList = new List('pet-list', options);

  // petsList.add({
  //   name: "bill",
  //   age: 'young',
  //   size: 'l',
  //   species: 'dog'
  // })
})

var options = {
  valueNames: [ 'name', 'age', 'size', 'species' ],
  item: '<li><h3 class="name"></h3><p class="age"></p><p class="size"></p><p class="species"></p></li>'
};

// var values = [
//     { name: 'Pickles', age:'young', size: 's', species: 'cat' }
//     , { name: 'Noodles', age:'old', size: 'm', species: 'dog' }
// ];



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
