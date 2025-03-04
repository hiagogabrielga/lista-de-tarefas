import express from 'express';
import cors from 'cors';
import { adicionarTarefa } from './servicos/adicionar.js';
import { visualizarTarefas, visualizarTarefaPorTitulo } from './servicos/visualizar.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/tarefas', async (req, res) => {
    const { titulo } = req.query;
    let resposta;
    try {
        if (titulo) {
            resposta = await visualizarTarefaPorTitulo(titulo);
        } else {
            resposta = await visualizarTarefas();
        }

        if (resposta.length > 0) {
            res.send(resposta);
        } else {
            res.status(404).send('Nenhuma tarefa encontrada.');
        }

    } catch (error) {
        res.status(500).send('Ocorreu um erro interno no servidor.');
    }
});

app.post('/tarefas', async (req, res) => {
    try {
        const { titulo, descricao } = req.body;
        if (titulo === undefined || descricao === undefined) {
            return res.status(400).send('Os campos título e descrição são obrigatórios.');
        }
        const resposta = await adicionarTarefa(titulo, descricao);
        if (resposta.affectedRows > 0) {
            res.status(201).send('Tarefa adicionada com sucesso!');
        } else {
            res.status(400).send('Ocorreu um erro ao adicionar a tarefa.');
        }
    } catch (error) {
        res.status(500).send('Ocorreu um erro interno no servidor.');
    }
});

app.listen(9000, () => {
    const data = new Date();
    console.log('API rodando na porta 9000', data);
});