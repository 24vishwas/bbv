var navLinks = document.getElementById("nav-ele");
var open_menu = document.getElementById("open-menu");
var close_menu = document.getElementById("close-menu");

// console.log("hi")
function openMenu(){
    // navLinks.style.right = "0px";
    navLinks.style.transform = "translateX(0%)";
    open_menu.style.display ="none" 
    close_menu.style.display = 'inline-block'




}
function hideMenu(){
    // navLinks.style.right = "-220px";
    navLinks.style.transform = "translateX(100%)";
    close_menu.style.display = "none"
    open_menu.style.display = "inline-block"
}