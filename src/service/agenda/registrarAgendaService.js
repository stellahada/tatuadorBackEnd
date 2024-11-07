import { RegistrarAgenda } from "../../repository/agendaRepository.js";

export default async function RegistrarAgendaService(agenda){
    let resposta = await RegistrarAgenda(agenda);
    return resposta
}