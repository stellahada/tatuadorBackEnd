import { RegistrarProduto } from "../../repository/produtosRepository.js";

export default async function RegistrarProdutoService(produto) {
    let id = await RegistrarProduto(produto);

    return id
}