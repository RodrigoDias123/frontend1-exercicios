

let nomeGuardado = JSON.parse(localStorage.getItem("nome"));
if (nomeGuardado) {
  console.log("Nome guardado:", nomeGuardado);
}

const form = document.getElementById("nome-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = { nome: document.getElementById("nome").value.trim() };
  localStorage.setItem("nome", JSON.stringify(nome));
  console.log("Nome guardado:", nome);
});

const temaGuardado = sessionStorage.getItem("tema") || "light";
aplicarTema(temaGuardado);

const toggleButton = document.getElementById("toggle-tema");
toggleButton.addEventListener("click", function () {
  const temaAtual = sessionStorage.getItem("tema") || "light";
  const novoTema = temaAtual === "light" ? "dark" : "light";
  sessionStorage.setItem("tema", novoTema);
  aplicarTema(novoTema);
});

function aplicarTema(tema) {
  document.body.className = tema;
  document.getElementById("tema-label").textContent = "Tema atual: " + tema;
}
