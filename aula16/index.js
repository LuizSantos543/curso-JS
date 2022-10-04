const alunos = ['Luiz', 'Maria', 'João'];

alunos[0] = 'Jorge'; //altera elemento da posição [0]
alunos.push('Luiz'); //adiciona elemento ao final do array
alunos.pop() //remove o último elemento do array
alunos.unshift('Pedro'); // adiciona elemento no inicio do array e altera todas as posições do elemntos seguintes 
alunos.shift(); //remove o primeiro elemento do array
console.log(alunos);
console.log(alunos.slice(0, -2)); //fatiamento do array (pega o tamanho do array e elimina os 2 ultimos elementos começando da posição [0])

//console.log(alunos); //exibe todos os elementos do array
//console.log(alunos[0]); //exibe somente o elemento da posição [0]
//console.log(alunos[2]); //exibe somente o elemento da posição [2]