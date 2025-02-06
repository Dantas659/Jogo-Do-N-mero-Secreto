let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroPseudoaleatorio();
let tentativas = 1;


function gerarNumeroPseudoaleatorio() {
   let numeroGerado = parseInt(Math.random() * 10 + 1);
   console.log(numeroGerado);
   return verificarNumerosGerados(numeroGerado); // Verifica se o número já foi gerado
}

function verificarNumerosGerados(numeroGerado) {
   if (listaDeNumerosSorteados.includes(numeroGerado)) {
      return gerarNumeroPseudoaleatorio(); // Chama novamente se o número já foi sorteado
   } else {
      listaDeNumerosSorteados.push(numeroGerado);
      console.log(listaDeNumerosSorteados);
      return numeroGerado; // Retorna o número gerado
   }
}

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Escolha um número entre 1 e 100";

function exibirTextoNaTela(tag, string) {
   let variavel = document.querySelector(tag)
   variavel.innerHTML = string
}
function exibirMensagemInicial() {
   exibirTextoNaTela('h1', 'Olá! Este é o jogo do número secreto');
   exibirTextoNaTela('p', 'basta escolher um número entre 1 e 10');
}
exibirMensagemInicial();


function verificarChute() {
   let chute = parseInt(document.querySelector('input').value);
   if(chute === numeroSecreto) {
      exibirTextoNaTela('h1', 'Parabéns!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas =   (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
      );
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
         
   } else {
      if (chute > numeroSecreto) {
         exibirTextoNaTela('h1', 'Não foi dessa vez!');
         exibirTextoNaTela('p', 'o número secreto é menor do que isso!');
      } else {
         exibirTextoNaTela('h1', 'Não foi dessa vez!');
         exibirTextoNaTela('p', 'o número secreto é maior do que isso!');
      } 
      tentativas++;
      limparCampo();
   }
}
 function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';
 }

function reiniciarJogo() {
   numeroSecreto = gerarNumeroPseudoaleatorio();
   tentativas = 1;
   limparCampo();
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
   verificarNumerosGerados();
}