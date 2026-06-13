// ===== SISTEMA DE MODAIS =====
function mostrarModal(titulo, mensagem, fonte = null, emoji = null, botoes = null) {
  return new Promise((resolve) => {
    // Remove modal existente
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
      // Modal informativo (apenas OK)
      html += `<div class="modal-buttons">
        <button class="btn-modal primary" id="modal-ok">OK</button>
      </div>`;
    } else if (typeof botoes === 'object' && botoes.length === 2) {
      // Modal com duas opções (Sim/Não)
      html += `<div class="modal-buttons">
        <button class="btn-modal secondary" id="modal-nao">${botoes[0]}</button>
        <button class="btn-modal primary" id="modal-sim">${botoes[1]}</button>
      </div>`;
    } else if (typeof botoes === 'object' && botoes.length === 3) {
      // Modal com três opções (ex: pagar ou não)
      html += `<div class="modal-buttons">
        <button class="btn-modal secondary" id="modal-opcao1">${botoes[0]}</button>
        <button class="btn-modal primary" id="modal-opcao2">${botoes[1]}</button>
        <button class="btn-modal danger" id="modal-opcao3">${botoes[2]}</button>
      </div>`;
    }
    
    box.innerHTML = html;
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    
    // Configurar eventos
    if (botoes === null) {
      document.getElementById('modal-ok').onclick = () => {
        overlay.remove();
        resolve(true);
      };
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
    
    // Fechar ao clicar fora (apenas para modais informativos)
    if (botoes === null) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.remove();
          resolve(true);
        }
      });
    }
  });
}

// Função para exibir informações da casa (substitui alert)
// Substitua a função antiga por esta:
async function exibirAlertaPedagogico(casa) {
  await mostrarModal(
    casa.titulo,
    `"${casa.texto}"`,
    casa.fonte,
    casa.emoji,
    null
  );
}

// Função para substituir confirm() em compras
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

// Função para substituir confirm() em construções
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

// Função para substituir confirm() em prisão
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
  
  // Menu mobile
  document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
  });
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
  
  // Limpar tags antigas
  document.querySelectorAll('.dono-tag, .construcao-tag').forEach(t => t.remove());

  const cores = ['p1', 'p2', 'p3', 'p4'];
  const nomesBots = ['Bot Agro', 'Bot Sustentável', 'Bot Nativo', 'Bot Verde'];
  
  for (let i = 1; i <= qtdJogadores; i++) {
    const eBot = i > (qtdJogadores - qtdBots);
    listaJogadores.push({
      id: i,
      nome: eBot ? `${nomesBots[i-1]} ${i}` : `Produtor ${i}`,
      saldo: 1500,
      posicao: 0,
      cor: cores[i - 1],
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
    const corBorda = j.id === 1 ? '#e53935' : j.id === 2 ? '#1e88e5' : j.id === 3 ? '#fdd835' : '#8e24aa';
    div.style.borderLeftColor = corBorda;
    
    // Propriedades do jogador
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
    
    // Passou pela Partida: Ganha R$200
    if (novaPosicao < antigaPosicao || (antigaPosicao + passos >= infoCasas.length)) {
      jogador.saldo += 200;
      adicionarLog(`🎉 ${jogador.nome} completou um ciclo produtivo e coletou R$ 200 de bônus!`);
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
    const bonus = casa.id === 9 ? 150 : 100;
    jogador.saldo += bonus;
    adicionarLog(`🍀 ${jogador.nome} ganhou R$ ${bonus} de bônus!`);
    finalizarEtapaCasa(casa, !jogador.isBot);
    
  } else if (casa.tipo === "azar") {
    jogador.saldo -= 150;
    adicionarLog(`⛈️ ${jogador.nome} perdeu R$ 150 com o azar climático!`);
    finalizarEtapaCasa(casa, !jogador.isBot);
    
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
  construcoes[casa.id] = 0; // Terreno vazio
  
  // Tag de propriedade
  const elCasa = nosCasasDOM[casa.id];
  const cor = jogador.id === 1 ? '#e53935' : jogador.id === 2 ? '#1e88e5' : jogador.id === 3 ? '#fdd835' : '#8e24aa';
  
  let tag = document.createElement('div');
  tag.className = 'dono-tag';
  tag.style.backgroundColor = cor;
  elCasa.appendChild(tag);

  adicionarLog(`🛍️ ${jogador.nome} comprou ${casa.titulo} por R$ ${casa.preco}!`);
  finalizarEtapaCasa(casa, false);
}

function construirPropriedade(jogador, casa, nivelAtual) {
  const custo = nivelAtual === 0 ? Math.floor(casa.preco * 0.5) : Math.floor(casa.preco * 0.8);
  jogador.saldo -= custo;
  construcoes[casa.id] = nivelAtual + 1;
  
  // Atualizar visual
  const elCasa = nosCasasDOM[casa.id];
  // Remove tag antiga de construção se existir
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
  // Passa o controle ao próximo jogador ativo
  let proximo = (turnoAtual + 1) % listaJogadores.length;
  let tentativas = 0;
  
  // Pula jogadores falidos
  while (listaJogadores[proximo].saldo <= 0 && tentativas < listaJogadores.length) {
    proximo = (proximo + 1) % listaJogadores.length;
    tentativas++;
  }
  
  // Se todos falidos, fim de jogo
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
      // Adiciona efeito de animação na posição atual
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
  // Simula salvamento de ranking no localStorage
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
document.addEventListener('DOMContentLoaded', function() {
  // Navegação suave entre seções
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      
      // Atualiza link ativo
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      
      // Fecha menu mobile
      document.querySelector('.nav-menu').classList.remove('active');
    });
  });
  
  // Observador de interseção para destacar seção atual
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        document.querySelectorAll('.nav-link').forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.3 });
  
  sections.forEach(section => observer.observe(section));
});