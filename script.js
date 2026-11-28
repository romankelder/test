(function(){
"use strict";
var search=document.getElementById("search");
var cards=Array.from(document.querySelectorAll(".product"));
var filters=Array.from(document.querySelectorAll(".filter"));
var empty=document.getElementById("empty-state");
var active="All";
var cart={};
var products=[{id:"tretinoin",name:"Tretinoin",price:129},{id:"azelaic",name:"Azelaic Acid",price:179},{id:"minoxidil",name:"Minoxidil",price:199},{id:"niacinamide",name:"Niacinamide",price:149},{id:"adapalene",name:"Adapalene",price:139},{id:"ketoconazole",name:"Ketoconazole Shampoo",price:159},{id:"spf",name:"Broad-Spectrum SPF 50",price:189},{id:"cleanser",name:"Gentle Cleanser",price:119}];
var modal=document.getElementById("checkout-modal");
var cartLines=document.getElementById("cart-lines");
function totalCount(){return Object.keys(cart).reduce(function(n,id){return n+cart[id];},0);}
function renderCart(){var count=totalCount(),total=0;document.getElementById("cart-count").textContent=count;cartLines.innerHTML="";products.forEach(function(p){var qty=cart[p.id]||0;if(!qty)return;total+=p.price*qty;var line=document.createElement("div");line.className="cart-line";var info=document.createElement("div");var name=document.createElement("strong");name.textContent=p.name;var sub=document.createElement("small");sub.textContent=p.price+" kr · demo value";info.append(name,sub);var controls=document.createElement("div");controls.className="qty-controls";var minus=document.createElement("button");minus.type="button";minus.textContent="−";minus.setAttribute("aria-label","Remove one "+p.name);minus.addEventListener("click",function(){cart[p.id]--;if(cart[p.id]<=0)delete cart[p.id];renderCart();});var amount=document.createElement("span");amount.textContent=qty;var plus=document.createElement("button");plus.type="button";plus.textContent="+";plus.setAttribute("aria-label","Add one "+p.name);plus.addEventListener("click",function(){cart[p.id]++;renderCart();});controls.append(minus,amount,plus);line.append(info,controls);cartLines.appendChild(line);});if(!count){var emptyLine=document.createElement("p");emptyLine.textContent="Your bag is empty.";emptyLine.style.color="#9da9b7";cartLines.appendChild(emptyLine);}document.getElementById("cart-total").textContent=total+" kr";document.getElementById("simulate-payment").disabled=!count;document.getElementById("simulate-payment").style.opacity=count?"1":".45";}
function openCart(){modal.hidden=false;document.body.style.overflow="hidden";renderCart();document.getElementById("checkout-confirmation").hidden=true;}
function closeCart(){modal.hidden=true;document.body.style.overflow="";}
document.getElementById("open-cart").addEventListener("click",openCart);document.getElementById("close-checkout").addEventListener("click",closeCart);modal.addEventListener("click",function(event){if(event.target===modal)closeCart();});
document.addEventListener("keydown",function(event){if(event.key==="Escape"&&!modal.hidden)closeCart();});
document.getElementById("simulate-payment").addEventListener("click",function(){document.getElementById("checkout-confirmation").hidden=false;cart={};renderCart();});
products.forEach(function(p){var card=document.querySelector(".product[data-search*=\""+p.id+"\"]");if(!card){card=Array.from(cards).find(function(c){return c.querySelector("h3").textContent.toLowerCase().replace(/[^a-z]/g,"").includes(p.name.toLowerCase().replace(/[^a-z]/g,""));});}if(!card)return;var foot=card.querySelector(".product-foot");var row=document.createElement("div");row.className="price-row";var price=document.createElement("span");price.className="demo-price";price.textContent=p.price+" kr";var add=document.createElement("button");add.className="add-button";add.type="button";add.textContent="Add to bag +";add.addEventListener("click",function(){cart[p.id]=(cart[p.id]||0)+1;renderCart();add.textContent="Added ✓";setTimeout(function(){add.textContent="Add to bag +";},900);});row.append(price,add);foot.parentNode.insertBefore(row,foot.nextSibling);});
renderCart();
function apply(){
 var term=search.value.trim().toLowerCase(),visible=0;
 cards.forEach(function(card){
  var matchesCategory=active==="All"||card.dataset.category===active;
  var matchesTerm=!term||card.dataset.search.includes(term)||card.textContent.toLowerCase().includes(term);
  card.hidden=!(matchesCategory&&matchesTerm);if(!card.hidden)visible++;
 });
 empty.hidden=visible!==0;
}
filters.forEach(function(button){button.addEventListener("click",function(){
 active=button.dataset.filter;
 filters.forEach(function(item){item.classList.toggle("active",item===button);});
 apply();
});});
search.addEventListener("input",apply);
document.querySelectorAll(".info-btn").forEach(function(button){button.addEventListener("click",function(){
 var panel=document.getElementById("detail-"+button.dataset.info);
 var opening=panel.hidden;panel.hidden=!opening;button.textContent=opening?"Details −":"Details +";
});});
})();