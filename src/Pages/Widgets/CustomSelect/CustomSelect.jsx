import $ from "jquery";
import "./CustomSelect.css";

const CustomSelect = (optionClass) => {
  var defaultOption = "custom-options";
  /* if (optionClass === "custom-options-width") {
    defaultOption = "custom-options custom-options-width";
  } */
  if (optionClass !== defaultOption) {
    defaultOption = "custom-options " + optionClass;
  }

  $(".custom-select").each(function () {
    var classes = $(this).attr("class");
    //   id = $(this).attr("id"),
    //   name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    var disabledClass =
      $(this).attr("disabled") === "disabled" ? "disabled" : "";
    template +=
      '<span class="custom-select-trigger ' +
      disabledClass +
      '">' +
      $(this).attr("placeholder") +
      "</span>";
    template += '<div class="' + defaultOption + '">';
    //template += '<div class="custom-options">';
    $(this)
      .find("option")
      .each(function () {
        template +=
          '<span class="custom-option ' +
          $(this).attr("class") +
          '" data-value="' +
          $(this).attr("value") +
          '">' +
          $(this).html() +
          "</span>";
      });
    template += "</div></div>";

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });

  $(".custom-option:first-of-type").hover(
    function () {
      $(this).parents(".custom-options").addClass("option-hover");
    },
    function () {
      $(this).parents(".custom-options").removeClass("option-hover");
    }
  );

  $(".custom-select-trigger").on("click", function () {
    $("html").one("click", function () {
      $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    window.event.stopPropagation();
  });
  $(".custom-option").on("click", function () {
    $(this)
      .parents(".custom-select-wrapper")
      .find("select")
      .val($(this).data("value"));
    $(this)
      .parents(".custom-options")
      .find(".custom-option")
      .removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this)
      .parents(".custom-select")
      .find(".custom-select-trigger")
      .text($(this).text());
  });
};

export default CustomSelect;
