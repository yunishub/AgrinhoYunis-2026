// --- BANCO DE DADOS DAS CASAS (AGRINHO 2026) ---
// Tipos: 'partida', 'propriedade', 'sorte', 'azar', 'prisao'
const infoCasas = [
  { id: 0, emoji: "🏠", tipo: "partida", titulo: "Partida", preco: 0, aluguel: 0, texto: "Ponto de partida. Cada volta completa rende R$ 200 de incentivo ecológico!", fonte: "Agrinho 2026" },
  { id: 1, emoji: "🌽", tipo: "propriedade", titulo: "Lavoura de Milho Consorciado", preco: 60, aluguel: 10, texto: "O milho com braquiária protege o solo contra erosões e ervas daninhas.", fonte: "Embrapa Milho e Sorgo" },
  { id: 2, emoji: "💧", tipo: "propriedade", titulo: "Gotejamento Inteligente", preco: 60, aluguel: 12, texto: "Sistemas de gotejamento poupam até 60% de água na irrigação agrícola.", fonte: "Agência Nacional de Águas (ANA)" },
  { id: 3, emoji: "🌲", tipo: "propriedade", titulo: "Reserva de Eucalipto", preco: 80, aluguel: 15, texto: "Florestas cultivadas removem volumes massivos de CO₂ da atmosfera.", fonte: "Indústria Brasileira de Árvores" },
  { id: 4, emoji: "☀️", tipo: "propriedade", titulo: "Usinas Fotovoltaicas Rurais", preco: 100, aluguel: 20, texto: "Painéis solares geram energia limpa para bombear água e acionar cercas.", fonte: "ABSOLAR" },
  { id: 5, emoji: "♻️", tipo: "propriedade", titulo: "Centro Campo Limpo", preco: 120, aluguel: 25, texto: "O Brasil destina corretamente 94% das embalagens de defensivos vazias.", fonte: "inpEV" },
  { id: 6, emoji: "⛺", tipo: "propriedade", titulo: "Hotel de EcoTurismo", preco: 140, aluguel: 30, texto: "Gera receita alternativa para a agricultura familiar mantendo as matas em pé.", fonte: "Ministério do Turismo" },
  { id: 7, emoji: "🌳", tipo: "propriedade", titulo: "Reserva Legal Controlada", preco: 160, aluguel: 35, texto: "O cumprimento do Código Florestal protege recursos hídricos e fauna.", fonte: "Código Florestal Brasileiro" },
  { id: 8, emoji: "⚡", tipo: "propriedade", titulo: "Biodigestor de Biogás", preco: 180, aluguel: 40, texto: "Transforma dejetos animais em gás metano e eletricidade para a fazenda.", fonte: "CIBiogás" },
  { id: 9, emoji: "🍀", tipo: "sorte", titulo: "Sorte Ecológica", preco: 0, aluguel: 0, texto: "Seu manejo reduziu pragas! O mercado pagou um bônus de +R$ 150 pela sua safra.", fonte: "Prêmio Produtividade Verde" },
  { id: 10, emoji: "🐝", tipo: "propriedade", titulo: "Meliponário de Polinização", preco: 200, aluguel: 50, texto: "Proteger abelhas nativas garante a polinização de 75% das culturas agrícolas.", fonte: "FAO / Embrapa" },
  { id: 11, emoji: "🐄", tipo: "propriedade", titulo: "Pecuária Carbono Neutro", preco: 220, aluguel: 55, texto: "Manejo rotacionado de pastos acelera a engorda e mitiga gases estufa.", fonte: "Plano ABC+ Federal" },
  { id: 12, emoji: "😓", tipo: "prisao", titulo: "Treinamento do SENAR", preco: 0, aluguel: 0, texto: "Parada obrigatória! Você cometeu um erro técnico e deve aguardar 1 rodada estudando aplicação correta de insumos.", fonte: "Capacitação Rural" },
  { id: 13, emoji: "💨", tipo: "propriedade", titulo: "Fazenda de Crédito de Carbono", preco: 240, aluguel: 65, texto: "Matas preservadas geram ativos comercializáveis internacionalmente.", fonte: "Mercado Global de Carbono" },
  { id: 14, emoji: "🌊", tipo: "propriedade", titulo: "Nascentes Isoladas", preco: 260, aluguel: 75, texto: "Isolar áreas de nascentes evita contaminações biológicas na água.", fonte: "SENAR Práticas" },
  { id: 15, emoji: "⛈️", tipo: "azar", titulo: "Azar Climático", preco: 0, aluguel: 0, texto: "Uma tempestade de granizo castigou a colheita destelhada. Pague R$ 150 de conserto.", fonte: "INMET / Alerta" },
  { id: 16, emoji: "👨‍👩‍👧", tipo: "propriedade", titulo: "Núcleo de Sucessão Familiar", preco: 280, aluguel: 80, texto: "Capacitar jovens com tecnologia no campo garante sustentabilidade a longo prazo.", fonte: "IBGE Censo Agro" },
  { id: 17, emoji: "🦋", tipo: "propriedade", titulo: "Biofábrica de Macroorganismos", preco: 300, aluguel: 90, texto: "Inimigos naturais (como vespas) eliminam lagartas sem agredir o ecossistema.", fonte: "Embrapa Meio Ambiente" },
  { id: 18, emoji: "🌻", tipo: "propriedade", titulo: "Plantação de Girassóis", preco: 320, aluguel: 100, texto: "Rotação estratégica que descompacta a terra e quebra o ciclo de fungos.", fonte: "Embrapa Soja" },
  { id: 19, emoji: "🦜", tipo: "propriedade", titulo: "Corredor Ecológico", preco: 350, aluguel: 120, texto: "Conectar fragmentos florestais permite o tráfego seguro de aves nativas.", fonte: "ICMBio" },
  { id: 20, emoji: "🐑", tipo: "propriedade", titulo: "Integração Silvipastoril", preco: 360, aluguel: 130, texto: "Criar ovinos sob pomares provê adubo orgânico e reduz capina química.", fonte: "SEBRAE Agro" },
  { id: 21, emoji: "🍃", tipo: "sorte", titulo: "Sorte: Adubação Verde", preco: 0, aluguel: 0, texto: "Leguminosas fixaram nitrogênio no solo! Economia de R$ 100 em fertilizantes sintéticos.", fonte: "Embrapa Agrobiologia" },
  { id: 22, emoji: "🫘", tipo: "propriedade", titulo: "Inoculação de Rizóbios", preco: 400, aluguel: 150, texto: "Bactérias simbióticas capturam o nitrogênio do ar alimentando a soja sem poluir.", fonte: "Embrapa Soja" },
  { id: 23, emoji: "🏞️", tipo: "propriedade", titulo: "Bacia Hidrográfica Protegida", preco: 420, aluguel: 160, texto: "O terraceamento das encostas evita o assoreamento dos rios da comunidade.", fonte: "ANA" }
];

