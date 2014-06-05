 // Place all the behaviors and hooks related to the matching controller here.
 // All this logic will automatically be available in application.js.
 // You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready(function() {
  var petsList = new List('pet-list', options);


  $('input:radio[value="Young"]').click(function(){
    petsList.filter(function(item){
       if (item.values().age === "Age: Young ") {
           return true;
       }
       else {
          return false;
       }
    });
    return false;
  });

  $('input:radio[value="Senior"]').click(function(){
    petsList.filter(function(item) {
      if (item.values().age == "Age: Senior "){
        return true;
      }
      else {
        return false;
      }
    })
    return false;
  });

  $('input:radio[value="Adult"]').click(function(){
    petsList.filter(function(item) {
      if (item.values().age == "Age: Adult "){
        return true;
      }
      else {
        return false;
      }
    })
    return false;
  });


});

var options = {
  valueNames: [ 'name', 'age', 'size', 'species' ],
  page: 25,
      plugins: [
        ListPagination({})
      ]
};

