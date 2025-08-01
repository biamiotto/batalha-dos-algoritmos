// Criação das variáveis principais
let nome = "Star Shine";
let classe = "Maga"
let nivel = 90;
let vida = 200;
let ouro = 550;
let xp = 70;
let idade = 20;

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


