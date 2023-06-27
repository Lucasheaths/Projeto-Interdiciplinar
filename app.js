//Importação do express.js
const express = require("express");

//Tratativa das rotas com Express - Router
const router = express.Router();

//Cria rota raiz "/" onde entra direto no cadastro
/*router.get('/',(req, res) =>{
    res.send("Cadastro");
});
*/ 

//Cria rota raiz "/" onde entra direto no cadastro
router.get ('/', (req, res) =>{
    res.sendFile(__dirname + "/html/home.html");
});       
 
//Cria o menu
router.get ('/cadastro', (req, res) =>{
    res.sendFile(__dirname + "/html/cadastro.html"); 
});
      
//Cria o carrinho
router.get ('/carrinho', (req, res) =>{
    res.sendFile(__dirname + "/html/carrinho.html"); 
});
                                         
//Cria o controle de fila de pedidos    
router.get ('/fila', (req, res) =>{
    res.sendFile(__dirname + "/html/fila.html"); 
});

//Cria as entregas
router.get ('/entregas', (req, res) =>{
    res.sendFile(__dirname + "/html/entregas.html"); 
});

//Invocando o uso do app com "/"
const app = express();

app.use(express.static(__dirname + '/css'));   
app.use(express.static(__dirname + '/fotos'));
app.use(express.static(__dirname + '/imagens'));                  
app.use('/', router); 

module.exports = app;       