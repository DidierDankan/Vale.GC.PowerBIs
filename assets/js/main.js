import { appendMenuChilds, toggleSidebar } from "./menu.js";
import { customScroll } from "./scroll.js";
import { handleBi } from "./bi.js";

var is_first = true;

jQuery(document).ready(function () {
  appendMenuChilds();

  $("#sidebarCollapse").on("click", function () {
    $("#sidebar, #content").toggleClass("active");
    $("#navbar").collapse();
  });

  $("#sidebarClose").on("click", function () {
    toggleSidebar();
  });  

  // Javascript to enable link to tab
  var hash = document.location.hash;
  if (hash) {
    let src = $('a[href="' + hash + '"]').last().data("src");
    if (
      $("a[data-src='" + src + "']")
        .first()
        .parent("li")
        .hasClass("clicked")
    ) {
      return;
    }

    handleBi(true, src);

    $("a[data-src='" + src + "']")
      .first()
      .parent("li")
      .addClass("clicked");

    is_first ? null : $('a[href="' + hash + '"]').last().parent().removeClass("clicked");
    is_first = false;

    $('a[href="' + hash + '"]').first().parent().addClass("clicked");
  }

  $(window).on('hashchange', function() {
    hash = document.location.hash;
    if (hash) {
      let src = $('a[href="' + hash + '"]').last().data("src");
      if (
        $("a[data-src='" + src + "']")
          .first()
          .parent("li")
          .hasClass("clicked")
      ) {
        return;
      }
  
      handleBi(true, src);
  
      $("a[data-src='" + src + "']")
        .first()
        .parent("li")
        .addClass("clicked");
  
      is_first ? null : $('.clicked').removeClass("clicked");
      is_first = false;
  
      $('a[href="' + hash + '"]').first().parent().addClass("clicked");
    }
  });
 
  $(".close-bi").on("click", function () {
    handleBi(false);
  });
});

/****  On Resize Functions  ****/
$(window).bind("resize", function (e) {
  window.resizeEvt;
  $(window).resize(function () {
    clearTimeout(window.resizeEvt);
    window.resizeEvt = setTimeout(function () {
      customScroll();
    }, 250);
  });
});
