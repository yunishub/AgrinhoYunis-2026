// ===== banco de dados das casas =====
const infoCasas = [
  { id: 0, emoji: "🏠", tipo: "partida", titulo: "partida", preco: 0, aluguel: 0, aluguelCasa: 0, aluguelPredio: 0, texto: "ponto de partida. cada volta completa rende r$ 250 de incentivo ecológico!", fonte: "agrinho 2026" },
  { id: 1, emoji: "🌽", tipo: "propriedade", titulo: "lavoura de milho consorciado", preco: 60, aluguel: 10, aluguelCasa: 30, aluguelPredio: 90, texto: "o milho com braquiária protege o solo contra erosões e ervas daninhas.", fonte: "embrapa milho e sorgo" },
  { id: 2, emoji: "💧", tipo: "propriedade", titulo: "gotejamento inteligente", preco: 60, aluguel: 12, aluguelCasa: 36, aluguelPredio: 100, texto: "sistemas de gotejamento poupam até 60% de água na irrigação agrícola.", fonte: "agência nacional de águas (ana)" },
  { id: 3, emoji: "🌲", tipo: "propriedade", titulo: "reserva de eucalipto", preco: 80, aluguel: 15, aluguelCasa: 45, aluguelPredio: 125, texto: "florestas cultivadas removem volumes massivos de co₂ da atmosfera.", fonte: "indústria brasileira de árvores" },
  { id: 4, emoji: "☀️", tipo: "propriedade", titulo: "usinas fotovoltaicas rurais", preco: 100, aluguel: 20, aluguelCasa: 60, aluguelPredio: 160, texto: "painéis solares geram energia limpa para bombear água e acionar cercas.", fonte: "absolar" },
  { id: 5, emoji: "♻️", tipo: "propriedade", titulo: "centro campo limpo", preco: 120, aluguel: 25, aluguelCasa: 75, aluguelPredio: 200, texto: "o brasil destina corretamente 94% das embalagens de defensivos vazias.", fonte: "inpev" },
  { id: 6, emoji: "⛺", tipo: "propriedade", titulo: "hotel de ecoturismo", preco: 140, aluguel: 30, aluguelCasa: 90, aluguelPredio: 240, texto: "gera receita alternativa para a agricultura familiar mantendo as matas em pé.", fonte: "ministério do turismo" },
  { id: 7, emoji: "🌳", tipo: "propriedade", titulo: "reserva legal controlada", preco: 160, aluguel: 35, aluguelCasa: 105, aluguelPredio: 280, texto: "o cumprimento do código florestal protege recursos hídricos e fauna.", fonte: "código florestal brasileiro" },
  { id: 8, emoji: "⚡", tipo: "propriedade", titulo: "biodigestor de biogás", preco: 180, aluguel: 40, aluguelCasa: 120, aluguelPredio: 320, texto: "transforma dejetos animais em gás metano e eletricidade para a fazenda.", fonte: "cibiogás" },
  { id: 9, emoji: "🍀", tipo: "sorte", titulo: "sorte ecológica", preco: 0, aluguel: 0, aluguelCasa: 0, aluguelPredio: 0, texto: "seu manejo sustentável trouxe benefícios!", fonte: "prêmio produtividade verde" },
  { id: 10, emoji: "🐝", tipo: "propriedade", titulo: "meliponário de polinização", preco: 200, aluguel: 50, aluguelCasa: 150, aluguelPredio: 400, texto: "proteger abelhas nativas garante a polinização de 75% das culturas agrícolas.", fonte: "fao / embrapa" },
  { id: 11, emoji: "🐄", tipo: "propriedade", titulo: "pecuária carbono neutro", preco: 220, aluguel: 55, aluguelCasa: 165, aluguelPredio: 440, texto: "manejo rotacionado de pastos acelera a engorda e mitiga gases estufa.", fonte: "plano abc+ federal" },
  { id: 12, emoji: "😓", tipo: "prisao", titulo: "treinamento do senar", preco: 0, aluguel: 0, aluguelCasa: 0, aluguelPredio: 0, texto: "você cometeu um erro técnico e deve aguardar 3 rodadas estudando aplicação correta de insumos. pague r$ 50 para sair antecipadamente.", fonte: "capacitação rural" },
  { id: 13, emoji: "💨", tipo: "propriedade", titulo: "fazenda de crédito de carbono", preco: 240, aluguel: 65, aluguelCasa: 195, aluguelPredio: 500, texto: "matas preservadas geram ativos comercializáveis internacionalmente.", fonte: "mercado global de carbono" },
  { id: 14, emoji: "🌊", tipo: "propriedade", titulo: "nascentes isoladas", preco: 260, aluguel: 75, aluguelCasa: 225, aluguelPredio: 600, texto: "isolar áreas de nascentes evita contaminações biológicas na água.", fonte: "senar práticas" },
  { id: 15, emoji: "⛈️", tipo: "azar", titulo: "azar climático", preco: 0, aluguel: 0, aluguelCasa: 0, aluguelPredio: 0, texto: "eventos climáticos extremos afetaram sua produção!", fonte: "inmet / alerta" },
  { id: 16, emoji: "👨‍👩‍👧", tipo: "propriedade", titulo: "núcleo de sucessão familiar", preco: 280, aluguel: 80, aluguelCasa: 240, aluguelPredio: 640, texto: "capacitar jovens com tecnologia no campo garante sustentabilidade a longo prazo.", fonte: "ibge censo agro" },
  { id: 17, emoji: "🦋", tipo: "propriedade", titulo: "biofábrica de macroorganismos", preco: 300, aluguel: 90, aluguelCasa: 270, aluguelPredio: 720, texto: "inimigos naturais (como vespas) eliminam lagartas sem agredir o ecossistema.", fonte: "embrapa meio ambiente" },
  { id: 18, emoji: "🌻", tipo: "propriedade", titulo: "plantação de girassóis", preco: 320, aluguel: 100, aluguelCasa: 300, aluguelPredio: 800, texto: "rotação estratégica que descompacta a terra e quebra o ciclo de fungos.", fonte: "embrapa soja" },
  { id: 19, emoji: "🦜", tipo: "propriedade", titulo: "corredor ecológico", preco: 350, aluguel: 120, aluguelCasa: 360, aluguelPredio: 950, texto: "conectar fragmentos florestais permite o tráfego seguro de aves nativas.", fonte: "icmbio" },
  { id: 20, emoji: "🐑", tipo: "propriedade", titulo: "integração silvipastoril", preco: 360, aluguel: 130, aluguelCasa: 390, aluguelPredio: 1000, texto: "criar ovinos sob pomares provê adubo orgânico e reduz capina química.", fonte: "sebrae agro" },
  { id: 21, emoji: "🍃", tipo: "sorte", titulo: "sorte: adubação verde", preco: 0, aluguel: 0, aluguelCasa: 0, aluguelPredio: 0, texto: "leguminosas fixaram nitrogênio no solo! economia de r$ 100 em fertilizantes sintéticos.", fonte: "embrapa agrobiologia" },
  { id: 22, emoji: "🫘", tipo: "propriedade", titulo: "inoculação de rizóbios", preco: 400, aluguel: 150, aluguelCasa: 450, aluguelPredio: 1100, texto: "bactérias simbióticas capturam o nitrogênio do ar alimentando a soja sem poluir.", fonte: "embrapa soja" },
  { id: 23, emoji: "🏞️", tipo: "propriedade", titulo: "bacia hidrográfica protegida", preco: 420, aluguel: 160, aluguelCasa: 480, aluguelPredio: 1200, texto: "o terraceamento das encostas evita o assoreamento dos rios da comunidade.", fonte: "ana" }
];

