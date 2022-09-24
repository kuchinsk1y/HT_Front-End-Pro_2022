const SUCCESS_CLASSNAME = "success";
const ERROR_CLASSNAME = "error";

function highlightValidationHint(hintEl, isValid) {
  if (isValid) {
    hintEl.classList.add(SUCCESS_CLASSNAME);
    hintEl.classList.remove(ERROR_CLASSNAME);
  } else {
    hintEl.classList.remove(SUCCESS_CLASSNAME);
    hintEl.classList.add(ERROR_CLASSNAME);
  }
}

document.querySelector("[name=name]").addEventListener("input", function () {
  const capitalLetter = /[A-Z][a-z]{1,} [A-Z][a-z]{1,}$/;
  highlightValidationHint(
    document.getElementById("capitalFormat"),
    capitalLetter.test(this.value)
  );
});

document.querySelector("[name=number]").addEventListener("input", function () {
  const capitalLetter = /[+][0-9]{12}$/;
  highlightValidationHint(
    document.getElementById("numberFormat"),
    capitalLetter.test(this.value)
  );
});

document.querySelector("[name=email]").addEventListener("input", function () {
  const capitalLetter =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  highlightValidationHint(
    document.getElementById("emailFormat"),
    capitalLetter.test(this.value)
  );
});

document.querySelector("[name=card]").addEventListener("input", function () {
  const capitalLetter = /[0-9]{16}$/;
  highlightValidationHint(
    document.getElementById("cardFormat"),
    capitalLetter.test(this.value)
  );
});

const form = document.forms["formUserData"];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    document.getElementById("capitalFormat").classList.contains("success") &&
    document.getElementById("numberFormat").classList.contains("success") &&
    document.getElementById("emailFormat").classList.contains("success") &&
    document.getElementById("cardFormat").classList.contains("success")
  ) {
    return alert("Form submitted successfully");
  }
  return alert("Enter Data!");
});
