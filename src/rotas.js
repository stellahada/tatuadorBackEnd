import login from './controller/loginController.js'
import produtos from './controller/produtosController.js'
import agenda from './controller/agendaController.js'
import email from './controller/emailController.js'

export default function adicionarRotas(servidor){
    servidor.use(login);
    servidor.use(produtos);
    servidor.use(agenda);
    servidor.use(email)
}