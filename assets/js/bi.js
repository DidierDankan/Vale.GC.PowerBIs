import { toggleSidebar } from "./menu.js";

export function handleBi(state, target) {
  if (state) {
    $("#bi-iframe").removeClass("bi-active");
    $("#bi-iframe").attr("src", target);
    $("#bi-loading").removeClass("bi-active");
    $("#content-nav").removeClass("bi-active");
    $("#sidebarClose").removeClass("bi-active");
    $("#principal-menu").addClass("bi-active");
    toggleSidebar(true);
  } else {
  }
}
