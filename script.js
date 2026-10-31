/* ═══════════════════════════════════════
   DATA
═══════════════════════════════════════ */
const TEMAS = {
  africana: {
    emoji: '🌍',
    tag: 'Cultura & Identidade',
    color: '#8B3A2A',
    colorLight: '#F5E8E5',
    gradient: 'linear-gradient(135deg,#5C1A0A,#8B3A2A)',
    title: 'Ancestralidade Africana',
    intro: 'Como a cultura africana moldou a língua, a música, a culinária e a espiritualidade do Brasil — uma herança de resistência e criação.',
    padrao: `
      <h3>Introdução</h3>
      <p>O Brasil carrega, em sua língua, em sua música, em seus sabores e em suas crenças, marcas profundas de um continente: África. Essa herança não chegou como presente — ela foi trazida à força, na tragédia do tráfico negreiro, que durante mais de três séculos arrancou milhões de pessoas de suas terras, famílias e culturas. Mas mesmo diante de toda brutalidade, esses povos não deixaram sua história morrer. Eles a guardaram no corpo, nos ritmos, nas palavras e nos rituais.</p>
      <h3>Desenvolvimento</h3>
      <p>Entre os séculos XVI e XIX, o Brasil recebeu cerca de 4 a 5 milhões de africanos escravizados — o maior contingente de qualquer nação do mundo. Eles vinham de regiões diversas: da África Ocidental, como o povo iorubá e o fon; da África Central, como os bantos — grupos como os congos e angolas. Cada um desses povos chegou com um universo próprio: línguas, cosmologias, formas de organizar a família, saberes sobre plantas, culinária, música e dança.</p>
      <p>No Brasil, esses conhecimentos precisaram se adaptar e, muitas vezes, se camuflar para sobreviver. Foi assim que o candomblé manteve vivas as divindades iorubás sob o manto de santos católicos. Que a capoeira disfarçou seu potencial de luta na forma de dança e jogo. Que os quilombos se tornaram territórios de resistência, onde culturas podiam existir com mais liberdade.</p>
      <p>Essa presença se manifesta no português brasileiro, que absorveu centenas de palavras de origem banto e iorubá — como "samba", "moqueca", "caçula", "quilombo", "axé" e "acarajé". Está na culinária baiana, nos ritmos do maracatu, do ijexá, do samba, nos terreiros de umbanda e candomblé.</p>
      <div class="prose-destaque"><strong>Curiosidade:</strong> A palavra "samba" vem do quimbundo <em>semba</em>, que significa "umbigada" — um movimento de dança de origem angolana. O que hoje é símbolo máximo da cultura brasileira começou como expressão sagrada de um povo africano.</div>
      <h3>Conclusão</h3>
      <p>Falar de ancestralidade africana é falar do Brasil. Reconhecer essa herança com precisão e respeito é um ato político e afetivo: é dar nome, história e dignidade a quem por muito tempo foi silenciado. É entender que o Brasil só é o que é porque África está dentro dele.</p>
      <p class="fonte-nota">Fontes: IBGE Educa; Toda Matéria; InfoEscola — Ancestralidade Africana no Brasil.</p>
    `,
    simples: [
      { icon: 'ti-info-circle', label: 'O que é', color: '#1A5C30', frases: ['Ancestralidade africana é a herança que pessoas africanas deixaram no Brasil.','Essas pessoas foram trazidas à força da África para o Brasil.','Isso aconteceu durante mais de 300 anos.','Elas trouxeram suas línguas, músicas, comidas, danças e religiões.','Muito do que é brasileiro hoje vem dessas culturas africanas.'] },
      { icon: 'ti-star', label: 'Por que é importante', color: '#1A5C30', frases: ['O Brasil recebeu mais africanos escravizados do que qualquer outro país do mundo.','Foram entre 4 e 5 milhões de pessoas.','Mesmo sofrendo muito, esses povos mantiveram sua cultura viva.','Eles criaram formas de resistir e preservar suas tradições.','Sem eles, o Brasil seria um país completamente diferente.'] },
      { icon: 'ti-list', label: 'Exemplos', color: '#7A4D10', frases: ['O <strong>samba</strong> é um ritmo que veio de danças africanas.','O <strong>acarajé</strong> é uma comida baiana de origem africana.','A <strong>capoeira</strong> é uma luta disfarçada de dança criada por africanos escravizados.','O <strong>candomblé</strong> é uma religião de origem africana praticada no Brasil.','Palavras como <strong>"axé"</strong>, <strong>"quilombo"</strong> e <strong>"caçula"</strong> vieram da África.'] },
      { icon: 'ti-bulb', label: 'Curiosidade', color: '#7A4D10', frases: ['A palavra "samba" vem de uma língua africana chamada quimbundo.','Ela significa "umbigada", que é um movimento de dança.','Esse movimento vinha de Angola, na África.','Hoje o samba é considerado símbolo do Brasil no mundo inteiro.'] }
    ],
    objetiva: {
      oque: 'A herança cultural, linguística, religiosa e artística de povos africanos trazidos forçados ao Brasil durante o período da escravidão (séc. XVI–XIX).',
      onde: 'África — principalmente nas regiões Ocidental (Iorubá, Fon) e Central (Bantos: Congo, Angola, Moçambique). Desenvolveu-se no Brasil por adaptação e resistência cultural.',
      porque: 'É uma das bases formadoras da identidade brasileira. Está presente na língua, culinária, música, religião, filosofia e organização social do país.',
      fatos: ['O Brasil foi o maior receptor de africanos escravizados do mundo: ~4,8 milhões de pessoas.','Povos como iorubás, bantos, fon e hausás trouxeram culturas riquíssimas e distintas.','Quilombos foram comunidades de resistência — o Quilombo dos Palmares durou quase 100 anos.','Mais de 400 palavras do português brasileiro têm origem em línguas africanas.','Samba, capoeira, candomblé, maracatu e ijexá têm raízes diretas na África.'],
      curiosidade: '"Samba" vem do quimbundo semba = umbigada. Uma dança sagrada angolana virou o maior símbolo cultural do Brasil.'
    },
    visual: [
      { header: '🌍 O que aconteceu?', bg: '#FBF0DC', hc: '#412402', texto: ['Entre os séculos XVI e XIX, milhões de africanos foram trazidos à força para o Brasil.','Eles trouxeram consigo suas culturas, línguas e saberes.','Mesmo sofrendo, mantiveram suas tradições vivas.'], img: 'Navio e mapa do Atlântico com setas entre África e Brasil' },
      { header: '🗺️ De onde vieram?', bg: '#FAECE7', hc: '#4A1B0C', texto: ['Iorubás e Fon — África Ocidental (Nigéria, Benin)','Bantos (Congo, Angola) — África Central','Hauçás e Mandingas — África Ocidental (Mali, Guiné)'], img: 'Mapa da África com regiões coloridas e setas para o Brasil' },
      { header: '🎵 O que ficou no Brasil?', bg: '#EAF3DE', hc: '#173404', texto: ['Música: samba, maracatu, ijexá','Comida: acarajé, moqueca, caruru','Religião: candomblé, umbanda','Língua: axé, samba, caçula, quilombo'], img: 'Infográfico em grade com ícone + nome para cada herança' }
    ],
    timeline: [
      { ano: 'Séc. XVI', desc: 'Início do tráfico negreiro para o Brasil. Primeiros africanos escravizados chegam à Bahia.' },
      { ano: 'Séc. XVII', desc: 'Formação do Quilombo dos Palmares em Alagoas — maior comunidade quilombola da história.' },
      { ano: 'Séc. XVIII', desc: 'Surgimento do candomblé na Bahia. A capoeira começa a ser praticada como resistência.' },
      { ano: '1888', desc: 'Abolição da escravidão. A herança cultural africana já estava enraizada para sempre.' },
      { ano: 'Hoje', desc: 'A cultura afro-brasileira é reconhecida mundialmente como parte central da identidade do país.' }
    ],

    audio: 'audio/africana.mp3',
    audioTitle: 'Ancestralidade Africana',
    mapaGenially: `<div class="container-wrapper-genially" style="position:relative;min-height:480px;max-width:100%;"><video class="loader-genially" autoplay loop playsinline muted style="position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;"><source src="https://static.genially.com/resources/loader-default-rebranding.mp4" type="video/mp4"/></video><div id="6a1ba7e65bf19100d9746e6e" class="genially-embed" style="margin:0 auto;position:relative;height:auto;width:100%;"></div></div><script>(function(d){var js,id="genially-embed-js",ref=d.getElementsByTagName("script")[0];if(d.getElementById(id)){return;}js=d.createElement("script");js.id=id;js.async=true;js.src="https://view.genially.com/static/embed/embed.js";ref.parentNode.insertBefore(js,ref);}(document));<\/script>`,
    atividadeGenially: `<div class="container-wrapper-genially" style="position:relative;min-height:480px;max-width:100%;"><video class="loader-genially" autoplay loop playsinline muted style="position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;"><source src="https://static.genially.com/resources/loader-default-rebranding.mp4" type="video/mp4"/></video><div id="6a1ba0ffa7123a8512f1a096" class="genially-embed" style="margin:0 auto;position:relative;height:auto;width:100%;"></div></div><script>(function(d){var js,id="genially-embed-js",ref=d.getElementsByTagName("script")[0];if(d.getElementById(id)){return;}js=d.createElement("script");js.id=id;js.async=true;js.src="https://view.genially.com/static/embed/embed.js";ref.parentNode.insertBefore(js,ref);}(document));<\/script>`,
    quiz: [
      { p: 'De que língua africana vem a palavra "samba"?', ops: ['Iorubá','Quimbundo','Hauçá','Suaíli'], c: 1, exp: 'Samba vem do quimbundo "semba", língua de origem angolana, e significa "umbigada".' },
      { p: 'Qual foi a maior comunidade quilombola da história do Brasil?', ops: ['Quilombo do Sacopã','Quilombo dos Palmares','Serra da Barriga','Conceição das Crioulas'], c: 1, exp: 'O Quilombo dos Palmares, em Alagoas, durou quase 100 anos e foi o maior território quilombola do Brasil.' },
      { p: 'Quais povos africanos influenciaram principalmente o candomblé baiano?', ops: ['Hauçás e Mandingas','Iorubás e Fon','Congos e Angolas','Zulus e Xhosas'], c: 1, exp: 'Os iorubás e os fon, vindos da África Ocidental, traziam um rico panteão de divindades que deu origem ao candomblé.' },
      { p: 'O que foi a capoeira originalmente?', ops: ['Uma dança religiosa','Um jogo infantil','Uma forma de luta disfarçada de dança','Um ritual de passagem'], c: 2, exp: 'A capoeira foi criada por africanos escravizados como forma de autodefesa, disfarçada de dança para não ser proibida.' },
      { p: 'Qual dessas palavras NÃO tem origem africana?', ops: ['Quilombo','Caçula','Pipoca','Axé'], c: 2, exp: 'Pipoca tem origem tupi-guarani (indígena), enquanto quilombo, caçula e axé vêm de línguas africanas.' }
    ],
    reflexao: [
      'De que forma a história da ancestralidade africana no Brasil está ligada à violência da escravidão — e como reconhecer essa violência sem apagar a beleza e a força da cultura que resistiu a ela?',
      'Você consegue identificar, na sua vida cotidiana, alguma palavra, comida, música ou costume que tenha origem africana? O que muda quando você passa a reconhecer essa origem?',
      'Por que tantas expressões culturais africanas no Brasil — como o candomblé e a capoeira — foram perseguidas e criminalizadas? O que isso revela sobre poder e cultura?'
    ],
    atividades: [
      { icon: 'ti-map-2', color: '#C8860A', titulo: 'Mapa das origens', desc: 'Cada participante recebe um cartão com uma palavra, comida ou tradição brasileira de origem africana. Com um mapa-mundi, conectam o item ao país africano de onde veio com barbante colorido.' },
      { icon: 'ti-microphone', color: '#1D9E75', titulo: 'Roda de saberes', desc: 'Em roda, cada pessoa compartilha algo da cultura afro-brasileira presente no seu dia a dia — música, comida, expressão, ritual familiar.' },
      { icon: 'ti-pencil', color: '#534AB7', titulo: 'Linha do tempo colaborativa', desc: 'Grupos recebem fichas com eventos históricos embaralhados e os organizam em ordem cronológica. Depois, cada grupo apresenta um evento.' }
    ]
  },

  indigena: {
    emoji: '🌿',
    tag: 'Povos Originários',
    color: '#3A6B1A',
    colorLight: '#E8F4E0',
    gradient: 'linear-gradient(135deg,#1A3A0A,#3A6B1A)',
    title: 'Ancestralidade Indígena no Brasil',
    intro: 'Os primeiros habitantes do Brasil e sua presença viva na língua, na culinária, na floresta — e na resistência de 305 povos que existem até hoje.',
    padrao: `
      <h3>Introdução</h3>
      <p>Antes de qualquer navio cruzar o Atlântico, antes de qualquer fronteira ser traçada no mapa, o território que hoje chamamos de Brasil já era habitado. Por milênios, povos indígenas desenvolveram aqui línguas, saberes, formas de organizar a vida, tecnologias e cosmovisões de uma riqueza que ainda hoje nos surpreende. A ancestralidade indígena não é um passado distante: ela é uma presença viva, contínua e diversa que atravessa toda a história e a identidade do país.</p>
      <h3>Desenvolvimento</h3>
      <p>Quando os portugueses chegaram em 1500, estima-se que entre 2 e 6 milhões de pessoas viviam no território brasileiro — organizadas em centenas de povos distintos, falando mais de mil línguas diferentes. Esses povos não formavam um bloco único: os Tupi do litoral tinham culturas muito diferentes dos Kayapó do interior, dos Yanomami da Amazônia ou dos Guarani do Sul.</p>
      <p>A chegada dos colonizadores foi uma tragédia de proporções imensas. Doenças, escravidão, guerras e conversões forçadas reduziram drasticamente as populações indígenas. Mas ao contrário do que muitos aprenderam na escola, os povos indígenas não desapareceram. Resistiram. Adaptaram-se. Lutaram. E seguem existindo hoje, com cerca de 305 povos reconhecidos e mais de 1,6 milhão de pessoas que se identificam como indígenas no Brasil.</p>
      <p>A herança indígena está entranhada no cotidiano brasileiro: "pipoca", "tatu", "caju", "mandioca", "jacaré", "abacaxi". A culinária nacional — com a tapioca, o beiju, o tucupi — tem raízes profundamente indígenas. As florestas mais preservadas do Brasil estão, em grande parte, nos territórios indígenas.</p>
      <div class="prose-destaque"><strong>Curiosidade:</strong> A palavra "Brasil" pode ter origem no tupi <em>ibira-coel</em>, que significa "terra de pau-brasil" ou "terra de madeira vermelha como brasa". Até o nome do país carrega uma marca indígena.</div>
      <h3>Conclusão</h3>
      <p>Falar de ancestralidade indígena é reconhecer que o Brasil tem raízes muito mais antigas e complexas do que o calendário colonial sugere. Os povos originários não são relíquias do passado, mas sujeitos do presente — com direitos, vozes, lutas e contribuições fundamentais para o futuro do país.</p>
      <p class="fonte-nota">Fontes: IBGE Educa; InfoEscola; Rio Memórias — Ancestralidade Indígena no Brasil.</p>
    `,
    simples: [
      { icon: 'ti-info-circle', label: 'O que é', color: '#1A5C30', frases: ['Ancestralidade indígena é a herança dos povos que viviam no Brasil antes da chegada dos portugueses.','Esses povos já habitavam esse território há milhares de anos.','Existiam centenas de povos diferentes.','Cada povo tinha sua própria língua, cultura e modo de vida.','Essa herança ainda está presente no Brasil de hoje.'] },
      { icon: 'ti-star', label: 'Por que é importante', color: '#1A5C30', frases: ['Os povos indígenas foram os primeiros habitantes do Brasil.','Quando os portugueses chegaram, muitos indígenas morreram por doenças e guerras.','Mas esses povos não desapareceram.','Hoje existem cerca de 305 povos indígenas reconhecidos no Brasil.','Eles guardam saberes muito importantes sobre a natureza e a cultura brasileira.'] },
      { icon: 'ti-list', label: 'Exemplos', color: '#7A4D10', frases: ['Palavras como <strong>"pipoca"</strong>, <strong>"tatu"</strong>, <strong>"caju"</strong> e <strong>"jacaré"</strong> vieram de línguas indígenas.','Comidas como <strong>tapioca</strong>, <strong>beiju</strong> e <strong>tucupi</strong> têm origem indígena.','O conhecimento sobre plantas medicinais foi passado pelos indígenas.','As florestas mais preservadas do Brasil estão em territórios indígenas.','Povos como os <strong>Yanomami</strong>, <strong>Guarani</strong> e <strong>Kayapó</strong> vivem no Brasil até hoje.'] },
      { icon: 'ti-bulb', label: 'Curiosidade', color: '#7A4D10', frases: ['A palavra "Brasil" pode ter vindo do tupi.','Em tupi, <em>ibira-coel</em> significa "terra de madeira vermelha como brasa".','Essa madeira é o pau-brasil.','Até o nome do nosso país tem raiz indígena!'] }
    ],
    objetiva: {
      oque: 'A herança cultural, linguística, espiritual e ambiental dos povos que habitavam o território brasileiro há mais de 12.000 anos, antes da colonização europeia.',
      onde: 'Em todo o território brasileiro — do litoral à Amazônia, do cerrado ao sul. Tupi, Guarani, Kayapó, Yanomami, Xavante, Tukano, entre centenas de outros.',
      porque: 'Os povos indígenas são os primeiros brasileiros. Sua presença moldou a língua, a culinária, o meio ambiente e a cultura do país. São guardiões da biodiversidade amazônica.',
      fatos: ['Quando os portugueses chegaram (1500), havia entre 2 e 6 milhões de indígenas falando mais de 1.000 línguas.','Hoje existem 305 povos reconhecidos e mais de 1,6 milhão de indígenas no Brasil.','Mais de 150 línguas indígenas ainda são faladas — o maior número da América do Sul.','Territórios indígenas cobrem ~13% do território e abrigam a Amazônia mais preservada.','Mais de 1.000 palavras do português brasileiro têm origem em línguas tupi-guarani.'],
      curiosidade: 'A palavra "Brasil" pode vir do tupi ibira-coel = "terra de madeira vermelha como brasa" (pau-brasil). O nome do país carrega, desde o início, uma marca indígena.'
    },
    visual: [
      { header: '⏰ Quem estava aqui primeiro?', bg: '#E8F5EC', hc: '#1B3A2D', texto: ['Os povos indígenas vivem neste território há mais de 12.000 anos.','Quando os portugueses chegaram em 1500, havia centenas de povos diferentes aqui.','Cada povo tinha sua própria língua, cultura e modo de viver.'], img: 'Território brasileiro com aldeias indígenas e seta indicando "12.000 anos antes"' },
      { header: '🗺️ Onde viviam?', bg: '#FDF3E3', hc: '#5A3310', texto: ['Amazônia: Yanomami, Tukano, Munduruku','Cerrado: Kayapó, Xavante, Xerente','Litoral: Tupi, Tupinambá','Sul: Guarani, Kaingang, Xokleng'], img: 'Mapa do Brasil com biomas coloridos e nomes dos povos de cada região' },
      { header: '🌱 O que os indígenas deixaram?', bg: '#E8F5EC', hc: '#1B3A2D', texto: ['Língua: pipoca, tatu, caju, jacaré, mandioca','Comida: tapioca, beiju, tucupi, tacacá','Plantas: ervas medicinais, técnicas de manejo','Floresta: proteção e conhecimento ambiental'], img: 'Infográfico em grade com 4 células — ícone + texto para cada herança' }
    ],
    timeline: [
      { ano: 'Há 12.000+ anos', desc: 'Primeiros povos se estabelecem no território brasileiro. Desenvolvem culturas, línguas e tecnologias diversas.' },
      { ano: '1500', desc: 'Portugueses chegam ao Brasil. Início da colonização e do violento processo de dominação dos povos indígenas.' },
      { ano: 'Séc. XVI–XVIII', desc: 'Guerras, doenças e escravidão dizimam mais de 90% da população indígena. Muitos povos resistem.' },
      { ano: '1910', desc: 'Criação do Serviço de Proteção ao Índio (SPI) — primeiro reconhecimento oficial de direitos indígenas.' },
      { ano: '1988', desc: 'Constituição brasileira reconhece os direitos originários dos povos indígenas às suas terras e culturas.' },
      { ano: 'Hoje', desc: '305 povos reconhecidos, mais de 1,6 milhão de indígenas. Lutas por territórios e direitos continuam.' }
    ],

    audio: 'audio/indigena.mp3',
    audioTitle: 'Ancestralidade Indígena',
    mapaGenially: `<div class="container-wrapper-genially" style="position:relative;min-height:480px;max-width:100%;"><video class="loader-genially" autoplay loop playsinline muted style="position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;"><source src="https://static.genially.com/resources/loader-default-rebranding.mp4" type="video/mp4"/></video><div id="6a24c6668407d0269dadcdb7" class="genially-embed" style="margin:0 auto;position:relative;height:auto;width:100%;"></div></div><script>(function(d){var js,id="genially-embed-js",ref=d.getElementsByTagName("script")[0];if(d.getElementById(id)){return;}js=d.createElement("script");js.id=id;js.async=true;js.src="https://view.genially.com/static/embed/embed.js";ref.parentNode.insertBefore(js,ref);}(document));<\/script>`,
    atividadeGenially: `<div class="container-wrapper-genially" style="position:relative;min-height:480px;max-width:100%;"><video class="loader-genially" autoplay loop playsinline muted style="position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;"><source src="https://static.genially.com/resources/loader-default-rebranding.mp4" type="video/mp4"/></video><div id="6a272433e9404a69e43f13c5" class="genially-embed" style="margin:0 auto;position:relative;height:auto;width:100%;"></div></div><script>(function(d){var js,id="genially-embed-js",ref=d.getElementsByTagName("script")[0];if(d.getElementById(id)){return;}js=d.createElement("script");js.id=id;js.async=true;js.src="https://view.genially.com/static/embed/embed.js";ref.parentNode.insertBefore(js,ref);}(document));<\/script>`,
    quiz: [
      { p: 'Quantos povos indígenas são reconhecidos no Brasil hoje?', ops: ['52','140','305','520'], c: 2, exp: 'Segundo a FUNAI e o IBGE, são 305 povos indígenas reconhecidos oficialmente no Brasil.' },
      { p: 'Qual destas palavras NÃO tem origem em línguas indígenas brasileiras?', ops: ['Pipoca','Jacaré','Farinha','Mandioca'], c: 2, exp: '"Farinha" tem origem latina/portuguesa. Pipoca, jacaré e mandioca vêm de línguas tupi-guarani.' },
      { p: 'Em que ano a Constituição brasileira reconheceu os direitos originários dos povos indígenas às suas terras?', ops: ['1910','1964','1988','2000'], c: 2, exp: 'A Constituição de 1988 foi um marco histórico ao reconhecer os direitos originários dos povos indígenas.' },
      { p: 'Qual povo indígena ficou internacionalmente conhecido pelas lutas por seu território na Amazônia?', ops: ['Guarani','Yanomami','Kaingang','Xokleng'], c: 1, exp: 'Os Yanomami, da Amazônia, ficaram mundialmente conhecidos pelas lutas pela demarcação de seu território.' },
      { p: 'De qual língua indígena pode ter vindo a palavra "Brasil"?', ops: ['Guarani','Yanomami','Tupi','Kaingang'], c: 2, exp: 'Do tupi ibira-coel = "terra de madeira vermelha como brasa" (pau-brasil), segundo pesquisadores da língua.' }
    ],
    reflexao: [
      'Durante muito tempo, a história escolar tratou os povos indígenas como "primitivos". O que muda na nossa compreensão do Brasil quando reconhecemos que esses povos existem, resistem e contribuem até hoje?',
      'Os territórios indígenas são as regiões mais preservadas ambientalmente no Brasil. O que isso nos diz sobre a relação entre cultura, conhecimento ancestral e sustentabilidade?',
      'Quantas palavras, comidas e costumes da sua vida cotidiana têm origem indígena que você nunca havia percebido? O que significa reconhecer essa presença invisibilizada?'
    ],
    atividades: [
      { icon: 'ti-map-2', color: '#2E5E40', titulo: 'Mapa dos povos', desc: 'Com um mapa do Brasil, os participantes localizam ao menos 6 povos indígenas — indicando em qual estado ou bioma cada um vive. Rompe a ideia de que indígenas só vivem "na Amazônia".' },
      { icon: 'ti-abc', color: '#D29D3C', titulo: 'Rastreando palavras indígenas', desc: 'Cada participante recebe uma lista de 20 palavras do português e identifica quais têm origem indígena. Depois, a turma mapeia quantas palavras indígenas usam em um único dia.' },
      { icon: 'ti-users', color: '#534AB7', titulo: 'Vozes indígenas hoje', desc: 'Grupos pesquisam lideranças indígenas contemporâneas (Ailton Krenak, Sônia Guajajara, Davi Kopenawa) e apresentam quem são, qual povo representam e sua contribuição.' }
    ]
  },

  biomas: {
    emoji: '🌱',
    tag: 'Natureza & Território',
    color: '#1A5C38',
    colorLight: '#E2F0DC',
    gradient: 'linear-gradient(135deg,#0A2A18,#1A5C38)',
    title: 'Biomas Brasileiros',
    intro: 'Seis mundos dentro de um só país — do maior ao menor, cada bioma é uma história de vida, adaptação e beleza que define o Brasil.',
    padrao: `
      <h3>Introdução</h3>
      <p>O Brasil é um dos países com maior biodiversidade do planeta — e uma das razões está na sua enorme variedade de biomas. Segundo o IBGE, o território brasileiro abriga seis biomas continentais: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal e Pampa. Cada um deles é um mundo à parte: com clima, vegetação, fauna e flora próprios, formados ao longo de milhões de anos de evolução.</p>
      <h3>Desenvolvimento</h3>
      <p>A <strong>Amazônia</strong> é o maior de todos, ocupando cerca de 49% do território nacional. Abriga a maior floresta tropical do mundo e contém 20% de toda a água doce disponível no planeta. São mais de 1.000 espécies de aves, 3.000 de peixes e 13 mil espécies vegetais catalogadas.</p>
      <p>O <strong>Cerrado</strong>, que ocupa cerca de 24% do território, é reconhecido pelo IBGE como a savana mais rica em biodiversidade do mundo. Suas árvores tortas, com cascas grossas e raízes profundas, são uma engenharia da natureza adaptada ao clima seco do Planalto Central.</p>
      <p>A <strong>Caatinga</strong> é o único bioma exclusivamente brasileiro. Ocupa cerca de 10% do território, concentrado no semiárido nordestino. Seus cactus, mandacarus e animais como o preá e o tatu-bola são adaptações surpreendentes à escassez de água.</p>
      <p>A <strong>Mata Atlântica</strong> ocupa hoje apenas 13% do território original, mas abriga 70% da população brasileira em sua área de abrangência. Apenas 27% de sua cobertura florestal original ainda está preservada. O <strong>Pantanal</strong>, com apenas 2% do território, é a maior planície de inundação contínua do planeta. O <strong>Pampa</strong>, também com 2%, ocupa o Rio Grande do Sul com campos abertos e cultura gaúcha.</p>
      <div class="prose-destaque"><strong>Curiosidade:</strong> A Mata Atlântica abastece com recursos hídricos cerca de 70% da população brasileira — mesmo estando reduzida a menos de um terço de sua área original. Isso mostra como a preservação de biomas não é apenas ambiental, mas de sobrevivência humana.</div>
      <h3>Conclusão</h3>
      <p>Os biomas brasileiros são sistemas vivos interdependentes, que regulam o clima, produzem água, alimentam populações e guardam saberes ancestrais. Compreender e preservar essa diversidade é um dever coletivo.</p>
      <p class="fonte-nota">Fontes: IBGE Educa — Biomas Brasileiros; Agência IBGE, jun. 2024; Toda Matéria (rev. Rubens Castilho, 2025).</p>
    `,
    simples: [
      { icon: 'ti-info-circle', label: 'O que é', color: '#1A5C1A', frases: ['Um bioma é uma grande região com clima, plantas e animais próprios.','O Brasil tem seis biomas.','Cada bioma é diferente dos outros.','Juntos, eles fazem do Brasil um dos países com mais vida no mundo.','Os seis biomas são: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal e Pampa.'] },
      { icon: 'ti-star', label: 'Por que é importante', color: '#1A5C1A', frases: ['Os biomas produzem água para as cidades.','Eles guardam animais e plantas que existem só no Brasil.','Regulam o clima e as chuvas.','Muitos povos indígenas vivem dentro dos biomas.','Quando um bioma é destruído, perdemos para sempre espécies únicas.'] },
      { icon: 'ti-list', label: 'Os seis biomas', color: '#7A5A10', frases: ['<strong>Amazônia:</strong> a maior floresta tropical do mundo. Cobre quase metade do Brasil.','<strong>Cerrado:</strong> a savana com mais espécies do mundo. Fica no centro do país.','<strong>Caatinga:</strong> o único bioma 100% brasileiro. Fica no Nordeste, em região seca.','<strong>Mata Atlântica:</strong> a floresta do litoral. É a mais ameaçada e só tem 27% preservada.','<strong>Pantanal:</strong> a maior planície alagada do planeta. Fica em Mato Grosso e MS.','<strong>Pampa:</strong> campos abertos no Rio Grande do Sul, com pecuária e cultura gaúcha.'] },
      { icon: 'ti-bulb', label: 'Curiosidade', color: '#7A5A10', frases: ['A Mata Atlântica abastece de água 70% dos brasileiros.','Mas ela já perdeu mais de 70% da sua área original.','Isso mostra que preservar não é só questão de natureza.','É também uma questão de sobrevivência humana.'] }
    ],
    objetiva: {
      oque: 'Bioma é um conjunto de ecossistemas com clima, geologia e história ecológica próprios. O Brasil possui 6 biomas continentais, reconhecidos pelo IBGE.',
      onde: 'Amazônia (Norte ~49%), Cerrado (Planalto Central ~24%), Caatinga (Nordeste ~10%), Mata Atlântica (Litoral ~13%), Pantanal (Centro-Oeste ~2%), Pampa (Sul ~2%).',
      porque: 'Os biomas regulam o clima, produzem água potável, protegem solos e abrigam espécies únicas. Sua destruição afeta diretamente a qualidade de vida de toda a população brasileira.',
      fatos: ['A Amazônia abriga pelo menos metade de todas as espécies vivas do planeta (IBGE Educa).','A Mata Atlântica é predominante em 49,2% dos municípios brasileiros (IBGE, 2024).','O Cerrado tem ~4.000 espécies de plantas endêmicas — únicas no mundo.','A Caatinga tem ~36% de sua área original já alterada por desmatamento e queimadas.','O Pampa já perdeu mais de 58% de sua cobertura vegetal original (IBAMA, 2010).'],
      curiosidade: 'A Mata Atlântica abastece ~70% dos brasileiros com água — mesmo tendo perdido mais de 70% de sua área. O bioma mais destruído é também o mais essencial para a vida urbana no Brasil.'
    },
    visual: [
      { header: '🌍 O que é um bioma?', bg: '#E8F5EC', hc: '#0D3320', texto: ['Bioma é uma grande região com clima, plantas e animais próprios.','O Brasil tem 6 biomas — mais do que qualquer outro país do mundo.','Cada bioma é único e abriga formas de vida que não existem em outro lugar.'], img: 'Mapa do Brasil com os 6 biomas coloridos' },
      { header: '🌳 Amazônia e Mata Atlântica', bg: '#E8F0E8', hc: '#0D3320', texto: ['Amazônia: maior floresta tropical do planeta. Cobre quase metade do Brasil e tem 20% da água doce do mundo.','Mata Atlântica: floresta que percorre todo o litoral. Abastece 70% dos brasileiros com água — mas só 27% ainda está preservada.'], img: 'Vista aérea de floresta amazônica com rio e mata fechada' },
      { header: '☀️ Cerrado e Caatinga', bg: '#FDF6E3', hc: '#5A3A00', texto: ['Cerrado: savana mais rica do mundo. Árvores tortas com raízes enormes adaptadas ao clima seco.','Caatinga: único bioma 100% brasileiro. Nordeste semiárido, com cactus, mandacaru e tatu-bola.'], img: 'Paisagem do Cerrado — árvores tortas e céu azul' }
    ],
    timeline: [
      { ano: 'Até séc. XVI', desc: 'Seis biomas praticamente intocados. Povos indígenas habitam e manejam os territórios há milênios.' },
      { ano: 'Séc. XVI–XIX', desc: 'Colonização acelera o desmatamento da Mata Atlântica para agricultura, pecuária e cidades.' },
      { ano: 'Anos 1960', desc: 'Construção de Brasília e abertura de rodovias no Cerrado. Expansão agrícola intensa.' },
      { ano: 'Anos 1970–80', desc: 'Grande avanço do desmatamento na Amazônia. Criação do IBAMA (1989) como resposta.' },
      { ano: '1988', desc: 'Constituição reconhece o meio ambiente como direito de todos. Mata Atlântica e Pantanal viram patrimônio nacional.' },
      { ano: 'Hoje', desc: 'IBGE monitora os biomas com mapeamento em escala 1:250.000 (2019, revisado em 2025).' }
    ],

    audio: 'audio/biomas.mp3',
    audioTitle: 'Biomas Brasileiros',
    mapaGenially: `<div class="container-wrapper-genially" style="position:relative;min-height:480px;max-width:100%;"><video class="loader-genially" autoplay loop playsinline muted style="position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;"><source src="https://static.genially.com/resources/loader-default-rebranding.mp4" type="video/mp4"/></video><div id="6a2825e54ea8221d0fc2a406" class="genially-embed" style="margin:0 auto;position:relative;height:auto;width:100%;"></div></div><script>(function(d){var js,id="genially-embed-js",ref=d.getElementsByTagName("script")[0];if(d.getElementById(id)){return;}js=d.createElement("script");js.id=id;js.async=true;js.src="https://view.genially.com/static/embed/embed.js";ref.parentNode.insertBefore(js,ref);}(document));<\/script>`,
    atividadeGenially: `<div class="container-wrapper-genially" style="position:relative;min-height:480px;max-width:100%;"><video class="loader-genially" autoplay loop playsinline muted style="position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;"><source src="https://static.genially.com/resources/loader-default-rebranding.mp4" type="video/mp4"/></video><div id="6a2895d44252ac7e6e4a69a6" class="genially-embed" style="margin:0 auto;position:relative;height:auto;width:100%;"></div></div><script>(function(d){var js,id="genially-embed-js",ref=d.getElementsByTagName("script")[0];if(d.getElementById(id)){return;}js=d.createElement("script");js.id=id;js.async=true;js.src="https://view.genially.com/static/embed/embed.js";ref.parentNode.insertBefore(js,ref);}(document));<\/script>`,
    quiz: [
      { p: 'Qual é o único bioma 100% exclusivo do Brasil, que não existe em nenhum outro país?', ops: ['Cerrado','Pantanal','Caatinga','Pampa'], c: 2, exp: 'A Caatinga é o único bioma inteiramente brasileiro — não existe em nenhum outro lugar do mundo.' },
      { p: 'Qual bioma ocupa cerca de 49% do território brasileiro?', ops: ['Cerrado','Amazônia','Mata Atlântica','Caatinga'], c: 1, exp: 'A Amazônia é o maior bioma do Brasil e do mundo, ocupando quase metade do território nacional.' },
      { p: 'Qual bioma é reconhecido como a maior planície de inundação contínua do planeta?', ops: ['Pampa','Cerrado','Pantanal','Amazônia'], c: 2, exp: 'O Pantanal, em Mato Grosso e MS, é a maior planície de inundação contínua do planeta e o bioma mais preservado do Brasil.' },
      { p: 'Qual porcentagem da cobertura florestal original da Mata Atlântica ainda está preservada?', ops: ['70%','50%','27%','10%'], c: 2, exp: 'Segundo o IBGE, apenas 27% da cobertura florestal original da Mata Atlântica ainda está preservada.' },
      { p: 'Em qual estado brasileiro o Pampa está localizado?', ops: ['Santa Catarina','Paraná','Mato Grosso do Sul','Rio Grande do Sul'], c: 3, exp: 'O Pampa ocupa exclusivamente o estado do Rio Grande do Sul, com seus campos abertos e cultura gaúcha.' }
    ],
    reflexao: [
      'A Mata Atlântica abastece 70% dos brasileiros com água, mas perdeu mais de 70% da sua área. Quem é responsável por essa situação — e quem paga o preço?',
      'A Caatinga é o único bioma 100% brasileiro. Por que recebe menos atenção do que a Amazônia? O que isso diz sobre como valorizamos o Nordeste?',
      'Os territórios indígenas e quilombolas estão nos biomas mais preservados do Brasil. Qual é a relação entre a presença dessas comunidades e a conservação ambiental?'
    ],
    atividades: [
      { icon: 'ti-map-2', color: '#1A7A3A', titulo: 'Mapa vivo dos biomas', desc: 'Com um mapa mudo do Brasil, os participantes colorem cada bioma e escrevem dentro um animal, uma planta e um dado curioso pesquisado.' },
      { icon: 'ti-building-community', color: '#C8A020', titulo: 'De onde vem o que eu como?', desc: 'Cada participante lista 5 alimentos e pesquisa em qual bioma têm origem. A mandioca (Amazônia/Cerrado), o caju (Caatinga), o arroz gaúcho (Pampa).' },
      { icon: 'ti-chart-bar', color: '#534AB7', titulo: 'Painel de preservação', desc: 'Com dados do IBGE, os grupos criam gráficos comparando o percentual preservado de cada bioma. Depois discutem o que os números revelam.' }
    ]
  },

  rio: {
    emoji: '🌊',
    tag: 'Cidades & História',
    color: '#3A1A6B',
    colorLight: '#EDE8F8',
    gradient: 'linear-gradient(135deg,#0A0A2A,#3A1A6B)',
    title: 'História do Rio de Janeiro',
    intro: 'Da Baía de Guanabara avistada em 1502 à Cidade Maravilhosa — uma história de disputas, resistências e transformações que define o Brasil.',
    padrao: `
      <h3>Introdução</h3>
      <p>Poucos lugares no mundo carregam tantas camadas de história quanto o Rio de Janeiro. Antes de ser cidade, foi baía — a Guanabara, que os Temiminós chamavam de "seio do mar". Antes de ser brasileira, foi portuguesa e quase francesa. Antes de ser república, foi capital de um império. A história do Rio é, em muitos sentidos, a própria história do Brasil.</p>
      <h3>Desenvolvimento</h3>
      <p>O primeiro registro europeu da Baía de Guanabara data de 1º de janeiro de 1502, quando uma expedição portuguesa avistou aquelas águas e, confundindo a imensidão da baía com a foz de um grande rio, deu ao lugar o nome que ficaria para sempre: Rio de Janeiro.</p>
      <p>Em 1555, o almirante Nicolas Durand de Villegagnon instalou na Ilha de Villegagnon o Forte Coligny, tentando fundar a <em>França Antártica</em>. A resposta portuguesa veio com Mem de Sá e, depois, com Estácio de Sá, que em <strong>1º de março de 1565</strong> fundou a cidade de <em>São Sebastião do Rio de Janeiro</em>.</p>
      <p>Em <strong>1763</strong>, a capital colonial foi transferida de Salvador para o Rio. E em <strong>1808</strong>, a Família Real portuguesa, fugindo de Napoleão, desembarcou no Rio — tornando-o sede do Império Português e a única capital europeia governada fora da Europa.</p>
      <p>No início do século XX, o prefeito Pereira Passos promoveu uma radical reforma urbana: avenidas largas foram abertas, cortiços demolidos e a população pobre empurrada para os morros — dando origem ao processo de favelização. Em 1904, a <strong>Revolta da Vacina</strong> parou a cidade por uma semana.</p>
      <div class="prose-destaque"><strong>Curiosidade:</strong> O nome "Rio de Janeiro" nunca fez sentido geográfico — a Baía de Guanabara não é um rio. O erro de Gaspar de Lemos em 1502 se tornou um dos topônimos mais famosos do mundo.</div>
      <h3>Conclusão</h3>
      <p>O Rio foi capital do Brasil por quase dois séculos — de 1763 a 1960. Desde então, permanece como centro de referência cultural, artístico e histórico do país. Do samba ao carnaval, do Cristo ao Maracanã, o Rio condensou em sua paisagem as tensões e a beleza de uma nação em permanente construção.</p>
      <p class="fonte-nota">Fontes: InfoEscola; Rio Memórias; MultiRio; Prefeitura do Rio de Janeiro.</p>
    `,
    simples: [
      { icon: 'ti-info-circle', label: 'O que é', color: '#3B2060', frases: ['O Rio de Janeiro é uma das cidades mais antigas do Brasil.','Ela foi fundada em 1565 pelos portugueses.','Antes da cidade, já havia povos indígenas vivendo na região.','Os portugueses chamaram de "Rio de Janeiro" a grande baía que viram em 1502.','Na verdade, não era um rio — era a Baía de Guanabara.'] },
      { icon: 'ti-star', label: 'Por que é importante', color: '#3B2060', frases: ['O Rio de Janeiro foi a capital do Brasil por quase 200 anos.','A família real portuguesa veio morar no Rio em 1808.','Isso mudou tudo: a cidade cresceu, ganhou museus, escolas e teatros.','O Rio foi o centro da política, da cultura e da história do Brasil.','Somente em 1960, Brasília se tornou a nova capital do país.'] },
      { icon: 'ti-list', label: 'Momentos importantes', color: '#7A4D10', frases: ['Em <strong>1502</strong>: portugueses avistam a Baía de Guanabara e a chamam de "Rio de Janeiro".','Em <strong>1555</strong>: franceses tentam criar a França Antártica.','Em <strong>1565</strong>: Estácio de Sá funda a cidade.','Em <strong>1763</strong>: Rio vira capital da colônia.','Em <strong>1808</strong>: família real portuguesa chega ao Rio.','Em <strong>1904</strong>: Revolta da Vacina para a cidade por uma semana.','Em <strong>1960</strong>: capital transferida para Brasília.'] },
      { icon: 'ti-bulb', label: 'Curiosidade', color: '#7A4D10', frases: ['O nome "Rio de Janeiro" foi um engano.','Em 1502, o navegador achou que tinha encontrado a foz de um grande rio.','Mas era uma baía — a Baía de Guanabara.','O erro virou o nome de uma das cidades mais famosas do mundo!'] }
    ],
    objetiva: {
      oque: 'A trajetória da cidade que passou de entreposto colonial a capital do Império, sede da corte europeia nas Américas e metrópole cultural do Brasil — de 1565 até hoje.',
      onde: 'Fundada em 1º de março de 1565, entre os morros Cara de Cão e Pão de Açúcar, na entrada da Baía de Guanabara, por Estácio de Sá.',
      porque: 'O Rio foi capital do Brasil por ~200 anos (1763–1960). Sede da Família Real a partir de 1808, foi centro político, cultural e econômico — palco da Independência, da abolição e da República.',
      fatos: ['O nome "Rio de Janeiro" vem de um erro: em 1502, Gaspar de Lemos confundiu a Baía de Guanabara com a foz de um rio.','Em 1555, os franceses tentaram criar a França Antártica — expulsos em 1567.','Em 1808, D. João VI trouxe toda a corte portuguesa — única vez que metrópole europeia governou de outro continente.','A Revolta da Vacina (1904) foi desencadeada pela vacinação obrigatória e demolições do prefeito Pereira Passos.','Entre 1872 e 1890, a população dobrou de 274 mil para 522 mil habitantes.'],
      curiosidade: '"Rio de Janeiro" nunca foi um rio — foi um erro do navegador Gaspar de Lemos em 1502, ao confundir a Baía de Guanabara com a foz de um grande rio. O erro virou o nome de uma das cidades mais famosas do mundo.'
    },
    visual: [
      { header: '🗓️ Um nome que foi um erro', bg: '#EDE8F8', hc: '#1C1433', texto: ['Em 1º de janeiro de 1502, navegadores avistaram a Baía de Guanabara.','Acharam que era a foz de um grande rio.','Chamaram o lugar de Rio de Janeiro — e o nome ficou para sempre.'], img: 'Vista aérea da Baía de Guanabara com o Pão de Açúcar' },
      { header: '⚔️ A fundação', bg: '#F4E8F0', hc: '#3A0A20', texto: ['Os franceses tentaram criar a França Antártica na região (1555).','Estácio de Sá fundou a cidade em 1º de março de 1565.','Os franceses foram definitivamente expulsos em 1567.'], img: 'Ilustração histórica da fundação do Rio de Janeiro' },
      { header: '👑 1808: a corte no Rio', bg: '#E8F0FA', hc: '#0A1A3A', texto: ['A Família Real portuguesa fugiu de Napoleão e veio morar no Rio.','Pela primeira vez, uma capital europeia foi governada de outro continente.','O Rio ganhou: Jardim Botânico, Biblioteca Nacional e o primeiro jornal do Brasil.'], img: 'Chegada da Família Real ao Rio de Janeiro — gravura histórica' }
    ],
    timeline: [
      { ano: '1 jan. 1502', desc: 'Gaspar de Lemos avista a Baía de Guanabara e a chama de "Rio de Janeiro".' },
      { ano: '1555', desc: 'Franceses instalam o Forte Coligny, tentando criar a França Antártica.' },
      { ano: '1 mar. 1565', desc: 'Estácio de Sá funda São Sebastião do Rio de Janeiro.' },
      { ano: '1763', desc: 'Marquês de Pombal transfere a capital colonial de Salvador para o Rio.' },
      { ano: '1808', desc: 'Família Real portuguesa chega. Abertura dos portos e criação de instituições culturais.' },
      { ano: '1822', desc: 'Independência do Brasil. Rio permanece capital do Império.' },
      { ano: '1888–1889', desc: 'Abolição da escravidão e Proclamação da República.' },
      { ano: '1904', desc: 'Revolta da Vacina: população se levanta contra vacinação obrigatória e remoções.' },
      { ano: '1960', desc: 'Inauguração de Brasília. O Rio deixa de ser capital federal após quase 200 anos.' }
    ],

    audio: 'audio/rio.mp3',
    audioTitle: 'História do Rio de Janeiro',
    mapaGenially: `<div class="container-wrapper-genially" style="position:relative;min-height:480px;max-width:100%;"><video class="loader-genially" autoplay loop playsinline muted style="position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;"><source src="https://static.genially.com/resources/loader-default-rebranding.mp4" type="video/mp4"/></video><div id="6a28ab4008f42e00e4c42041" class="genially-embed" style="margin:0 auto;position:relative;height:auto;width:100%;"></div></div><script>(function(d){var js,id="genially-embed-js",ref=d.getElementsByTagName("script")[0];if(d.getElementById(id)){return;}js=d.createElement("script");js.id=id;js.async=true;js.src="https://view.genially.com/static/embed/embed.js";ref.parentNode.insertBefore(js,ref);}(document));<\/script>`,
    atividadeGenially: `<div class="container-wrapper-genially" style="position:relative;min-height:480px;max-width:100%;"><video class="loader-genially" autoplay loop playsinline muted style="position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;"><source src="https://static.genially.com/resources/loader-default-rebranding.mp4" type="video/mp4"/></video><div id="6a28b560d403648e8fa30c65" class="genially-embed" style="margin:0 auto;position:relative;height:auto;width:100%;"></div></div><script>(function(d){var js,id="genially-embed-js",ref=d.getElementsByTagName("script")[0];if(d.getElementById(id)){return;}js=d.createElement("script");js.id=id;js.async=true;js.src="https://view.genially.com/static/embed/embed.js";ref.parentNode.insertBefore(js,ref);}(document));<\/script>`,
    quiz: [
      { p: 'Em que data foi fundada a cidade de São Sebastião do Rio de Janeiro?', ops: ['1 jan. 1502','1 mar. 1565','20 jan. 1567','7 set. 1822'], c: 1, exp: 'A cidade foi fundada em 1º de março de 1565 por Estácio de Sá, entre os morros Cara de Cão e Pão de Açúcar.' },
      { p: 'Por que o lugar foi chamado de "Rio de Janeiro"?', ops: ['Por causa de um grande rio que corta a cidade','Em homenagem ao rei D. João','Descoberto em janeiro e confundido com rio','Nome dado pelos indígenas Temiminós'], c: 2, exp: 'O navegador Gaspar de Lemos confundiu a Baía de Guanabara com a foz de um grande rio em 1502.' },
      { p: 'O que levou a Família Real portuguesa a vir para o Rio em 1808?', ops: ['A Proclamação da República','A fuga das tropas de Napoleão','A descoberta de ouro em MG','A Revolta da Vacina'], c: 1, exp: 'D. João VI e toda a corte fugiram para o Brasil em 1808 diante do avanço das tropas de Napoleão Bonaparte sobre Portugal.' },
      { p: 'Qual foi a principal causa da Revolta da Vacina em 1904?', ops: ['A abolição da escravidão','A chegada de imigrantes','Vacinação obrigatória e remoções forçadas','A transferência da capital para Brasília'], c: 2, exp: 'A Revolta da Vacina foi causada pela vacinação obrigatória contra varíola combinada às demolições violentas de Pereira Passos.' },
      { p: 'Em que ano o Rio de Janeiro deixou de ser a capital do Brasil?', ops: ['1889','1930','1960','1975'], c: 2, exp: 'Brasília foi inaugurada em 1960 e passou a ser a capital federal. O Rio foi capital por quase 200 anos.' }
    ],
    reflexao: [
      'A reforma de Pereira Passos demoliu cortiços e expulsou a população pobre para os morros. O que esse processo revela sobre quem as cidades são construídas para servir?',
      'Em 1808, o Rio se tornou a única capital europeia governada fora da Europa. Que transformações esse evento trouxe — e que marcas positivas e negativas ele deixou?',
      'Os Temiminó chamavam a Baía de "seio do mar". Os portugueses a chamaram de "Rio de Janeiro" — um erro. O que esses dois nomes dizem sobre formas de enxergar um território?'
    ],
    atividades: [
      { icon: 'ti-map-2', color: '#7B4FBF', titulo: 'Mapa histórico vivo', desc: 'Com um mapa do Rio, os participantes localizam pontos históricos: fundação, Ilha de Villegagnon, onde a Família Real se instalou, onde ocorreu a Revolta da Vacina.' },
      { icon: 'ti-microphone', color: '#C85820', titulo: 'Julgamento histórico', desc: 'Grupos representam Estácio de Sá, D. João VI, Pereira Passos e um morador removido. Debatem suas ações em um tribunal simulado.' },
      { icon: 'ti-pencil', color: '#1A5C1A', titulo: 'Dois nomes, dois olhares', desc: '"Guanabara" (nome Temiminó) vs "Rio de Janeiro" (nome português). O que cada nome revela sobre quem o criou e como via aquele território?' }
    ]
  },

  imigracao: {
    emoji: '🧳',
    tag: 'Diversidade & Identidade',
    color: '#6B4A1A',
    colorLight: '#FBF0DC',
    gradient: 'linear-gradient(135deg,#2A1A0A,#6B4A1A)',
    title: 'Imigração no Brasil',
    intro: 'Suíços, alemães, italianos, japoneses, venezuelanos — o Brasil foi e continua sendo destino de povos que trouxeram cultura, trabalho e história.',
    padrao: `
      <h3>Introdução</h3>
      <p>O Brasil é um país de chegadas. Com a colonização, vieram africanos escravizados à força. E a partir do século XIX, chegaram ondas de imigrantes de diferentes partes do mundo — suíços, alemães, italianos, japoneses, sírio-libaneses, eslavos — transformando a cultura, a culinária, a língua e a paisagem do país.</p>
      <h3>Desenvolvimento</h3>
      <p>O processo imigratório moderno começou em <strong>1819</strong>, quando cerca de duas mil pessoas vindas do cantão suíço de Friburgo se instalaram na região serrana do Rio de Janeiro — dando origem à cidade de <strong>Nova Friburgo</strong>. Em 1824, chegaram os primeiros alemães ao Rio Grande do Sul, fundando colônias como São Leopoldo e Novo Hamburgo.</p>
      <p>O grande impulso veio com a <strong>proibição do tráfico de escravizados em 1850</strong> e a expansão das lavouras de café. O governo imperial passou a recrutar ativamente imigrantes europeus. A onda imigratória do século XIX trouxe cerca de 4 milhões de trabalhadores.</p>
      <p>Os <strong>italianos</strong> foram o grupo mais numeroso: entre 1884 e 1959, entraram 4.734.494 imigrantes no Brasil, sendo 1.507.695 italianos. Em <strong>1908</strong>, chegou ao porto de Santos o navio <em>Kasato Maru</em>, com as primeiras 165 famílias japonesas. Hoje o Brasil abriga a maior comunidade nipo-descendente fora do Japão.</p>
      <p>No século XXI, o perfil mudou. Venezuelanos, haitianos, bolivianos e angolanos representam os maiores fluxos recentes. O Atlas temático do Nepo-Unicamp (FAPESP, 2025) mostra que o país tem cerca de 415 mil imigrantes registrados no CadÚnico, em situação de vulnerabilidade.</p>
      <div class="prose-destaque"><strong>Curiosidade:</strong> São Paulo abriga hoje cerca de 500 mil imigrantes registrados. O Crai atendeu 46,7 mil pessoas entre 2020 e 2025 — de mais de 100 nacionalidades diferentes. (Revista Pesquisa FAPESP, set. 2025)</div>
      <h3>Conclusão</h3>
      <p>A imigração moldou o Brasil de maneiras que muitas vezes não percebemos: está na pizza paulistana e no chimarrão gaúcho, no judô e nos festivais de folclore. Mas também carrega contradições: muitos chegaram em condições de servidão, e hoje milhares vivem em vulnerabilidade. Reconhecer essa história é reconhecer que o Brasil é um país em permanente construção.</p>
      <p class="fonte-nota">Fontes: Toda Matéria (Juliana Bezerra); Revista Pesquisa FAPESP, set. 2025; Brasil Escola; InfoEscola; Wikipedia — Imigração no Brasil.</p>
    `,
    simples: [
      { icon: 'ti-info-circle', label: 'O que é', color: '#6B3A10', frases: ['Imigração é quando pessoas se mudam de um país para outro.','No Brasil, muitas pessoas vieram de outros países ao longo da história.','Elas trouxeram sua língua, comida, música e costumes.','Tudo isso faz parte da cultura brasileira até hoje.'] },
      { icon: 'ti-star', label: 'Por que é importante', color: '#6B3A10', frases: ['O governo brasileiro chamou imigrantes para trabalhar após o fim da escravidão.','Muitos vieram da Europa e do Japão no século XIX e XX.','Eles trabalharam nas fazendas de café e nas fábricas.','Hoje, o Brasil ainda recebe pessoas em busca de uma vida melhor.','Muitos chegam em situação difícil e precisam de apoio.'] },
      { icon: 'ti-list', label: 'Exemplos', color: '#1A5C30', frases: ['<strong>Suíços</strong> chegaram em 1819 e fundaram Nova Friburgo, no Rio de Janeiro.','<strong>Alemães</strong> chegaram em 1824 e criaram cidades como Blumenau e Novo Hamburgo.','<strong>Italianos</strong> foram o grupo mais numeroso — mais de 1,5 milhão vieram ao Brasil.','<strong>Japoneses</strong> chegaram em 1908 no navio Kasato Maru. Brasil tem a maior comunidade japonesa fora do Japão.','<strong>Hoje</strong>, venezuelanos, haitianos e bolivianos estão entre os que mais chegam.'] },
      { icon: 'ti-bulb', label: 'Curiosidade', color: '#1A5C30', frases: ['São Paulo tem cerca de 500 mil imigrantes registrados.','A prefeitura criou um centro para ajudar essas pessoas.','Entre 2020 e 2025, ele atendeu quase 47 mil pessoas de mais de 100 países.','São bolivianos, venezuelanos, afegãos, congoleses, sírios e muitos outros.'] }
    ],
    objetiva: {
      oque: 'Processo pelo qual pessoas de outros países se estabeleceram no Brasil — desde os europeus do século XIX até os fluxos de venezuelanos, haitianos e africanos do século XXI.',
      onde: 'Sul (alemães, italianos, ucranianos), Sudeste/SP (italianos, japoneses, sírio-libaneses), RJ serrano (suíços), todo o Brasil (fluxos do século XXI).',
      porque: 'A imigração formou a identidade cultural, gastronômica, linguística e econômica do Brasil. Também revela contradições históricas — o "branqueamento" racista do séc. XIX e o desamparo dos imigrantes vulneráveis no presente.',
      fatos: ['Entre 1884 e 1959, o Brasil recebeu 4.734.494 imigrantes — 1,5 mi. italianos e 1,4 mi. portugueses.','Em 1901, 90% dos trabalhadores industriais de São Paulo eram imigrantes (InfoEscola).','O navio Kasato Maru chegou em 1908 com 165 famílias japonesas — diáspora que soma ~1,5 mi. hoje.','São Paulo abriga ~500 mil imigrantes. O Crai atendeu 46,7 mil pessoas entre 2020 e 2025 (FAPESP, 2025).','Em 2024, o Brasil recebeu 68 mil pedidos de refúgio — terceiro maior volume da história (Conare/OBMigra, 2025).'],
      curiosidade: 'O Brasil tem imigrantes de mais de 100 nacionalidades buscando atendimento em um único centro de São Paulo. Da Venezuela ao Afeganistão, do Congo à Síria. (Revista Pesquisa FAPESP, set. 2025)'
    },
    visual: [
      { header: '🚢 O que é imigração?', bg: '#FBF0DC', hc: '#2A1A0A', texto: ['Imigração é quando uma pessoa deixa seu país para viver em outro lugar.','O Brasil recebeu milhões de imigrantes de todo o mundo ao longo da história.','Cada grupo trouxe sua língua, comida, religião e jeito de viver.'], img: 'Navio chegando ao porto de Santos no início do séc. XX com imigrantes' },
      { header: '🗺️ De onde vieram? Onde foram?', bg: '#E8F4EC', hc: '#0A2A10', texto: ['Sul: Alemães (Blumenau, Joinville), Italianos (Caxias, Garibaldi)','Sudeste (SP/RJ): Italianos, Japoneses, Sírio-libaneses','RJ serrano: Suíços → Nova Friburgo (1819)','Todo o Brasil: Venezuelanos, Haitianos, Bolivianos (séc. XXI)'], img: 'Mapa do Brasil com setas mostrando de onde vieram os imigrantes' },
      { header: '🍕 O que os imigrantes deixaram no Brasil?', bg: '#F4E8E8', hc: '#3A0A0A', texto: ['Comida: pizza, macarrão, churrasco, sushi, esfiha, cuca','Cidades: Blumenau, Caxias do Sul, Nova Friburgo, Londrina','Esportes e festas: judô, Oktoberfest, Festa da Uva, Festival do Japão'], img: 'Infográfico com herança cultural: ícone de comida, cidade, esporte e festa' }
    ],
    timeline: [
      { ano: '1808', desc: 'Abertura dos portos permite entrada de imigrantes não-portugueses.' },
      { ano: '1819', desc: 'Chegam os primeiros suíços ao Rio de Janeiro — fundação de Nova Friburgo.' },
      { ano: '1824', desc: 'Início da imigração alemã no RS — São Leopoldo, Novo Hamburgo.' },
      { ano: '1850', desc: 'Proibição do tráfico de escravizados acelera a atração de imigrantes europeus.' },
      { ano: '1875', desc: 'Grande fluxo de italianos — o maior grupo. SP (café) e RS (Bento Gonçalves, Caxias).' },
      { ano: '1908', desc: 'Navio Kasato Maru traz 165 famílias japonesas ao porto de Santos.' },
      { ano: 'Séc. XX', desc: 'Eslavos (Paraná), sírio-libaneses, espanhóis e outros grupos europeus chegam.' },
      { ano: '2010–hoje', desc: 'Novos fluxos: haitianos, venezuelanos, bolivianos, congoleses. Perfil mais vulnerável.' }
    ],

    audio: 'audio/imigracao.mp3',
    audioTitle: 'Imigração no Brasil',
    mapaGenially: `<div class="container-wrapper-genially" style="position:relative;min-height:480px;max-width:100%;"><video class="loader-genially" autoplay loop playsinline muted style="position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;"><source src="https://static.genially.com/resources/loader-default-rebranding.mp4" type="video/mp4"/></video><div id="6a2ac0e0053d6aac72433c51" class="genially-embed" style="margin:0 auto;position:relative;height:auto;width:100%;"></div></div><script>(function(d){var js,id="genially-embed-js",ref=d.getElementsByTagName("script")[0];if(d.getElementById(id)){return;}js=d.createElement("script");js.id=id;js.async=true;js.src="https://view.genially.com/static/embed/embed.js";ref.parentNode.insertBefore(js,ref);}(document));<\/script>`,
    atividadeGenially: `<div class="container-wrapper-genially" style="position:relative;min-height:480px;max-width:100%;"><video class="loader-genially" autoplay loop playsinline muted style="position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;"><source src="https://static.genially.com/resources/loader-default-rebranding.mp4" type="video/mp4"/></video><div id="6a2ac514f6144302eee4dc8e" class="genially-embed" style="margin:0 auto;position:relative;height:auto;width:100%;"></div></div><script>(function(d){var js,id="genially-embed-js",ref=d.getElementsByTagName("script")[0];if(d.getElementById(id)){return;}js=d.createElement("script");js.id=id;js.async=true;js.src="https://view.genially.com/static/embed/embed.js";ref.parentNode.insertBefore(js,ref);}(document));<\/script>`,
    quiz: [
      { p: 'Quais foram os primeiros imigrantes europeus não-portugueses organizados no Brasil?', ops: ['Alemães','Italianos','Suíços','Japoneses'], c: 2, exp: 'Os suíços chegaram em 1818-1819 do cantão de Friburgo e fundaram Nova Friburgo no Rio de Janeiro.' },
      { p: 'Qual evento acelerou a política de atração de imigrantes europeus a partir de 1850?', ops: ['Chegada da Família Real','Proibição do tráfico de escravizados','Proclamação da República','Guerra do Paraguai'], c: 1, exp: 'Com a proibição do tráfico de escravizados em 1850, o governo precisou de trabalhadores para as lavouras de café.' },
      { p: 'Qual navio trouxe as primeiras famílias japonesas ao Brasil em 1908?', ops: ['Santa Maria','Kasato Maru','Hiroshan','Nippon Maru'], c: 1, exp: 'O Kasato Maru chegou ao porto de Santos em 1908 com 165 famílias japonesas, iniciando a maior diáspora japonesa nas Américas.' },
      { p: 'Segundo a FAPESP (2025), quantos imigrantes estão cadastrados no CadÚnico no Brasil?', ops: ['45 mil','120 mil','415 mil','1,2 milhão'], c: 2, exp: 'O Atlas temático do Nepo-Unicamp (2025) mostra que ~415 mil imigrantes estão no CadÚnico, em situação de vulnerabilidade.' },
      { p: 'Qual porcentagem dos trabalhadores industriais de SP era formada por imigrantes em 1901?', ops: ['30%','55%','75%','90%'], c: 3, exp: 'Segundo o InfoEscola, em 1901, 90% dos trabalhadores industriais de São Paulo eram imigrantes.' }
    ],
    reflexao: [
      'O governo imperial incentivou a imigração europeia para "branquear" a população — uma política racista. Como esse episódio se relaciona com o racismo estrutural que persiste no Brasil?',
      'Muitos imigrantes europeus chegaram ao Brasil em condições análogas à servidão. Como podemos contar essa história de forma mais completa e honesta?',
      'Hoje, o Brasil recebe imigrantes vulneráveis mas apenas 230 municípios têm políticas para estrangeiros. O que essa despreparação revela sobre como o país trata quem chega?'
    ],
    atividades: [
      { icon: 'ti-map-2', color: '#D4A050', titulo: 'Mapa das origens', desc: 'Com um mapa-mundi e um mapa do Brasil, conectam países de origem dos imigrantes às regiões onde se estabeleceram. Identificam em cada região uma herança cultural visível.' },
      { icon: 'ti-users', color: '#1A5C30', titulo: 'Roda de histórias', desc: 'Cada participante pesquisa a origem familiar de alguém próximo ou um personagem histórico imigrante. Na roda, compartilha: de onde vieram, por que vieram, o que trouxeram.' },
      { icon: 'ti-tools-kitchen-2', color: '#6B1A1A', titulo: 'Mesa de herança', desc: 'Cada participante traz uma receita cuja origem pode ser rastreada: pizza (italiana), cuca (alemã), sushi (japonesa), esfiha (árabe). Monta-se uma "mesa de heranças" com o prato e sua história.' }
    ]
  }
};

