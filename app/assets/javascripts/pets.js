 // Place all the behaviors and hooks related to the matching controller here.
 // All this logic will automatically be available in application.js.
 // You can use CoffeeScript in this file: http://coffeescript.org/

var options = {
    item: 'pet-item'
};

var values = [
    { name: 'Pickles', age:'young' }
    , { name: 'Noodles', age:'old' }
];

var petsList = new List('pet-list', options, values);
