let numero = Math.floor(Math.random() * 10 ) + 1;
let adivina = prompt('Ingresa un número entre 1 y 10:');

if(adivina === numero){
    document.write('Felicitaciones, adivinaste el número...!');
}else{
    document.write('Lo siento, el número era: '+ numero);
}