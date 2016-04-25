var link = document.querySelector(".user-block .login");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var map = document.querySelector(".modal-content-map");
var overlay = document.querySelector(".overlay");
var mapOpen = document.querySelector(".btn-map");
var mapClose = map.querySelector(".modal-content-close");
var mapLink = document.querySelector(".footer-contacts-map-link");

link.addEventListener("click",function(event){
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-content-show");
});

close.addEventListener("click",function(event){
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-content-show");
});

overlay.addEventListener("click",function(event){
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-content-show");
  map.classList.remove("modal-content-show");
});

mapClose.addEventListener("click",function(event){
  event.preventDefault();
  overlay.classList.remove("modal-content-show");
  map.classList.remove("modal-content-show");
});

mapLink.addEventListener("click",function(event){
  event.preventDefault();
  map.classList.add("modal-content-show");
  overlay.classList.add("modal-content-show");
});

mapOpen.addEventListener("click",function(event){
  event.preventDefault();
  overlay.classList.add("modal-content-show");
  map.classList.add("modal-content-show");
});