// ===== eventos de sorte e azar =====
const eventosSorte = [
  { texto: "🌱 adubação verde fixou nitrogênio! ganhe r$ 200.", valor: 200, emoji: "🌱" },
  { texto: "🐝 abelhas nativas polinizaram sua lavoura! ganhe r$ 150.", valor: 150, emoji: "🐝" },
  { texto: "☀️ clima favorável aumentou sua produção! ganhe r$ 180.", valor: 180, emoji: "☀️" },
  { texto: "💧 sistema de irrigação eficiente economizou água! ganhe r$ 120.", valor: 120, emoji: "💧" },
  { texto: "🌾 manejo integrado de pragas reduziu perdas! ganhe r$ 250.", valor: 250, emoji: "🌾" },
  { texto: "🔄 rotação de culturas melhorou o solo! ganhe r$ 160.", valor: 160, emoji: "🔄" },
  { texto: "🌿 compostagem orgânica enriqueceu seu solo! ganhe r$ 140.", valor: 140, emoji: "🌿" },
  { texto: "💡 você adotou energia solar! economize r$ 200.", valor: 200, emoji: "💡" }
];

const eventosAzar = [
  { texto: "⛈️ tempestade de granizo danificou a colheita! perda de r$ 200.", valor: -200, emoji: "⛈️" },
  { texto: "🐛 praga de gafanhotos atacou sua lavoura! perda de r$ 150.", valor: -150, emoji: "🐛" },
  { texto: "🔥 incêndio florestal destruiu parte da reserva! perda de r$ 250.", valor: -250, emoji: "🔥" },
  { texto: "🌊 enchente alagou suas plantações! perda de r$ 180.", valor: -180, emoji: "🌊" },
  { texto: "🐀 roedores danificaram seus armazéns! perda de r$ 120.", valor: -120, emoji: "🐀" },
  { texto: "💨 vendaval derrubou estruturas! perda de r$ 160.", valor: -160, emoji: "💨" },
  { texto: "🌡️ onda de calor secou sua lavoura! perda de r$ 220.", valor: -220, emoji: "🌡️" },
  { texto: "🦠 doença fúngica comprometeu a produção! perda de r$ 140.", valor: -140, emoji: "🦠" }
];

