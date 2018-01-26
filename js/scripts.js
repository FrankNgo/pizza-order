function Pizza(size){
  this.size = size;
  this.meatToppings;
}

Pizza.prototype.sizePrice = function(size) {
  var base = 1
  if(size === "Small"){
    base = base * 1;
  } else if (size === "Medium"){
    base = base * 1.25;
  } else if( size === "Large"){
    base = base * 1.5;
  } else if( size === "Extra Large"){
    base = base * 1.75;
  } else {
    alert("Please select a size");
  }
  return base * 6;
}

Pizza.prototype.meatPrice = function() {
  var total = 0;
  $("input:checkbox[name=meatToppings]:checked").each(function(i, n) {
    total += parseFloat($(n).val());
  })
  return total;
}

$(document).ready(function() {
  $("#pizza-order").submit(function(event){
    event.preventDefault();

    var size = $("#pizzaSize").val();
    var newOrder = new Pizza(size);
    var meatPrice = newOrder.meatPrice();
    var pizzaPrice = "$" + (parseFloat(newOrder.sizePrice(size)) + meatPrice);

    $("#show-order").show();
    $(".size").text(newOrder.size);
    $(".pizzaPrice").text(pizzaPrice);

  });
});
