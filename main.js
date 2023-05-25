// peso * altura / por altura
//função que tira o reload do button e executada quando o formulário é enviado
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura Inválida', false)
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu Imc é ${imc} (${nivelImc}).`

    setResultado(msg, true);
});

// Função que retorna o nível de IMC com base no valor do IMC
function getNivelImc(imc) {
    const nivel = ['Menos do que 18,5 Está abaixo do peso', 'Entre 18,5 e 24/9 Está no Peso normal', 'Entre 25 e 29,9 Está SobrePeso', 'Entre 30 e 34,9 Obesidade grau 1', 'Entre 35 e 39,9 Obesidade grau 2', 'Mais do que 40 Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

// Função que calcula o IMC com base no peso e altura fornecidos
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


// Função auxiliar que cria um elemento de parágrafo (p)
function criaP (className) {
    const p = document.createElement('p');
    return p;
}

// Função que define o resultado do cálculo do IMC na página HTML
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p); 
}
