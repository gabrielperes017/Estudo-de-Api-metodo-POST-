const API_URL = "https://jsonplaceholder.typicode.com/posts";
const postsDiv = document.getElementById("posts");
const newPostsDiv = document.getElementById("new-posts");
const loadingDiv = document.getElementById("loading");
const erroDiv = document.getElementById("erro");
const form = document.getElementById("form-post");
let proximoId = 6;
function mostrarLoading(mostrar) {
  loadingDiv.style.display = mostrar ? "block" : "none";
}
function mostrarErro(mensagem) {
  erroDiv.textContent = mensagem;
}
// 1 - Lista os 5 primeiros posts
async function carregarPosts() {
  mostrarLoading(true);
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
    mostrarErro("Não foi possível carregar os posts. Tente novamente mais tarde.");
    console.error(error);
  } finally {
    mostrarLoading(false);
  }
}
// 2 - Envia novo post
form.addEventListener("submit", async (event) => {

  event.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const corpo = document.getElementById("corpo").value;

  mostrarLoading(true);
  mostrarErro("");

  try {
    const resposta = await axios.post(API_URL, { title: titulo, body: corpo });
    form.reset();
    const idLocal = proximoId++;
    const div = document.createElement("div");
    div.className = "new-post";
    div.innerHTML = `
      <h3>${resposta.data.title}</h3>
      <p>${resposta.data.body}</p>
      <small>ID: ${idLocal} (novo)</small>
    `;
    newPostsDiv.prepend(div);
    alert(`INDICADOR:  Post enviado!\nTítulo: ${resposta.data.title}\nID: ${idLocal}`);
  } catch (error) {
    mostrarErro("Erro ao enviar o post. Verifique sua conexão e tente novamente.");
    alert("Erro ao enviar o post.");
    console.error(error);
  } finally {
    mostrarLoading(false);
  }
});
carregarPosts();