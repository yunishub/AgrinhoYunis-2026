# 🌱 AgroPoly — Império Sustentável

> Jogo de tabuleiro educativo inspirado no Monopoly, desenvolvido para o **Concurso de Programação Agrinho 2026**.  
> Tema: *Equilíbrio entre Produção e Meio Ambiente*

---

## 📖 Sobre o Projeto

AgroPoly é um jogo de tabuleiro digital em que os jogadores competem para construir o maior império agrícola sustentável do Brasil. Cada propriedade representa uma prática ou tecnologia verde real — de biodigestores a corredores ecológicos — e todas as informações têm fontes científicas verificadas (Embrapa, FAO, ANA, SENAR, etc.).

O jogo une **diversão, estratégia e aprendizado**, ensinando de forma lúdica:
- Economia circular no agronegócio
- Manejo ambiental e Código Florestal Brasileiro
- Tecnologias verdes (energia solar, gotejamento, biodigestor)
- Sucessão familiar no campo

---

## 🗂️ Estrutura de Arquivos

```
agropoly/
├── index.html   # Estrutura da página e do tabuleiro
├── style.css    # Estilos, layout responsivo e modais
└── main.js      # Lógica completa do jogo
```

---

## 🎮 Como Jogar

### Configuração inicial
1. Abra `index.html` em qualquer navegador moderno
2. Na seção **Jogo**, escolha o número de jogadores (2–4) e de bots
3. Personalize o nome e a cor de cada jogador
4. Clique em **Iniciar**

### Dinâmica do turno
- Clique em **Rolar Dados** para mover seu peão pelo tabuleiro
- Ao cair em uma propriedade livre, escolha **Comprar** ou passar
- Ao cair em uma propriedade sua, você pode **Construir** (casa ou prédio) para aumentar o aluguel
- Ao cair em uma propriedade alheia, paga aluguel ao dono automaticamente

### Casas especiais
| Ícone | Tipo | Efeito |
|-------|------|--------|
| 🏠 | Partida | Cada volta completa rende **R$ 250** de bônus |
| 🍀 / 🍃 | Sorte | Evento positivo — ganho de R$ 120 a R$ 250 |
| ⛈️ | Azar Climático | Evento negativo — perda de R$ 120 a R$ 250 |
| 😓 | Treinamento SENAR | Fica preso por **3 rodadas** (ou paga R$ 50 para sair) |
| ⛺ / 🌻 etc. | Propriedade | Compre, construa e cobre aluguel |

### Condição de vitória
O último jogador com saldo positivo e ativo no jogo vence. O ranking final exibe todos os participantes ordenados por patrimônio.

---

## 🏗️ Mecânicas Principais

### Propriedades
São 18 propriedades compráveis, com preços de **R$ 60 a R$ 420**. Cada uma possui três níveis de aluguel:
- **Sem construção** — aluguel básico
- **🏠 Casa** — aluguel médio (custo: 50% do preço da propriedade)
- **🏢 Prédio** — aluguel máximo (custo: 80% do preço da propriedade)

### 🤝 Sistema de Troca
Durante **qualquer momento do seu turno**, jogadores humanos podem propor trocas. Basta clicar em **Propor Troca** no painel lateral.

**O que pode ser negociado:**
- 💰 Dinheiro (de um lado, do outro, ou dos dois)
- 🌾 Propriedades (incluindo as que têm casas/prédios construídos)
- Qualquer combinação de dinheiro + propriedades

**Fluxo da troca:**
1. Escolha com qual jogador negociar
2. Defina sua oferta (dinheiro e/ou propriedades suas)
3. Defina o que você quer em troca (dinheiro e/ou propriedades do alvo)
4. Envie a proposta — o outro jogador aceita ou recusa
5. Se aceito, títulos e dinheiro são transferidos imediatamente e o tabuleiro é atualizado

**Bots e trocas:** bots avaliam automaticamente se a troca é vantajosa pelo valor total (preço das propriedades + dinheiro) e aceitam apenas se saírem em igual ou melhor situação.