// QUIZ GERAL
const QUIZ_GERAL = [
  { tema: 'Africana', p: 'De que língua africana vem a palavra "samba"?', ops: ['Iorubá','Quimbundo','Hauçá','Suaíli'], c: 1, exp: 'Samba vem do quimbundo "semba" = umbigada.' },
  { tema: 'Indígena', p: 'Quantos povos indígenas são reconhecidos no Brasil hoje?', ops: ['52','140','305','520'], c: 2, exp: '305 povos indígenas são reconhecidos oficialmente no Brasil.' },
  { tema: 'Biomas', p: 'Qual é o único bioma 100% exclusivo do Brasil?', ops: ['Cerrado','Pantanal','Caatinga','Pampa'], c: 2, exp: 'A Caatinga existe apenas no Brasil — não existe em nenhum outro lugar do planeta.' },
  { tema: 'Rio de Janeiro', p: 'Em que data foi fundada a cidade do Rio de Janeiro?', ops: ['1 jan. 1502','1 mar. 1565','7 set. 1822','15 nov. 1889'], c: 1, exp: 'A cidade foi fundada em 1º de março de 1565 por Estácio de Sá.' },
  { tema: 'Imigração', p: 'Qual navio trouxe as primeiras famílias japonesas ao Brasil?', ops: ['Santa Maria','Kasato Maru','Hiroshan','Nippon Maru'], c: 1, exp: 'O Kasato Maru chegou ao porto de Santos em 1908.' },
  { tema: 'Africana', p: 'O que foram os quilombos no Brasil?', ops: ['Feiras de escravos','Comunidades de resistência','Igrejas coloniais','Aldeias indígenas'], c: 1, exp: 'Quilombos foram territórios de resistência onde africanos escravizados podiam viver com mais liberdade.' },
  { tema: 'Biomas', p: 'Qual porcentagem da Mata Atlântica original ainda está preservada?', ops: ['70%','50%','27%','10%'], c: 2, exp: 'Segundo o IBGE, apenas 27% da cobertura original da Mata Atlântica ainda está preservada.' },
  { tema: 'Rio de Janeiro', p: 'O que foi a Revolta da Vacina em 1904?', ops: ['Protesto contra imposto','Levante popular contra vacinação e remoções forçadas','Movimento abolicionista','Golpe republicano'], c: 1, exp: 'A Revolta da Vacina foi desencadeada pela vacinação obrigatória e pelas demolições de Pereira Passos.' },
  { tema: 'Indígena', p: 'Qual destas palavras tem origem tupi-guarani?', ops: ['Farinha','Pipoca','Pizza','Cuca'], c: 1, exp: 'Pipoca vem do tupi-guarani. Farinha é português, pizza é italiano e cuca é alemão.' },
  { tema: 'Imigração', p: 'Segundo a FAPESP (2025), quantos imigrantes estão no CadÚnico no Brasil?', ops: ['45 mil','120 mil','415 mil','1,2 milhão'], c: 2, exp: '~415 mil imigrantes estão cadastrados no CadÚnico, em situação de vulnerabilidade.' }
];

