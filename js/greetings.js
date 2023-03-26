const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

/** submit을 하면 닉네임 입력란을 지우고, 환영인사를 건네는 기능. */
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

/** 유저 닉네임을 받아 환영인사를 건네주는 기능. */
function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello! ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

/** 유저 닉네임을 변수에 받아옴 */
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings();
}
