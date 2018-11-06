/*let passo = 10;

while (passo >= 5) {
    console.log(passo);
    passo --;
    
}
*/

// let nomes = ['Lucas', 'Luan', 'Leticia', 'Lucia'];

// for (let nome of nomes) {
//     /*console.log(nome);*/
    
//     nome +=' Top';
    
//     console.log(nome);
// }

/*
Todas tem a mesma função!

passo ++
passo = passo + 1
passo += 1

*/

// let alunos = [
//     {
//         nome: 'Mariaa',
//         idade: 25,
//         vivo: true,
//     },
//     {
//         nome: 'Maria',
//         idade: 22,
//         vivo: true,
//     },
//     {
//         nome: 'Mariana',
//         idade: 23,
//         vivo: true,
//     },
//     {
//         nome: 'Julia',
//         idade: 12,
//         vivo: true,
//     }
// ];

// for (let aluno of alunos) {
//     if (alunos.idade <= 18) {
     
//     }
//     // console.log(aluno[alunos]);
//     console.log(`${aluno.nome} Não pode beber`);
// }

let quantidade = Number(prompt('Quantos degraus você quer na sua escada?'));
let caractere = prompt('Qual caracter você quer?');
let i=0; 
let escada = '';

while (i < quantidade) {    
    escada += caractere;
    console.log(escada);
    i++;
}