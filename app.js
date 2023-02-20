thiago = { nome: "Thiago", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
tayna = { nome: "Tayná", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
higor = { nome: "Higor", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

var jogadores = [thiago, tayna, higor];

function calcularPontos(jogador) {
  pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibirJogadores(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button id='vitoria' onClick='adicionarVitoria(" +
      i +
      ")'>Vitória</button></td>";
    elemento +=
      "<td><button id='empate'onClick='adicionarEmpate(" +
      i +
      ")'>Empate</button></td>";
    elemento +=
      "<td><button id='derrota' onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

thiago.pontos = calcularPontos(thiago);
tayna.pontos = calcularPontos(tayna);
higor.pontos = calcularPontos(higor);

exibirJogadores(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadores(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadores(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibirJogadores(jogadores);
}

function zerar() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  exibirJogadores(jogadores);
}