/* ═══════════════════════════════════════
   STATE
═══════════════════════════════════════ */
let currentView = 'home';
let currentTema = null;
let currentFormat = 'padrao';
let quizState = { questions: [], current: 0, score: 0, answered: false };

/* ═══════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════ */
function navigate(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('view-' + view).classList.add('active');
  const navEl = document.getElementById('nav-' + view);
  if (navEl) navEl.classList.add('active');
  currentView = view;
  updateBreadcrumb(view);
  mainContent.scrollTop = 0;
  closeSidebar();
  if (view === 'quiz') initQuizGeral();
}

function openTema(key) {
  currentTema = key;
  const t = TEMAS[key];
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('view-tema').classList.add('active');
  const navEl = document.getElementById('nav-' + key);
  if (navEl) navEl.classList.add('active');

  // Hero
  document.getElementById('temaHero').style.borderLeft = `4px solid ${t.color}`;
  document.getElementById('temaBadge').innerHTML = `<span class="nav-dot" style="background:${t.color};"></span> ${t.tag}`;
  document.getElementById('temaBadge').style.cssText = `background:${t.colorLight};color:${t.color};`;
  document.getElementById('temaTitleEl').textContent = t.title;
  document.getElementById('temaIntroEl').textContent = t.intro;

  // Reset format tabs
  document.querySelectorAll('.format-tab').forEach(tb => tb.classList.remove('active'));
  document.querySelectorAll('.format-tab')[0].classList.add('active');
  document.querySelectorAll('.content-pane').forEach(p => p.classList.remove('active'));
  document.getElementById('pane-padrao').classList.add('active');
  currentFormat = 'padrao';

  // Render all panes
  renderPadrao(t);
  renderSimples(t);
  renderObjetiva(t);
  renderVisual(t);
  renderQuizTema(t);
  renderProfessorTema(t);
  renderAudioPane(t);
  renderMapaPane(t);
  renderAtividadePane(t);

  updateBreadcrumb('tema', t.title);
  mainContent.scrollTop = 0;
  closeSidebar();
}

