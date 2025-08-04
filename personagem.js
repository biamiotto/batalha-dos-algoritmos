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
let combatesVencidos = 5;
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
console.log(`Olá! Eu sou a ${nome}, tenho ${idade} anos e sou uma ${classe} super poderosa, eu vim da galáxia para ajudar animalzinhos em perigo.`);
console.log(`Já ajudei muitos animais fofinhos, por isso, tenho um nível alto de ${nivel}, e minha vida é de ${vida}.`);
console.log(`Tenho um total de ${ouro} moedas de ouro, o que eu considero bastante, já que a maioria dos donos dos animais que eu ajudo me dão uma recompensa por ajudar o pet deles.`);
console.log(`Meu xp é ${xp} e minha arma preferida é o ${NOMEARMA}, pois com ele eu consigo desprender algum animal que ficou preso em uma corda, cerca, etc. Mas já desprendi uma tartaruga com esse arco, e foi muito eficiente.`);
console.log(`Meu poder especial é o ${PODERESPECIAL}, que é temido por todos, e se cogitarem me atacar eu uso minha super armadura, a ${NOMEARMADURA}.`);
console.log(`Após meus treinamentos muito esforçados, meu ataque e minha defesa melhoraram muito, com um ataque de ${ataqueTotal} e defesa de ${defesaTotal}.`);
console.log(`Vida suficiente? ${vidaSuficiente} | Ataque forte? ${ataqueForte} | Nível avançado? ${nivelAvancado}.`);
console.log(`Pode enfrentar o Guardião? ${podeEnfrentarGuardiao} - isso será moleza pra mim, já treinei muito porque ninguém mexe com os meus animais fofinhos!!!`);


// Continuação da jornada do nível 1


// Resgatando dados da personagem anterior e adicionando novas informações:
console.log(``);
console.log(`📝 Ficha da Personagem Nível 2:`);
console.log(`-----------------------------------`);
console.log(`Nome: ${nome}
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

console.log(`${nome} anadava tranquilamente na cidade de ${localAtual}, até que coisas estranhas começam a acontecer: o céu começa a mudar de cor e ficar vermelho, clarões e raios extremamente fortes começam a aparecer, mas nenhum sinal sequer de chuva, indicando que algo extraordinário estava por vir... 
${nome} percebe que não estava em um mundo real, mas sim no mundo invertido, que seria um "clone" do mundo real, porém com coisas irreais acontecendo nele.
Seu amigo ${amigoDeStar} que também estava no mundo invertido, percebe um barulho estranho e alto vindo de trás algumas árvores, então, ele se aproxima para ver o que acontecia ali, até que ele enxerga uma sombra enorme vinda de trás das árvores e decide chamar sua amiga Star, pois estava com medo.
Star ouve gritos vai correndo em direção a ${amigoDeStar} e se depara com um enorme monstro...`);

// Tomada de decisão baseada no nível da personagem
if (nivel >= 100) {
    console.log(`Você pode enfrentar o Demogorgon, vá em frente!`);
    console.log(`Logo, ${nome} percebe que o monstro seria muito forte para ela, então, ela e ${amigoDeStar} decidem se esconder em um lugar seguro`);
}

// Verificação de força
if (forca >= 70) {
    console.log(`Enquanto Star e Steve caminhavam para procurar um lugar seguro para se esconder, eles se deparam com uma pedra enorme, atrapalhando completamente a jornada, então, agora eles tinham duas opções: ou tentar tirar a pedra do caminho, ou atravessar pela floresta, porém com altos riscos...`);
    console.log(`${nome} decide tentar retirar a pedra e obtém sucesso total!! Sua incrível força evitou possíveis desastres na floresta.`);
}











