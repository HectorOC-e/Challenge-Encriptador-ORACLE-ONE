const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
var validacion = document.getElementById("validacion");

const matrizEncriptador = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function btnEncriptar() {
  if (textArea.value != "") {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    validacion.classList.add("oculto");
  } else {
    validacion.classList.remove("oculto");
    mensaje.style.backgroundImage = 'url("imgs/Muñeco.svg")';
    textArea.value = "";
    mensaje.value = "";
  }
}

function encriptar(textoEncriptar) {
  textoEncriptar = textoEncriptar.toLowerCase();

  for (let i = 0; i < matrizEncriptador.length; i++) {
    if (textoEncriptar.includes(matrizEncriptador[i][0])) {
      textoEncriptar = textoEncriptar.replaceAll(
        matrizEncriptador[i][0],
        matrizEncriptador[i][1]
      );
    }
  }
  console.log(textoEncriptar);
  return textoEncriptar;
}

function desEncriptar(textoDesencriptar) {
  textoDesencriptar = textoDesencriptar.toLowerCase();

  for (let i = 0; i < matrizEncriptador.length; i++) {
    if (textoDesencriptar.includes(matrizEncriptador[i][1])) {
      textoDesencriptar = textoDesencriptar.replaceAll(
        matrizEncriptador[i][1],
        matrizEncriptador[i][0]
      );
    }
  }
  console.log(textoDesencriptar);
  return textoDesencriptar;
}

function btnDesEncriptar() {
    if (textArea.value != "") {
        const textoDesencriptar = desEncriptar(textArea.value);
        mensaje.value = textoDesencriptar;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        validacion.classList.add("oculto");
      } else {
        validacion.classList.remove("oculto");
        mensaje.style.backgroundImage = 'url("imgs/Muñeco.svg")';
        textArea.value = "";
        mensaje.value = "";
      }
}

function copiarTexto() {
    var texto = mensaje.value;
    navigator.clipboard.writeText(texto);
    alert("¡Texto copiado!")
}
  