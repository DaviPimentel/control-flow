const ageText = prompt('Type your age: ');
const age = Number(ageText);
const ageString = String(age);
const ageString2 = age + '';// Mais comum
/*quando o usuário digita no teclado, sempre retorna como texto, então
/você tem que especificar que é um número--> const age = Number(ageText)
*/


if(age > 18) {
    document.write('Então você é um adulto');
} else if (age > 12){
    document.write('Então você é um adolescente')
} else {
    document.write('Então você é uma criança')
}

document.write('<br>')

switch(age) {
    case 16:
        document.write('Já pode voltar');
    break;
    case 18:
        document.write('Já pode beber e dirigir, não ao mesmo tempo');
    break;
    case 65:
        document.write('Já pode pegar ônibus de graça');
    break;
    default:
        document.write('Se lascou')
}
