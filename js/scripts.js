// Business (or back-end) logic:
var add = function(number1, number2, number3, number4) {
  return number1 + number2 + number3 + number4;
};

// Everything below this line is user interface (or front-end) logic:
$(document).ready(function() {
 $("form#quiz").submit(function(event) {
   event.preventDefault();

   var age = parseInt($("#age").val());
   var pet = parseInt($("#pet").val());
   var weapon = parseInt($("#weapon").val());
   var climate = parseInt($("input:radio[name=climate]:checked").val());

   console.log(age);
   console.log(pet);
   console.log(weapon);
   console.log(climate);

   var result = add(age, pet, weapon, climate);

   if (result >= 4 && result <=7) {
     $("#daenerys").hide();
     $("#jon").hide();
     $("#lannisters").hide();
     $("#arya").show();
   } else if (result >=8 && result <=11) {
     $("#arya").hide();
     $("#jon").hide();
     $("#lannisters").hide();
     $("#daenerys").show();
   } else if (result >=12 && result <=14) {
     $("#daenerys").hide();
     $("#arya").hide();
     $("#lannisters").hide();
     $("#jon").show();
   } else if (result === 15 || result === 16) {
     $("#daenerys").hide();
     $("#jon").hide();
     $("#arya").hide();
     $("#lannisters").show();
   }

 });
});
