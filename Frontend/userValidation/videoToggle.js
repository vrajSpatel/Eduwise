function getCookie(name) {
  var value = null;
  document.cookie.split(";").map((element) => {
    var arr = element.split("=");
    if (arr[0] === ` ${name}` || arr[0] === name) {
      value = arr[1];
    }
  });
  return value;
}

const cookie = getCookie("auth_token");
if (cookie && cookie !== "") {
  console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||");
  document
    .getElementsByClassName("js-modal-shopify")[0]
    .classList.remove("is-shown--off-flow");
  document
    .getElementsByClassName("js-modal-shopify")[0]
    .classList.add("is-hidden--off-flow");
} else {
  console.log("-------------------------------------------");
  document
    .getElementsByClassName("js-modal-shopify")[0]
    .classList.add("is-shown--off-flow");
  document
    .getElementsByClassName("js-modal-shopify")[0]
    .classList.remove("is-hidden--off-flow");
}
const videoToggle = () => {
  var loginPending = document.getElementById("login_Warning");
  var loginsuccessful = document.getElementById("video_section");
  if (cookie && cookie !== "") {
    loginPending.classList.add("hide_login");
    loginsuccessful.classList.remove("hide_login");
  } else {
    loginsuccessful.classList.add("hide_login");
    loginPending.classList.remove("hide_login");
  }
};
videoToggle();
