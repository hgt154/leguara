/* ═══════════════════════════════════════════════════════════
   PALÁCIOS MENTAIS — Leguará
   Cada tema vira uma casa. Cada cômodo guarda objetos, e cada
   objeto guarda um conhecimento. Cada casa tem uma âncora
   sensorial (cheiro, estação, som, textura) para ajudar a lembrar.
   Arquivo independente: não altera script.js.
═══════════════════════════════════════════════════════════ */

const PALACIOS = {

  /* ─────────────── AFRICANA ─────────────── */
  africana: {
    nome: 'Casa da Ladeira',
    tema: 'Ancestralidade Africana',
    color: '#8B3A2A', light: '#F5E8E5', floor: '#F3E2D6',
    facade: 'sobrado',
    sentidos: {
      cheiro: 'Dendê quente e cravo',
      estacao: 'Verão em Salvador',
      som: 'Atabaque ao longe',
      textura: 'Tecido de chita e pedra da ladeira'
    },
    convite: 'Feche os olhos. Sinta o cheiro de dendê esquentando na panela e o calor do verão em Salvador. Ao longe, um atabaque marca o ritmo. Agora, abra a porta.',
    ambiente: 'tambor',
    cols: 3, rows: 2,
    comodos: [
      { id: 'varanda', nome: 'Varanda do Atlântico', area: '1 / 1 / 2 / 2', cheiro: 'maresia',
        objetos: [
          { e: '🌊', nome: 'O mar na varanda', x: 30, y: 55,
            fato: 'Entre os séculos XVI e XIX, cerca de 4,8 milhões de africanos foram trazidos à força ao Brasil — o maior número de qualquer país do mundo.',
            imagem: 'O mar sobe até a varanda e molha seus pés. Ele lembra a travessia do Atlântico, que muitas pessoas fizeram sem escolha.' },
          { e: '🗺️', nome: 'Mapa pregado na parede', x: 72, y: 35,
            fato: 'Vieram povos da África Ocidental, como iorubás e fon (Nigéria, Benin), e da África Central, os bantos (Congo, Angola).',
            imagem: 'O mapa tem duas cores: amarelo no oeste (iorubás e fon) e verde no centro (bantos). Toque em cada cor para ouvir um nome.' }
        ] },
      { id: 'musica', nome: 'Sala da Música', area: '1 / 2 / 2 / 3', cheiro: 'madeira de tambor',
        objetos: [
          { e: '🥁', nome: 'Tambor que dá umbigada', x: 30, y: 50,
            fato: 'A palavra "samba" vem do quimbundo "semba", que significa umbigada — um passo de dança de origem angolana.',
            imagem: 'Um tambor pula e dá uma umbigada em quem passa. Toda vez que alguém leva a umbigada, grita: "Samba!"' },
          { e: '🪘', nome: 'Berimbau escondido', x: 72, y: 60,
            fato: 'A capoeira foi criada por africanos escravizados como luta disfarçada de dança, para não ser proibida.',
            imagem: 'O berimbau está escondido atrás da cortina, como a luta que se escondia dentro da dança.' }
        ] },
      { id: 'cozinha', nome: 'Cozinha do Dendê', area: '1 / 3 / 3 / 4', cheiro: 'dendê e coentro',
        objetos: [
          { e: '🍲', nome: 'Panela de moqueca', x: 50, y: 25,
            fato: 'Acarajé, moqueca e caruru são heranças africanas da culinária baiana.',
            imagem: 'Na panela borbulha uma moqueca laranja de dendê. Ao lado, um acarajé estala no óleo.' },
          { e: '📖', nome: 'Dicionário na mesa', x: 40, y: 70,
            fato: 'Mais de 400 palavras do português brasileiro vêm de línguas africanas, como axé, caçula, quilombo e samba.',
            imagem: 'O dicionário está aberto e as palavras saem voando: "caçula" corre pela cozinha, "axé" brilha no teto.' }
        ] },
      { id: 'quintal', nome: 'Quintal da Resistência', area: '2 / 1 / 3 / 3', cheiro: 'terra e folhas',
        objetos: [
          { e: '⛰️', nome: 'Serra no fundo do quintal', x: 18, y: 45,
            fato: 'O Quilombo dos Palmares, em Alagoas, foi a maior comunidade quilombola da história do Brasil e resistiu por quase 100 anos.',
            imagem: 'No fundo do quintal há uma serra inteira, com casinhas no alto. Um relógio na serra marca 100 anos.' },
          { e: '🌳', nome: 'Árvore com fitas', x: 50, y: 55,
            fato: 'O candomblé manteve vivas as divindades iorubás, muitas vezes associadas a santos católicos para poder sobreviver.',
            imagem: 'Uma grande árvore cheia de fitas coloridas: cada fita guarda uma tradição que precisou se camuflar para continuar viva.' },
          { e: '🔔', nome: 'Sino de 1888', x: 82, y: 40,
            fato: 'A escravidão foi abolida em 1888. A herança cultural africana já estava enraizada para sempre no Brasil.',
            imagem: 'O sino toca 1-8-8-8: uma batida forte, depois três iguais.' }
        ] }
    ]
  },

  /* ─────────────── INDÍGENA ─────────────── */
  indigena: {
    nome: 'Oca da Floresta',
    tema: 'Ancestralidade Indígena',
    color: '#3A6B1A', light: '#E8F4E0', floor: '#E6EDD6',
    facade: 'oca',
    sentidos: {
      cheiro: 'Terra molhada e mandioca assando',
      estacao: 'Tempo das chuvas',
      som: 'Chuva caindo na mata',
      textura: 'Palha trançada'
    },
    convite: 'Escute a chuva caindo nas folhas. Sinta o cheiro de terra molhada e de mandioca assando no fogo. Passe a mão na palha trançada da parede. Entre na oca.',
    ambiente: 'chuva',
    cols: 3, rows: 2,
    comodos: [
      { id: 'entrada', nome: 'Entrada do Tempo', area: '1 / 1 / 2 / 2', cheiro: 'fumaça de fogueira',
        objetos: [
          { e: '⏳', nome: 'Ampulheta gigante', x: 32, y: 50,
            fato: 'Os povos indígenas vivem no território brasileiro há mais de 12.000 anos.',
            imagem: 'Uma ampulheta do tamanho de uma pessoa, com o número 12.000 desenhado na areia.' },
          { e: '🛶', nome: 'Canoa na porta', x: 72, y: 60,
            fato: 'Quando os portugueses chegaram, em 1500, havia entre 2 e 6 milhões de indígenas falando mais de 1.000 línguas.',
            imagem: 'A canoa está cheia de mil conchas, e cada concha fala uma língua diferente.' }
        ] },
      { id: 'roda', nome: 'Roda de Conversa', area: '1 / 2 / 2 / 3', cheiro: 'urucum',
        objetos: [
          { e: '🗣️', nome: 'Roda de vozes', x: 30, y: 45,
            fato: 'Mais de 150 línguas indígenas ainda são faladas no Brasil — o maior número da América do Sul.',
            imagem: 'Na roda, 150 pessoas conversam ao mesmo tempo, cada uma numa língua.' },
          { e: '🐊', nome: 'Jacaré comendo pipoca', x: 70, y: 65,
            fato: 'Palavras como pipoca, tatu, caju, jacaré e mandioca vêm de línguas indígenas.',
            imagem: 'Um jacaré come pipoca, sentado num tatu, segurando um caju. Que cena!' }
        ] },
      { id: 'fogo', nome: 'Fogo da Mandioca', area: '1 / 3 / 2 / 4', cheiro: 'mandioca assando',
        objetos: [
          { e: '🫓', nome: 'Beiju no fogo', x: 35, y: 55,
            fato: 'Tapioca, beiju, tucupi e tacacá são comidas de origem indígena, quase todas feitas de mandioca.',
            imagem: 'Uma mandioca gigante se transforma em tapioca, depois em beiju, depois em tacacá, como mágica.' },
          { e: '🌿', nome: 'Cesto de ervas', x: 72, y: 40,
            fato: 'Os povos indígenas guardam saberes sobre ervas medicinais e técnicas de manejo da floresta.',
            imagem: 'O cesto de ervas cheira forte. Cada folha é um remédio.' }
        ] },
      { id: 'patio', nome: 'Pátio dos Povos', area: '2 / 1 / 3 / 3', cheiro: 'mata depois da chuva',
        objetos: [
          { e: '🌳', nome: 'Árvore da Amazônia', x: 15, y: 45,
            fato: 'Na Amazônia vivem povos como Yanomami, Tukano e Munduruku.',
            imagem: 'Uma árvore altíssima, com três redes penduradas: Yanomami, Tukano e Munduruku.' },
          { e: '🌾', nome: 'Capim do Cerrado', x: 40, y: 65,
            fato: 'No Cerrado vivem povos como Kayapó e Xavante.',
            imagem: 'O capim dourado do Cerrado se dobra formando as letras K e X.' },
          { e: '🐚', nome: 'Concha do litoral', x: 65, y: 40,
            fato: 'No litoral viviam os povos tupi, como os Tupinambá.',
            imagem: 'Uma concha grande. Encoste no ouvido e ouça: "Tupi… Tupinambá…"' },
          { e: '🌲', nome: 'Pinheiro do Sul', x: 88, y: 60,
            fato: 'No Sul vivem povos como Guarani e Kaingang.',
            imagem: 'Um pinheiro (araucária) com uma pinha que diz "Guarani".' }
        ] },
      { id: 'direitos', nome: 'Casa dos Direitos', area: '2 / 3 / 3 / 4', cheiro: 'papel novo',
        objetos: [
          { e: '📜', nome: 'Pergaminho de 1988', x: 35, y: 40,
            fato: 'A Constituição de 1988 reconheceu os direitos originários dos povos indígenas às suas terras e culturas.',
            imagem: 'O pergaminho se desenrola e mostra o número 1988 escrito com tinta de urucum.' },
          { e: '👥', nome: 'Muitas pessoas na porta', x: 70, y: 65,
            fato: 'Hoje existem 305 povos indígenas reconhecidos e mais de 1,6 milhão de indígenas no Brasil.',
            imagem: 'Uma fila tão longa que dá a volta na oca: 305 povos diferentes chegando.' }
        ] }
    ]
  },

  /* ─────────────── BIOMAS ─────────────── */
  biomas: {
    nome: 'Casa das Seis Janelas',
    tema: 'Biomas Brasileiros',
    color: '#1A5C38', light: '#E6F2EA', floor: '#E2EEE4',
    facade: 'janelas',
    sentidos: {
      cheiro: 'Um cheiro diferente em cada janela',
      estacao: 'Seca e chuva se revezando',
      som: 'Vento passando pelas janelas',
      textura: 'Folha, areia, espinho, capim, água'
    },
    convite: 'Esta casa tem seis janelas, e cada uma abre para um Brasil diferente. Em cada cômodo, respire fundo: o cheiro muda. Sinta o vento passando de janela em janela.',
    ambiente: 'vento',
    cols: 4, rows: 2,
    comodos: [
      { id: 'hall', nome: 'Hall do Mapa', area: '1 / 1 / 3 / 2', cheiro: 'madeira antiga',
        objetos: [
          { e: '🗺️', nome: 'Mapa com 6 cores', x: 50, y: 30,
            fato: 'Bioma é um conjunto de ecossistemas com clima e história próprios. O Brasil tem 6 biomas continentais, reconhecidos pelo IBGE.',
            imagem: 'O mapa no chão é um tapete de seis cores. Pise em cada cor e ouça o nome de um bioma.' },
          { e: '6️⃣', nome: 'Seis chaves', x: 50, y: 72,
            fato: 'Os seis biomas são: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal e Pampa.',
            imagem: 'Seis chaves num chaveiro, cada uma abre uma janela da casa.' }
        ] },
      { id: 'amazonia', nome: 'Janela da Amazônia', area: '1 / 2 / 2 / 3', cheiro: 'chuva e folha molhada',
        objetos: [
          { e: '🦜', nome: 'Arara contando bichos', x: 30, y: 45,
            fato: 'A Amazônia abriga pelo menos metade de todas as espécies vivas do planeta e é a maior floresta tropical do mundo.',
            imagem: 'Uma arara corta um bolo de bichos ao meio: metade dos bichos do mundo mora aqui.' },
          { e: '💧', nome: 'Gota gigante', x: 72, y: 62,
            fato: 'A Amazônia guarda cerca de 20% da água doce do mundo.',
            imagem: 'Uma gota d\'água enorme pinga do teto. Em cada cinco gotas do mundo, uma cai aqui.' }
        ] },
      { id: 'mata', nome: 'Janela da Mata Atlântica', area: '1 / 3 / 2 / 4', cheiro: 'bromélia e maresia',
        objetos: [
          { e: '🚰', nome: 'Torneira aberta', x: 35, y: 50,
            fato: 'A Mata Atlântica abastece cerca de 70% dos brasileiros com água — mesmo tendo perdido mais de 70% da sua área.',
            imagem: 'A torneira jorra água para 7 de cada 10 brasileiros, mas a árvore ao lado tem só um galho sobrando.' }
        ] },
      { id: 'cerrado', nome: 'Janela do Cerrado', area: '1 / 4 / 2 / 5', cheiro: 'pequi',
        objetos: [
          { e: '🌳', nome: 'Árvore torta', x: 40, y: 50,
            fato: 'O Cerrado é a savana mais rica do mundo, com árvores tortas e raízes enormes. Tem cerca de 4.000 espécies de plantas que só existem lá.',
            imagem: 'Uma árvore toda torta, com raízes tão compridas que atravessam o chão do cômodo.' }
        ] },
      { id: 'caatinga', nome: 'Janela da Caatinga', area: '2 / 2 / 3 / 3', cheiro: 'terra seca',
        objetos: [
          { e: '🌵', nome: 'Mandacaru com bandeira', x: 35, y: 50,
            fato: 'A Caatinga é o único bioma 100% brasileiro. Fica no Nordeste semiárido, com mandacaru e tatu-bola.',
            imagem: 'Um mandacaru segura a bandeira do Brasil. Um tatu-bola rola aos pés dele.' }
        ] },
      { id: 'pantanal', nome: 'Janela do Pantanal', area: '2 / 3 / 3 / 4', cheiro: 'capim e água parada',
        objetos: [
          { e: '🐊', nome: 'Jacaré boiando', x: 40, y: 55,
            fato: 'O Pantanal é a maior planície alagável do planeta. Na estação das cheias, boa parte dele fica debaixo d\'água.',
            imagem: 'O chão deste cômodo está alagado até o joelho. Um jacaré boia tranquilo.' }
        ] },
      { id: 'pampa', nome: 'Janela do Pampa', area: '2 / 4 / 3 / 5', cheiro: 'grama e erva-mate',
        objetos: [
          { e: '🐎', nome: 'Cavalo no campo', x: 40, y: 55,
            fato: 'O Pampa, no Sul, é formado por campos abertos e já perdeu mais da metade da sua vegetação original.',
            imagem: 'Um cavalo corre num campo de grama, mas metade do campo está cercada.' }
        ] }
    ]
  },

  /* ─────────────── RIO ─────────────── */
  rio: {
    nome: 'Sobrado da Guanabara',
    tema: 'História do Rio de Janeiro',
    color: '#3A1A6B', light: '#ECE6F6', floor: '#E7E2F0',
    facade: 'sobrado',
    sentidos: {
      cheiro: 'Maresia',
      estacao: 'Verão de janeiro',
      som: 'Ondas da baía',
      textura: 'Areia e pedra portuguesa'
    },
    convite: 'É janeiro, faz calor. Sinta o cheiro de maresia que vem da baía e o barulho das ondas. Neste sobrado, cada cômodo é uma época — ande em ordem e você atravessa 500 anos.',
    ambiente: 'mar',
    cols: 3, rows: 2,
    comodos: [
      { id: 'janela', nome: 'Janela da Baía · 1502', area: '1 / 1 / 2 / 2', cheiro: 'maresia',
        objetos: [
          { e: '🔭', nome: 'Luneta confusa', x: 40, y: 50,
            fato: 'Em 1º de janeiro de 1502, Gaspar de Lemos confundiu a Baía de Guanabara com a foz de um rio. O erro virou o nome "Rio de Janeiro".',
            imagem: 'Pela luneta, a baía parece um rio. Um calendário ao lado mostra: 1º de janeiro.' }
        ] },
      { id: 'forte', nome: 'Sala do Forte · 1555–1567', area: '1 / 2 / 2 / 3', cheiro: 'pólvora',
        objetos: [
          { e: '🥖', nome: 'Pão francês no canhão', x: 28, y: 45,
            fato: 'Em 1555, os franceses tentaram criar a França Antártica na baía, com o Forte Coligny. Foram expulsos em 1567.',
            imagem: 'Um canhão dispara pães franceses. Mas eles caem no mar.' },
          { e: '🗡️', nome: 'Espada de Estácio', x: 72, y: 60,
            fato: 'Estácio de Sá fundou São Sebastião do Rio de Janeiro em 1º de março de 1565.',
            imagem: 'A espada está cravada num calendário, bem em cima de "1º de março".' }
        ] },
      { id: 'salao', nome: 'Salão Real · 1763–1822', area: '1 / 3 / 3 / 4', cheiro: 'perfume da corte',
        objetos: [
          { e: '📦', nome: 'Caixa vinda de Salvador', x: 50, y: 18,
            fato: 'Em 1763, a capital colonial foi transferida de Salvador para o Rio de Janeiro.',
            imagem: 'Uma caixa de mudança com a etiqueta "Salvador → Rio".' },
          { e: '👑', nome: 'Coroa no sofá', x: 35, y: 48,
            fato: 'Em 1808, D. João VI e a corte portuguesa vieram para o Rio, fugindo de Napoleão. Foi a única vez que uma metrópole europeia foi governada de outro continente.',
            imagem: 'A coroa chegou cansada da viagem e está deitada no sofá.' },
          { e: '🌴', nome: 'Palmeira no vaso', x: 70, y: 62,
            fato: 'Com a corte vieram o Jardim Botânico, a Biblioteca Nacional e o primeiro jornal do Brasil.',
            imagem: 'Uma palmeira lê um livro e um jornal ao mesmo tempo.' },
          { e: '🇧🇷', nome: 'Bandeira na escada', x: 40, y: 85,
            fato: 'Em 1822 veio a Independência do Brasil, e o Rio continuou capital, agora do Império.',
            imagem: 'Na saída do salão, uma bandeira acena: "Independência!"' }
        ] },
      { id: 'republica', nome: 'Quarto da República · 1888–1904', area: '2 / 1 / 3 / 2', cheiro: 'jornal impresso',
        objetos: [
          { e: '🔔', nome: 'Dois sinos', x: 30, y: 45,
            fato: 'Em 1888 foi abolida a escravidão e, em 1889, proclamada a República.',
            imagem: 'Dois sinos tocam um depois do outro: 1888, 1889.' },
          { e: '💉', nome: 'Seringa revoltada', x: 70, y: 62,
            fato: 'Em 1904, a Revolta da Vacina levantou a população contra a vacinação obrigatória e as remoções.',
            imagem: 'Uma seringa gigante cercada de gente gritando na rua.' }
        ] },
      { id: 'saida', nome: 'Porta para Brasília · 1960', area: '2 / 2 / 3 / 3', cheiro: 'mala nova',
        objetos: [
          { e: '🧳', nome: 'Mala de mudança', x: 45, y: 50,
            fato: 'Em 1960, com a inauguração de Brasília, o Rio deixou de ser a capital do Brasil, depois de quase 200 anos.',
            imagem: 'A mala da capital está pronta na porta, com uma etiqueta: "Brasília, 1960".' }
        ] }
    ]
  },

  /* ─────────────── IMIGRAÇÃO ─────────────── */
  imigracao: {
    nome: 'Hospedaria da Chegada',
    tema: 'Imigração no Brasil',
    color: '#6B4A1A', light: '#F4ECDF', floor: '#F0E6D4',
    facade: 'hospedaria',
    sentidos: {
      cheiro: 'Café coado e pão quente',
      estacao: 'Tempo da colheita do café',
      som: 'Apito de navio no porto',
      textura: 'Mala de couro e madeira do cais'
    },
    convite: 'Um navio apita no porto. Da cozinha vem cheiro de café coado e pão saindo do forno. Você carrega uma mala de couro. Seja bem-vindo à hospedaria.',
    ambiente: 'navio',
    cols: 3, rows: 2,
    comodos: [
      { id: 'cais', nome: 'Cais do Porto', area: '1 / 1 / 2 / 2', cheiro: 'sal e corda molhada',
        objetos: [
          { e: '⚓', nome: 'Âncora com a data', x: 30, y: 45,
            fato: 'Em 1808, a abertura dos portos permitiu a entrada de imigrantes que não eram portugueses.',
            imagem: 'Uma âncora gravada com 1808 — a mesma data da chegada da corte ao Rio.' },
          { e: '🚢', nome: 'Navio Kasato Maru', x: 72, y: 62,
            fato: 'Em 1908, o navio Kasato Maru chegou ao porto de Santos com 165 famílias japonesas.',
            imagem: 'O navio exatamente 100 anos depois da âncora: 1808 → 1908.' }
        ] },
      { id: 'registro', nome: 'Sala do Registro', area: '1 / 2 / 2 / 3', cheiro: 'tinta de carimbo',
        objetos: [
          { e: '📚', nome: 'Livro de registro enorme', x: 35, y: 50,
            fato: 'Entre 1884 e 1959, o Brasil recebeu cerca de 4,7 milhões de imigrantes.',
            imagem: 'O livro é tão grosso que encosta no teto.' },
          { e: '🥇', nome: 'Pódio', x: 72, y: 55,
            fato: 'Os maiores grupos foram os italianos (1,5 milhão) e os portugueses (1,4 milhão).',
            imagem: 'No pódio, um italiano em 1º e um português em 2º, quase empatados.' }
        ] },
      { id: 'cozinha', nome: 'Cozinha do Mundo', area: '1 / 3 / 3 / 4', cheiro: 'café e pão',
        objetos: [
          { e: '🍕', nome: 'Pizza', x: 30, y: 20,
            fato: 'Os italianos trouxeram a pizza e o macarrão.',
            imagem: 'A pizza está em cima do fogão, cheirando a manjericão.' },
          { e: '🍣', nome: 'Sushi', x: 70, y: 38,
            fato: 'Os japoneses trouxeram o sushi e também o judô.',
            imagem: 'Um sushi faz um golpe de judô na bancada.' },
          { e: '🥙', nome: 'Esfiha', x: 30, y: 60,
            fato: 'Os sírio-libaneses trouxeram a esfiha.',
            imagem: 'Uma pilha de esfihas em formato de triângulo.' },
          { e: '🍰', nome: 'Cuca', x: 70, y: 80,
            fato: 'Os alemães trouxeram a cuca e a Oktoberfest.',
            imagem: 'Uma cuca coberta de farofa doce, numa mesa de festa.' }
        ] },
      { id: 'quartos', nome: 'Quarto das Cidades', area: '2 / 1 / 3 / 2', cheiro: 'queijo e uva',
        objetos: [
          { e: '🧀', nome: 'Queijo suíço', x: 22, y: 40,
            fato: 'Em 1819, os primeiros suíços chegaram ao Rio de Janeiro e fundaram Nova Friburgo.',
            imagem: 'Um queijo suíço com uma placa: "Nova Friburgo, 1819".' },
          { e: '🍺', nome: 'Caneca de festa', x: 55, y: 65,
            fato: 'Em 1824 começou a imigração alemã no Rio Grande do Sul, em São Leopoldo. Depois vieram cidades como Blumenau e Joinville.',
            imagem: 'Uma caneca enorme brindando: "São Leopoldo, 1824!"' },
          { e: '🍇', nome: 'Cacho de uva', x: 82, y: 35,
            fato: 'A partir de 1875 chegou o maior grupo: os italianos, que foram para o café em São Paulo e para Caxias do Sul e Bento Gonçalves.',
            imagem: 'Um cacho de uva pendurado com grãos de café no lugar de algumas uvas.' }
        ] },
      { id: 'porta', nome: 'Porta Aberta · Hoje', area: '2 / 2 / 3 / 3', cheiro: 'ar fresco',
        objetos: [
          { e: '🌎', nome: 'Globo girando', x: 35, y: 45,
            fato: 'Desde 2010 chegam novos grupos: haitianos, venezuelanos, bolivianos e congoleses.',
            imagem: 'O globo gira e para no Haiti, na Venezuela, na Bolívia e no Congo.' },
          { e: '🚪', nome: 'Porta com 100 chaves', x: 72, y: 60,
            fato: 'Um único centro de atendimento em São Paulo recebe imigrantes de mais de 100 nacionalidades.',
            imagem: 'A porta tem mais de 100 fechaduras diferentes — e todas abrem.' }
        ] }
    ]
  }
};

