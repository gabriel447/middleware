const sequence = {
  _id: 1,
  get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
  produto.id = sequence.id
  produtos[produto.id] = produto
  return produto
}

function alterarProduto(produto) {
  produtos[produto.id] = produto
  return produto
}

function getProduto(id) {
  return produtos[id] || null
}

function getProdutos() {
  return Object.values(produtos)
}

function excluirProduto(id) {
  const produto = produtos[id]
  delete produtos[id]
  return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto, alterarProduto}
