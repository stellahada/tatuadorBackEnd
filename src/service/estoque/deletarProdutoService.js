import { deletaProduto } from "../../repository/produtosRepository.js";

export default async function deletaProdutoService(id) {
    let deletado = await deletaProduto(id);

    return deletado
}