// Mapeamento exato de linhas/colunas do HTML original (sentido horário)
const ordemLayoutHTML = [
  { col: 1, row: 7 }, { col: 2, row: 7 }, { col: 3, row: 7 }, { col: 4, row: 7 }, { col: 5, row: 7 }, { col: 6, row: 7 },
  { col: 7, row: 7 }, { col: 7, row: 6 }, { col: 7, row: 5 }, { col: 7, row: 4 }, { col: 7, row: 3 }, { col: 7, row: 2 },
  { col: 7, row: 1 }, { col: 6, row: 1 }, { col: 5, row: 1 }, { col: 4, row: 1 }, { col: 3, row: 1 }, { col: 2, row: 1 },
  { col: 1, row: 1 }, { col: 1, row: 2 }, { col: 1, row: 3 }, { col: 1, row: 4 }, { col: 1, row: 5 }, { col: 1, row: 6 }
];

let nosCasasDOM = [];
let listaJogadores = [];
let donoPropriedades = {}; // id_casa: id_jogador
let turnoAtual = 0;
let jogoIniciado = false;
const facesDados = ["🎲", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

document.addEventListener("DOMContentLoaded", () => {
  mapearCasasEletivas();
  document.getElementById("btn-iniciar").addEventListener("click", iniciarPartidaAgroPoly);
  document.querySelector(".btn-rolar").addEventListener("click", tentarJogadaHumana);
  
  document.querySelectorAll(".info").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const indice = nosCasasDOM.indexOf(btn.parentElement);
      if(indice !== -1) exibirAlertaPedagogico(infoCasas[indice]);
    });
  });
});

function mapearCasasEletivas() {
  const todasCasas = document.querySelectorAll(".casa");
  ordemLayoutHTML.forEach(pos => {
    let el = Array.from(todasCasas).find(c => c.style.gridColumn === String(pos.col) && c.style.gridRow === String(pos.row));
    if (el) {
      nosCasasDOM.push(el);
      if(!el.querySelector('.container-peoes')) {
        let container = document.createElement('div');
        container.className = 'container-peoes';
        el.appendChild(container);
      }
    }
  });
}

