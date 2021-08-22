console.log('\n Houve um assasinato ontem a noite e estamos colhendo alguns dados de pessoas mais próximas.\n Para isso, vamos lhe fazer algumas perguntas e você deverá responder SIM ou NÃO. ');
let name = prompt('Primeiro, digite seu nome: ');

function question(text){
  let answer = String(prompt(text))
  if((answer.toLowerCase()=== 'sim')){
    return 1;
  }else{
    return 0;
  }
}

let question01 = question('Você telefonou para a vítima nas ultimas 24h?');
let question02 = question('Esteve com ela na HND CLUB?');
let question03 = question('Mora no mesmo condomínio da vitima?');
let question04 = question('Devia para a vitima?');
let question05 = question('Ja trabalhou com a vitima?');

let result = question01+question02+question03+question04+question05;

let finalResult = [`${name}, você é INOCENTE!`,`${name},  você é INOCENTE!`, `${name}, você é SUSPEITO(a)!`, `${name}, você é CUMPLICE!`, `${name} , você é CUMPLICE!`,`${name}, você é ASSASINO(a)! E infelizmente está preso(a)!`];
console.log(finalResult[result]);