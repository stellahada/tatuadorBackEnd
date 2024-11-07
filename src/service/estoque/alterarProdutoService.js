import { alterarProduto } from "../../repository/produtosRepository.js";

export default async function alterarProdutoService(id,produto) {
    let linhas = alterarProduto(id,produto);
    return linhas
}