const PM_ORDEM = ['africana', 'indigena', 'biomas', 'rio', 'imigracao'];

/* ═══════════════════════════════════════
   ESTADO
═══════════════════════════════════════ */
let pmCasa = null;        // chave da casa aberta
let pmComodo = 0;         // índice do cômodo atual
let pmObjeto = null;      // índice do objeto aberto
let pmModo = 'explorar';  // 'explorar' | 'lembrar'
let pmRevelados = {};     // no modo lembrar, objetos revelados nesta visita
let pmVistos = pmCarregar();

function pmCarregar() {
  try { return JSON.parse(localStorage.getItem('leguara-palacios') || '{}'); }
  catch (e) { return {}; }
}
function pmSalvar() {
  try { localStorage.setItem('leguara-palacios', JSON.stringify(pmVistos)); } catch (e) {}
}
function pmChave(casa, c, o) { return `${casa}:${c}:${o}`; }
function pmTotal(casa) { return PALACIOS[casa].comodos.reduce((s, c) => s + c.objetos.length, 0); }
function pmContaVistos(casa) { return Object.keys(pmVistos).filter(k => k.startsWith(casa + ':')).length; }

/* ═══════════════════════════════════════
   FACHADAS 2D (SVG)
═══════════════════════════════════════ */
function pmFachada(tipo, cor) {
  const claro = 'rgba(255,255,255,0.9)';
  const vidro = 'rgba(255,240,200,0.85)';
  const chao = `<rect x="0" y="108" width="200" height="12" fill="rgba(0,0,0,0.15)"/>`;
  if (tipo === 'oca') {
    let palha = '';
    for (let i = 0; i < 9; i++) {
      const x = 40 + i * 15;
      palha += `<path d="M100 18 Q ${x} 60 ${x} 108" stroke="rgba(0,0,0,0.18)" fill="none" stroke-width="1.5"/>`;
    }
    return `<svg viewBox="0 0 200 120" aria-hidden="true">${chao}
      <path d="M30 108 Q 30 20 100 16 Q 170 20 170 108 Z" fill="${cor}"/>${palha}
      <path d="M86 108 L86 82 Q100 66 114 82 L114 108 Z" fill="rgba(0,0,0,0.45)"/>
      <circle cx="100" cy="14" r="4" fill="${cor}"/></svg>`;
  }
  if (tipo === 'janelas') {
    const cores = ['#2E7D4F', '#4C9A5A', '#D9A441', '#C9853A', '#5A8FB0', '#9DBF6A'];
    let jan = '';
    cores.forEach((c, i) => {
      const x = 26 + (i % 3) * 52, y = i < 3 ? 46 : 76;
      jan += `<rect x="${x}" y="${y}" width="28" height="20" rx="2" fill="${c}" stroke="${claro}" stroke-width="2"/>`;
    });
    return `<svg viewBox="0 0 200 120" aria-hidden="true">${chao}
      <polygon points="10,40 100,10 190,40" fill="rgba(0,0,0,0.35)"/>
      <rect x="16" y="38" width="168" height="70" fill="${cor}"/>${jan}</svg>`;
  }
  if (tipo === 'hospedaria') {
    let jan = '';
    for (let i = 0; i < 6; i++) {
      jan += `<rect x="${22 + i * 27}" y="52" width="14" height="18" rx="7" fill="${vidro}"/>`;
    }
    return `<svg viewBox="0 0 200 120" aria-hidden="true">${chao}
      <rect x="12" y="40" width="176" height="68" fill="${cor}"/>
      <rect x="8" y="34" width="184" height="8" fill="rgba(0,0,0,0.3)"/>
      <rect x="84" y="14" width="32" height="22" fill="${cor}"/>
      <circle cx="100" cy="25" r="7" fill="${claro}"/>
      <line x1="100" y1="25" x2="100" y2="20" stroke="${cor}" stroke-width="1.5"/>
      <line x1="100" y1="25" x2="104" y2="25" stroke="${cor}" stroke-width="1.5"/>
      ${jan}<rect x="90" y="80" width="20" height="28" fill="rgba(0,0,0,0.45)"/></svg>`;
  }
  // sobrado (padrão)
  return `<svg viewBox="0 0 200 120" aria-hidden="true">${chao}
    <polygon points="40,36 100,8 160,36" fill="rgba(0,0,0,0.35)"/>
    <rect x="46" y="34" width="108" height="74" fill="${cor}"/>
    <rect x="58" y="44" width="18" height="20" fill="${vidro}"/>
    <rect x="91" y="44" width="18" height="20" fill="${vidro}"/>
    <rect x="124" y="44" width="18" height="20" fill="${vidro}"/>
    <rect x="52" y="64" width="96" height="4" fill="${claro}"/>
    <rect x="58" y="78" width="18" height="20" fill="${vidro}"/>
    <rect x="91" y="80" width="18" height="28" fill="rgba(0,0,0,0.45)"/>
    <rect x="124" y="78" width="18" height="20" fill="${vidro}"/></svg>`;
}

