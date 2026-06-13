// --- BANCO DE DADOS DAS CASAS (AGRINHO 2026) ---
const infoCasas = [
  { id: 0, emoji: "🏠", tipo: "partida", titulo: "Partida", preco: 0, aluguel: 0, aluguelCasa: 0, aluguelPredio: 0, texto: "Ponto de partida. Cada volta completa rende R$ 250 de incentivo ecológico!", fonte: "Agrinho 2026" },
  { id: 1, emoji: "🌽", tipo: "propriedade", titulo: "Lavoura de Milho Consorciado", preco: 60, aluguel: 10, aluguelCasa: 30, aluguelPredio: 90, texto: "O milho com braquiária protege o solo contra erosões e ervas daninhas.", fonte: "Embrapa Milho e Sorgo" },
  { id: 2, emoji: "💧", tipo: "propriedade", titulo: "Gotejamento Inteligente", preco: 60, aluguel: 12, aluguelCasa: 36, aluguelPredio: 100, texto: "Sistemas de gotejamento poupam até 60% de água na irrigação agrícola.", fonte: "Agência Nacional de Águas (ANA)" },
  { id: 3, emoji: "🌲", tipo: "propriedade", titulo: "Reserva de Eucalipto", preco: 80, aluguel: 15, aluguelCasa: 45, aluguelPredio: 125, texto: "Florestas cultivadas removem volumes massivos de CO₂ da atmosfera.", fonte: "Indústria Brasileira de Árvores" },
  { id: 4, emoji: "☀️", tipo: "propriedade", titulo: "Usinas Fotovoltaicas Rurais", preco: 100, aluguel: 20, aluguelCasa: 60, aluguelPredio: 160, texto: "Painéis solares geram energia limpa para bombear água e acionar cercas.", fonte: "ABSOLAR" },
  { id: 5, emoji: "♻️", tipo: "propriedade", titulo: "Centro Campo Limpo", preco: 120, aluguel: 25, aluguelCasa: 75, aluguelPredio: 200, texto: "O Brasil destina corretamente 94% das embalagens de defensivos vazias.", fonte: "inpEV" },
  { id: 6, emoji: "⛺", tipo: "propriedade", titulo: "Hotel de EcoTurismo", preco: 140, aluguel: 30, aluguelCasa: 90, aluguelPredio: 240, texto: "Gera receita alternativa para a agricultura familiar mantendo as matas em pé.", fonte: "Ministério do Turismo" },
  { id: 7, emoji: "🌳", tipo: "propriedade", titulo: "Reserva Legal Controlada", preco: 160, aluguel: 35, aluguelCasa: 105, aluguelPredio: 280, texto: "O cumprimento do Código Florestal protege recursos hídricos e fauna.", fonte: "Código Florestal Brasileiro" },
  { id: 8, emoji: "⚡", tipo: "propriedade", titulo: "Biodigestor de Biogás", preco: 180, aluguel: 40, aluguelCasa: 120, aluguelPredio: 320, texto: "Transforma dejetos animais em gás metano e eletricidade para a fazenda.", fonte: "CIBiogás" },
  { id: 9, emoji: "🍀", tipo: "sorte", titulo: "Sorte Ecológica", preco: 0, aluguel: 0, aluguelCasa: 0, aluguelPredio: 0, texto: "Seu manejo sustentável trouxe benefícios!", fonte: "Prêmio Produtividade Verde" },
  { id: 10, emoji: "🐝", tipo: "propriedade", titulo: "Meliponário de Polinização", preco: 200, aluguel: 50, aluguelCasa: 150, aluguelPredio: 400, texto: "Proteger abelhas nativas garante a polinização de 75% das culturas agrícolas.", fonte: "FAO / Embrapa" },
  { id: 11, emoji: "🐄", tipo: "propriedade", titulo: "Pecuária Carbono Neutro", preco: 220, aluguel: 55, aluguelCasa: 165, aluguelPredio: 440, texto: "Manejo rotacionado de pastos acelera a engorda e mitiga gases estufa.", fonte: "Plano ABC+ Federal" },
  { id: 12, emoji: "😓", tipo: "prisao", titulo: "Treinamento do SENAR", preco: 0, aluguel: 0, aluguelCasa: 0, aluguelPredio: 0, texto: "Você cometeu um erro técnico e deve aguardar 3 rodadas estudando aplicação correta de insumos. Pague R$ 50 para sair antecipadamente.", fonte: "Capacitação Rural" },
  { id: 13, emoji: "💨", tipo: "propriedade", titulo: "Fazenda de Crédito de Carbono", preco: 240, aluguel: 65, aluguelCasa: 195, aluguelPredio: 500, texto: "Matas preservadas geram ativos comercializáveis internacionalmente.", fonte: "Mercado Global de Carbono" },
  { id: 14, emoji: "🌊", tipo: "propriedade", titulo: "Nascentes Isoladas", preco: 260, aluguel: 75, aluguelCasa: 225, aluguelPredio: 600, texto: "Isolar áreas de nascentes evita contaminações biológicas na água.", fonte: "SENAR Práticas" },
  { id: 15, emoji: "⛈️", tipo: "azar", titulo: "Azar Climático", preco: 0, aluguel: 0, aluguelCasa: 0, aluguelPredio: 0, texto: "Eventos climáticos extremos afetaram sua produção!", fonte: "INMET / Alerta" },
  { id: 16, emoji: "👨‍👩‍👧", tipo: "propriedade", titulo: "Núcleo de Sucessão Familiar", preco: 280, aluguel: 80, aluguelCasa: 240, aluguelPredio: 640, texto: "Capacitar jovens com tecnologia no campo garante sustentabilidade a longo prazo.", fonte: "IBGE Censo Agro" },
  { id: 17, emoji: "🦋", tipo: "propriedade", titulo: "Biofábrica de Macroorganismos", preco: 300, aluguel: 90, aluguelCasa: 270, aluguelPredio: 720, texto: "Inimigos naturais (como vespas) eliminam lagartas sem agredir o ecossistema.", fonte: "Embrapa Meio Ambiente" },
  { id: 18, emoji: "🌻", tipo: "propriedade", titulo: "Plantação de Girassóis", preco: 320, aluguel: 100, aluguelCasa: 300, aluguelPredio: 800, texto: "Rotação estratégica que descompacta a terra e quebra o ciclo de fungos.", fonte: "Embrapa Soja" },
  { id: 19, emoji: "🦜", tipo: "propriedade", titulo: "Corredor Ecológico", preco: 350, aluguel: 120, aluguelCasa: 360, aluguelPredio: 950, texto: "Conectar fragmentos florestais permite o tráfego seguro de aves nativas.", fonte: "ICMBio" },
  { id: 20, emoji: "🐑", tipo: "propriedade", titulo: "Integração Silvipastoril", preco: 360, aluguel: 130, aluguelCasa: 390, aluguelPredio: 1000, texto: "Criar ovinos sob pomares provê adubo orgânico e reduz capina química.", fonte: "SEBRAE Agro" },
  { id: 21, emoji: "🍃", tipo: "sorte", titulo: "Sorte: Adubação Verde", preco: 0, aluguel: 0, aluguelCasa: 0, aluguelPredio: 0, texto: "Práticas de adubação verde trouxeram benefícios!", fonte: "Embrapa Agrobiologia" },
  { id: 22, emoji: "🫘", tipo: "propriedade", titulo: "Inoculação de Rizóbios", preco: 400, aluguel: 150, aluguelCasa: 450, aluguelPredio: 1100, texto: "Bactérias simbióticas capturam o nitrogênio do ar alimentando a soja sem poluir.", fonte: "Embrapa Soja" },
  { id: 23, emoji: "🏞️", tipo: "propriedade", titulo: "Bacia Hidrográfica Protegida", preco: 420, aluguel: 160, aluguelCasa: 480, aluguelPredio: 1200, texto: "O terraceamento das encostas evita o assoreamento dos rios da comunidade.", fonte: "ANA" }
];

