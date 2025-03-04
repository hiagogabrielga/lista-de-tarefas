import pool from "../conexao.js";

async function adicionarTarefa(titulo, descricao) {
    try {
        const conexao = await pool.getConnection();
        const resposta = await conexao.execute('INSERT INTO tarefas (titulo, descricao) VALUES (?, ?)', [titulo, descricao]);
        conexao.release();
        return resposta[0];
     } catch (error) {
        console.log(error.message);
      }
}

export { adicionarTarefa };