/* ═══════════════════════════════════════
   VISTA: GALERIA DE PALÁCIOS
═══════════════════════════════════════ */
function initPalacios() {
  pmPararAmbiente();
  pmCasa = null;
  const el = document.getElementById('palacios-root');
  el.innerHTML = `
    <div class="pm-hero">
      <div class="hero-eyebrow">Técnica de memória</div>
      <h1 class="pm-hero-title">Palácios <em>Mentais</em></h1>
      <p class="pm-hero-sub">Cada tema é uma casa. Cada cômodo guarda objetos, e cada objeto guarda um conhecimento.
        Quando você lembrar da casa — do cheiro, do som, da estação — vai lembrar do que aprendeu.</p>
    </div>

    <div class="section">
      <div class="section-eyebrow">Como funciona</div>
      <h2 class="section-title">Três passos para guardar na memória</h2>
      <div class="pm-passos">
        <div class="pm-passo"><span class="pm-passo-n">1</span><div><strong>Sinta a casa.</strong> Antes de entrar, imagine o cheiro, o som e a estação. Eles são a chave da porta.</div></div>
        <div class="pm-passo"><span class="pm-passo-n">2</span><div><strong>Ande sempre na mesma ordem.</strong> Siga os números dos cômodos. O caminho vira a ordem das ideias.</div></div>
        <div class="pm-passo"><span class="pm-passo-n">3</span><div><strong>Volte e lembre.</strong> No modo <em>Lembrar</em>, os objetos ficam escondidos. Tente dizer o que estava em cada lugar.</div></div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="section">
      <div class="section-eyebrow">Escolha uma casa</div>
      <h2 class="section-title">Cinco palácios, cinco temas</h2>
      <div class="pm-galeria">
        ${PM_ORDEM.map(k => {
          const p = PALACIOS[k];
          const vistos = pmContaVistos(k), total = pmTotal(k);
          return `
          <button class="pm-casa-card" onclick="abrirPalacio('${k}')" aria-label="Entrar na ${p.nome}, tema ${p.tema}">
            <div class="pm-casa-fachada" style="background:${p.light};">${pmFachada(p.facade, p.color)}</div>
            <div class="pm-casa-body">
              <div class="tema-card-tag">${p.tema}</div>
              <div class="pm-casa-nome">${p.nome}</div>
              <ul class="pm-sentidos-mini">
                <li><span>👃</span>${p.sentidos.cheiro}</li>
                <li><span>🍂</span>${p.sentidos.estacao}</li>
                <li><span>👂</span>${p.sentidos.som}</li>
              </ul>
            </div>
            <div class="tema-card-footer">
              <span>${p.comodos.length} cômodos · ${vistos}/${total} objetos vistos</span>
              <div class="tema-arrow"><i class="ti ti-door-enter"></i></div>
            </div>
          </button>`;
        }).join('')}
      </div>
    </div>

    <div class="divider"></div>

    <div class="section">
      <div class="activity-card" style="max-width:720px;">
        <div class="activity-title"><i class="ti ti-school" style="color:#D4A050;"></i> Dica para o professor</div>
        <div class="activity-desc">Antes de abrir uma casa, leve algo real para a sala: um pouco de café coado, uma folha molhada, uma concha. A âncora sensorial funciona melhor quando o cheiro ou o som é de verdade. Depois, peça que cada estudante desenhe a planta da casa de memória e coloque os objetos no lugar certo.</div>
      </div>
    </div>
  `;
  pmBreadcrumb();
}

