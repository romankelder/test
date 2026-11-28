(function(){
"use strict";
var search=document.getElementById("search");
var cards=Array.from(document.querySelectorAll(".product"));
var filters=Array.from(document.querySelectorAll(".filter"));
var empty=document.getElementById("empty-state");
var active="All";
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