const plusButton = document.querySelectorAll(".plus");
const minusButton = document.querySelectorAll(".minus");
const priceOfItem = document.querySelectorAll(".unitPrice");
let sumTotal = document.querySelector("#total");
const quantities = document.querySelectorAll(".qte");
const priceOfMany = document.querySelectorAll(".price");
const row=document.querySelectorAll(".row")
const RemoveButton = document.querySelectorAll(".delete");
const HeartButton=document.querySelectorAll('.like')

for (let i = 0; i < plusButton.length; i++) {
  plusButton[i].addEventListener("click", function () {
    quantities[i].innerHTML++;
    priceOfMany[i].innerHTML =
      parseInt(priceOfItem[i].innerHTML) * parseInt(quantities[i].innerHTML);
    console.log(priceOfMany[i]);
    sumTotal.innerHTML =parseInt(sumTotal.innerHTML )+parseInt(priceOfItem[i].innerHTML)
   
  });
}

for (let j = 0; j < minusButton.length; j++){
  minusButton[j].addEventListener("click", function () {
    if (quantities[j].innerHTML>0){
      quantities[j].innerHTML--
      sumTotal.innerHTML =parseInt(sumTotal.innerHTML)-parseInt(priceOfItem[j].innerHTML) 
    }
    
  });
}

for (let z=0;z<RemoveButton.length;z++){
  RemoveButton[z].addEventListener('click',function(){
      row[z].remove();
      sumTotal.innerHTML =parseInt(sumTotal.innerHTML) - parseInt(priceOfItem[z].innerHTML)* parseInt(quantities[z].innerHTML);  
  })
}

function setColor(e) {
  var target = e.target,
      status = e.target.classList.contains('active');
  
  e.target.classList.add(status ? 'inactive' : 'active');
  e.target.classList.remove(status ? 'active' : 'inactive');
}