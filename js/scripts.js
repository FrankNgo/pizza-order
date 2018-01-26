function Pizza(size){
  this.size = size;
  this.meatToppings;
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

Pizza.prototype.updateSum = function() {
  var total = 0;
  $("input:checkbox[name=meatToppings]:checked").each(function(i, n) {total += parseFloat($(n).val());})
  return total;
}

$(document).ready(function() {
  $("#pizza-order").submit(function(event){
    event.preventDefault();

    var size = $("#pizzaSize").val();
    var newOrder = new Pizza(size);
    var meaty = newOrder.updateSum();
    var pizzaPrice = "$" + (parseFloat(newOrder.sizePrice(size)) + meaty);

    $("#show-order").show();
    $(".size").text(newOrder.size);
    $(".meatToppings").text(newOrder.meatToppings);
    $(".pizzaPrice").text(pizzaPrice);

  });
});
