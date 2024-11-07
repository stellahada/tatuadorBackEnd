import 'dotenv/config.js'
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure:true,
    auth:{
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS
    }
})


export function send(to,subject, body){
    transporter.sendMail({
        from:process.env.MAIL_FROM,
        to,
        subject:"Olá "+ body.nome +" "+" Recebemos seu Pedido de orcamento",
        html:"<h1>"+"Olá "+body.nome+"</h1>"+"<p> Recebemos seu Pedido de orcamento e iremos devolver uma resposta o mais rapido possivel </p>"+"<h2>Descricao:"+body.descricao +"</h2>"
        +"<h2>Orçamento:"+body.orcamento +"</h2>" +"<h2>Telefone:"+body.telefone +"</h2>",
        text:"Email Falhou"
    })
}

export function sendBack(to, subject, body){
    transporter.sendMail({
        from:to,
        to:"rhAliceInk@gmail.com",
        subject:"Pedido de Orçamento Recebido de: "+body.nome,
        html:"<p>Foi recebido um pedido de orcamento de "+body.nome +"</p>"+"<h2>Descricao:"+body.descricao +"</h2>"
        +"<h2>Orçamento:"+body.orcamento +"</h2>" +"<h2>Telefone:"+body.telefone +"</h2>",
        text:"Email Falhou"
    })
}

