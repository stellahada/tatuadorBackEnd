import { Router } from "express";
const endpoinst = Router();


import { autenticar } from '../utils/jwt.js';

import BuscaProdutoService from "../service/estoque/buscaProdutosService.js";
import deletaProdutoService from "../service/estoque/deletarProdutoService.js";
import RegistrarProdutoService from "../service/estoque/registrarProdutoService.js";
import alterarProdutoService from "../service/estoque/alterarProdutoService.js";



endpoinst.get('/produtos',autenticar,async(req,resp)=>{
    const produtos =  await BuscaProdutoService();

    resp.send({
        produtos
    })
})

endpoinst.post('/produtos',autenticar,async(req,resp)=>{
    let produto = req.body;
    const informacao = await RegistrarProdutoService(produto);
  
    resp.send({
      informacao
    })
  })
  
  endpoinst.delete('/produto/:id',autenticar,async(req,resp)=>{
    let id = req.params.id
    let deletado = await deletaProdutoService(id);

    resp.send({
      exluido:id
    })
  })
  
  endpoinst.put('/produto/:id',autenticar,async (req, resp) => {
        let id = req.params.id;
        let produto = req.body;
  
        let linhasAfetadas = await alterarProdutoService(id, produto);
  
        resp.send({
            linhasAfetadas
        })
  
  })


export default endpoinst