// ===== EVENTOS DE SORTE E AZAR =====
const eventosSorte = [
  { texto: "🌱 Adubação verde fixou nitrogênio! Ganhe R$ 200.", valor: 200, emoji: "🌱" },
  { texto: "🐝 Abelhas nativas polinizaram sua lavoura! Ganhe R$ 150.", valor: 150, emoji: "🐝" },
  { texto: "☀️ Clima favorável aumentou sua produção! Ganhe R$ 180.", valor: 180, emoji: "☀️" },
  { texto: "💧 Sistema de irrigação eficiente economizou água! Ganhe R$ 120.", valor: 120, emoji: "💧" },
  { texto: "🌾 Manejo integrado de pragas reduziu perdas! Ganhe R$ 250.", valor: 250, emoji: "🌾" },
  { texto: "🔄 Rotação de culturas melhorou o solo! Ganhe R$ 160.", valor: 160, emoji: "🔄" },
  { texto: "🌿 Compostagem orgânica enriqueceu seu solo! Ganhe R$ 140.", valor: 140, emoji: "🌿" },
  { texto: "💡 Você adotou energia solar! Economize R$ 200.", valor: 200, emoji: "💡" }
];

const eventosAzar = [
  { texto: "⛈️ Tempestade de granizo danificou a colheita! Perda de R$ 200.", valor: -200, emoji: "⛈️" },
  { texto: "🐛 Praga de gafanhotos atacou sua lavoura! Perda de R$ 150.", valor: -150, emoji: "🐛" },
  { texto: "🔥 Incêndio florestal destruiu parte da reserva! Perda de R$ 250.", valor: -250, emoji: "🔥" },
  { texto: "🌊 Enchente alagou suas plantações! Perda de R$ 180.", valor: -180, emoji: "🌊" },
  { texto: "🐀 Roedores danificaram seus armazéns! Perda de R$ 120.", valor: -120, emoji: "🐀" },
  { texto: "💨 Vendaval derrubou estruturas! Perda de R$ 160.", valor: -160, emoji: "💨" },
  { texto: "🌡️ Onda de calor secou sua lavoura! Perda de R$ 220.", valor: -220, emoji: "🌡️" },
  { texto: "🦠 Doença fúngica comprometeu a produção! Perda de R$ 140.", valor: -140, emoji: "🦠" }
];

