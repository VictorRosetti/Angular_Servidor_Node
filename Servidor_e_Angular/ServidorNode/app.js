var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'bd_novo.db';
var db = new sqlite3.Database(DBPATH); // Abre o banco
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.send("Olá!");
});

app.post("/dado", function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body);
    let ID = parseInt(req.body.ID);
    let nome = req.body.nome;
    let idade = parseInt(req.body.idade);
    let profissao = req.body.profissao;
    let salario = parseInt(req.body.salario);
    if(ID)
    {
        //Criando usuário com ID
        var sql = `INSERT INTO Usuarios (ID, nome, idade, profissao,salario) VALUES (${ID},"${nome}",${idade},"${profissao}",${salario})`;
    }else
    {
        //Criando usuário sem ID
        var sql = `INSERT INTO Usuarios (nome, idade, profissao,salario) VALUES ("${nome}",${idade},"${profissao}",${salario})`;
    
    }
    
    console.log(sql);
    db.all(sql, [], (err,rows)=>
    {
        if(err)
        {
            console.log("passei aqui 1");
            res.send(err);
        }else
        {
            console.log("passei aqui 2");
            res.send("Usuário adicionado!");
        }
        
    })
});

app.get("/tudo", function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    console.log("Estou aqui!");
    db.all(`SELECT * FROM Usuarios`, [], (err, rows) => 
    {
        if(err)
        {
            console.log("aqui 2");
            res.send(err);
        }
        console.log("Linhas: "+rows);
        res.send(rows);  
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando com a porta ${port}`);
});