function switchFormat(fmt, btn) {
  document.querySelectorAll('.format-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.content-pane').forEach(p => p.classList.remove('active'));
  document.getElementById('pane-' + fmt).classList.add('active');
  currentFormat = fmt;
  mainContent.scrollTop = 0;
}

function updateBreadcrumb(view, sub) {
  const labels = { home: 'Início', temas: 'Temas', quiz: 'Quiz Geral', professor: 'Área do Professor', sobre: 'Sobre o Leguará', tema: 'Tema' };
  let html = `<span>${labels[view] || view}</span>`;
  if (sub) html = `<span style="color:var(--ink-l)">Temas</span> <i class="ti ti-chevron-right" style="font-size:11px;"></i> <span>${sub}</span>`;
  document.getElementById('breadcrumb').innerHTML = html;
}

/* ═══════════════════════════════════════
   RENDERERS
═══════════════════════════════════════ */
function renderPadrao(t) {
  document.getElementById('content-padrao').innerHTML = t.padrao;
}

function renderSimples(t) {
  document.getElementById('content-simples').innerHTML = t.simples.map(block => `
    <div class="simples-card">
      <div class="simples-card-label" style="color:${block.color};">
        <i class="ti ${block.icon}"></i> ${block.label}
      </div>
      ${block.frases.map(f => `<p class="simples-frase">${f}</p>`).join('')}
    </div>
  `).join('');
}

