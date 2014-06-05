 // Place all the behaviors and hooks related to the matching controller here.
 // All this logic will automatically be available in application.js.
 // You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready(function() {
  var petsList = new List('pet-list', options);

})

var options = {
  valueNames: [ 'name', 'age', 'size', 'species' ],
  page: 25,
      plugins: [
        ListPagination({})
      ]
};

