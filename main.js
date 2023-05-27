
const encriptar = document.querySelector("#encriptar")
const desencriptar = document.querySelector("#desencriptar")
const resultado = document.querySelector("#respuestaEncriptada")
let texto = document.querySelector("textarea")

encriptar.addEventListener("click",()=>{
    
    texto =  texto.value.trim()
    const textoSinEspacios =  texto.replace(/\s/g,"")
    if(textoSinEspacios.length == 0){
        alert("El texto esta vacio")
        location.reload
    }
    else{
        let textoEncriptado = encriptarTexto(textoSinEspacios)
        resultado.innerHTML = textoEncriptado
        texto.value = ""; // Esto no me funciona... aun 
    }
})


function encriptarTexto(cadenaTexto){

    let matrizCodigo = [["e","enter"],["a","ai"],["i","imes"],["u","ufat"],["o","ober"]]
    cadenaTexto = cadenaTexto.toLowerCase()

    for(i=0;i<matrizCodigo.length;i++){
        if(cadenaTexto.includes(matrizCodigo[i][0])){
            cadenaTexto = cadenaTexto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return cadenaTexto
}


desencriptar.addEventListener("click", () => {
    let textoEncriptado = resultado.innerHTML;
    let textoDesencriptado = desencriptarTexto(textoEncriptado);
    console.log(textoDesencriptado);
    resultado.innerHTML = textoDesencriptado
});

function desencriptarTexto(textoCodificado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["u","ufat"],["o","ober"]]
    textoCodificado = textoCodificado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoCodificado.includes(matrizCodigo[i][1])) {
            textoCodificado = textoCodificado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            console.log(textoCodificado)
        }
    }
    return textoCodificado;
}
