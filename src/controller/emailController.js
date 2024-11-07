import { Router } from "express";
const endpoinst = Router();


import {send,sendBack} from "../service/email/emailService.js";

endpoinst.post('/email',async(req,resp)=>{
    const email = req.body
    send(email.to,email.subject,email.body);
    sendBack(email.to,email.subject,email.body);

    const resposta ='email enviado com sucesso'
    resp.send({
        resposta
    })
})

export default endpoinst;