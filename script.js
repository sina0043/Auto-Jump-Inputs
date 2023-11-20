(function () {
  "use strict";

  let myInputs = document.querySelectorAll("input");

  myInputs.forEach((myInput) => {
    myInput.addEventListener("input", (e) => {
      if (String(e.target.value).length == 4) {
        e.target.nextElementSibling?.focus();
      }
      if (String(e.target.value).length == 0 && e.data == null ) {
        e.target.previousElementSibling?.focus();
      }
    });
    myInput.addEventListener("beforeinput", (e) => {
      if (String(e.target.value).length == 4 && e.data != null ) {
        e.preventDefault();
      }
    });
  });
})();