function renderObjetiva(t) {
  const o = t.objetiva;
  document.getElementById('content-objetiva').innerHTML = `
    <div class="objetiva-section">
      <div class="objetiva-label"><i class="ti ti-question-mark"></i> O que é?</div>
      <div class="objetiva-text">${o.oque}</div>
    </div>
    <div class="objetiva-section">
      <div class="objetiva-label"><i class="ti ti-map-pin"></i> Onde?</div>
      <div class="objetiva-text">${o.onde}</div>
    </div>
    <div class="objetiva-section">
      <div class="objetiva-label"><i class="ti ti-flame"></i> Por que é importante?</div>
      <div class="objetiva-text">${o.porque}</div>
    </div>
    <div class="objetiva-section">
      <div class="objetiva-label"><i class="ti ti-list-numbers"></i> 5 fatos rápidos</div>
      <ul class="fact-list-lg">
        ${o.fatos.map((f,i) => `<li><span class="fact-n">${i+1}</span>${f}</li>`).join('')}
      </ul>
    </div>
    <div class="objetiva-section">
      <div class="objetiva-label"><i class="ti ti-bulb"></i> Curiosidade</div>
      <div style="background:var(--ocean-l);border-radius:var(--radius-md);padding:1rem 1.25rem;font-size:14px;color:var(--ocean);line-height:1.65;">${o.curiosidade}</div>
    </div>
  `;
}

