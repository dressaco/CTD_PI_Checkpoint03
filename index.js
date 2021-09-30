const produtos = require('./produtos');

function filtrarProdutos (vlrInicio,vlrFim,qualidadeMin,disponibilidade) {
  let resultado = (item) => {
    return item.valor >= vlrInicio && item.valor <= vlrFim && item.qualidade > qualidadeMin && item.status === disponibilidade;
  }
  return resultado;
}

let vlrInicio = parseFloat(prompt('Informe o valor mínimo do produto a ser incluído no carrinho'));
let vlrFim = parseFloat(prompt('Informe o valor máximo do produto a ser incluído no carrinho'));
let qualidadeMin = parseInt(prompt('O produto deve ter qualidade superior a (insira um número de 0 a 10'));
let disponibilidade = prompt('Informe se deseja incluir os itens disponíveis (D) ou indisponíveis (I)').toUpperCase() === 'D';

let carrinho = produtos.filter(filtrarProdutos(vlrInicio=482,vlrFim=1600,qualidadeMin=6,disponibilidade=true));

let totalCarrinho = () => {
  let soma = carrinho.reduce(somar = (sum,item) => {
    return sum += item.valor;
  },0);
  return soma;
}

console.table(carrinho);
console.log(`O valor total do carrinho é de: R$ ${totalCarrinho()}.`);