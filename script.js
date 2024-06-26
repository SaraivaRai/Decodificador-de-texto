const textoEntrada = document.getElementById('texto');
const textoSaida = document.getElementById('retorno');



function cripto() {
    let mensagem = textoEntrada.value;

    excecoes();

    let resultCripto = mensagem.replaceAll(/e/g, 'enter').replaceAll(/i/g, 'imes').replaceAll(/a/g, 'ai').replaceAll(/o/g, 'ober').replaceAll(/u/g, 'ufat');
    
    return resultCripto;

}


function botaoCripto() {
    document.getElementById('saida__mensagemRetorno').style.display = 'none';
    document.getElementById('retorno').removeAttribute('hidden');
    document.getElementById('copiar').removeAttribute('hidden');

    const textoCripto = cripto(textoEntrada.value);
    
    document.getElementById('retorno').innerHTML = textoCripto;

    reset();

}


function descripto() {
    let msg = textoEntrada.value;
    excecoes();
    
    let resultDescripto = msg.replaceAll(/enter/g, "e").replaceAll(/imes/g, "i").replaceAll(/ai/g, "a").replaceAll(/ober/g, "o").replaceAll(/ufat/g, "u");

    return resultDescripto;
}

function botaoDescripto() {
    document.getElementById('saida__mensagemRetorno').style.display = 'none'
    document.getElementById("retorno").removeAttribute('hidden');
    document.getElementById("copiar").removeAttribute('hidden');
    
    
    const textoDescripto = descripto(textoEntrada.value);
    

    document.getElementById('retorno').innerHTML = textoDescripto;

    document.getElementById("retorno").setAttribute("disabled", "disabled");

    reset();
    
}



function reset() {
    let texto = document.querySelector('textarea');
    texto.value = '';

}
    

function copiarTexto() {
    document.getElementById('retorno').removeAttribute("disabled"); 

    let msgCopiar = document.getElementById('retorno');
    msgCopiar.select();
    document.execCommand('copy'); 
    document.getElementById('retorno').setAttribute("disabled", "disabled"); 
}

function excecoes() {

const regex = new RegExp('[/^a-z0-9\s/]+$');
    const text = textoEntrada.value;

      
        if(!regex.test(text)){
            textoSaida.value = alert("Atenção! Não são permitidos caracteres especiais e ou letras maiúsculas");
            textoSaida.value = '';

            window.location.reload(); 

            return false;

        } else {
            return true;
        }
        
   
    
}




