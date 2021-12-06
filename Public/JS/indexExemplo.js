const nome = "Elielton Godinho";

console.log(nome);

let nome2 =""
let pessoaDefault = {
    Nome: "Elielton Godinho",
    Idade: "37 anos",
    Profissão: "UX/UI Designer"
}

function imprimirpessoa(pessoa) {
    console.log(pessoa);

    console.log("Nome:");
    console.log(pessoa.Nome);

    console.log("Idade:");
    console.log(pessoa.Idade);

    console.log("Profissão:");
    console.log(pessoa.Profissão);
}

imprimirpessoa(pessoaDefault);