/* ═══════════════════════════════════════
   VISTA: DENTRO DO PALÁCIO
═══════════════════════════════════════ */
function abrirPalacio(key) {
  pmPararAmbiente();
  pmCasa = key;
  pmComodo = 0;
  pmObjeto = null;
  pmModo = 'explorar';
  pmRevelados = {};
  const p = PALACIOS[key];
  const el = document.getElementById('palacios-root');
  el.innerHTML = `
    <div class="pm-topo" style="border-left:4px solid ${p.color};">
      <button class="pm-voltar" onclick="initPalacios()"><i class="ti ti-arrow-left"></i> Todos os palácios</button>
      <div class="tema-badge" style="background:${p.light};color:${p.color};"><span class="nav-dot" style="background:${p.color};"></span> ${p.tema}</div>
      <h1 class="tema-title">${p.nome}</h1>

      <div class="pm-ancora" style="--pm-cor:${p.color};--pm-claro:${p.light};">
        <div class="pm-ancora-texto">
          <div class="pm-ancora-label">Antes de entrar</div>
          <p>${p.convite}</p>
        </div>
        <ul class="pm-sentidos">
          <li><span class="pm-s-ico">👃</span><div><small>Cheiro</small>${p.sentidos.cheiro}</div></li>
          <li><span class="pm-s-ico">🍂</span><div><small>Estação</small>${p.sentidos.estacao}</div></li>
          <li><span class="pm-s-ico">👂</span><div><small>Som</small>${p.sentidos.som}</div></li>
          <li><span class="pm-s-ico">✋</span><div><small>Textura</small>${p.sentidos.textura}</div></li>
        </ul>
        <button class="pm-som-btn" id="pmSomBtn" onclick="pmAlternarAmbiente()" aria-pressed="false">
          <i class="ti ti-volume"></i> Ouvir o ambiente
        </button>
      </div>
    </div>

    <div class="pm-barra">
      <div class="version-selector" style="margin:0;" role="group" aria-label="Modo">
        <button class="ver-btn active" id="pmModoExplorar" onclick="pmSetModo('explorar')"><i class="ti ti-eye"></i> Explorar</button>
        <button class="ver-btn" id="pmModoLembrar" onclick="pmSetModo('lembrar')"><i class="ti ti-brain"></i> Lembrar</button>
      </div>
      <div class="pm-progresso" id="pmProgresso"></div>
    </div>

    <div class="pm-layout">
      <div class="pm-planta-wrap">
        <div class="pm-planta" id="pmPlanta"
             style="grid-template-columns:repeat(${p.cols},1fr);grid-template-rows:repeat(${p.rows},minmax(150px,1fr));--pm-cor:${p.color};--pm-chao:${p.floor};"></div>
        <div class="pm-nav-comodo">
          <button class="btn-sm btn-outline" onclick="pmMover(-1)" id="pmAnt"><i class="ti ti-arrow-left"></i> Cômodo anterior</button>
          <span class="pm-dica-teclado">Use ← → no teclado</span>
          <button class="btn-sm btn-forest" onclick="pmMover(1)" id="pmProx">Próximo cômodo <i class="ti ti-arrow-right"></i></button>
        </div>
      </div>
      <aside class="pm-painel" id="pmPainel" aria-live="polite"></aside>
    </div>
  `;
  pmRender();
  pmBreadcrumb(p.nome);
  mainContent.scrollTop = 0;
}

