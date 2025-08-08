// Criação das variáveis principais
let nome = "Star Shine";
let classe = "Maga"
let nivel = 90;
let vida = 200;
let ouro = 550;
let xp = 70;
let idade = 20;
let manaAtual = 80;
let manaMaxima = 80;
let forca = 90;
let defesa = 110;
let combatesVencidos = 15;
let localAtual = "Hawkins";
let missaoAtual = "Combate contra Demogorgon";
let amigoDeStar = "Steve";

// Definição de constantes mágicas
const NOMEARMA = "🏹 Arco Celestial";
let DANOBASE = 100;
const NOMEARMADURA = "🌑 Capa da Lua";
let DEFESABASE = 90;
const PODERESPECIAL = "🌟 Golpe das Estrelas";

// Aplicação de operadores de atribuição

// O personagem treinou e ganhou 150 pontos de experiência
xp += 150;
// Comprou uma poção por 30 moedas de ouro
ouro -= 30;
// Usou a poção e recuperou 40 pontos de vida
vida += 40;
// A arma foi encantada, e seu dano foi dobrado
DANOBASE *= 2;
// O personagem recebeu um bonus e sua defesa aumentou 50 pontos
DEFESABASE += 50;

// Cálculo de atributos finais 
ataqueTotal = nivel + DANOBASE;
defesaTotal = DEFESABASE + (nivel / 2);

// Avaliação de Prontidão com operadores lógicos
vidaSuficiente = vida > 70;
ataqueForte = ataqueTotal > 60;
nivelAvancado = nivel >= 10;
podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

// Geração da lore do personagem 
console.log("📃 LORE DA HEROÍNA: Star Shine ✨");
console.log("");
console.log(`Olá! Eu sou a ${nome}, tenho ${idade} anos e sou uma ${classe} super poderosa, 
eu vim da galáxia para ajudar animaizinhos em perigo.`);
console.log(`Já ajudei muitos animais fofinhos, por isso, tenho um nível alto de ${nivel}, 
e minha vida é de ${vida}.`);
console.log(`Tenho um total de ${ouro} moedas de ouro, o que eu considero bastante, 
já que a maioria dos donos dos animais que eu ajudo me dão uma recompensa por ajudar o pet deles.`);
console.log(`Meu xp é ${xp} e minha arma preferida é o ${NOMEARMA}, pois com ele eu consigo
desprender algum animal que ficou preso em uma corda, cerca, etc. 
Já desprendi uma tartaruga com esse arco, e foi muito eficiente.`);
console.log(`Meu poder especial é o ${PODERESPECIAL}, que é temido por todos, 
e se cogitarem me atacar eu uso minha super armadura, a ${NOMEARMADURA}.`);
console.log(`Após meus treinamentos muito esforçados, meu ataque e minha defesa melhoraram muito, 
com um ataque de ${ataqueTotal} e defesa de ${defesaTotal}.`);
console.log(`Vida suficiente? ${vidaSuficiente} | Ataque forte? ${ataqueForte}
| Nível avançado? ${nivelAvancado}.`);
console.log(`Pode enfrentar o Guardião? ${podeEnfrentarGuardiao} - isso será moleza pra mim, 
já treinei muito porque ninguém mexe com os meus animais fofinhos!!!`);


// Continuação da jornada do nível 1


// Resgatando dados da personagem anterior e adicionando novas informações:
console.log(``);
console.log(`📝 Ficha da Personagem Nível 2:`);
console.log(`-----------------------------------`);
console.log(
   `Nome: ${nome}
Idade: ${idade}
Classe: ${classe}
Nível: ${nivel}
Vida: ${vida}
Ouro: ${ouro}
XP: ${xp}
Mana Atual: ${manaAtual}
Ataque: ${ataqueTotal}
Defesa: ${defesaTotal}
Amigo: ${amigoDeStar}
Combates Vencidos: ${combatesVencidos}
Arma Preferida: ${NOMEARMA}
Dano da Base: ${DANOBASE}
Defesa da Base: ${DEFESABASE}
Armadura: ${NOMEARMADURA}
Poder Especial: ${PODERESPECIAL}
Local Atual: ${localAtual}
Missão Atual: ${missaoAtual}`);

// CAPÍTULO 1: Condicionais Simples na narrativa