// Mapeamento exato de linhas/colunas do HTML
const ordemLayoutHTML = [
  { col: 1, row: 7 }, { col: 2, row: 7 }, { col: 3, row: 7 }, { col: 4, row: 7 }, { col: 5, row: 7 }, { col: 6, row: 7 },
  { col: 7, row: 7 }, { col: 7, row: 6 }, { col: 7, row: 5 }, { col: 7, row: 4 }, { col: 7, row: 3 }, { col: 7, row: 2 },
  { col: 7, row: 1 }, { col: 6, row: 1 }, { col: 5, row: 1 }, { col: 4, row: 1 }, { col: 3, row: 1 }, { col: 2, row: 1 },
  { col: 1, row: 1 }, { col: 1, row: 2 }, { col: 1, row: 3 }, { col: 1, row: 4 }, { col: 1, row: 5 }, { col: 1, row: 6 }
];

let nosCasasDOM = [];
let listaJogadores = [];
let donoPropriedades = {};
let construcoes = {};
let turnoAtual = 0;
let jogoIniciado = false;
let emProcessamento = false;
const facesDados = ["🎲", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

// Cores disponíveis para personalização
const CORES_DISPONIVEIS = [
  { id: 'p1', nome: 'Vermelho', hex: '#e53935' },
  { id: 'p2', nome: 'Azul', hex: '#1e88e5' },
  { id: 'p3', nome: 'Amarelo', hex: '#fdd835' },
  { id: 'p4', nome: 'Roxo', hex: '#8e24aa' },
  { id: 'p5', nome: 'Verde', hex: '#43a047' },
  { id: 'p6', nome: 'Laranja', hex: '#fb8c00' },
  { id: 'p7', nome: 'Rosa', hex: '#e91e63' },
  { id: 'p8', nome: 'Ciano', hex: '#00bcd4' }
];

// ===== SISTEMA DE MODAIS =====
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
        <button class="btn-modal primary" id="modal-ok">OK</button>
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
  await mostrarModal(
    casa.titulo,
    `"${casa.texto}"`,
    casa.fonte,
    casa.emoji,
    null
  );
}

