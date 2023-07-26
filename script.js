let cookieObj = document.querySelector(".cookie-policy-box");

function removeMe() {
  cookieObj.remove();
}

//add box shadow
function addShadow(element) {
  element.classList.add("shadow");
}

// remove box shadow
function removeShadow(element) {
  element.classList.remove("shadow");
}