console.log(``);
console.log(`📸 CAPÍTULO 1: A saga do Demogorgon`);
console.log(``);

console.log(`${nome} andava tranquilamente pela cidade de ${localAtual}, até que coisas estranhas começam 
a acontecer: o céu começa a mudar de cor e ficar vermelho, clarões e raios extremamente fortes começam a aparecer,
mas nenhum sinal sequer de chuva, indicando que algo extraordinário estava por vir... 
${nome} percebe que não estava em um mundo real, mas sim no mundo invertido, que seria um "clone" do mundo real, 
porém com coisas irreais acontecendo nele.
Seu amigo ${amigoDeStar} que também estava no mundo invertido, percebe um barulho estranho e alto vindo de trás algumas árvores, 
então, ele se aproxima para ver o que acontecia ali, até que ele enxerga uma sombra enorme vinda de trás das árvores e decide chamar sua amiga Star, pois estava com medo.
Star ouve gritos, vai correndo em direção a ${amigoDeStar} e se depara com um enorme monstro...`);

// Tomada de decisão baseada no nível da personagem
if (nivel >= 100) {
    console.log(`Você pode enfrentar o Demogorgon, vá em frente!`);
}
console.log(`Logo, ${nome} percebe que o monstro seria muito forte para ela, então, ela e ${amigoDeStar} 
decidem procurar um lugar seguro para se esconderem.`);

// Verificação de força
if (forca >= 70) {
    console.log(`Enquanto Star e Steve caminhavam a procura de um lugar seguro para se esconderem,
eles se deparam com uma pedra enorme, atrapalhando completamente a jornada, então, agora eles tinham duas opções:
ou tentar tirar a pedra do caminho, ou atravessar pela floresta, porém com altos riscos...`);
    console.log(`${nome} decide tentar retirar a pedra e obtém sucesso total!! 
Sua incrível força evitou possíveis desastres na floresta.`);
}

console.log(`Depois que ${nome} ergue a pedra gigante, ela e ${amigoDeStar} continuam andando,
mas algo inesperado acontece:
eles ouvem miados e latidos desesperados vindo de dentro de uma caverna próxima.
Star Shine para imediatamente.
- Steve! Tem animais presos lá dentro, eu sinto isso!
Sem pensar duas vezes, ela corre em direção à entrada da caverna.`);

// Verificação baseada na classe e xp
if (classe == "Maga" && xp >= 150) {
    console.log(`${nome} conjura um feitiço de luz e entra na caverna sem medo.
Ela encontra vários animaizinhos assustados, mas continua andando pela caverna para ver se
encontrava mais coisas. Até que encontra uma raposa mágica presa no fundo da caverna em correntes encantadas.`);
}

// CAPÍTULO 2: Escolhas Estratégicas
console.log(``);
console.log(`🦊 CAPÍTULO 2: A libertação`);
console.log(``);

// Decisão baseada nas moedas
if (ouro >= 100) {
    console.log(`Com ouro suficiente em mãos, ${nome} não hesita. Enquanto ainda está na caverna, um brilho verde surge do nada e,
entre os reflexos da pedra úmida, aparece um gnomo mercador flutuando sobre um cogumelo gigante, carregando pergaminhos
brilhantes em uma mochila mágica.`);
console.log(`-Está procurando por isto? -diz o gnomo, com um sorriso enigmático, enquanto tira de sua bolsa um pergaminho
mágico de libertação envolto em fitas douradas.`);
console.log(`Star entrega as moedas ao gnomo mercador, que sorri misteriosamente e lhe entrega o pergaminho mágico
de libertação. Ao tocá-lo, uma energia dourada a envolve, aumentando sua defesa mágica e fortalecendo os frutos
de seus treinamentos.`);
ouro -= 100;
defesa += 30;
xp += 50;
} else {
    console.log(`Sem moedas suficientes, ela tenta usar um feitiço básico para quebrar as correntes.`);
}
console.log(`Defesa e xp aumentaram! Ouro restante: ${ouro}`);
console.log(`Ela corre até a raposa mágica presa, abre o pergaminho e pronuncia as palavras encantadas.
As correntes brilham e se rompem, libertando o animal.`);

