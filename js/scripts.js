function Pizza(){
  this.toppings = 0;
  this.size = 0;
}

Pizza.prototype.order = function(){
  return this.toppings + " , " + this.size;
}

price = function(x,y){
  var basePrice = 1
  if(x === "Small"){
    p = p * 1;
  } else if (x === "Medium"){
    p = p * 1.25;
  } else if( x === "Large"){
    p = p * 1.5;
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
}



$(document).ready(function() {
  $("button#placeOrder").submit(function(event){
    event.preventDefault();







  });
});
