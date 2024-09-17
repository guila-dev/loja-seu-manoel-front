import caixasMock from "./mocks/caixas.mock";
import entregasMock from "./mocks/entregas.mock";
import Caixa from "./models/caixa.model";
import Entrega from "./models/entrega.model";
import Produto from "./models/produto.model";

  
function calcularVolume(item: { altura: number; largura: number; comprimento: number }): number {
    return item.altura * item.largura * item.comprimento;
}
  
  function caixasQueCabem(total: Produto){
    const caixasValidas = caixas.filter(caixa =>{

        const comparaAltura = caixa.altura >= total.altura;
        const comparaLargura = caixa.largura >= total.largura;
        const comparaComprimento = caixa.comprimento >= total.comprimento;
        
        return comparaAltura && comparaLargura && comparaComprimento;
      }).map( caixa => {
        return {id: caixa.id, volume: calcularVolume(caixa)}
      })

      return caixasValidas;
  }
  function encontraMenorCaixa(produtos: Produto[]) {
    let total: Produto = {altura: 0, comprimento: 0, largura: 0}

    produtos.forEach((produto) => {
      total.altura = total.altura + produto.altura;
      total.comprimento = total.comprimento + produto.comprimento;
      total.largura = total.largura + produto.largura;
  
    }, 0);
    const caixasValidas = caixasQueCabem(total)
 
    const menorCaixa = caixasValidas[0]
    caixasValidas.forEach(caixa =>{
      if(caixa.volume < menorCaixa.volume ){
          menorCaixa.volume = caixa.volume;
          menorCaixa.id = caixa.id
      }
    })
    return menorCaixa;
 }
  
  console.log('teste')
  const caixas: Caixa[] = caixasMock;
  const entregas: Entrega[] = entregasMock;
  
  entregas.forEach((entrega, index) => {
    const caixaIdeal = encontraMenorCaixa(entrega.produtos);
    if (caixaIdeal) {
      console.log(`Entrega ${index + 1}: A caixa ideal é a de ID ${caixaIdeal.id}`);
    } else {
      console.log(`Entrega ${index + 1}: Nenhuma caixa disponível pode conter os produtos.`);
    }
  });
  

  


  

