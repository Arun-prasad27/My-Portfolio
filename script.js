function toggleMenu(){
    //stored in a menu varibale
    var menu = document.querySelector(".menu-links");
    //stored in a icon varibale
    var icon = document.querySelector(".hamburger-icon");
    //creating a class for menu
    menu.classList.toggle("open");
    //creating a class for icon
    icon.classList.toggle("open");
}