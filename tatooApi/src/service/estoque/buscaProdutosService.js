import { BuscarProdutos } from "../../repository/produtosRepository.js";

export default async function BuscaProdutoService(){
    let resposta = await BuscarProdutos();
    return resposta
}