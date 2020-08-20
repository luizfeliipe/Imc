const form = document.querySelector("#form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso Inválido', false)
        return;
    }
    if(!altura){
        setResultado('Altura Inválida', false)
        return;
    }

    const imc = getImc(peso, altura);
    const tabela = getNivel(imc);

    const msg = `Seu IMC é: ${imc} (${tabela}) `;

    setResultado(msg, true);
})

//!nivel imc
function getNivel(imc){
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9){
        return nivel[5]
    }
    if(imc >= 34.9){
        return nivel[4]
    }
    if(imc >= 29.9){
        return nivel[3]
    }
    if(imc >= 24.9){
        return nivel[2]
    }
    if(imc >= 18.5){
        return nivel[1]
    }
    if(imc < 18.5){
        return nivel[0]
    }
}

//!função para calcular o imc
function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

//! criar paragrafo
function criarP(){
    const p = document.createElement("p")
    return p;
}

//!msg 
function setResultado(msg,isvalid){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";

    const p = criarP();

    if(isvalid){
        p.classList.add("paragrafo-resultado")
    }else{
        p.classList.add("bad")
    }

    p.innerHTML = msg;
    resultado.appendChild(p)


}