// ===== mapeamento do tabuleiro =====
const ordemLayoutHTML = [
  { col: 1, row: 7 }, { col: 2, row: 7 }, { col: 3, row: 7 }, { col: 4, row: 7 }, { col: 5, row: 7 }, { col: 6, row: 7 },
  { col: 7, row: 7 }, { col: 7, row: 6 }, { col: 7, row: 5 }, { col: 7, row: 4 }, { col: 7, row: 3 }, { col: 7, row: 2 },
  { col: 7, row: 1 }, { col: 6, row: 1 }, { col: 5, row: 1 }, { col: 4, row: 1 }, { col: 3, row: 1 }, { col: 2, row: 1 },
  { col: 1, row: 1 }, { col: 1, row: 2 }, { col: 1, row: 3 }, { col: 1, row: 4 }, { col: 1, row: 5 }, { col: 1, row: 6 }
];

// ===== variáveis globais =====
let nosCasasDOM = [];
let listaJogadores = [];
let donoPropriedades = {};
let construcoes = {};
let turnoAtual = 0;
let jogoIniciado = false;
let emProcessamento = false;
const facesDados = ["🎲", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

// ===== cores disponíveis =====
const CORES_DISPONIVEIS = [
  { id: 'p1', nome: 'vermelho', hex: '#e53935' },
  { id: 'p2', nome: 'azul', hex: '#1e88e5' },
  { id: 'p3', nome: 'amarelo', hex: '#fdd835' },
  { id: 'p4', nome: 'roxo', hex: '#8e24aa' },
  { id: 'p5', nome: 'verde', hex: '#43a047' },
  { id: 'p6', nome: 'laranja', hex: '#fb8c00' },
  { id: 'p7', nome: 'rosa', hex: '#e91e63' },
  { id: 'p8', nome: 'ciano', hex: '#00bcd4' }
];

// ===== sistema de som (web audio api) =====
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playTone(freq, duration, type = 'sine', volume = 0.2) {
  try {
    initAudio();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.type = type;
    oscillator.frequency.value = freq;
    
    gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

function somDados() {
  playTone(800, 0.1, 'sine', 0.1);
  setTimeout(() => playTone(600, 0.1, 'sine', 0.1), 100);
  setTimeout(() => playTone(400, 0.15, 'sine', 0.1), 200);
}

function somCompra() {
  playTone(523, 0.15, 'sine', 0.15);
  setTimeout(() => playTone(659, 0.15, 'sine', 0.15), 150);
  setTimeout(() => playTone(784, 0.2, 'sine', 0.15), 300);
}

function somConstruir() {
  playTone(440, 0.1, 'sine', 0.15);
  setTimeout(() => playTone(554, 0.1, 'sine', 0.15), 120);
  setTimeout(() => playTone(659, 0.15, 'sine', 0.15), 240);
}

function somDinheiro() {
  playTone(880, 0.08, 'sine', 0.12);
  setTimeout(() => playTone(1100, 0.08, 'sine', 0.12), 100);
  setTimeout(() => playTone(1320, 0.12, 'sine', 0.12), 200);
}

function somAlerta() {
  playTone(500, 0.2, 'sawtooth', 0.08);
  setTimeout(() => playTone(400, 0.2, 'sawtooth', 0.08), 250);
}

function somPassar() {
  playTone(300, 0.1, 'sine', 0.08);
  setTimeout(() => playTone(250, 0.1, 'sine', 0.08), 100);
}

// ===== sistema de modais =====
function mostrarModal(titulo, mensagem, fonte = null, emoji = null, botoes = null) {
  return new Promise((resolve) => {
    const existente = document.querySelector('.modal-overlay');
    if (existente) existente.remove();
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    const box = document.createElement('div');
    box.className = 'modal-box';
    
    let html = '';
    if (emoji) html += `<span class="modal-emoji">${emoji}</span>`;
    html += `<h3>${titulo}</h3>`;
    html += `<p>${mensagem}</p>`;
    if (fonte) html += `<div class="modal-fonte">📍 ${fonte}</div>`;
    
    if (botoes === null) {
      html += `<div class="modal-buttons">
        <button class="btn-modal primary" id="modal-ok">ok</button>
      </div>`;
    } else if (typeof botoes === 'object' && botoes.length === 2) {
      html += `<div class="modal-buttons">
        <button class="btn-modal secondary" id="modal-nao">${botoes[0]}</button>
        <button class="btn-modal primary" id="modal-sim">${botoes[1]}</button>
      </div>`;
    } else if (typeof botoes === 'object' && botoes.length === 3) {
      html += `<div class="modal-buttons">
        <button class="btn-modal secondary" id="modal-opcao1">${botoes[0]}</button>
        <button class="btn-modal primary" id="modal-opcao2">${botoes[1]}</button>
        <button class="btn-modal danger" id="modal-opcao3">${botoes[2]}</button>
      </div>`;
    }
    
    box.innerHTML = html;
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    
    if (botoes === null) {
      document.getElementById('modal-ok').onclick = () => {
        overlay.remove();
        resolve(true);
      };
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.remove();
          resolve(true);
        }
      });
    } else if (typeof botoes === 'object' && botoes.length === 2) {
      document.getElementById('modal-sim').onclick = () => {
        overlay.remove();
        resolve(true);
      };
      document.getElementById('modal-nao').onclick = () => {
        overlay.remove();
        resolve(false);
      };
    } else if (typeof botoes === 'object' && botoes.length === 3) {
      document.getElementById('modal-opcao1').onclick = () => {
        overlay.remove();
        resolve(0);
      };
      document.getElementById('modal-opcao2').onclick = () => {
        overlay.remove();
        resolve(1);
      };
      document.getElementById('modal-opcao3').onclick = () => {
        overlay.remove();
        resolve(2);
      };
    }
  });
}

