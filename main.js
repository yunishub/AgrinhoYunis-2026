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

// ===== SISTEMA DE TELA CHEIA (JOGO INTEIRO) =====
function toggleTelaCheia() {
  const jogoContainer = document.getElementById('jogo-container');
  
  if (!document.fullscreenElement) {
    // Entrar em tela cheia
    if (jogoContainer.requestFullscreen) {
      jogoContainer.requestFullscreen().then(() => {
        document.getElementById('btn-tela-cheia').innerHTML = '<i class="fas fa-compress"></i> Sair';
        // Ajustar o tabuleiro para tela cheia
        setTimeout(() => ajustarTabuleiroTelaCheia(), 100);
      }).catch(err => {
        console.log('Erro ao entrar em tela cheia:', err);
      });
    } else if (jogoContainer.webkitRequestFullscreen) {
      jogoContainer.webkitRequestFullscreen();
      document.getElementById('btn-tela-cheia').innerHTML = '<i class="fas fa-compress"></i> Sair';
      setTimeout(() => ajustarTabuleiroTelaCheia(), 100);
    } else if (jogoContainer.msRequestFullscreen) {
      jogoContainer.msRequestFullscreen();
      document.getElementById('btn-tela-cheia').innerHTML = '<i class="fas fa-compress"></i> Sair';
      setTimeout(() => ajustarTabuleiroTelaCheia(), 100);
    }
  } else {
    // Sair da tela cheia
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
  const tabuleiro = document.querySelector('.tabuleiro');
  const wrapper = document.querySelector('.tabuleiro-wrapper');
  const header = document.querySelector('.header-jogo');
  
  if (tabuleiro && wrapper) {
    // Calcular espaço disponível
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    
    // Tamanho do header
    const headerHeight = header ? header.offsetHeight : 0;
    
    // Espaço disponível para o tabuleiro
    const availableHeight = vh - headerHeight - 60;
    const availableWidth = vw - 40;
    
    // O tabuleiro deve ser quadrado, então o tamanho máximo é o menor entre altura e largura
    const tamanhoMaximo = Math.min(availableHeight, availableWidth);
    
    // Aplicar o tamanho
    wrapper.style.maxWidth = tamanhoMaximo + 'px';
    wrapper.style.maxHeight = tamanhoMaximo + 'px';
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    
    // Forçar o tabuleiro a ser quadrado
    tabuleiro.style.width = '100%';
    tabuleiro.style.height = '100%';
    tabuleiro.style.aspectRatio = '1';
  }
}

function restaurarTabuleiroNormal() {
  const tabuleiro = document.querySelector('.tabuleiro');
  const wrapper = document.querySelector('.tabuleiro-wrapper');
  
  if (tabuleiro && wrapper) {
    wrapper.style.maxWidth = '800px';
    wrapper.style.maxHeight = 'none';
    wrapper.style.width = 'auto';
    wrapper.style.height = 'auto';
    tabuleiro.style.width = '100%';
    tabuleiro.style.height = 'auto';
    tabuleiro.style.aspectRatio = '1';
  }
}

// Detectar mudanças de tamanho da tela
window.addEventListener('resize', () => {
  if (document.fullscreenElement) {
    ajustarTabuleiroTelaCheia();
  }
});

// Detectar saída da tela cheia
document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    document.getElementById('btn-tela-cheia').innerHTML = '<i class="fas fa-expand"></i> Tela Cheia';
    restaurarTabuleiroNormal();
  }
});

document.addEventListener('webkitfullscreenchange', () => {
  if (!document.webkitFullscreenElement) {
    document.getElementById('btn-tela-cheia').innerHTML = '<i class="fas fa-expand"></i> Tela Cheia';
    restaurarTabuleiroNormal();
  }
});

