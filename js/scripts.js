function Pizza(size){
  this.size = size;
  this.meatToppings;
}

Pizza.prototype.sizePrice = function(size) {
  var base = 1
  if(size === "Small ($6)"){
    base = base * 1;
  } else if (size === "Medium ($7.50"){
    base = base * 1.25;
  } else if( size === "Large ($9)"){
    base = base * 1.5;
  } else if( size === "Extra Large ($10.50)"){
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

Pizza.prototype.veggiePrice = function() {
  var total = 0;
  $("input:checkbox[name=veggieToppings]:checked").each(function(i, n) {
    total += parseFloat($(n).val());
  })
  return total;
}

Pizza.prototype.crustPrice = function() {
  var total = 0;
  $("input:checkbox[name=crustToppings]:checked").each(function(i, n) {
    total += parseFloat($(n).val());
  })
  return total;
}

Pizza.prototype.finishPrice = function() {
  var total = 0;
  $("input:checkbox[name=finishToppings]:checked").each(function(i, n) {
    total += parseFloat($(n).val());
  })
  return total;
}


$(document).ready(function() {
  $("#delivery-form").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var address = $("input#address").val();
    var apt = $("input#apt").val();
    var zipCode = $("input#zipCode").val();
    var phoneNumber = $("input#phoneNumber").val();

    $("#address-form").hide();
    $("#pizza-form").fadeIn();

    $(".name").text(name);

  });
  $("#pizza-order").submit(function(event){
    event.preventDefault();

    var size = $("#pizzaSize").val();
    var newOrder = new Pizza(size);
    var meatPrice = newOrder.meatPrice();
    var veggiePrice = newOrder.veggiePrice();
    var crustPrice = newOrder.crustPrice();
    var finishPrice = newOrder.finishPrice();
    var pizzaPrice = "$" + parseFloat((newOrder.sizePrice(size)) + meatPrice + veggiePrice + crustPrice + finishPrice).toFixed(2);

    $("#pizza-form").hide();
    $("#show-order").fadeIn();

    $(".pizzaTotal").text(pizzaPrice);
    $("#name").text(name);
    $("#fullAddress").text(address);
  });
});