function pmRender() {
  const p = PALACIOS[pmCasa];
  const lembrar = pmModo === 'lembrar';

  // Planta
  document.getElementById('pmPlanta').innerHTML = p.comodos.map((c, ci) => {
    const atual = ci === pmComodo;
    const objs = c.objetos.map((o, oi) => {
      const escondido = lembrar && !pmRevelados[pmChave(pmCasa, ci, oi)];
      const visto = pmVistos[pmChave(pmCasa, ci, oi)];
      const aberto = atual && pmObjeto === oi;
      return `<button class="pm-obj ${escondido ? 'escondido' : ''} ${aberto ? 'aberto' : ''} ${visto && !lembrar ? 'visto' : ''}"
                style="left:${o.x}%;top:${o.y}%;"
                onclick="event.stopPropagation();pmAbrirObjeto(${ci},${oi})"
                aria-label="${escondido ? 'Objeto escondido' : o.nome}">${escondido ? '?' : o.e}</button>`;
    }).join('');
    return `
      <div class="pm-comodo ${atual ? 'atual' : ''}" style="grid-area:${c.area};"
           onclick="pmIrPara(${ci})" role="button" tabindex="0"
           onkeydown="if(event.key==='Enter'){pmIrPara(${ci})}"
           aria-label="Cômodo ${ci + 1}: ${c.nome}">
        <div class="pm-comodo-nome"><span class="pm-comodo-n">${ci + 1}</span>${c.nome}</div>
        ${atual ? '<span class="pm-avatar" aria-hidden="true">🚶</span>' : ''}
        ${objs}
      </div>`;
  }).join('');

  // Painel lateral
  const c = p.comodos[pmComodo];
  let corpo = '';
  if (pmObjeto !== null) {
    const o = c.objetos[pmObjeto];
    const chave = pmChave(pmCasa, pmComodo, pmObjeto);
    if (lembrar && !pmRevelados[chave]) {
      corpo = `
        <div class="pm-card pm-card-lembrar">
          <div class="pm-card-emoji">❔</div>
          <p class="pm-pergunta">Você está em <strong>${c.nome}</strong>. O que estava aqui, neste canto? E o que ele te ensina?</p>
          <p class="pm-dica">Pense em voz alta antes de revelar. Lembre do cheiro: <em>${c.cheiro}</em>.</p>
          <button class="btn-sm btn-forest" onclick="pmRevelar(${pmComodo},${pmObjeto})"><i class="ti ti-eye"></i> Revelar</button>
        </div>`;
    } else {
      corpo = `
        <div class="pm-card">
          <div class="pm-card-emoji">${o.e}</div>
          <div class="pm-card-nome">${o.nome}</div>
          <div class="pm-card-bloco">
            <div class="pm-card-label"><i class="ti ti-bulb"></i> O que este objeto guarda</div>
            <p>${o.fato}</p>
          </div>
          <div class="pm-card-bloco pm-imagem">
            <div class="pm-card-label"><i class="ti ti-sparkles"></i> Imagine</div>
            <p>${o.imagem}</p>
          </div>
        </div>`;
    }
  } else {
    corpo = `<p class="pm-instrucao">${lembrar
      ? 'Os objetos estão escondidos. Toque em cada <strong>?</strong> e tente lembrar antes de revelar.'
      : 'Toque nos objetos deste cômodo para descobrir o que cada um guarda.'}</p>`;
  }

  document.getElementById('pmPainel').innerHTML = `
    <div class="pm-painel-topo">
      <div class="pm-painel-n">Cômodo ${pmComodo + 1} de ${p.comodos.length}</div>
      <div class="pm-painel-nome">${c.nome}</div>
      <div class="pm-painel-cheiro">👃 Aqui cheira a <em>${c.cheiro}</em></div>
    </div>
    <div class="pm-lista-obj">
      ${c.objetos.map((o, oi) => {
        const escondido = lembrar && !pmRevelados[pmChave(pmCasa, pmComodo, oi)];
        return `<button class="pm-chip ${pmObjeto === oi ? 'ativo' : ''}" onclick="pmAbrirObjeto(${pmComodo},${oi})">
          ${escondido ? '❔ Objeto ' + (oi + 1) : o.e + ' ' + o.nome}</button>`;
      }).join('')}
    </div>
    ${corpo}
  `;

  // Progresso + botões
  const vistos = pmContaVistos(pmCasa), total = pmTotal(pmCasa);
  let prog;
  if (lembrar) {
    const rev = Object.keys(pmRevelados).length;
    prog = `<i class="ti ti-brain"></i> ${rev} de ${total} lembrados`;
  } else {
    prog = `<i class="ti ti-checks"></i> ${vistos} de ${total} objetos vistos`;
  }
  document.getElementById('pmProgresso').innerHTML = `${prog}
    <div class="pm-prog-bar"><div style="width:${(lembrar ? Object.keys(pmRevelados).length : vistos) / total * 100}%;background:${p.color};"></div></div>`;
  document.getElementById('pmAnt').disabled = pmComodo === 0;
  const ultimo = pmComodo === p.comodos.length - 1;
  document.getElementById('pmProx').innerHTML = ultimo
    ? (lembrar ? '<i class="ti ti-refresh"></i> Recomeçar' : 'Agora lembre <i class="ti ti-brain"></i>')
    : 'Próximo cômodo <i class="ti ti-arrow-right"></i>';
}

