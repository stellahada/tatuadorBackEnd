import { AlterarStatus } from "../../repository/agendaRepository.js";

export default async function AlterarStatusService(id,status) {
    let linhas = AlterarStatus(id,status);
    return linhas
}