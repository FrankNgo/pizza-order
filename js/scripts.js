function Pizza(size, meatToppings){
  this.size = size;
  this.meatToppings = meatToppings;
}

Pizza.prototype.sizePrice = function(size) {
  var p = 1
  if(size === "Small"){
    p = p * 1;
  } else if (size === "Medium"){
    p = p * 1.25;
  } else if( size === "Large"){
    p = p * 1.5;
  } else if( size === "Extra Large"){
    p = p * 1.75;
  } else {
    alert("Please select a size");
  }
  return p * 6;
}

Pizza.prototype.meatPrice = function(meatToppings) {
  var d = 0;
  if(meatToppings === "Pepperoni"){
    d = d + 1;
  } else if (meatToppings === "Sausage"){
    d = d + 1.25;
  } else if (meatToppings === "Chicken"){
    d = d + 1.50;
  } else if (meatToppings === "Ham"){
    d = d + 1.50;
  }  else if (meatToppings === "Bacon"){
      d = d + 1.75;
  } else {
    alert("Please select a meat");
  }
  return d;
}


$(document).ready(function() {
  $("#pizza-order").submit(function(event){
    event.preventDefault();

    var size = $("#pizzaSize").val();
    var meatToppings = $("#meatToppings").val();
    var newOrder = new Pizza(size, meatToppings);
    var pizzaPrice = "$" + (parseFloat(newOrder.sizePrice(size)) + parseFloat(newOrder.meatPrice(meatToppings)));

    $("#show-order").show();
    $(".size").text(newOrder.size);
    $(".meatToppings").text(newOrder.meatToppings);
    $(".pizzaPrice").text(pizzaPrice);

  });
});
