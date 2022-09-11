// mobile nav

const nav = document.querySelector("nav ul");
const menuIcon = document.querySelector(".open-menu");
const closeIcon = document.querySelector(".close-menu");

menuIcon.addEventListener("click", () => {
  nav.classList.add("active");
  closeIcon.classList.add("active");
  menuIcon.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  nav.classList.remove("active");
  closeIcon.classList.remove("active");
  menuIcon.classList.remove("active");
});

// scroll nav

const navScroll = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 60) {
    navScroll.classList.add("active");
  } else {
    navScroll.classList.remove("active");
  }
});

// filter

let filterContainer = document.querySelector(".pricing-filter");
let pricingItems = document.querySelectorAll(".box");

filterContainer.addEventListener("click", () => {
  if (event.target.classList.contains("filter-item")) {
    filterContainer.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    let filterValue = event.target.getAttribute("data-filter");
    pricingItems.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});

// class change when window width < 1336

const boxes = document.querySelectorAll('.box');
const windowInnerWidth = width=>window.innerWidth < width

const toggleClassNameHandler = (classOne, classTwo) => {
  return (
     boxes.forEach(box => {
       box.classList.add(classOne);
       box.classList.remove(classTwo);
    })
  )
}

const toggleInnerWidthHandler = () => {
    if (windowInnerWidth(1336)) {
       toggleClassNameHandler('up', 'down')
       return;
    }
     toggleClassNameHandler('down', 'up')
}  

window.addEventListener('resize', toggleInnerWidthHandler) 
