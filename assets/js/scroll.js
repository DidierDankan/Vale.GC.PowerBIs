export function customScroll() {
  $(".withScroll").each(function () {
    $(this).mCustomScrollbar("destroy");
    var scroll_height = $(this).data("height")
      ? $(this).data("height")
      : "auto";
    var data_padding = $(this).data("padding") ? $(this).data("padding") : 0;
    if ($(this).data("height") == "window")
      scroll_height = $(window).height() - data_padding;
    $(this).mCustomScrollbar({
      scrollButtons: {
        enable: false,
      },
      autoHideScrollbar: true,
      scrollInertia: 150,
      theme: "dark-2",
      set_height: scroll_height,
      setLeft: "0px",
      advanced: {
        updateOnContentResize: true,
      },
    });
  });
}
