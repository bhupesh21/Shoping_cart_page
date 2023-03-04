var product_amnt=document.getElementById('product_total');
var Shipping_amnt=document.getElementById('shipping_charge');
var total=document.getElementById('total_cart_amt');

  function decrease(indec,itemprice){
      var decrement=document.getElementById(indec);
     
      var itemprice=document.getElementById(itemprice);

      
      if(decrement.value<=0){
          decrement.value=0;
          alert("Neagtive value not allowed");
      }
      else{
          decrement.value=parseInt(decrement.value)-1;
          decrement.style.background='white';
          itemprice.innerHTML=parseInt( itemprice.innerHTML)-15;
          product_amnt.innerHTML=parseInt( product_amnt.innerHTML)-15;
          total.innerHTML=parseInt( product_amnt.innerHTML)+parseInt( Shipping_amnt.innerHTML);
      }
      if(decrement.value==2){
      document.getElementById("Delivery-section").innerHTML="March 5 2023 -7March 2023"
  }
  if(decrement.value==4){
      document.getElementById("Delivery-section").innerHTML="March 10 2023 -15March 2023"
  }
  if(decrement.value==7){
      document.getElementById("Delivery-section").innerHTML="March 15 2023 -25March 2023"
  }
  

 
  }
  function increase(indec,itemprice){
      var increment=document.getElementById(indec);
      var itemprice=document.getElementById(itemprice);
      if(increment.value>=10){
          increment.value=10;
          alert("maximum 10 item allowed");
          increment.style.background='red';

       
  }
  else{
          increment.value=parseInt(increment.value)+1;
          itemprice.innerHTML=parseInt( itemprice.innerHTML)+15;
          product_amnt.innerHTML=parseInt( product_amnt.innerHTML)+15;
          total.innerHTML=parseInt( product_amnt.innerHTML)+parseInt( Shipping_amnt.innerHTML);
  }
  var increment=document.getElementById(indec);
  if(increment.value>=2){
      document.getElementById("Delivery-section").innerHTML="March 10 2023 -15March 2023"
  }
  if(increment.value>=5){
      document.getElementById("Delivery-section").innerHTML="March 15 2023 -25March 2023"
  }
  if(increment.value>=8){
      document.getElementById("Delivery-section").innerHTML="March 25 2023 - April 15 2023"
  }
}
function check(){
  var x = document.getElementById("Delivery-section");
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}