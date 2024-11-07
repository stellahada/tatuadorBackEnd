import { BuscaAgenda } from "../../repository/agendaRepository.js";

export default async function BuscaAgendaService(){
    let resposta = await BuscaAgenda();
    return resposta
}