function iniciarPartidaAgroPoly() {
  const qtdJogadores = parseInt(document.getElementById("qtd-jogadores").value);
  const qtdBots = parseInt(document.getElementById("qtd-bots").value);

  if (qtdBots > qtdJogadores) {
    alert("Erro: O número de Bots não pode ultrapassar o número total de participantes.");
    return;
  }

  listaJogadores = [];
  donoPropriedades = {};
  
  // Limpar tags de proprietários antigas das bordas das casas
  document.querySelectorAll('.dono-tag').forEach(t => t.remove());

  const cores = ['p1', 'p2', 'p3', 'p4'];
  for (let i = 1; i <= qtdJogadores; i++) {
    const eBot = i > (qtdJogadores - qtdBots);
    listaJogadores.push({
      id: i,
      nome: eBot ? `Bot Agro ${i}` : `Produtor ${i}`,
      saldo: 1500,
      posicao: 0,
      cor: cores[i - 1],
      isBot: eBot,
      presoRodadas: 0
    });
  }

  turnoAtual = 0;
  jogoIniciado = true;
  
  document.getElementById("config-inicial").style.display = "none";
  document.getElementById("painel-jogo").style.display = "block";
  
  adicionarLog("O jogo começou! Todos recebem R$ 1500 de capital de giro.");
  atualizarPlacarEDominio();
  desenharPeoesDoJogo();
  processarCicloDeTurno();
}

function atualizarPlacarEDominio() {
  const placar = document.getElementById("placar-financeiro");
  placar.innerHTML = "";

  listaJogadores.forEach((j, idx) => {
    const div = document.createElement("div");
    div.className = `cartao-jogador ${idx === turnoAtual ? 'ativo' : ''}`;
    div.style.borderLeftColor = j.id === 1 ? '#e53935' : j.id === 2 ? '#1e88e5' : j.id === 3 ? '#fdd835' : '#8e24aa';
    
    // Lista de propriedades do jogador
    let propsAdquiridas = infoCasas.filter(c => donoPropriedades[c.id] === j.id).map(c => c.emoji).join(' ');

    div.innerHTML = `
      <strong>${j.nome}</strong> ${j.isBot?'🤖':''}<br>
      🌾 Saldo: R$ ${j.saldo}<br>
      ${j.presoRodadas > 0 ? '🚫 Em Curso<br>' : ''}
      <small>Bens: ${propsAdquiridas || 'Nenhum'}</small>
    `;
    placar.appendChild(div);
  });
}

function tentarJogadaHumana() {
  if (!jogoIniciado || listaJogadores[turnoAtual].isBot) return;
  computarRolagemDados();
}

function processarCicloDeTurno() {
  if (!jogoIniciado) return;
  atualizarPlacarEDominio();

  const jogador = listaJogadores[turnoAtual];
  const btnRolar = document.querySelector(".btn-rolar");
  document.getElementById("jogador-atual").innerText = `Vez de: ${jogador.nome}`;

  if (jogador.isBot) {
    btnRolar.classList.add("desabilitado");
    setTimeout(() => {
      if(jogador.presoRodadas > 0) {
        jogador.presoRodadas--;
        adicionarLog(`${jogador.nome} assistiu às aulas do SENAR nesta rodada.`);
        passarTurno();
      } else {
        computarRolagemDados();
      }
    }, 1500);
  } else {
    btnRolar.classList.remove("desabilitado");
    if (jogador.presoRodadas > 0) {
      jogador.presoRodadas--;
      alert(`⚠️ ${jogador.nome}, você está no treinamento e perdeu esta jogada para se capacitar.`);
      adicionarLog(`${jogador.nome} concluiu o módulo do curso obrigatório.`);
      passarTurno();
    }
  }
}

function computarRolagemDados() {
  const jogador = listaJogadores[turnoAtual];
  const d1 = Math.floor(Math.random() * 6) + 1;
  const d2 = Math.floor(Math.random() * 6) + 1;
  const passos = d1 + d2;

  const areaDados = document.querySelector(".dados");
  areaDados.style.transform = "scale(1.2) rotate(10deg)";
  areaDados.innerText = `${facesDados[d1]} ${facesDados[d2]}`;

  setTimeout(() => {
    areaDados.style.transform = "scale(1) rotate(0deg)";
    
    let antigaPosicao = jogador.posicao;
    let novaPosicao = (antigaPosicao + passos) % infoCasas.length;
    
    // Sistema Passou pela Partida: Ganha R$200
    if (novaPosicao < antigaPosicao) {
      jogador.saldo += 200;
      adicionarLog(`🎉 ${jogador.nome} completou um ciclo produtivo e coletou R$ 200 de bônus!`);
    }

    jogador.posicao = novaPosicao;
    desenharPeoesDoJogo();
    
    setTimeout(() => {
      executarRegraDeCasa(jogador, infoCasas[novaPosicao]);
    }, 300);

  }, 200);
}

