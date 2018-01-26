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
  var sum = 0;
  $("input[name=meatToppings]:checked").each(function(){
    sum += parseInt($(this).attr("rel"));
  });
  alert(sum);
}


$(document).ready(function() {
  $("#pizza-order").submit(function(event){
    event.preventDefault();

    var size = $("#pizzaSize").val();
    $("input:checkbox[name=meatToppings]:checked").change(function(){
       newOrder.meatPrice(meatToppings);
    });
    newOrder.meatPrice(meatToppings);
    var newOrder = new Pizza(size, meatToppings);
    var pizzaPrice = "$" + (parseFloat(newOrder.sizePrice(size)) + parseFloat(newOrder.meatPrice(meatToppings)));

    $("#show-order").show();
    $(".size").text(newOrder.size);
    $(".meatToppings").text(newOrder.meatToppings);
    $(".pizzaPrice").text(pizzaPrice);

  });
});
