function Pizza(size, meatToppings){
  this.size = size;
  this.meatToppings = meatToppings;
}

price = function(x,y){
  var p = 1
  if(x === "Small"){
    p = p * 1;
  } else if (x === "Medium"){
    p = p * 1.25;
  } else if( x === "Large"){
    p = p * 1.5;
  } else if( x === "Extra Large"){
    p = p * 1.75;
  } else{
    alert("Please select a size");
  }

  if(y === "Pepperoni"){
    p = p + 1;
  } else if (y === "Sausage"){
    p = p + 1.25;
  } else if (y === "Chicken"){
    p = p + 1.50;
  } else if (y === "Ham"){
    p = p + 1.50;
  } else{
    alert("Please select a meat");
  }

  return p + 6;
}



$(document).ready(function() {
  $("#pizza-order").submit(function(event){
    event.preventDefault();

    var size = $("#pizzaSize").val();
    var meatToppings = $("#meatToppings").val();
    var newOrder = new Pizza(size, meatToppings);
    var pizzaPrice = "$" + price(size, meatToppings)

    $("#show-order").show();
    $(".size").text(newOrder.size);
    $(".toppings").text(newOrder.meatToppings);
    $(".pizzaPrice").text(pizzaPrice);






  });
});
