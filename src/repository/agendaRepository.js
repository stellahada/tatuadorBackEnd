import con from "./connection.js";

export async function BuscaAgenda() {
    const comando = `
        select * from agenda
`

const [resposta] = await con.query(comando);

return resposta;
}


export async function RegistrarAgenda(agenda) {
    let comando = `
    insert into agenda(nm_cliente,qntd_valor,ds_descricao,dt_data,ds_horario,img_url,ds_status) 
values(?,?,?,?,?,?,?);
    `
    let[resposta] = await con.query(comando,[agenda.cliente,agenda.valor,agenda.descricao,agenda.data,agenda.horario,agenda.url,'Agendado'])

    return resposta.insertId
    
}

export async function DeletaAgenda(id) {
    let comando = `
    delete from agenda where id_sessao = ?
    `
    
    let[resposta] = await con.query(comando,[id])
    return resposta
}

export async function AlterarAgenda(id, agenda) {
    const comando = ` update agenda set nm_cliente = ?,qntd_valor=?,ds_descricao=?,dt_data=?,ds_horario=?,img_url=?,ds_status=? where id_sessao  = ?
    `

    let [resposta] = await con.query(comando, [agenda.cliente,agenda.valor,agenda.descricao,agenda.data,agenda.horario,agenda.url,agenda.status,id]);
    return resposta.affectedRows;
}

export async function AlterarStatus(id, status) {
    const comando = ` update agenda set ds_status=? where id_sessao  = ?
    `

    let [resposta] = await con.query(comando, [status,id]);
    return resposta.affectedRows;
}