async function confirmarCompra(casa, jogador) {
  const nivelAtual = construcoes[casa.id] || 0;
  let mensagem = `
    <strong>${casa.titulo}</strong><br>
    💰 Preço: R$ ${casa.preco}<br>
    🏠 Aluguel: R$ ${casa.aluguel}
  `;
  
  if (nivelAtual < 2) {
    const custoConstrucao = nivelAtual === 0 ? Math.floor(casa.preco * 0.5) : Math.floor(casa.preco * 0.8);
    const novoAluguel = nivelAtual === 0 ? casa.aluguelCasa : casa.aluguelPredio;
    mensagem += `<br><br>🏗️ Construir ${nivelAtual === 0 ? 'Casa' : 'Prédio'}: R$ ${custoConstrucao}<br>Aluguel passará para R$ ${novoAluguel}`;
  }
  
  const resposta = await mostrarModal(
    '🌱 Investir na propriedade?',
    mensagem,
    null,
    casa.emoji,
    ['Não comprar', 'Comprar']
  );
  
  return resposta;
}

async function confirmarConstrucao(casa, jogador, nivelAtual) {
  const custo = nivelAtual === 0 ? Math.floor(casa.preco * 0.5) : Math.floor(casa.preco * 0.8);
  const tipo = nivelAtual === 0 ? 'Casa' : 'Prédio';
  const novoAluguel = nivelAtual === 0 ? casa.aluguelCasa : casa.aluguelPredio;
  
  const resposta = await mostrarModal(
    '🏗️ Construir?',
    `${casa.emoji} ${casa.titulo}<br><br>
    🏗️ Construir ${tipo}: R$ ${custo}<br>
    📈 Novo aluguel: R$ ${novoAluguel}<br><br>
    Seu saldo atual: R$ ${jogador.saldo}`,
    null,
    '🏗️',
    ['Não', 'Construir']
  );
  
  return resposta;
}

async function confirmarPrisao(jogador, rodadasRestantes) {
  const resposta = await mostrarModal(
    '⛓️ Treinamento do SENAR',
    `${jogador.nome}, você está em treinamento por ${rodadasRestantes} rodada(s).<br><br>
    💰 Pagar R$ 50 para sair agora?<br>
    Seu saldo: R$ ${jogador.saldo}`,
    null,
    '😓',
    ['Ficar preso', 'Pagar R$ 50']
  );
  
  return resposta;
}

// ===== CONFIGURAÇÃO DE JOGADORES =====
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
        ${eBot ? '<span class="config-bot-badge">🤖 Bot</span>' : ''}
      </div>
      <div class="config-jogador-campo">
        <label>Nome:</label>
        <input type="text" class="config-nome" value="${eBot ? `Bot Agro ${i}` : `Produtor ${i}`}" maxlength="20">
      </div>
      <div class="config-jogador-campo">
        <label>Cor:</label>
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

// ... (todo o código anterior até a função toggleTelaCheia permanece igual)

// ===== SISTEMA DE TELA CHEIA (adaptado para novo layout) =====
function toggleTelaCheia() {
  const jogoContainer = document.getElementById('jogo-container');
  
  if (!document.fullscreenElement) {
    if (jogoContainer.requestFullscreen) {
      jogoContainer.requestFullscreen().then(() => {
        document.getElementById('btn-tela-cheia').innerHTML = '<i class="fas fa-compress"></i> Sair';
        setTimeout(() => ajustarTabuleiroTelaCheia(), 200);
      }).catch(err => {
        console.log('Erro ao entrar em tela cheia:', err);
      });
    } else if (jogoContainer.webkitRequestFullscreen) {
      jogoContainer.webkitRequestFullscreen();
      document.getElementById('btn-tela-cheia').innerHTML = '<i class="fas fa-compress"></i> Sair';
      setTimeout(() => ajustarTabuleiroTelaCheia(), 200);
    } else if (jogoContainer.msRequestFullscreen) {
      jogoContainer.msRequestFullscreen();
      document.getElementById('btn-tela-cheia').innerHTML = '<i class="fas fa-compress"></i> Sair';
      setTimeout(() => ajustarTabuleiroTelaCheia(), 200);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().then(() => {
        document.getElementById('btn-tela-cheia').innerHTML = '<i class="fas fa-expand"></i> Tela Cheia';
        restaurarTabuleiroNormal();
      });
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
      document.getElementById('btn-tela-cheia').innerHTML = '<i class="fas fa-expand"></i> Tela Cheia';
      restaurarTabuleiroNormal();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
      document.getElementById('btn-tela-cheia').innerHTML = '<i class="fas fa-expand"></i> Tela Cheia';
      restaurarTabuleiroNormal();
    }
  }
}