async function exibirAlertaPedagogico(casa) {
  somAlerta();
  await mostrarModal(
    casa.titulo,
    `"${casa.texto}"`,
    casa.fonte,
    casa.emoji,
    null
  );
}

async function confirmarCompra(casa, jogador) {
  let mensagem = `
    <strong>${casa.titulo}</strong><br>
    💰 preço: r$ ${casa.preco}<br>
    🏠 aluguel: r$ ${casa.aluguel}
  `;
  
  const resposta = await mostrarModal(
    '🌱 investir na propriedade?',
    mensagem,
    null,
    casa.emoji,
    ['não comprar', 'comprar']
  );
  
  return resposta;
}

async function confirmarConstrucao(casa, jogador, nivelAtual) {
  const custo = nivelAtual === 0 ? Math.floor(casa.preco * 0.5) : Math.floor(casa.preco * 0.8);
  const tipo = nivelAtual === 0 ? 'casa' : 'prédio';
  const novoAluguel = nivelAtual === 0 ? casa.aluguelCasa : casa.aluguelPredio;
  
  const resposta = await mostrarModal(
    '🏗️ construir?',
    `${casa.emoji} ${casa.titulo}<br><br>
    🏗️ construir ${tipo}: r$ ${custo}<br>
    📈 novo aluguel: r$ ${novoAluguel}<br><br>
    seu saldo atual: r$ ${jogador.saldo}`,
    null,
    '🏗️',
    ['não', 'construir']
  );
  
  return resposta;
}

async function confirmarPrisao(jogador, rodadasRestantes) {
  const resposta = await mostrarModal(
    '⛓️ treinamento do senar',
    `${jogador.nome}, você está em treinamento por ${rodadasRestantes} rodada(s).<br><br>
    💰 pagar r$ 50 para sair agora?<br>
    seu saldo: r$ ${jogador.saldo}`,
    null,
    '😓',
    ['ficar preso', 'pagar r$ 50']
  );
  
  return resposta;
}

// ===== configuração de jogadores =====
function gerarConfigJogadores() {
  const qtdJogadores = parseInt(document.getElementById("qtd-jogadores").value);
  const qtdBots = parseInt(document.getElementById("qtd-bots").value);
  const container = document.getElementById("jogadores-config");
  container.innerHTML = '';
  
  for (let i = 1; i <= qtdJogadores; i++) {
    const eBot = i > (qtdJogadores - qtdBots);
    const div = document.createElement('div');
    div.className = 'config-jogador-item';
    div.dataset.index = i;
    
    const corPadrao = CORES_DISPONIVEIS[i - 1] || CORES_DISPONIVEIS[0];
    
    div.innerHTML = `
      <div class="config-jogador-header">
        <span class="config-jogador-numero">#${i}</span>
        ${eBot ? '<span class="config-bot-badge">🤖 bot</span>' : ''}
      </div>
      <div class="config-jogador-campo">
        <label>nome:</label>
        <input type="text" class="config-nome" value="${eBot ? `bot agro ${i}` : `produtor ${i}`}" maxlength="20">
      </div>
      <div class="config-jogador-campo">
        <label>cor:</label>
        <select class="config-cor">
          ${CORES_DISPONIVEIS.map(c => `
            <option value="${c.id}" ${c.id === corPadrao.id ? 'selected' : ''}>
              ${c.nome}
            </option>
          `).join('')}
        </select>
        <div class="config-cor-preview" style="background-color: ${corPadrao.hex};"></div>
      </div>
    `;
    
    container.appendChild(div);
    
    const select = div.querySelector('.config-cor');
    const preview = div.querySelector('.config-cor-preview');
    select.addEventListener('change', () => {
      const cor = CORES_DISPONIVEIS.find(c => c.id === select.value);
      preview.style.backgroundColor = cor.hex;
    });
  }
  
  document.getElementById('jogadores-config').style.display = 'block';
}

// ===== botões de ação =====
function mostrarBotoesAcao(mostrar) {
  const botoes = document.getElementById('botoes-acao');
  if (botoes) {
    botoes.style.display = mostrar ? 'flex' : 'none';
  }
}