function renderVisual(t) {
  const cards = t.visual.map(v => `
    <div class="visual-card">
      <div class="visual-card-header" style="background:${v.bg};">
        <span style="color:${v.hc};">${v.header}</span>
      </div>
      <div class="visual-card-body">
        ${v.texto.map(txt => `<p>${txt}</p>`).join('')}
        <div class="img-slot">
          <i class="ti ti-photo"></i>
          <span>${v.img}</span>
          <small>Substitua pelo &lt;img&gt; com Base64</small>
        </div>
      </div>
    </div>
  `).join('');

  const tl = `
    <div class="visual-card">
      <div class="visual-card-header"><i class="ti ti-timeline"></i> Linha do tempo</div>
      <div class="visual-card-body">
        <div class="timeline-lg">
          ${t.timeline.map(item => `
            <div class="tl-item">
              <div class="tl-dot-lg"></div>
              <div class="tl-year">${item.ano}</div>
              <div class="tl-text">${item.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  document.getElementById('content-visual').innerHTML = cards + tl;
}

function renderQuizTema(t) {
  const container = document.getElementById('quiz-tema-container');
  container.innerHTML = '';
  const state = { questions: t.quiz, current: 0, score: 0, answered: false };
  renderQuizQuestion(container, state, t.color);
}

function renderQuizQuestion(container, state, color) {
  if (state.current >= state.questions.length) {
    const pct = Math.round((state.score / state.questions.length) * 100);
    const msg = pct >= 80 ? 'Excelente! Você domina esse tema.' : pct >= 60 ? 'Bom trabalho! Revise os pontos que errou.' : 'Continue estudando — você está no caminho certo!';
    container.innerHTML = `
      <div class="quiz-score-card">
        <div class="quiz-score-num" style="color:${color};">${state.score}/${state.questions.length}</div>
        <div class="quiz-score-sub">${pct}% de acerto</div>
        <div class="quiz-score-msg">${msg}</div>
        <div style="margin-top:2rem;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <button class="btn-sm btn-forest" onclick="renderQuizTema(TEMAS['${currentTema}'])">
            <i class="ti ti-refresh"></i> Tentar novamente
          </button>
          <button class="btn-sm btn-outline" onclick="navigate('quiz')">
            <i class="ti ti-help-circle"></i> Quiz Geral
          </button>
        </div>
      </div>
    `;
    return;
  }
  const q = state.questions[state.current];
  const pct = ((state.current) / state.questions.length) * 100;
  container.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width:${pct}%;background:${color};"></div>
      </div>
      <div class="quiz-q-num">Pergunta ${state.current + 1} de ${state.questions.length}</div>
      <div class="quiz-q-text">${q.p}</div>
      <div class="quiz-options">
        ${q.ops.map((op, i) => `
          <button class="quiz-option" onclick="answerQ(this, ${i}, ${q.c}, '${container.id || 'quiz-tema-container'}', TEMAS['${currentTema}'].quiz[${state.current}].exp)">
            <span class="quiz-opt-letter">${String.fromCharCode(65+i)}</span>
            ${op}
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="qfeedback"></div>
      <div class="quiz-nav">
        <span style="font-size:12px;color:var(--ink-l);">Pontuação: ${state.score}/${state.current}</span>
        <button class="btn-sm btn-forest" id="nextBtn" style="display:none;" onclick="nextQuestion('${container.id || 'quiz-tema-container'}', ${JSON.stringify(state).replace(/"/g,"'")})">
          ${state.current + 1 < state.questions.length ? 'Próxima <i class="ti ti-arrow-right"></i>' : 'Ver resultado <i class="ti ti-trophy"></i>'}
        </button>
      </div>
    </div>
  `;
  container._state = state;
}

function answerQ(btn, chosen, correct, containerId, explanation) {
  const container = document.getElementById(containerId);
  const state = container._state;
  if (state.answered) return;
  state.answered = true;
  const opts = container.querySelectorAll('.quiz-option');
  opts.forEach((o, i) => {
    o.classList.add('disabled');
    if (i === correct) o.classList.add('correct');
    else if (i === chosen) o.classList.add('wrong');
  });
  const isRight = chosen === correct;
  if (isRight) state.score++;
  const fb = document.getElementById('qfeedback');
  fb.className = 'quiz-feedback show ' + (isRight ? 'correct' : 'wrong');
  fb.innerHTML = (isRight ? '<strong>✓ Correto!</strong> ' : '<strong>✗ Incorreto.</strong> ') + explanation;
  document.getElementById('nextBtn').style.display = 'inline-flex';
  document.getElementById('nextBtn').innerHTML = state.current + 1 < state.questions.length
    ? 'Próxima <i class="ti ti-arrow-right"></i>'
    : 'Ver resultado <i class="ti ti-trophy"></i>';
  document.getElementById('nextBtn').onclick = () => {
    state.current++;
    state.answered = false;
    renderQuizQuestion(container, state, TEMAS[currentTema]?.color || '#0E2D1F');
  };
}

function renderProfessorTema(t) {
  document.getElementById('content-professor-tema').innerHTML = `
    <div style="margin-bottom:2rem;">
      <div class="objetiva-label" style="margin-bottom:1rem;"><i class="ti ti-message-circle"></i> Perguntas para reflexão</div>
      <div class="reflection-cards">
        ${t.reflexao.map((r,i) => `
          <div class="reflection-card">
            <span class="reflection-num">${i+1}</span>
            <span class="reflection-text">${r}</span>
          </div>
        `).join('')}
      </div>
    </div>
    <div style="margin-bottom:2rem;">
      <div class="objetiva-label" style="margin-bottom:1rem;"><i class="ti ti-puzzle"></i> Atividades interativas</div>
      <div class="activity-cards">
        ${t.atividades.map(a => `
          <div class="activity-card">
            <div class="activity-title"><i class="ti ${a.icon}" style="color:${a.color};"></i> ${a.titulo}</div>
            <div class="activity-desc">${a.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════
   QUIZ GERAL
═══════════════════════════════════════ */
function initQuizGeral() {
  const container = document.getElementById('quiz-geral-container');
  const state = { questions: QUIZ_GERAL, current: 0, score: 0, answered: false };
  container.id = 'quiz-geral-container';
  renderQuizGeralQuestion(container, state);
}

function renderQuizGeralQuestion(container, state) {
  if (state.current >= state.questions.length) {
    const pct = Math.round((state.score / state.questions.length) * 100);
    const msg = pct >= 80 ? '🌟 Você é um especialista em cultura brasileira!' : pct >= 60 ? '👍 Bom conhecimento! Continue explorando os temas.' : '📚 Vale rever os temas — há muito a descobrir!';
    container.innerHTML = `
      <div class="quiz-score-card">
        <div class="quiz-score-num">${state.score}/${state.questions.length}</div>
        <div class="quiz-score-sub">${pct}% de acerto — Quiz Geral</div>
        <div class="quiz-score-msg">${msg}</div>
        <div style="margin-top:2rem;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <button class="btn-sm btn-forest" onclick="initQuizGeral()">
            <i class="ti ti-refresh"></i> Tentar novamente
          </button>
          <button class="btn-sm btn-outline" onclick="navigate('temas')">
            <i class="ti ti-books"></i> Explorar temas
          </button>
        </div>
      </div>
    `;
    return;
  }
  const q = state.questions[state.current];
  const pct = (state.current / state.questions.length) * 100;
  container.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width:${pct}%;"></div>
      </div>
      <div style="margin-bottom:0.5rem;">
        <span style="font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-l);">Tema: ${q.tema}</span>
      </div>
      <div class="quiz-q-num">Pergunta ${state.current + 1} de ${state.questions.length}</div>
      <div class="quiz-q-text">${q.p}</div>
      <div class="quiz-options">
        ${q.ops.map((op, i) => `
          <button class="quiz-option" onclick="answerGeralQ(this, ${i}, ${q.c}, '${q.exp.replace(/'/g,"\\'")}')">
            <span class="quiz-opt-letter">${String.fromCharCode(65+i)}</span>${op}
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="qfgeral"></div>
      <div class="quiz-nav">
        <span style="font-size:12px;color:var(--ink-l);">Pontuação: ${state.score}/${state.current}</span>
        <button class="btn-sm btn-forest" id="nextBtnGeral" style="display:none;">
          ${state.current + 1 < state.questions.length ? 'Próxima <i class="ti ti-arrow-right"></i>' : 'Ver resultado <i class="ti ti-trophy"></i>'}
        </button>
      </div>
    </div>
  `;
  container._state = state;
  document.getElementById('nextBtnGeral').onclick = () => {
    state.current++;
    state.answered = false;
    renderQuizGeralQuestion(container, state);
  };
}

function answerGeralQ(btn, chosen, correct, explanation) {
  const container = document.getElementById('quiz-geral-container');
  const state = container._state;
  if (state.answered) return;
  state.answered = true;
  const opts = container.querySelectorAll('.quiz-option');
  opts.forEach((o, i) => {
    o.classList.add('disabled');
    if (i === correct) o.classList.add('correct');
    else if (i === chosen) o.classList.add('wrong');
  });
  const isRight = chosen === correct;
  if (isRight) state.score++;
  const fb = document.getElementById('qfgeral');
  fb.className = 'quiz-feedback show ' + (isRight ? 'correct' : 'wrong');
  fb.innerHTML = (isRight ? '<strong>✓ Correto!</strong> ' : '<strong>✗ Incorreto.</strong> ') + explanation;
  document.getElementById('nextBtnGeral').style.display = 'inline-flex';
}

/* ═══════════════════════════════════════
   MOBILE SIDEBAR
═══════════════════════════════════════ */
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('navOverlay').classList.toggle('show');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('navOverlay').classList.remove('show');
}

// Init
const mainContent = document.getElementById('mainContent');

/* ═══════════════════════════════════════
   AUDIO PLAYER RENDERER
═══════════════════════════════════════ */
let currentAudio = null;
let audioUpdateInterval = null;

function renderAudioPane(t) {
  const container = document.getElementById('audio-pane-content');
  if (!t.audio) {
    container.innerHTML = '<p style="color:var(--ink-l);font-size:14px;padding:2rem 0;">Áudio não disponível para este tema.</p>';
    return;
  }

  // Generate fake waveform bars (60 bars for visual)
  const bars = Array.from({length: 60}, () => Math.random() * 0.7 + 0.3);
  const barHTML = bars.map((h, i) =>
    `<div class="audio-waveform-bar" id="wbar-${i}" style="height:${Math.round(h*100)}%;"></div>`
  ).join('');

  container.innerHTML = `
    <div class="audio-card">
      <div class="audio-card-eyebrow"><i class="ti ti-headphones"></i> Narração em áudio</div>
      <div class="audio-card-title">${t.audioTitle}</div>
      <div class="audio-waveform" id="audioWaveform">${barHTML}</div>
      <div class="audio-controls">
        <button class="audio-play-btn" id="audioPlayBtn" onclick="toggleAudio()">
          <i class="ti ti-player-play-filled" id="audioPlayIcon"></i>
        </button>
        <div class="audio-time-track">
          <div class="audio-time-bar" id="audioBar" onclick="seekAudio(event)">
            <div class="audio-time-fill" id="audioFill"></div>
          </div>
          <div class="audio-times">
            <span id="audioCurrent">0:00</span>
            <span id="audioDuration">—</span>
          </div>
        </div>
        <button class="audio-speed-btn" id="speedBtn" onclick="cycleSpeed()">1×</button>
      </div>
    </div>
    <audio id="leguaraAudio" src="${t.audio}" preload="metadata"></audio>
    <div style="margin-top:1.5rem;padding:1.25rem;background:var(--white);border:1px solid var(--border);border-radius:var(--radius-md);">
      <div style="font-size:11px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink-l);margin-bottom:0.5rem;"><i class="ti ti-info-circle"></i> Sobre este áudio</div>
      <p style="font-size:14px;color:var(--ink-m);line-height:1.65;">Esta narração foi produzida especialmente para o Projeto Leguará. Ideal para ouvir durante deslocamentos, atividades manuais ou para estudantes que aprendem melhor pelo canal auditivo.</p>
    </div>
  `;

  // Set up audio element
  const audio = document.getElementById('leguaraAudio');
  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    clearInterval(audioUpdateInterval);
  }
  currentAudio = audio;

  audio.addEventListener('loadedmetadata', () => {
    document.getElementById('audioDuration').textContent = formatTime(audio.duration);
  });

  audio.addEventListener('ended', () => {
    document.getElementById('audioPlayIcon').className = 'ti ti-player-play-filled';
    clearInterval(audioUpdateInterval);
    document.getElementById('audioFill').style.width = '0%';
    updateWaveform(0, 60);
  });
}

function toggleAudio() {
  const audio = document.getElementById('leguaraAudio');
  if (!audio) return;
  if (audio.paused) {
    audio.play();
    document.getElementById('audioPlayIcon').className = 'ti ti-player-pause-filled';
    audioUpdateInterval = setInterval(updateAudioUI, 200);
  } else {
    audio.pause();
    document.getElementById('audioPlayIcon').className = 'ti ti-player-play-filled';
    clearInterval(audioUpdateInterval);
  }
}

function updateAudioUI() {
  const audio = document.getElementById('leguaraAudio');
  if (!audio || audio.paused) return;
  const pct = audio.currentTime / audio.duration;
  document.getElementById('audioFill').style.width = (pct * 100) + '%';
  document.getElementById('audioCurrent').textContent = formatTime(audio.currentTime);
  updateWaveform(pct, 60);
}

function updateWaveform(pct, total) {
  const played = Math.floor(pct * total);
  for (let i = 0; i < total; i++) {
    const bar = document.getElementById('wbar-' + i);
    if (bar) bar.classList.toggle('played', i < played);
  }
}

function seekAudio(e) {
  const audio = document.getElementById('leguaraAudio');
  if (!audio) return;
  const bar = document.getElementById('audioBar');
  const rect = bar.getBoundingClientRect();
  const pct = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
  audio.currentTime = pct * audio.duration;
  updateAudioUI();
}

const SPEEDS = [0.75, 1, 1.25, 1.5, 2];
let speedIdx = 1;
function cycleSpeed() {
  speedIdx = (speedIdx + 1) % SPEEDS.length;
  const audio = document.getElementById('leguaraAudio');
  if (audio) audio.playbackRate = SPEEDS[speedIdx];
  const btn = document.getElementById('speedBtn');
  if (btn) btn.textContent = SPEEDS[speedIdx] + '×';
}

function formatTime(s) {
  if (!s || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return m + ':' + String(sec).padStart(2, '0');
}

/* ═══════════════════════════════════════
   GENIALLY RENDERERS
═══════════════════════════════════════ */
function renderMapaPane(t) {
  const container = document.getElementById('mapa-pane-content');
  if (!t.mapaGenially) {
    container.innerHTML = '<p style="color:var(--ink-l);font-size:14px;padding:2rem 0;">Mapa interativo não disponível.</p>';
    return;
  }
  container.innerHTML = `
    <div class="genially-label"><i class="ti ti-map-2"></i> Mapa Interativo — ${t.audioTitle || t.title}</div>
    <div class="genially-wrap">${t.mapaGenially}</div>
  `;
  // Re-run Genially embed script if already loaded
  if (window.genially) {
    try { window.genially.init(); } catch(e) {}
  }
}

function renderAtividadePane(t) {
  const container = document.getElementById('atividade-pane-content');
  if (!t.atividadeGenially) {
    container.innerHTML = '<p style="color:var(--ink-l);font-size:14px;padding:2rem 0;">Atividade interativa não disponível.</p>';
    return;
  }
  container.innerHTML = `
    <div class="genially-label"><i class="ti ti-puzzle"></i> Atividade Interativa — ${t.audioTitle || t.title}</div>
    <div class="genially-wrap">${t.atividadeGenially}</div>
  `;
  if (window.genially) {
    try { window.genially.init(); } catch(e) {}
  }
}

