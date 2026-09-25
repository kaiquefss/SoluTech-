import pool from '../configs/database.js'


const itemRepository = {
    select: async () => {
        const sql = "SELEC * FROM itens;";
        const [rows] = await pool.execute(sql);
        return rows;
    },
    itensId: async (ID) =>{
        const sql = "SELEC * FROM itens WHERE id;";
        const [rows] = await pool.execute(sql,[ID]);
        return rows;
    },
    create: async (itens) =>{
        const conn = await pool.getConnection();
        try{
            await conn.beginTransaction();

            const sqlitens =  "INSERT INTO itens VALUE(null, ?, ?, ?);";
            const [rowsItens] =  await pool.execute(sqlitens, [itens.value, itens.quantity, itens.subtotal]);

            const idItens = rowsItens.insertId

            const sqlProduct = "INSET INTO products VALUE(null, ?, ?, ?);";
            const [rowsProduct] = await pool.execute(sqlProduct, [itens.products.value, itens.products.quantity, itens.products.name]);

            return{
                itens: rowsItens,
                products: rowsProduct
            }

        } catch(error){
            console.log(error);
            await conn.rollback();
            throw error;
        }
        finally{
            conn.release();
        }
        
    },

    update: async(itens) => {

    }
}