// ===== sistema de falência =====
function declararFalencia(jogador) {
  // remove todas as propriedades do jogador
  const propriedadesDoJogador = Object.keys(donoPropriedades).filter(key => donoPropriedades[key] === jogador.id);
  
  propriedadesDoJogador.forEach(id => {
    const casaId = parseInt(id);
    delete donoPropriedades[casaId];
    delete construcoes[casaId];
    
    // remove a tag visual da casa
    const elCasa = nosCasasDOM[casaId];
    const donoTag = elCasa.querySelector('.dono-tag');
    if (donoTag) donoTag.remove();
    const construcaoTag = elCasa.querySelector('.construcao-tag');
    if (construcaoTag) construcaoTag.remove();
  });
  
  // zera saldo do jogador
  jogador.saldo = 0;
  jogador.presoRodadas = 0;
  
  // registra no log
  adicionarLog(`💀 ${jogador.nome} declarou falência e perdeu todas as propriedades!`);
  
  // atualiza placar
  atualizarPlacarEDominio();
  desenharPeoesDoJogo();
  mostrarBotoesAcao(false);
  
  // verifica se o jogo acabou
  const jogadoresAtivos = listaJogadores.filter(j => j.saldo > 0);
  if (jogadoresAtivos.length <= 1) {
    adicionarLog("🏆 fim de jogo! último jogador ativo venceu!");
    document.querySelector(".btn-rolar").classList.add("desabilitado");
    jogoIniciado = false;
    salvarRanking();
    return;
  }
  
  // passa para o próximo jogador
  passarTurno();
}

// ===== inicialização =====
document.addEventListener("DOMContentLoaded", () => {
  mapearCasasEletivas();
  document.getElementById("btn-iniciar").addEventListener("click", iniciarPartidaAgroPoly);
  document.querySelector(".btn-rolar").addEventListener("click", tentarJogadaHumana);
  
  document.querySelectorAll(".info").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const el = btn.parentElement;
      const indice = nosCasasDOM.indexOf(el);
      if(indice !== -1) exibirAlertaPedagogico(infoCasas[indice]);
    });
  });
  
  document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
  });
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      document.querySelector('.nav-menu').classList.remove('active');
    });
  });
  
  document.getElementById('qtd-jogadores').addEventListener('change', gerarConfigJogadores);
  document.getElementById('qtd-bots').addEventListener('change', gerarConfigJogadores);
  gerarConfigJogadores();
  
  document.getElementById('btn-comprar').addEventListener('click', function() {
    const jogador = listaJogadores[turnoAtual];
    const casa = infoCasas[jogador.posicao];
    if (casa.tipo === 'propriedade' && !donoPropriedades[casa.id]) {
      efetuarCompra(jogador, casa);
    }
  });
  
  document.getElementById('btn-construir').addEventListener('click', function() {
    const jogador = listaJogadores[turnoAtual];
    const casa = infoCasas[jogador.posicao];
    if (casa.tipo === 'propriedade' && donoPropriedades[casa.id] === jogador.id) {
      const nivelAtual = construcoes[casa.id] || 0;
      if (nivelAtual < 2) {
        construirPropriedade(jogador, casa, nivelAtual);
      }
    }
  });
  
  document.getElementById('btn-passar').addEventListener('click', function() {
    somPassar();
    mostrarBotoesAcao(false);
    passarTurno();
  });
  
  document.getElementById('btn-falencia').addEventListener('click', function() {
    const jogador = listaJogadores[turnoAtual];
    if (!jogador || jogador.isBot) return;
    
    const confirmar = confirm(`⚠️ ${jogador.nome}, você tem certeza que deseja declarar falência?\n\nisso fará você perder todas as propriedades e construções, e encerrará sua participação no jogo.`);
    
    if (confirmar) {
      declararFalencia(jogador);
    }
  });
  
  // gera seção informativa
  setTimeout(() => {
    gerarSecaoInformativa();
  }, 100);
});

function mapearCasasEletivas() {
  const todasCasas = document.querySelectorAll(".casa");
  ordemLayoutHTML.forEach(pos => {
    let el = Array.from(todasCasas).find(c => 
      c.style.gridColumn === String(pos.col) && c.style.gridRow === String(pos.row)
    );
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
    alert("erro: o número de bots não pode ultrapassar o número total de participantes.");
    return;
  }

  listaJogadores = [];
  donoPropriedades = {};
  construcoes = {};
  turnoAtual = 0;
  jogoIniciado = true;
  emProcessamento = false;
  
  document.querySelectorAll('.dono-tag, .construcao-tag').forEach(t => t.remove());

  const configs = document.querySelectorAll('.config-jogador-item');
  
  for (let i = 0; i < configs.length; i++) {
    const config = configs[i];
    const nome = config.querySelector('.config-nome').value || `produtor ${i+1}`;
    const corId = config.querySelector('.config-cor').value;
    const eBot = i >= (qtdJogadores - qtdBots);
    
    listaJogadores.push({
      id: i + 1,
      nome: nome,
      saldo: 1500,
      posicao: 0,
      cor: corId,
      isBot: eBot,
      presoRodadas: 0,
      propriedades: []
    });
  }

  document.getElementById("config-inicial").style.display = "none";
  document.getElementById("painel-jogo").style.display = "block";
  
  adicionarLog("🌱 o jogo começou! todos recebem r$ 1500 de capital de giro.");
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
    const cor = CORES_DISPONIVEIS.find(c => c.id === j.cor);
    div.style.borderLeftColor = cor ? cor.hex : '#ccc';
    
    let propsAdquiridas = infoCasas
      .filter(c => donoPropriedades[c.id] === j.id)
      .map(c => {
        const nivel = construcoes[c.id] || 0;
        return c.emoji + (nivel === 1 ? '🏠' : nivel === 2 ? '🏢' : '');
      })
      .join(' ');

    div.innerHTML = `
      <strong>${j.nome}</strong> ${j.isBot?'🤖':''}<br>
      <span class="destaque">🌾 r$ ${j.saldo}</span><br>
      ${j.presoRodadas > 0 ? '🚫 em treinamento<br>' : ''}
      <span class="propriedades">bens: ${propsAdquiridas || 'nenhum'}</span>
    `;
    placar.appendChild(div);
  });
}