function ajustarTabuleiroTelaCheia() {
  const tabuleiroWrapper = document.querySelector('.tabuleiro-wrapper');
  const tabuleiro = document.querySelector('.tabuleiro');
  const painelSide = document.querySelector('.painel-side');
  
  if (tabuleiroWrapper && tabuleiro) {
    // Em tela cheia, mostrar apenas o tabuleiro
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    
    // Tamanho do tabuleiro baseado na altura da tela
    let tamanho = Math.min(vh - 60, vw - 60);
    tamanho = Math.min(tamanho, 700);
    tamanho = Math.max(tamanho, 300);
    
    tabuleiroWrapper.style.maxWidth = tamanho + 'px';
    tabuleiroWrapper.style.maxHeight = tamanho + 'px';
    tabuleiroWrapper.style.width = tamanho + 'px';
    tabuleiroWrapper.style.height = tamanho + 'px';
    tabuleiroWrapper.style.padding = '10px';
    
    tabuleiro.style.width = '100%';
    tabuleiro.style.height = '100%';
    tabuleiro.style.aspectRatio = '1';
    
    // Esconder painel lateral em tela cheia
    if (painelSide) {
      painelSide.style.display = 'none';
    }
  }
}

function restaurarTabuleiroNormal() {
  const tabuleiroWrapper = document.querySelector('.tabuleiro-wrapper');
  const tabuleiro = document.querySelector('.tabuleiro');
  const painelSide = document.querySelector('.painel-side');
  
  if (tabuleiroWrapper && tabuleiro) {
    tabuleiroWrapper.style.maxWidth = '600px';
    tabuleiroWrapper.style.maxHeight = 'none';
    tabuleiroWrapper.style.width = 'auto';
    tabuleiroWrapper.style.height = 'auto';
    tabuleiroWrapper.style.padding = '10px';
    
    tabuleiro.style.width = '100%';
    tabuleiro.style.height = 'auto';
    tabuleiro.style.aspectRatio = '1';
    
    // Mostrar painel lateral novamente
    if (painelSide) {
      painelSide.style.display = 'block';
    }
  }
}

// ===== BOTÕES DE AÇÃO =====
function mostrarBotoesAcao(mostrar) {
  const botoes = document.getElementById('botoes-acao');
  if (botoes) {
    botoes.style.display = mostrar ? 'flex' : 'none';
  }
}

// ===== ADICIONAR EVENTOS AOS BOTÕES DE AÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
  // ... código existente ...
  
  // Adicionar eventos aos botões de ação
  document.getElementById('btn-comprar').addEventListener('click', function() {
    // Lógica para comprar (será chamada quando o jogador estiver em uma propriedade)
    console.log('Botão comprar clicado');
  });
  
  document.getElementById('btn-construir').addEventListener('click', function() {
    // Lógica para construir
    console.log('Botão construir clicado');
  });
  
  document.getElementById('btn-passar').addEventListener('click', function() {
    // Lógica para passar a vez
    console.log('Botão passar clicado');
    passarTurno();
  });
});

// ===== MODIFICAR FINALIZAR ETAPA CASA =====
function finalizarEtapaCasa(casa, deveMostrarModal) {
  if (deveMostrarModal) {
    exibirAlertaPedagogico(casa);
  }
  verificarFalencia();
  atualizarPlacarEDominio();
  emProcessamento = false;
  
  // Mostrar botões de ação se for jogador humano e não estiver preso
  const jogador = listaJogadores[turnoAtual];
  if (!jogador.isBot && jogador.presoRodadas === 0) {
    mostrarBotoesAcao(true);
  } else {
    mostrarBotoesAcao(false);
    passarTurno();
  }
}