function executarRegraDeCasa(jogador, casa) {
  adicionarLog(`${jogador.nome} parou na casa: ${casa.emoji} ${casa.titulo}`);

  if (casa.tipo === "propriedade") {
    const donoId = donoPropriedades[casa.id];

    if (!donoId) {
      // Caso a propriedade esteja livre para Compra
      if (jogador.saldo >= casa.preco) {
        if (jogador.isBot) {
          // Lógica simplificada do Bot compra se tiver margem financeira segura
          if (jogador.saldo - casa.preco > 200) {
            efetuarCompra(jogador, casa);
          } else {
            adicionarLog(`🤖 ${jogador.nome} achou arriscado comprar ${casa.titulo} agora.`);
            finalizarEtapaCasa(casa, false);
          }
        } else {
          // Prompt para jogador humano decidir
          let querComprar = confirm(`🌱 ${casa.titulo}\nPreço: R$ ${casa.preco}\nAluguel cobrado: R$ ${casa.aluguel}\n\nDeseja investir nessa tecnologia sustentável?`);
          if (querComprar) efetuarCompra(jogador, casa);
          else finalizarEtapaCasa(casa, true);
        }
      } else {
        adicionarLog(`💸 ${jogador.nome} não possui saldo suficiente (R$ ${casa.preco}) para comprar esta área.`);
        finalizarEtapaCasa(casa, !jogador.isBot);
      }
    } else if (donoId === jogador.id) {
      adicionarLog(`🏡 Você está fiscalizando sua própria instalação de ${casa.titulo}. Tudo em ordem!`);
      finalizarEtapaCasa(casa, !jogador.isBot);
    } else {
      // Pagar Aluguel para o proprietário legal
      const dono = listaJogadores.find(j => j.id === donoId);
      const valorAluguel = casa.aluguel;
      
      jogador.saldo -= valorAluguel;
      dono.saldo += valorAluguel;
      
      alert(`💰 Aluguel Ecológico! ${jogador.nome} pagou R$ ${valorAluguel} para ${dono.nome} pelo uso de ${casa.titulo}.`);
      adicionarLog(`${jogador.nome} pagou R$ ${valorAluguel} de aluguel.`);
      finalizarEtapaCasa(casa, false);
    }

  } else if (casa.tipo === "sorte") {
    jogador.saldo += (casa.id === 9) ? 150 : 100;
    finalizarEtapaCasa(casa, !jogador.isBot);
  } else if (casa.tipo === "azar") {
    jogador.saldo -= 150;
    finalizarEtapaCasa(casa, !jogador.isBot);
  } else if (casa.tipo === "prisao") {
    jogador.presoRodadas = 1; // Ficará detido por uma rodada inteira
    finalizarEtapaCasa(casa, !jogador.isBot);
  } else {
    finalizarEtapaCasa(casa, false);
  }
}

function efetuarCompra(jogador, casa) {
  jogador.saldo -= casa.preco;
  donoPropriedades[casa.id] = donoPropriedades[casa.id] = jogador.id;
  
  // Colore graficamente a borda superior do elemento com a cor do peão proprietário
  const elCasa = nosCasasDOM[casa.id];
  let tag = document.createElement('div');
  tag.className = 'dono-tag';
  tag.style.backgroundColor = jogador.id === 1 ? '#e53935' : jogador.id === 2 ? '#1e88e5' : jogador.id === 3 ? '#fdd835' : '#8e24aa';
  elCasa.appendChild(tag);

  adicionarLog(`🛍️ ${jogador.nome} comprou ${casa.titulo} por R$ ${casa.preco}!`);
  finalizarEtapaCasa(casa, false);
}

function finalizarEtapaCasa(casa, deveMostrarModal) {
  if (deveMostrarModal) {
    exibirAlertaPedagogico(casa);
  }
  verificarFalencia();
  passarTurno();
}

function exibirAlertaPedagogico(casa) {
  alert(`🌱 [${casa.titulo}]\n\n"${casa.texto}"\n\n📍 ${casa.fonte}`);
}

function verificarFalencia() {
  listaJogadores.forEach(j => {
    if (j.saldo < 0) {
      adicionarLog(`🚨 ${j.nome} ficou sem fundos ecológicos e faliu!`);
      j.saldo = 0;
    }
  });
}

function passarTurno() {
  // Passa o controle ao próximo da lista circular
  turnoAtual = (turnoAtual + 1) % listaJogadores.length;
  processarCicloDeTurno();
}

function desenharPeoesDoJogo() {
  document.querySelectorAll('.container-peoes').forEach(c => c.innerHTML = '');
  listaJogadores.forEach(j => {
    if(j.saldo >= 0){ // Só exibe quem não faliu
      const container = nosCasasDOM[j.posicao].querySelector('.container-peoes');
      const bola = document.createElement('div');
      bola.className = `peao ${j.cor}`;
      bola.title = j.nome;
      container.appendChild(bola);
    }
  });
}

function adicionarLog(msg) {
  const log = document.getElementById("LOG-historico");
  log.innerText = msg;
  log.scrollTop = log.scrollHeight;
}