function tentarJogadaHumana() {
  if (!jogoIniciado || emProcessamento) return;
  if (listaJogadores[turnoAtual].isBot) return;
  computarRolagemDados();
}

async function processarCicloDeTurno() {
  if (!jogoIniciado) {
    document.getElementById("jogador-atual").innerText = `jogo não iniciado`;
    return;
  }
  
  atualizarPlacarEDominio();

  const jogador = listaJogadores[turnoAtual];
  const btnRolar = document.querySelector(".btn-rolar");
  document.getElementById("jogador-atual").innerHTML = `<i class="fas fa-user"></i> vez de: ${jogador.nome}`;

  if (jogador.saldo <= 0) {
    adicionarLog(`${jogador.nome} está falido e aguarda recuperação.`);
    setTimeout(() => passarTurno(), 800);
    return;
  }

  if (jogador.isBot) {
    btnRolar.classList.add("desabilitado");
    setTimeout(() => {
      if(jogador.presoRodadas > 0) {
        if (jogador.saldo >= 50 && Math.random() < 0.5) {
          jogador.saldo -= 50;
          jogador.presoRodadas = 0;
          adicionarLog(`🤖 ${jogador.nome} pagou r$ 50 e saiu do treinamento!`);
        } else {
          jogador.presoRodadas--;
          adicionarLog(`🤖 ${jogador.nome} assistiu às aulas (${jogador.presoRodadas} rodadas restantes).`);
          passarTurno();
          return;
        }
      }
      computarRolagemDados();
    }, 1200);
  } else {
    btnRolar.classList.remove("desabilitado");
    if (jogador.presoRodadas > 0) {
      const pagar = await confirmarPrisao(jogador, jogador.presoRodadas);
      if (pagar && jogador.saldo >= 50) {
        jogador.saldo -= 50;
        jogador.presoRodadas = 0;
        adicionarLog(`${jogador.nome} pagou r$ 50 e saiu do treinamento!`);
        atualizarPlacarEDominio();
      } else if (pagar) {
        await mostrarModal('saldo insuficiente', 'você não tem r$ 50 para pagar a saída. continuará no treinamento.', null, '💸');
      }
      
      if (jogador.presoRodadas > 0) {
        jogador.presoRodadas--;
        await mostrarModal('⏳ treinamento', `${jogador.nome}, você está no treinamento e perdeu esta jogada. (${jogador.presoRodadas} restantes)`, null, '😓');
        adicionarLog(`${jogador.nome} continuou no treinamento.`);
        setTimeout(() => passarTurno(), 500);
        return;
      }
    }
  }
}

async function computarRolagemDados() {
  if (emProcessamento) return;
  emProcessamento = true;

  const jogador = listaJogadores[turnoAtual];
  const d1 = Math.floor(Math.random() * 6) + 1;
  const d2 = Math.floor(Math.random() * 6) + 1;
  const passos = d1 + d2;

  const areaDados = document.querySelector(".dados");
  areaDados.classList.add("animando");
  areaDados.innerText = `${facesDados[d1]} ${facesDados[d2]}`;
  somDados();

  setTimeout(() => {
    areaDados.classList.remove("animando");
    
    let antigaPosicao = jogador.posicao;
    let novaPosicao = (antigaPosicao + passos) % infoCasas.length;
    
    if (novaPosicao < antigaPosicao || (antigaPosicao + passos >= infoCasas.length)) {
      jogador.saldo += 250;
      somDinheiro();
      adicionarLog(`🎉 ${jogador.nome} completou um ciclo produtivo e coletou r$ 250 de bônus!`);
    }

    jogador.posicao = novaPosicao;
    desenharPeoesDoJogo();
    atualizarPlacarEDominio();
    
    setTimeout(() => {
      executarRegraDeCasa(jogador, infoCasas[novaPosicao]);
    }, 400);

  }, 600);
}

