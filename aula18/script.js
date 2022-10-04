const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Santos',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa.fala();
while (pessoa.idade < 30){
    pessoa.incrementaIdade();
    pessoa.fala();
}



function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Pereira', 23);
const pessoa2 = criaPessoa('Paulo', 'Rocha', 25);
const pessoa3 = criaPessoa('José', 'Machado', 30);
const pessoa4 = criaPessoa('Maria', 'Andrade', 38);
const pessoa5 = criaPessoa('Pedro', 'Santos', 29);

//console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);