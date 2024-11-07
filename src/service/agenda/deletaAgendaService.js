import { DeletaAgenda } from "../../repository/agendaRepository.js";

export default async function DeletaAgendaService(id){
    let resposta = await DeletaAgenda(id);
    return resposta
}