function pmIrPara(ci) {
  if (ci === pmComodo) return;
  pmComodo = ci;
  pmObjeto = null;
  pmRender();
}

function pmMover(d) {
  const p = PALACIOS[pmCasa];
  const novo = pmComodo + d;
  if (novo >= p.comodos.length) {
    // fim do percurso
    if (pmModo === 'explorar') pmSetModo('lembrar');
    else { pmRevelados = {}; pmComodo = 0; pmObjeto = null; pmRender(); }
    return;
  }
  if (novo < 0) return;
  pmComodo = novo;
  pmObjeto = null;
  pmRender();
}

function pmAbrirObjeto(ci, oi) {
  pmComodo = ci;
  pmObjeto = oi;
  if (pmModo === 'explorar') {
    pmVistos[pmChave(pmCasa, ci, oi)] = 1;
    pmSalvar();
  }
  pmRender();
  pmRolarPainel();
}

function pmRevelar(ci, oi) {
  pmRevelados[pmChave(pmCasa, ci, oi)] = 1;
  pmVistos[pmChave(pmCasa, ci, oi)] = 1;
  pmSalvar();
  pmRender();
}

function pmSetModo(m) {
  pmModo = m;
  pmRevelados = {};
  pmComodo = 0;
  pmObjeto = null;
  document.getElementById('pmModoExplorar').classList.toggle('active', m === 'explorar');
  document.getElementById('pmModoLembrar').classList.toggle('active', m === 'lembrar');
  pmRender();
}