async function executarRegraDeCasa(jogador, casa) {
  adicionarLog(`${jogador.nome} parou na casa: ${casa.emoji} ${casa.titulo}`);

  if (casa.tipo === "propriedade") {
    const donoId = donoPropriedades[casa.id];

    if (!donoId) {
      if (jogador.saldo >= casa.preco) {
        if (jogador.isBot) {
          if (jogador.saldo - casa.preco > 200) {
            efetuarCompra(jogador, casa);
          } else {
            adicionarLog(`🤖 ${jogador.nome} achou arriscado comprar ${casa.titulo} agora.`);
            finalizarEtapaCasa(casa, false);
          }
        } else {
          const querComprar = await confirmarCompra(casa, jogador);
          if (querComprar) efetuarCompra(jogador, casa);
          else finalizarEtapaCasa(casa, true);
        }
      } else {
        adicionarLog(`💸 ${jogador.nome} não possui saldo suficiente (r$ ${casa.preco}) para comprar esta área.`);
        finalizarEtapaCasa(casa, !jogador.isBot);
      }
    } else if (donoId === jogador.id) {
      const nivelAtual = construcoes[casa.id] || 0;
      if (nivelAtual < 2) {
        if (jogador.isBot) {
          const custo = nivelAtual === 0 ? Math.floor(casa.preco * 0.5) : Math.floor(casa.preco * 0.8);
          if (jogador.saldo >= custo && jogador.saldo - custo > 300) {
            construirPropriedade(jogador, casa, nivelAtual);
          } else {
            adicionarLog(`🤖 ${jogador.nome} não investiu em ${casa.titulo}.`);
            finalizarEtapaCasa(casa, false);
          }
        } else {
          const querConstruir = await confirmarConstrucao(casa, jogador, nivelAtual);
          if (querConstruir) construirPropriedade(jogador, casa, nivelAtual);
          else finalizarEtapaCasa(casa, true);
        }
      } else {
        adicionarLog(`🏡 ${jogador.nome} já tem um prédio em ${casa.titulo}!`);
        finalizarEtapaCasa(casa, !jogador.isBot);
      }
    } else {
      const dono = listaJogadores.find(j => j.id === donoId);
      const nivel = construcoes[casa.id] || 0;
      const valorAluguel = nivel === 0 ? casa.aluguel : nivel === 1 ? casa.aluguelCasa : casa.aluguelPredio;
      
      jogador.saldo -= valorAluguel;
      dono.saldo += valorAluguel;
      
      somDinheiro();
      await mostrarModal('💰 aluguel ecológico', `${jogador.nome} pagou r$ ${valorAluguel} para ${dono.nome} pelo uso de ${casa.titulo}.`, null, '💸');
      adicionarLog(`${jogador.nome} pagou r$ ${valorAluguel} de aluguel.`);
      finalizarEtapaCasa(casa, false);
    }

  } else if (casa.tipo === "sorte") {
    const evento = eventosSorte[Math.floor(Math.random() * eventosSorte.length)];
    jogador.saldo += evento.valor;
    somDinheiro();
    await mostrarModal('🍀 sorte!', `${evento.texto}`, null, evento.emoji);
    adicionarLog(`🍀 ${jogador.nome} ${evento.texto}`);
    finalizarEtapaCasa(casa, false);
    
  } else if (casa.tipo === "azar") {
    const evento = eventosAzar[Math.floor(Math.random() * eventosAzar.length)];
    jogador.saldo += evento.valor;
    somAlerta();
    await mostrarModal('⛈️ azar!', `${evento.texto}`, null, evento.emoji);
    adicionarLog(`⛈️ ${jogador.nome} ${evento.texto}`);
    finalizarEtapaCasa(casa, false);
    
  } else if (casa.tipo === "prisao") {
    jogador.presoRodadas = 3;
    somAlerta();
    adicionarLog(`😓 ${jogador.nome} foi para o treinamento do senar por 3 rodadas!`);
    finalizarEtapaCasa(casa, !jogador.isBot);
  } else {
    finalizarEtapaCasa(casa, false);
  }
}

function efetuarCompra(jogador, casa) {
  jogador.saldo -= casa.preco;
  donoPropriedades[casa.id] = jogador.id;
  construcoes[casa.id] = 0;
  
  const elCasa = nosCasasDOM[casa.id];
  const cor = CORES_DISPONIVEIS.find(c => c.id === jogador.cor);
  const corHex = cor ? cor.hex : '#ccc';
  
  let tag = document.createElement('div');
  tag.className = 'dono-tag';
  tag.style.backgroundColor = corHex;
  elCasa.appendChild(tag);
  
  somCompra();
  adicionarLog(`🛍️ ${jogador.nome} comprou ${casa.titulo} por r$ ${casa.preco}!`);
  finalizarEtapaCasa(casa, false);
}

function construirPropriedade(jogador, casa, nivelAtual) {
  const custo = nivelAtual === 0 ? Math.floor(casa.preco * 0.5) : Math.floor(casa.preco * 0.8);
  jogador.saldo -= custo;
  construcoes[casa.id] = nivelAtual + 1;
  
  const elCasa = nosCasasDOM[casa.id];
  const tagAntiga = elCasa.querySelector('.construcao-tag');
  if (tagAntiga) tagAntiga.remove();
  
  let tag = document.createElement('div');
  tag.className = `construcao-tag ${nivelAtual === 0 ? 'casa' : 'prédio'}`;
  tag.innerText = nivelAtual === 0 ? '🏠 casa' : '🏢 prédio';
  elCasa.appendChild(tag);
  
  somConstruir();
  adicionarLog(`🏗️ ${jogador.nome} construiu ${nivelAtual === 0 ? 'uma casa' : 'um prédio'} em ${casa.titulo}!`);
  finalizarEtapaCasa(casa, false);
}

