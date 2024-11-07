import { AlterarAgenda } from "../../repository/agendaRepository.js";

export default async function AlterarAgendaService(id,agenda) {
    let linhas = AlterarAgenda(id,agenda);
    return linhas
}