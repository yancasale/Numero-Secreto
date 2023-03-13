function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += "<div>Valor Inválido</div>";
    return
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor invádo: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    return
  }

  if (numeroChuteIgualANumeroSecreto(numero)) {
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

function numeroChuteIgualANumeroSecreto(numero) {
  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Parabéns, você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    `;
    
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>O número secreto é menor <i class="arrow down"></i></div>`

  } else {
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="arrow up"></i></div>`
  }
}
