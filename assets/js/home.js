const nav = document.getElementById("nav");
const menu = document.getElementById("btn-toggle");
const menulist = nav.getElementsByClassName("menu").item(0);
const buttonnav = nav.getElementsByClassName("button-navbar").item(0);
menu.onclick = () => {
  if (menulist.getAttribute("style")) {
    menulist.removeAttribute("style");
  } else {
    menulist.setAttribute("style", "display: unset !important");
  }
  if (buttonnav.getAttribute("style")) {
    buttonnav.removeAttribute("style");
  } else {
    buttonnav.setAttribute("style", "display: unset !important");
  }
};
