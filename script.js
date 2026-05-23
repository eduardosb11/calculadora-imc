const form = document.querySelector("form");
const pesoInput = document.querySelector("#peso");
const alturaInput = document.querySelector("#altura");

const imcCalculado = document.querySelector("#imc-calculado");
const imcClassificacao = document.querySelector("#imc-classificacao");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const pesoValor = parseFloat(pesoInput.value); 
    const alturaValor = parseFloat(alturaInput.value);
    
    const imc = (pesoValor / (alturaValor * alturaValor)).toFixed(2);
    let classificacao = imc < 24.9 ? "normal" :
                        imc < 29.9 ? "sobrepeso" :
                        imc < 39.9 ? "obesidade" : "obesidade grave";
    
    imcCalculado.innerText = "IMC: " + imc;
    imcClassificacao.innerText = "Classificação: " + classificacao;
});
