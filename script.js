/* =====================================
   ELEMENTS
===================================== */

const menuButton = document.getElementById("menu-button");
const navigation = document.querySelector("nav");



/* =====================================
   MOBILE MENU
===================================== */

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("menu-open");

});
