//business logic
  var add = function(number1, number2) {
  return number1 + number2;
  };
  var subtract = function(number1, number2) {
  return number1 - number2;
  };
  var multiply = function(number1, number2) {
  return number1 * number2;
  };
  var divide = function(number1, number2) {
  return number1 / number2;
  };
  //user interface
  $(document).ready(function() {
    $("form#add").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#add1").val());
      var number2 = parseInt($("#add2").val());
      var result = add(number1, number2);
      $("#output").text(result);
    });
    $("form#minus").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#minus1").val());
      var number2 = parseInt($("#minus2").val());
      var result = subtract(number1, number2);
      $("#output1").text(result);
    });
    $("form#divide").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#divide1").val());
      var number2 = parseInt($("#divide2").val());
      var result = divide(number1, number2);
      $("#output2").text(result);
    });
    $("form#multipy").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#multiply1").val());
      var number2 = parseInt($("#multiply2").val());
      var result = multiply(number1, number2);
      $("#output3").text(result);
    });

  });

 