document.addEventListener('msfullscreenchange', () => {
  if (!document.msFullscreenElement) {
    document.getElementById('btn-tela-cheia').innerHTML = '<i class="fas fa-expand"></i> Tela Cheia';
    restaurarTabuleiroNormal();
  }
});  
  document.querySelectorAll(".info").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const el = btn.parentElement;
      const indice = nosCasasDOM.indexOf(el);
      if(indice !== -1) exibirAlertaPedagogico(infoCasas[indice]);
    });
  });
  
  // Menu mobile
  document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
  });
  
  // Navegação suave
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
  
  // Configuração de jogadores
  document.getElementById('qtd-jogadores').addEventListener('change', gerarConfigJogadores);
  document.getElementById('qtd-bots').addEventListener('change', gerarConfigJogadores);
  gerarConfigJogadores();
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
    alert("Erro: O número de Bots não pode ultrapassar o número total de participantes.");
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
    const nome = config.querySelector('.config-nome').value || `Produtor ${i+1}`;
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
  
  adicionarLog("🌱 O jogo começou! Todos recebem R$ 1500 de capital de giro.");
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
      <span class="destaque">🌾 R$ ${j.saldo}</span><br>
      ${j.presoRodadas > 0 ? '🚫 Em treinamento<br>' : ''}
      <span class="propriedades">Bens: ${propsAdquiridas || 'Nenhum'}</span>
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
    document.getElementById("jogador-atual").innerText = `Jogo não iniciado`;
    return;
  }
  
  atualizarPlacarEDominio();

  const jogador = listaJogadores[turnoAtual];
  const btnRolar = document.querySelector(".btn-rolar");
  document.getElementById("jogador-atual").innerHTML = `<i class="fas fa-user"></i> Vez de: ${jogador.nome}`;

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
          adicionarLog(`🤖 ${jogador.nome} pagou R$ 50 e saiu do treinamento!`);
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
        adicionarLog(`${jogador.nome} pagou R$ 50 e saiu do treinamento!`);
        atualizarPlacarEDominio();
      } else if (pagar) {
        await mostrarModal('Saldo Insuficiente', 'Você não tem R$ 50 para pagar a saída. Continuará no treinamento.', null, '💸');
      }
      
      if (jogador.presoRodadas > 0) {
        jogador.presoRodadas--;
        await mostrarModal('⏳ Treinamento', `${jogador.nome}, você está no treinamento e perdeu esta jogada. (${jogador.presoRodadas} restantes)`, null, '😓');
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

  setTimeout(() => {
    areaDados.classList.remove("animando");
    
    let antigaPosicao = jogador.posicao;
    let novaPosicao = (antigaPosicao + passos) % infoCasas.length;
    
    // Passou pela Partida: Ganha R$250
    if (novaPosicao < antigaPosicao || (antigaPosicao + passos >= infoCasas.length)) {
      jogador.saldo += 250;
      adicionarLog(`🎉 ${jogador.nome} completou um ciclo produtivo e coletou R$ 250 de bônus!`);
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
        adicionarLog(`💸 ${jogador.nome} não possui saldo suficiente (R$ ${casa.preco}) para comprar esta área.`);
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
      
      await mostrarModal('💰 Aluguel Ecológico', `${jogador.nome} pagou R$ ${valorAluguel} para ${dono.nome} pelo uso de ${casa.titulo}.`, null, '💸');
      adicionarLog(`${jogador.nome} pagou R$ ${valorAluguel} de aluguel.`);
      finalizarEtapaCasa(casa, false);
    }

  } else if (casa.tipo === "sorte") {
    // Sorte com evento aleatório
    const evento = eventosSorte[Math.floor(Math.random() * eventosSorte.length)];
    jogador.saldo += evento.valor;
    await mostrarModal('🍀 Sorte!', `${evento.texto}`, null, evento.emoji);
    adicionarLog(`🍀 ${jogador.nome} ${evento.texto}`);
    finalizarEtapaCasa(casa, false);
    
  } else if (casa.tipo === "azar") {
    // Azar com evento aleatório
    const evento = eventosAzar[Math.floor(Math.random() * eventosAzar.length)];
    jogador.saldo += evento.valor;
    await mostrarModal('⛈️ Azar!', `${evento.texto}`, null, evento.emoji);
    adicionarLog(`⛈️ ${jogador.nome} ${evento.texto}`);
    finalizarEtapaCasa(casa, false);
    
  } else if (casa.tipo === "prisao") {
    jogador.presoRodadas = 3;
    adicionarLog(`😓 ${jogador.nome} foi para o treinamento do SENAR por 3 rodadas!`);
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

  adicionarLog(`🛍️ ${jogador.nome} comprou ${casa.titulo} por R$ ${casa.preco}!`);
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
  tag.innerText = nivelAtual === 0 ? '🏠 Casa' : '🏢 Prédio';
  elCasa.appendChild(tag);
  
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
  passarTurno();
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
  let proximo = (turnoAtual + 1) % listaJogadores.length;
  let tentativas = 0;
  
  while (listaJogadores[proximo].saldo <= 0 && tentativas < listaJogadores.length) {
    proximo = (proximo + 1) % listaJogadores.length;
    tentativas++;
  }
  
  if (tentativas >= listaJogadores.length) {
    adicionarLog("🏆 Todos os jogadores faliriam! Fim de jogo.");
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
        <span>🌾 R$ ${r.saldo} | ${r.propriedades} propriedades</span>
      </div>
    `).join('') :
    '<p class="ranking-empty">Nenhuma partida concluída.</p>';
}