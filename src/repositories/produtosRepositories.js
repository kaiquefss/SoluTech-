import pool from '../configs/database.js'

const produtosRepositories = {

    listProducts: async() => {
        const sql = "SELECT * FROM produtos;";
        const [rows] = await pool.execute(sql);
        return rows;
    },

    productsId: async(ID) =>{
        const sql = "SELECT * FROM produtos WHERE id;";
        const [rows] = await pool.execute(sql, [ID]);
        return rows;
    },

    createProducts: async (name, description, quantity, value) =>{
        const sql = "INSERT INTO produtos VALUES (null, ?, ?, ?, ?);";
        const [rows] = await pool.execute(sql, [name, description, quantity, value]);
        return rows;
    },

    updateProducts: async (name, description, quantity, value, ID) =>{
        const sql = "UPDATE produtos SET name = ?, description = ?, quantity = ?, value = ? WHERE id = ?;";
        const [rows] = await pool.execute(sql, [name, description, quantity, value, ID]);
        return rows;
    },

    update: async(produtoId, dados) =>{
        const campo = [];
        const valores = [];

        if (dados.name !== undefined){
            campo.push("nome = ?");
            valores.push(dados.name);
        }
        if(dados.descricao !== undefined){
            campo.push("description = ?");
            valores.push(dados.description);
        }
        if(dados.quantity !== undefined){
            campo.push("quantidade = ?");
            valores.push(dados.quantity);
        }
        if(dados.value !== undefined){
            campo.push("value = ?");
            valores.push(dados.valur);
        }

        valores.push(produtoId)

        const sql = `UPDATE produtos SET ${campo.join(",")} WHERE id = ?; `;
        const [rows] = await pool.execute(sql, valores);
        return rows;
    },

    delete: async(ID) =>{
        const sql = "DELETE FROM produtos WHERE id = ?;";
        const [rows] =  await pool.execute(sql, [ID]);
        return rows;
    }
}

export default produtosRepositories;