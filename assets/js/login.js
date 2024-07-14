function reqLogin(event) {
  event.preventDefault();
  const login = event.target.login.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  if (login !== "") {
    if (email !== "") {
      if (password !== "") {
        window.location.href = "index.html";
        window.alert("Congratulations, you have successfully logged in");
      } else {
        window.alert("you must fill the form");
      }
    } else {
      window.alert("you must fill the form");
    }
  } else {
    window.alert("you must fill the form");
  }
}
const form2 = document.getElementById("form2");
form2.addEventListener("submit", () => {
  e.preventDefault();
  const loginHp = e.target.namehp.value;
  console.log(loginHp);
  const emailHp = e.target.emailhp.value;
  const passwordHp = e.target.passwordhp.value;
  if (loginHp !== "") {
    if (emailHp !== "") {
      if (passwordHp !== "") {
        window.location.href = "index.html";
        window.alert("Congratulations, you have successfully logged in");
      } else {
        window.alert("you must fill the form");
      }
    } else {
      window.alert("you must fill the form");
    }
  } else {
    window.alert("you must fill the form");
  }
});