function finalizarEtapaCasa(casa, deveMostrarModal) {
  if (deveMostrarModal) {
    exibirAlertaPedagogico(casa);
  }
  verificarFalencia();
  atualizarPlacarEDominio();
  emProcessamento = false;
  
  const jogador = listaJogadores[turnoAtual];
  if (!jogador.isBot && jogador.presoRodadas === 0) {
    mostrarBotoesAcao(true);
  } else {
    mostrarBotoesAcao(false);
    passarTurno();
  }
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
  mostrarBotoesAcao(false);
  
  let proximo = (turnoAtual + 1) % listaJogadores.length;
  let tentativas = 0;
  
  while (listaJogadores[proximo].saldo <= 0 && tentativas < listaJogadores.length) {
    proximo = (proximo + 1) % listaJogadores.length;
    tentativas++;
  }
  
  if (tentativas >= listaJogadores.length) {
    adicionarLog("🏆 todos os jogadores faliriam! fim de jogo.");
    document.querySelector(".btn-rolar").classList.add("desabilitado");
    jogoIniciado = false;
    salvarRanking();
    return;
  }
  
  turnoAtual = proximo;
  processarCicloDeTurno();
}

function desenharPeoesDoJogo() {
  document.querySelectorAll('.container-peoes').forEach(c => c.innerHTML = '');
  listaJogadores.forEach(j => {
    if(j.saldo >= 0){
      const container = nosCasasDOM[j.posicao].querySelector('.container-peoes');
      const bola = document.createElement('div');
      bola.className = `peao ${j.cor}`;
      bola.title = j.nome;
      if (j.posicao === listaJogadores[turnoAtual].posicao && jogoIniciado) {
        bola.style.animation = 'peao-pulse 0.5s ease-in-out 3';
      }
      container.appendChild(bola);
    }
  });
}

function adicionarLog(msg) {
  const log = document.getElementById("LOG-historico");
  log.innerHTML = `🌿 ${new Date().toLocaleTimeString()} - ${msg}<br>` + log.innerHTML;
  if (log.children.length > 10) {
    log.removeChild(log.lastChild);
  }
}

function salvarRanking() {
  const ranking = listaJogadores
    .filter(j => j.saldo > 0)
    .sort((a, b) => b.saldo - a.saldo)
    .map((j, idx) => ({
      posicao: idx + 1,
      nome: j.nome,
      saldo: j.saldo,
      propriedades: Object.keys(donoPropriedades).filter(k => donoPropriedades[k] === j.id).length
    }));
  
  const rankingList = document.getElementById('ranking-list');
  rankingList.innerHTML = ranking.length > 0 ? 
    ranking.map(r => `
      <div class="ranking-item">
        <span>🥇 ${r.posicao}º - ${r.nome}</span>
        <span>🌾 r$ ${r.saldo} | ${r.propriedades} propriedades</span>
      </div>
    `).join('') :
    '<p class="ranking-empty">nenhuma partida concluída. jogue para aparecer aqui!</p>';
}

// ===== seção informativa =====
function gerarSecaoInformativa() {
  const container = document.getElementById('info-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  const casasOrdenadas = [...infoCasas].sort((a, b) => a.id - b.id);
  
  const tipoEmoji = {
    'partida': '🚩',
    'propriedade': '🏡',
    'sorte': '🍀',
    'azar': '💥',
    'prisao': '⛓️'
  };
  
  const tipoClass = {
    'partida': 'partida',
    'propriedade': 'propriedade',
    'sorte': 'sorte',
    'azar': 'azar',
    'prisao': 'prisao'
  };
  
  casasOrdenadas.forEach(casa => {
    const card = document.createElement('div');
    card.className = `info-card ${tipoClass[casa.tipo] || ''}`;
    
    let precoHTML = '';
    if (casa.preco > 0) {
      precoHTML = `<div class="info-preco">💰 r$ ${casa.preco}</div>`;
    }
    
    let aluguelHTML = '';
    if (casa.aluguel > 0) {
      aluguelHTML = `<div class="info-preco" style="background:#fff3e0;color:#e65100;">🏠 aluguel: r$ ${casa.aluguel} | casa: r$ ${casa.aluguelCasa} | prédio: r$ ${casa.aluguelPredio}</div>`;
    }
    
    card.innerHTML = `
      <div class="info-card-header">
        <span class="info-emoji">${casa.emoji}</span>
        <h4>${casa.titulo}</h4>
      </div>
      <p>"${casa.texto}"</p>
      ${precoHTML}
      ${aluguelHTML}
      <div class="info-fonte">📍 ${casa.fonte}</div>
    `;
    
    container.appendChild(card);
  });
}