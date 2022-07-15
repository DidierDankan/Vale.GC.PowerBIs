import { customScroll } from "./scroll.js";
import { database } from "./db.js";

function createMenuAnchor(d) {
  let a = document.createElement("a");
  let i = document.createElement("i");
  i.className = "fa-solid fa-chevron-right";
  a.textContent = d.name;
  a.href = "#" + d.hash;
  a.dataset.src = d.src;
  a.className = "subMenu nav-link";
  a.appendChild(i);
  return a;
}

function createMenuImg(d) {
  let img = document.createElement("img");
  img.src = d.img[0];
  return img;
}

function createMenuImgLink(d) {
  let anchor = document.createElement("a");
  anchor.className = "nav-link";
  anchor.dataset.src = d.src;
  anchor.href = "#" + d.hash;

  let div = document.createElement("div");
  div.className = "menuImgs";

  let imgOFF = document.createElement("img");
  imgOFF.src = d.img[0];
  imgOFF.className = "menuImg";

  let imgON = document.createElement("img");
  imgON.src = d.img[1];
  imgON.className = "menuImgHover";

  div.append(imgOFF);
  div.append(imgON);

  anchor.append(div);

  return anchor;
}

function createMenuItem(d) {
  let li = document.createElement("li");
  let isCategory = d.type.includes("category");
  let isCategoryLink = d.type.includes("category-link");
  li.className = isCategory ? "isCategory homeMenu" : "homeMenu";

  if (isCategory) {
    if (isCategoryLink) {
      let imgLink = createMenuImgLink(d);
      li.appendChild(imgLink);
    } else {
      let img = createMenuImg(d);
      li.appendChild(img);
    }
  } else {
    let anchor = createMenuAnchor(d);
    li.appendChild(anchor);
  }
  return li;
}

export function appendMenuChilds() {
  const pmenu = document.querySelector("#principal-menu");
  const smenu = document.querySelector("#side-menu");
  database.forEach((d) => {
    pmenu.appendChild(createMenuItem(d));
    smenu.appendChild(createMenuItem(d));
  });

  customScroll();
}

export function toggleSidebar(state) {
  if (state) {
    $("#sidebar, #content").removeClass("active");
    $("#navbar").collapse();
    $("#side-c-1").addClass("bi-active");
    $(".content").addClass("no-bg");
    $("#side-c-2").removeClass("bi-active");
    return;
  }
  $(".content").toggleClass("no-bg");
  $("#side-c-1").toggleClass("bi-active");
  $("#side-c-2").toggleClass("bi-active");

  $("#sidebar, #content").toggleClass("active");
  $("#navbar").collapse();
}
