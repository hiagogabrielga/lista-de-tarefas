CREATE DATABASE tarefasbd;

USE tarefasbd;

CREATE TABLE tarefas (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    titulo TEXT NOT NULL,              
    descricao TEXT,                  
    completo BOOLEAN DEFAULT FALSE,    
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);