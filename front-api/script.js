const API_URL = "http://localhost:3001/posts";

const postsDiv = document.getElementById("posts");
const erroDiv = document.getElementById("erro");
const form = document.getElementById("form-post");

function mostrarErro(mensagem) {
  erroDiv.textContent = mensagem;
}

async function carregarPosts() {
  mostrarErro("");
  try {
    const resposta = await axios.get(`${API_URL}?_limit=5`);
    postsDiv.innerHTML = "";
    resposta.data.forEach(post => {
      const div = document.createElement("div");
      div.className = "post";
      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <small>ID: ${post.id}</small>
      `;
      postsDiv.appendChild(div);
    });
  } catch (error) {
    mostrarErro("Erro script.js");
    console.error(error);
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const corpo = document.getElementById("corpo").value;

  mostrarErro("");

  try {
    await axios.post(API_URL, { title: titulo, body: corpo });
    form.reset();
    await carregarPosts();
  } catch (error) {
    mostrarErro("DEU ERRO NO MANDAR POST");
    console.error(error);
  }
});

carregarPosts();