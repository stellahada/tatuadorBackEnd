import { Router } from "express";
const endpoinst = Router();

import { autenticar } from '../utils/jwt.js';


import BuscaAgendaService from "../service/agenda/buscaAgendaService.js";
import RegistrarAgendaService from "../service/agenda/registrarAgendaService.js";
import DeletaAgendaService from "../service/agenda/deletaAgendaService.js";
import AlterarAgendaService from "../service/agenda/alteraAgendaService.js";
import AlterarStatusService from "../service/agenda/alterarStatusService.js";


endpoinst.get('/agenda',autenticar,async(req,resp)=>{
    const agenda =  await BuscaAgendaService();

    resp.send({
        agenda
    })
})



endpoinst.post('/agenda',autenticar,async(req,resp)=>{
    let agenda = req.body;
    const informacao = await RegistrarAgendaService(agenda);
  
    resp.send({
      informacao
    })
  })
  
  endpoinst.delete('/agenda/:id',autenticar,async(req,resp)=>{
    let id = req.params.id
    let deletado = await DeletaAgendaService(id);

    resp.send({
      exluido:id
    })
  })
  
  endpoinst.put('/agenda/:id',autenticar,async (req, resp) => {
        let id = req.params.id;
        let agenda = req.body;
  
        let linhasAfetadas = await AlterarAgendaService(id, agenda);
  
        resp.send({
            linhasAfetadas
        })
  
  })

  endpoinst.put('/agenda/:id/:status',autenticar,async (req, resp) => {
    let id = req.params.id;
    let status = req.params.status

    let linhasAfetadas = await AlterarStatusService(id, status);

    resp.send({
        linhasAfetadas
    })

})

export default endpoinst;