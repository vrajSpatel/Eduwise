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

const loginPending = document.getElementById("login_Warning");
const loginsuccessful = document.getElementById("video_section");
console.log(loginPending);
console.log(loginsuccessful);

const videoToggle = () => {
  const cookie = getCookie("auth_token");
  console.log(cookie);
  if (cookie && cookie !== "") {
    loginPending.classList.add("hide_login");
    loginsuccessful.classList.remove("hide_login");
    document
      .getElementsByClassName("js-modal-shopify")[0]
      .classList.remove("is-shown--off-flow");
  } else {
    loginsuccessful.classList.add("hide_login");
    loginPending.classList.remove("hide_login");
  }
};
videoToggle();
