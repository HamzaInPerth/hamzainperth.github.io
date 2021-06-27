("use strict");

// VARIABLE
var title = document.querySelector("#title");

// HEIGHT OF DOM
var screenHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

// DISPLAY PHONE NUMBER
var phone = document.querySelector("#phone");
phone.addEventListener("click", function () {
  part1 = "(+33) 07 49 ";
  part2 = "03 00 03";
  phone.innerHTML = part1 + part2;
});

//HEIGHT OF DOM (ONRESIZE)
window.onresize = function () {
  screenHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
};

function effectOnWorkItem() {
  if (window.innerWidth < 900) {
    var workItem = document.querySelectorAll(".work-item");
    Array.prototype.forEach.call(workItem, (e) => {
      sections[e.id] = e.offsetTop - screenHeight / 2;
    });
  }
}

section = document.querySelectorAll(".sections");
title = document.querySelector("#titletext");
let sections = {};
Array.prototype.forEach.call(section, (e) => {
  sections[e.id] = e.offsetTop - screenHeight / 2;
});

effectOnWorkItem();

addEventListener("resize", effectOnWorkItem);

// ONSCROLL CHANGE COLOR OF ACTIVE LINK
window.onscroll = () => {
  var scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollPosition <= 100) {
    titleOpacity = 1 - scrollPosition / 100;
    title.style.opacity = titleOpacity;
  }

  for (i in sections) {
    if (sections[i] <= scrollPosition) {
      document.querySelector(".active-link").classList.remove("active-link");
      document
        .querySelector("a[href*=" + i + "]")
        .classList.add("class", "active-link");
    }
  }
};