// Decisão baseada na defesa
if (defesa >= 110) {
    console.log(`Nesse momento, um pequeno monstro surge das sombras, mas a armadura mágica ${NOMEARMADURA} a protege completamente.
Sem esforço, ela sai ilesa.
Ela se sente renovada e com energia vital restaurada, Star acaricia a raposa, que a encara com gratidão.
Um laço mágico começa a se formar entre as duas.`);
vida += 30;
defesa += 10;
xp += 15;
} else {
    console.log(`Um monstrinho a ataca enquanto ela ajuda a raposa, e Star se machuca levemente.`);
vida -= 15;
}

// CAPÍTULO 3: A decisão final
console.log(``);
console.log(`🌟 CAPÍTULO 3: A decisão final`);
console.log(``);

console.log(`Após libertar a raposa, a caverna começa a tremer. Pedaços de pedra caem do teto,
e o desespero toma conta dos animais. Star olha em volta e vê ${amigoDeStar} correndo em sua direção,
desviando dos escombros.
- Star, rápido! A caverna tá desmoronando!`);

// Última decisão, baseada no número de combates vencidos e na força
if (combatesVencidos >= 10) {
    console.log(`Ela reúne todos -Steve, os animais e a raposa- e concentra sua energia.
Um círculo mágico se forma ao redor deles, e Star conjura um feitiço de teleporte coletivo.
No instante em que uma pedra enorme cairia sobre eles, um clarão os envolve.`);
} else if (forca >= 80) {
    console.log(`Ela ergue uma pedra enorme para abrir um novo caminho, conduz os
animais para fora da caverna e fica tudo bem.`);
} else {
    console.log(`Ela grita por Steve, que vai correndo para dentro da caverna ajudar, e juntos 
encontram uma saída apertada. Conseguem sair, mas perdem alguns suprimentos por causa do desespero de sair
logo, Star só podia pensar na segurança dos animais.`);
}

console.log(`Do lado de fora, em segurança, os animaizinhos correm livres. Steve respira aliviado e sorri.
A raposa mágica se aproxima de Star, toca seu colar com o focinho e se transforma em uma chama dourada,
fundindo sua essência á dela.
Star sente que algo dentro de si mudou. Sua conexão com a magia e com os animais estava mais forte do que nunca.`);

nivel++;
combatesVencidos++;

console.log(``);
console.log(`📣 Estatísticas finais:
Nível: ${nivel}
Vida: ${vida}
Ouro: ${ouro}
XP: ${xp}
Ataque: ${ataqueTotal}
Defesa: ${defesaTotal}
Combates Vencidos: ${combatesVencidos}
Dano da Base: ${DANOBASE}
Defesa da Base: ${DEFESABASE}`);

// Continuação da Saga Épica - NÍVEL 3

// Dados da personagem vindos dos níveis anteriores:
console.log(``);
console.log(`Continuação da Saga Épica - NÍVEL 3`);
console.log(`
Nome: ${nome}
Idade: ${idade}
Classe: ${classe}
Nível: ${nivel}
Vida: ${vida}
Ouro: ${ouro}
XP: ${xp}
Combates Vencidos: ${combatesVencidos}`);

// Novos elementos para o castelo dos arrays
let inventario = ["🏹 Arco Celestial", "🌑 Capa da Lua", "🍵 Poção Suprema de Vida", "🔮 Cristal da Raposa"];
let aliados = ["Steve", "Raposa Mágica", "Guerreira Lunar", "Mago Zeus"];
let inimigosEncontrados = ["Demogorgon", "Guardião do Código", "Dragão do Mundo Invertido"];
let salasCastelo = ["Salão dos Espelhos", "Biblioteca do Infinito", "Trono de Dados"];
let tesouroColetado = [];

console.log(``);
console.log(`🏰 ${nome} adentra o Castelo dos Arrays`);
console.log(`Após libertar a raposa mágica e sobreviver á Batalha dos Algoritmos, Star Shine chega diante
do castelo lendário.`);
console.log(`O portão se abre com um rugido metálico, revelando corredores que brilham como circuitos vivos.`);
console.log(`Inventário Inicial: ` + inventario.length + ` itens mágicos`);
console.log(`Aliados ao seu lado: ` + aliados.join(`, `));

// CAPÍTULO 1: DESCOBERTA DAS COLEÇÕES ARCANAS
let pocoesEncontradas = ["Vida da Lua", "Invisibilidade Celestial", "Escudo Estelar"];
let armadilhasAtiradas = [];

