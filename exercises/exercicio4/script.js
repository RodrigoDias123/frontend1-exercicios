let controller;

const lista = document.getElementById("lista");
const btnCarregar = document.getElementById("btnCarregar");
const btnCriar = document.getElementById("btnCriar");
const btnCancelar = document.getElementById("btnCancelar");

// atraso cancelável para testar o AbortController
function esperarCancelavel(ms, signal) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, ms);
    signal.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new DOMException("Aborted", "AbortError"));
    }, { once: true });
  });
}

// carregar posts
async function carregarPosts() {
  lista.innerHTML = "A carregar...";

  controller = new AbortController();

  try {
    await esperarCancelavel(3000, controller.signal);

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      { signal: controller.signal }
    );

    const data = await response.json();

    lista.innerHTML = "";

    data.slice(0).forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title;
      lista.appendChild(li);
    });

  } catch (erro) {
    if (erro.name === "AbortError") {
      lista.innerHTML = "❌ Pedido cancelado!";
    } else {
      lista.innerHTML = "Erro ao carregar dados";
    }
  }
}

// cancelar request
function cancelarRequisicao() {
  if (controller) {
    controller.abort();
  }
}

// criar post
async function criarPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: "Novo Post",
          body: "Conteúdo do post",
          userId: 1
        })
      }
    );

    const data = await response.json();
    console.log("Post criado:", data);
    alert("Post criado (simulado)!");

  } catch (erro) {
    console.error("Erro:", erro);
  }
}

// eventos
btnCarregar.addEventListener("click", carregarPosts);
btnCancelar.addEventListener("click", cancelarRequisicao);
btnCriar.addEventListener("click", criarPost);

// carregar ao iniciar
carregarPosts();