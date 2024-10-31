import con from "./connection.js";


export async function BuscarProdutos(){
const comando = `
        select * from produtos
`

const [resposta] = await con.query(comando);

return resposta;
}

export async function RegistrarProduto(produto) {
    let comando = `
    insert into produto(img_url,qntd_disponivel,qntd_total)
     values(?,?,?);
    `
    let[resposta] = await con.query(comando,[produto.url,produto.disponivel,produto.total])

    return resposta.insertId
    
}

export async function deletaProduto(id) {
    let comando = `
    delete from produto where id_produto = ?
    `
    
    let[resposta] = await con.query(comando,[id])
    return resposta
}

export async function alterarProduto(id, produto) {
    const comando = `
        update nota
           set img_url = ?,
               qntd_disponivel  = ?,
               qntd__total   = ?
            where id_produto    = ?
    `

    let [resposta] = await con.query(comando, [produto.url, produto.disponivel, produto.total, id]);
    return resposta.affectedRows;
}