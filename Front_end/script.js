//clicar para adicionar novo e abrir pop up
const btn_criar = document.getElementById("btn_criar");
const div_cadastrar_livro = document.getElementById("div_cadastrar_livro");

btn_criar.addEventListener("click", function () {
  div_cadastrar_livro.style.display = "block";
});

//clicar para fechar pop up
const btn_fechar = document.getElementById("btn_fechar");
const input_titulo = document.getElementById("input_titulo");
const input_autor = document.getElementById("input_autor");
const input_genero = document.getElementById("input_genero");

const formato_kindle = document.getElementById("formato_kindle");
const formato_fisico = document.getElementById("formato_fisico");
const formato_audiobook = document.getElementById("formato_audiobook");

btn_fechar.addEventListener("click", function () {
  if (
    input_titulo.value !== "" ||
    input_autor.value !== "" ||
    input_genero.value !== "" ||
    formato_kindle.checked ||
    formato_fisico.checked ||
    formato_audiobook.checked
  ) {
    if (window.confirm("voce pode ter dados não salvos deseja fechar ?")) {
      div_cadastrar_livro.style.display = "none";

      input_titulo.value = "";
      input_autor.value = "";
      input_genero.value = "";

      formato_kindle.checked = false;
      formato_fisico.checked = false;
      formato_audiobook.checked = false;
    }
  } else {
    div_cadastrar_livro.style.display = "none";
  }
});

//atualizar botão de cadastro para capa do livro
const input_capa = document.getElementById("input_capa");
const btn_cadastrar_capa = document.getElementById("btn_cadastrar_capa");
const arquivo_escolhido = document.getElementById("arquivo_escolhido");
const capa_preview = document.getElementById("preview_capa");
const leitor = new FileReader();

input_capa.addEventListener("change", function () {
  if (input_capa.files.length > 0) {
    const arquivo = input_capa.files[0];

    arquivo_escolhido.textContent = arquivo.name;

    leitor.onload = function (e) {
      capa_preview.src = e.target.result;
    };
    leitor.readAsDataURL(arquivo);
  } else {
    arquivo_escolhido.textContent = "nenhum arquivo";
    capa_preview.src = "";
  }
});
.