console.log(``);
console.log(`💥 CAPÍTULO 1: Os Baús Arcanos do Castelo`);
console.log(`🧪 Primeira poção encontrada: ` + pocoesEncontradas[0]);
console.log(`Total de poções mágicas: ` + pocoesEncontradas.length);

// Upgrade de item
inventario[2] = "Poção Suprema Estelar";
console.log(`✨ ${nome} aprimorou uma poção antiga em algo ainda mais poderoso!`);

// Adiciona e remove itens
inventario.push(`Anel de Proteção Galáctica`);
console.log(`💍 Novo item adicionado! Inventário ${inventario}`);
let itemRemovido = inventario.pop();
console.log(`Item removido: ${itemRemovido}`);
console.log(`Inventário atual: ${inventario}`);

console.log(`Enquanto examinava os baús arcanos, Star Shine sentiu o chão tremer levemente.`);
console.log(`Um som metálico ecoou pelos corredores, como engrenagens gigantes despertando após séculos.`);
console.log(`A Raposa Mágica ergueu as orelhas, como se quisesse dizer que não estávamos sozinhos ali...`);
console.log(`Um feixe de luz dourada atravessou a sala, projetando símbolos estranhos nas paredes, como se o castelo 
estivesse tentando se comunicar.`);

// Capítulo 2: A SALA DOS ESPELHOS
console.log(``);
console.log(`🔎 CAPÍTULO 2: O salão dos Espelhos`);
console.log(`Guiados pela luz dourada, Star Shine e seus aliados chegam a uma imensa sala repleta de espelhos antigos.`);
console.log(`Cada espelho reflete não apenas a aparência, mas também os medos e segredos mais profundos de quem o encara.`);
console.log(`Steve se aproxima de um deles, e vê uma versão sombria de si mesmo, segurando uma espada quebrada.`);
console.log(`A Guerreira Lunar alerta: 
- Cuidado! Alguns reflexos podem ganhar vida própria.`);
console.log(`Dois reflexos distorcidos comçam a se mover sozinhos, atravessando a superfície de vidro e assumindo forma física`);

// Inimigos de batalha 
let inimigosBatalha = ["Reflexo Sombrio de Steve", " Reflexo Sombrio de Guerreira Lunar"];
let danoRecebido = [];

console.log(`💀 ${nome} enfrenta ${inimigosBatalha}!`);

for (let i = 0; i < inimigosBatalha.length; i++) {
    let dano = Math.floor(Math.random() * 25) + 15;
    console.log(`🥊 Rodada ${i + 1} - ${inimigosBatalha[i]} recebe ${dano} de dano.`);
    danoRecebido.push(dano);
    if (i == 0) xp+= 30;
    else vida -= 20;
}

console.log(``);
console.log(`Vida atual: ${vida}`);
console.log(`XP: ${xp}`);

// CAPÍTULO 3: Explorando as Masmorras
console.log(``);
console.log(`🎩 CAPÍTULO 3: Explorando as Masmorras`);
console.log(`${nome} explora as ${salasCastelo.length} salas do castelo:`);

for (let i = 0; i < salasCastelo.length; i++) {
    console.log(`🚪 Sala ${i + 1}: ${salasCastelo[i]}`);
    if (i == 0) {
        xp += 50;
        inventario.push(`Pergaminho do Conhecimento`);
    } else if (i == 1) {
        tesouroColetado.push(`Cristal Protetor`);
    } else {
        vida -= 15;
    }
}

console.log(`Exploração finalizada! 
XP: ${xp}`);
console.log(`Vida: ${vida}`);

// CAPÍTULO 4: União dos Aliados
console.log(``);
console.log(`👥 CAPÍTULO 4: União dos Aliados`);
console.log(`${nome} convoca seus aliados para a batalha final!`);

for (let i = 0; i < aliados.length; i++) {
    let aliado = aliados[i];
    console.log(`Aliado ${i + 1}: ${aliado} pronto para a missão.`);
    if (i == 0) ouro += 70;
    else if (i == 1) {
        vida += 40;   
    } else if (i == 2) defesa += 35;
    else xp += 60;
}

console.log(`🥇 Preparados! 
Ouro: ${ouro}
Vida: ${vida}
Defesa: ${defesa}
XP: ${xp}`);

