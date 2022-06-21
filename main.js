//Aqui a Const "nome" esta armazenando a class "p" para que possamos alterar ela depois,
//é essencial fazer isso, pois se não capturarmos ela com o querySelector e armazenar em uma const não será possível 
//trabalhar/altear ela depois que é nosso objetivo aqui.
//Lembrando que foi capturado to o "p" ou seja "Jogador 1: Chris".
const nome = document.querySelector('p');


//Aqui peguei o const "nome" que já é uma variável, o que torna possível manipular ela e adicionei
// um evento "click" com o ".addEventListener", para que quando for clicado seja executado um bloco de código
// que será a função "atualizarNome" que escreverei a seguer, que será responsável por alterar a variável "nome"/"p"/"Jogador 1: Chris". 
nome.addEventListener('click', atualizarNome);


//Aqui construirei a função, com o nome que já defini lá em cima.
function atualizarNome () {
   
   //Como quero receber um dado que será um nome vou usar o prompt para exibir um texto e uma caixa de input
   // mas preciso guardar esse input para usar quando eu alterar a variável "nome"/"p"/"Jogador 1: Chris"
   // então vou armazenar dentro de uma variável  chamada "novoNome", então primeiro crio a variável, então atribuo a ela o comando prompt
   // e quando o usuário digitar no campo input o nome/valor vai ficar armazenado.
    var novoNome = prompt ('Insira novo nome:', "Aqui!");

    //Aqui usei a função textContent para alterar o texto da variável "nome" para o texto 'Jogador 1: ' mais o valor/texto armazenado
    // na variável "novoNome", atraves do "+" que vai concatenar os dois
    // exemplo, input caio, vai ser substituido a variável "nome"/"p"/"Jogador 1: Chris" para "Jogador 1: caio"
    nome.textContent = 'Jogador 1: ' + novoNome;
}
