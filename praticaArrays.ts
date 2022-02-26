// exercicio 1.

const ingredientes: string[][] = [
  ['hamburguer', '2 hambúrgueres'],
  ['salada', 'alface'],
  ['queijo', 'queijo'],
  ['molho', 'molho especial'],
  ['salada02', 'cebola'],
  ['salada03', 'picles'],
  ['pao', 'pão com gergelim'],
]

function fazUmBigMac(ingredientes: String[][]): Record<string, string> {
  return ingredientes.reduce((objeto, ingredientes) => {
    objeto[ingredientes[0].toString()] = ingredientes[1]
    return objeto
  }, {})
}
console.log(fazUmBigMac(ingredientes))

//========================================================================================================
//exercicio 2. A lista de meses abaixo está incompleta (e incorreta!). Utilize os métodos do array para adicionar os meses faltantes.

const meses = ['jan', 'mar', 'mar', 'abr', 'jun', 'jul', 'set', 'out', 'dez'];
meses.splice(1, 1, 'fevereiro');
meses.splice(4, 0, 'maio');
meses.splice(7, 0, 'agosto');
meses.splice(10, 0, 'novembro');
console.log(meses)

//======================================================================================================
//exercicio 3

const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
];

function pick(alunos, atributos) {
  const response = [];
  alunos.forEach(aluno => {
    const newElement = {}
    atributos.forEach(atributo => {
      newElement[atributo] = aluno[atributo]
    })
    response.push(newElement)
  });
  return response
}
const response = pick(alunos, ['nome', 'nota']);
console.log(response)

//======================================================================================================
//exercicio 4

const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
];

alunos.sort(function (a, b) {
  if (a.nota > b.nota) {
    return 1;
  }
  if (a.nota < b.nota) {
    return -1;
  }
  return 0;
});

let novoAluno = [];
alunos.forEach(element => {
  novoAluno.push({ nome: element.nome, nota: element.nota })
});

console.log(novoAluno);

//========================================================================================================
//exercicio 5. filas e pilhas

function fila() {
  const fila = [];

  const adicionar = (elemento) => {
    fila.push(elemento)
  };

  const remover = () => {
    if (fila.length === 0) {
      return -1
    }
    const elemento = fila[fila.length]
    fila.shift(elemento)
    return fila
  };

  const print = () => {
    console.log(fila)
  }
  return { adicionar, remover, print };
}

function pilha() {
  const pilha = [];

  const adicionar = (elemento) => {
    pilha.push(elemento)
  };

  const remover = () => {
    if (pilha.length === 0) {
      return -1
    }
    const elemento = pilha[pilha.length]
    pilha.pop(elemento)
    return pilha
  };

  const print = () => {
    console.log(pilha)
  }

  return { adicionar, remover, print };
}


const fila1 = fila();
fila1.adicionar(1);
fila1.adicionar(2);
fila1.adicionar(3);
fila1.print();
console.log(fila1.remover());
console.log(fila1.remover());
console.log(fila1.remover());

const pilha1 = pilha();
pilha1.adicionar(1);
pilha1.adicionar(2);
pilha1.adicionar(3);
pilha1.print();
console.log(pilha1.remover());
console.log(pilha1.remover());
console.log(pilha1.remover());

//=====================================================================================================================
//exercicio 6

const usuarios = [
  { nome: 'Diego', idade: 23, ativo: true },
  { nome: 'Gabriel', idade: 15, ativo: false },
  { nome: 'Lucas', idade: 30, ativo: false },
];

const usuariosAtivos = []
const usuariosInativos = []


usuarios.forEach(valorAtual => {

  if (valorAtual.ativo === true) {
    usuariosAtivos.push({ 'nome': valorAtual.nome, 'ativo': valorAtual.ativo })
    
  } else if (valorAtual.ativo === false) {
    usuariosInativos.push({ 'nome': valorAtual.nome, 'ativo': valorAtual.ativo })
  }
})
console.log(usuariosAtivos)
console.log(usuariosInativos)

