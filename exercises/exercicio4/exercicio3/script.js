
let savebutton = document.getElementById("saveBtn");
let passwordInput = document.getElementById("passwordInput");
let passwordList = document.getElementById("passwordsaved");

savebutton.addEventListener("click", function () {
  let password = passwordInput.value;
  localStorage.setItem("password", btoa(password));
  let pass= atob(localStorage.getItem("password"));
  passwordList.innerText += `Senha armazenada: ${pass}`;

  });

  





