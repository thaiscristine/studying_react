const produto = {
    nome: 'Caneta bic preta',
    preco: 1.90,
    desconto: 0.50
}

function clone(object){
    return { ...object}
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic azul'

console.log(produto, novoProduto)