### 🤖 Bots
Bots jogam automaticamente após 1,2 segundos. Sua estratégia:
- Compram propriedades se sobrar mais de R$ 200 após a compra
- Constroem se sobrar mais de R$ 300 após a construção
- Saem do treinamento com 50% de chance (se tiverem R$ 50)
- Recusam trocas desvantajosas

### Falência
- Pode ser declarada voluntariamente pelo botão **Declarar Falência**
- Ocorre automaticamente se o saldo ficar negativo (após pagar aluguel ou evento de azar)
- Ao falir, todas as propriedades e construções são devolvidas ao mercado

---

## 🌾 Propriedades do Tabuleiro

| # | Emoji | Propriedade | Preço | Aluguel | Casa | Prédio |
|---|-------|-------------|-------|---------|------|--------|
| 1 | 🌽 | Lavoura de Milho Consorciado | 60 | 10 | 30 | 90 |
| 2 | 💧 | Gotejamento Inteligente | 60 | 12 | 36 | 100 |
| 3 | 🌲 | Reserva de Eucalipto | 80 | 15 | 45 | 125 |
| 4 | ☀️ | Usinas Fotovoltaicas Rurais | 100 | 20 | 60 | 160 |
| 5 | ♻️ | Centro Campo Limpo | 120 | 25 | 75 | 200 |
| 6 | ⛺ | Hotel de EcoTurismo | 140 | 30 | 90 | 240 |
| 7 | 🌳 | Reserva Legal Controlada | 160 | 35 | 105 | 280 |
| 8 | ⚡ | Biodigestor de Biogás | 180 | 40 | 120 | 320 |
| 9 | 🐝 | Meliponário de Polinização | 200 | 50 | 150 | 400 |
| 10 | 🐄 | Pecuária Carbono Neutro | 220 | 55 | 165 | 440 |
| 11 | 💨 | Fazenda de Crédito de Carbono | 240 | 65 | 195 | 500 |
| 12 | 🌊 | Nascentes Isoladas | 260 | 75 | 225 | 600 |
| 13 | 👨‍👩‍👧 | Núcleo de Sucessão Familiar | 280 | 80 | 240 | 640 |
| 14 | 🦋 | Biofábrica de Macroorganismos | 300 | 90 | 270 | 720 |
| 15 | 🌻 | Plantação de Girassóis | 320 | 100 | 300 | 800 |
| 16 | 🦜 | Corredor Ecológico | 350 | 120 | 360 | 950 |
| 17 | 🐑 | Integração Silvipastoril | 360 | 130 | 390 | 1000 |
| 18 | 🫘 | Inoculação de Rizóbios | 400 | 150 | 450 | 1100 |
| 19 | 🏞️ | Bacia Hidrográfica Protegida | 420 | 160 | 480 | 1200 |

---

## 📚 Fontes Educativas

Todas as propriedades têm informações baseadas em fontes reais:

- **Embrapa** (Milho e Sorgo, Soja, Meio Ambiente, Agrobiologia)
- **FAO** — Organização das Nações Unidas para Alimentação e Agricultura
- **ANA** — Agência Nacional de Águas
- **ABSOLAR** — Associação Brasileira de Energia Solar
- **inpEV** — Instituto Nacional de Processamento de Embalagens Vazias
- **CIBiogás** — Centro Internacional de Energias Renováveis
- **ICMBio** — Instituto Chico Mendes de Conservação da Biodiversidade
- **SENAR** — Serviço Nacional de Aprendizagem Rural
- **SEBRAE Agro**
- **IBGE Censo Agro**
- **Código Florestal Brasileiro** (Lei 12.651/2012)
- **Plano ABC+** — Programa Agricultura de Baixo Carbono
- **Mercado Global de Carbono**
- **Ministério do Turismo**

Projeto desenvolvido para fins educacionais no âmbito do **Concurso de Programação Agrinho 2026**.  
*Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente.*
