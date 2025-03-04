import pool from '../conexao.js';

async function visualizarTarefas() {
    try {
        const conexao = await pool.getConnection();
        const respota = await conexao.execute('SELECT * FROM tarefas');
        conexao.release();
        return respota[0];
    } catch (error) {
        console.log(error.message);
    }
}

async function visualizarTarefaPorTitulo(titulo) {
    try {
        const conexao = await pool.getConnection();
        const resposta = await conexao.execute('SELECT * FROM tarefas WHERE titulo LIKE ?', [`%${titulo}%`]);
        conexao.release();
        return resposta[0];
    } catch (error) {
        console.log(error.message);
    }
}

export { visualizarTarefas, visualizarTarefaPorTitulo };