var button=document.querySelector(".page-header__toggle");
button.style.display="block";
var men=document.querySelector(".page-header");
men.classList.toggle("page-header--menu-closed");
button.addEventListener("click", function(){
  men.classList.toggle("page-header--menu-closed");
});