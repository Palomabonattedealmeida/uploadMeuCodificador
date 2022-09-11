const secao1 = document.querySelector(".secao1");
const secao2 = document.querySelector(".secao2");
document.getElementById("div-aparece").style.display = 'none';

//Encriptar secao2

function btnEncriptar() {
    const textoEncriptado = encriptar(secao1.value)
    secao2.value = textoEncriptado
    secao2.style.backgroundImage="none"
    aparece()
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    
    return stringEncriptada;
}


//Desencriptar secao2

function btnDesencriptar() {
    const textoEncriptado = desencriptar(secao1.value)
    secao2.value = textoEncriptado
    secao2.style.backgroundImage="none"  
    aparece()
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}


//botão copiar

function copiar() {
    const msg = document.querySelector(".secao2");
    msg.select();
    navigator.clipboard.writeText(msg.value)
    msg.value = "";
}

function aparece() {
    document.getElementById("div-aparece").style.display = 'block';
}