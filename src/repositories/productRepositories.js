import pool from '../configs/database.js'

const productRepositories = {

    listProducts: async() => {
        const sql = "SELECT * FROM products;";
        const [rows] = await pool.execute(sql);
        return rows;
    },

    productsId: async(ID) =>{
        const sql = "SELECT * FROM products WHERE id;";
        const [rows] = await pool.execute(sql, [ID]);
        return rows;
    },

    createProducts: async (name, description, quantity, value) =>{
        const sql = "INSERT INTO products (name, description, quantity, value) VALUES (?, ?, ?, ?);";
        const [rows] = await pool.execute(sql, [name, description, quantity, value]);
        return rows;
    },

    updateProducts: async (name, description, quantity, value, ID) =>{
        console.log(name, description, quantity, value, ID)
        const sql = "UPDATE products SET name = ?, description = ?, quantity = ?, value = ? WHERE id = ?;";
        const [rows] = await pool.execute(sql, [name, description, quantity, value, ID]);
        return rows;
    },

    update: async(dados) =>{
        const campo = [];
        const valores = [];

        if (dados.name !== undefined){
            campo.push("name = ?");
            valores.push(dados.name);
        }
        if(dados.description !== undefined){
            campo.push("description = ?");
            valores.push(dados.description);
        }
        if(dados.quantity !== undefined){
            campo.push("quantity = ?");
            valores.push(dados.quantity);
        }
        if(dados.value !== undefined){
            campo.push("value = ?");
            valores.push(dados.value);
        }

        valores.push(dados.id)

        const sql = `UPDATE products SET ${campo.join(",")} WHERE id = ?; `;
        const [rows] = await pool.execute(sql, valores);
        return rows;
    },

    delete: async(ID) =>{
        const sql = "DELETE FROM products WHERE id = ?;";
        const [rows] =  await pool.execute(sql, [ID]);
        return rows;
    }
}

export default productRepositories;