function pmRolarPainel() {
  if (window.innerWidth > 900) return;
  const painel = document.getElementById('pmPainel');
  if (painel) painel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function pmBreadcrumb(sub) {
  const b = document.getElementById('breadcrumb');
  if (!b) return;
  b.innerHTML = sub
    ? `<span style="color:var(--ink-l)">Palácios Mentais</span> <i class="ti ti-chevron-right" style="font-size:11px;"></i> <span>${sub}</span>`
    : `<span>Palácios Mentais</span>`;
}

// Teclado: ← → para andar entre cômodos
document.addEventListener('keydown', e => {
  const view = document.getElementById('view-palacios');
  if (!pmCasa || !view || !view.classList.contains('active')) return;
  if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
  if (e.key === 'ArrowRight') pmMover(1);
  if (e.key === 'ArrowLeft') pmMover(-1);
});

/* ═══════════════════════════════════════
   AMBIENTE SONORO (gerado no navegador,
   sem arquivos de áudio extras)
═══════════════════════════════════════ */
let pmAudioCtx = null;
let pmNodes = [];
let pmTimers = [];

function pmRuido(ctx, tipo) {
  const len = ctx.sampleRate * 3;
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  let ultimo = 0;
  for (let i = 0; i < len; i++) {
    const w = Math.random() * 2 - 1;
    if (tipo === 'marrom') { ultimo = (ultimo + 0.02 * w) / 1.02; d[i] = ultimo * 3.5; }
    else d[i] = w;
  }
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.loop = true;
  return src;
}

function pmLfo(ctx, alvo, freq, profundidade) {
  const lfo = ctx.createOscillator();
  const g = ctx.createGain();
  lfo.frequency.value = freq;
  g.gain.value = profundidade;
  lfo.connect(g).connect(alvo);
  lfo.start();
  pmNodes.push(lfo);
}

function pmTocarAmbiente(tipo) {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return false;
  if (!pmAudioCtx) pmAudioCtx = new Ctx();
  const ctx = pmAudioCtx;
  if (ctx.state === 'suspended') ctx.resume();
  const master = ctx.createGain();
  master.gain.setValueAtTime(0, ctx.currentTime);
  master.gain.linearRampToValueAtTime(1, ctx.currentTime + 1.5);
  master.connect(ctx.destination);
  pmNodes.push(master);

  if (tipo === 'chuva') {
    const r = pmRuido(ctx, 'branco');
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 900;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 7000;
    const g = ctx.createGain(); g.gain.value = 0.07;
    r.connect(hp).connect(lp).connect(g).connect(master); r.start(); pmNodes.push(r);
    // gotas
    pmTimers.push(setInterval(() => {
      const o = ctx.createOscillator(), gg = ctx.createGain();
      o.frequency.value = 1800 + Math.random() * 1600;
      gg.gain.setValueAtTime(0.025, ctx.currentTime);
      gg.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
      o.connect(gg).connect(master); o.start(); o.stop(ctx.currentTime + 0.06);
    }, 140));
  }

  if (tipo === 'mar' || tipo === 'navio') {
    const r = pmRuido(ctx, 'marrom');
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 600;
    const g = ctx.createGain(); g.gain.value = 0.22;
    pmLfo(ctx, g.gain, 0.09, 0.16);
    r.connect(lp).connect(g).connect(master); r.start(); pmNodes.push(r);
  }

  if (tipo === 'navio') {
    const apito = () => {
      const t = ctx.currentTime;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.05, t + 0.4);
      g.gain.setValueAtTime(0.05, t + 2);
      g.gain.linearRampToValueAtTime(0, t + 2.8);
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 500;
      [110, 138.6].forEach(f => {
        const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f;
        o.connect(lp); o.start(t); o.stop(t + 3);
      });
      lp.connect(g).connect(master);
    };
    pmTimers.push(setTimeout(apito, 1500));
    pmTimers.push(setInterval(apito, 14000));
  }

  if (tipo === 'vento') {
    const r = pmRuido(ctx, 'branco');
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 500; bp.Q.value = 0.8;
    pmLfo(ctx, bp.frequency, 0.07, 300);
    const g = ctx.createGain(); g.gain.value = 0.09;
    pmLfo(ctx, g.gain, 0.05, 0.05);
    r.connect(bp).connect(g).connect(master); r.start(); pmNodes.push(r);
  }

  if (tipo === 'tambor') {
    // padrão simples de atabaque: forte · fraco · fraco · forte · fraco
    const padrao = [1, 0, 0.5, 0, 0.5, 1, 0, 0.5];
    let passo = 0;
    pmTimers.push(setInterval(() => {
      const v = padrao[passo++ % padrao.length];
      if (!v) return;
      const t = ctx.currentTime;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.frequency.setValueAtTime(v === 1 ? 140 : 210, t);
      o.frequency.exponentialRampToValueAtTime(v === 1 ? 60 : 110, t + 0.18);
      g.gain.setValueAtTime(0.18 * v, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
      o.connect(g).connect(master); o.start(t); o.stop(t + 0.4);
    }, 230));
  }
  return true;
}

function pmPararAmbiente() {
  pmTimers.forEach(t => { clearInterval(t); clearTimeout(t); });
  pmTimers = [];
  pmNodes.forEach(n => { try { n.stop ? n.stop() : n.disconnect(); } catch (e) {} try { n.disconnect(); } catch (e) {} });
  pmNodes = [];
  const b = document.getElementById('pmSomBtn');
  if (b) { b.classList.remove('tocando'); b.setAttribute('aria-pressed', 'false'); b.innerHTML = '<i class="ti ti-volume"></i> Ouvir o ambiente'; }
}

function pmAlternarAmbiente() {
  const b = document.getElementById('pmSomBtn');
  if (b.classList.contains('tocando')) { pmPararAmbiente(); return; }
  if (pmTocarAmbiente(PALACIOS[pmCasa].ambiente)) {
    b.classList.add('tocando');
    b.setAttribute('aria-pressed', 'true');
    b.innerHTML = '<i class="ti ti-volume-off"></i> Silenciar';
  }
}

/* ═══════════════════════════════════════
   INTEGRAÇÃO COM A NAVEGAÇÃO EXISTENTE
   (envolve navigate/openTema sem alterá-las)
═══════════════════════════════════════ */
(function () {
  const navOriginal = navigate;
  navigate = function (view) {
    pmPararAmbiente();
    navOriginal(view);
    if (view === 'palacios') initPalacios();
  };
  const temaOriginal = openTema;
  openTema = function (key) {
    pmPararAmbiente();
    temaOriginal(key);
  };
})();
