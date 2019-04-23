var Pretty = require('pretty');
var Prism = require('prismjs');
require('prismjs/components/prism-sass');

const copyToClipboard = str => {
  const el = document.createElement('textarea'); // Create a <textarea> element
  el.value = str; // Set its value to the string that you want copied
  el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
  el.style.position = 'absolute';
  el.style.left = '-9999px'; // Move outside the screen to make it invisible
  document.body.appendChild(el); // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection().rangeCount > 0 // Check if there is any content selected previously
    ?
    document.getSelection().getRangeAt(0) // Store selection if found
    :
    false; // Mark as false to know no selection existed before
  el.select(); // Select the <textarea> content
  document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el); // Remove the <textarea> element
  if (selected) { // If a selection existed before copying
    document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
    document.getSelection().addRange(selected); // Restore the original selection
  }
};

const swapStyleSheet = id => {
  document.getElementById("pagestyles").setAttribute("href", id);
};

const initate = () => {
  console.log("Script Initialized");
  var toggle = document.getElementById("style-switch");
  toggle.onchange = function (e) {
    if (e.target.checked) {
      swapStyleSheet("../assets/ether-dark.min.css");
    } else {
      swapStyleSheet("../assets/ether.min.css");
    }
  };
};

const PrevNext = (current, future) => {
  var list = [];
  //find current
  // href current + 1 or current - 1;
}
$(document).ready(function () {
  $(".guide-code").each(function (i, block) {
    var prev_html = Pretty($(block).prev().html());
    var html_code = Prism.highlight(prev_html, Prism.languages.markup, "markup");
    var elem = $("<pre>").html(html_code).appendTo("<code>");
    $(block).append(elem);
  });

  $(".guide-copy-code,.guide-code").on("click", (e) => {
    var str = $(e.currentTarget).siblings(".guide-sample").html();
    copyToClipboard(str);
    // Get the snackbar DIV
    var snack = $("#snackbar");

    // Add the "show" class to DIV
    snack.text("Code copied to clipboard.").addClass("show");

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      snack.removeClass("show");
    }, 3000);
  });

  const close_popovers = () => {
    $(".hover-dimensions").find('*').removeClass("pop-highlight").popover("dispose");
  };

  $(".hover-dimensions").find('*').not('p').not('div').on("mouseenter", (e) => {
    close_popovers();
    var elem = $(e.currentTarget);
    elem.addClass("pop-highlight");
    var pop = elem.popover({
      placement: "top",
      content: `
        <p class="small text-primary font-weight-bold m-0">${elem.prop("tagName")}</p>
        <p class="small mb-0"><strong>Height:</strong> ${elem.outerHeight()}px</p>
        <p class="small mb-0"><strong>Font size:</strong> ${elem.css("font-size")}</p>
        <p class="small mb-0"><strong>Padding:</strong> ${elem.css("padding")}</p>
        <p class="small mb-0"><strong>Border:</strong> ${elem.css("border-width")}</p>
        `,
      html: true
    });
    elem.popover("show");

  });

  $(".hover-dimensions").find('*').on("mouseleave", (e) => {
    var elem = $(e.currentTarget);
    elem.removeClass("pop-highlight");
    elem.popover("dispose");
  });

});

window.onload = initate;
