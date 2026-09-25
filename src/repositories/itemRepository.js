import pool from '../configs/Database.js'

const itemRepository = {
    select: async () => {
    const sql = `SELECT 
                    i.*,
                    p.id AS "id_products", p.value AS "product_value", p.quantity AS "product_quantity", p.name AS "product_name", p.description AS "product_description",
                    s.id AS "id_services", s.value AS "service_value", s.quantity AS "service_quantity", s.duration AS "service_duration", s.name AS "service_name", s.description AS "service_description"
                FROM itens AS i
                LEFT JOIN products AS p
                    ON i.id_products = p.id
                LEFT JOIN services AS s 
                    ON i.id_services = s.id;`;
                    
    const [rows] = await pool.execute(sql);
    return rows;

    },
    selectId: async(itemId) => {
        const sql = 'SELECT * FROM itens WHERE id;'
        const [rows] = await pool.execute(sql, [itemId])
        return rows
    },
   delete: async (itemId) => {
    try {
        const sql = 'DELETE FROM itens WHERE id = ?;';
        const [result] = await pool.execute(sql, [itemId]);
        
        return result; 
    } catch (error) {
        console.error("Erro ao deletar item no repository:", error);
        throw error;
    }
}
,
    create: async (item) => {
    const conn = await pool.getConnection();
    try {
        await conn.beginTransaction();
        const subtotal = Number(item.value) * Number(item.quantity);

        const sql = `
            INSERT INTO itens (value, quantity, subtotal, id_sales, id_products, id_services) 
            VALUES (?, ?, ?, ?, ?, ?);
        `;
        const params = [
            item.value,
            item.quantity,
            subtotal,                  
            item.id_sales,            
            item.id_products || null,  // 
            item.id_services || null   //
        ];

        const [result] = await pool.execute(sql, params);
        
        await conn.commit();
        return {
            id: result.insertId,
            value: item.value,
            quantity: item.quantity,
            subtotal: subtotal,
            id_sales: item.id_sales,
            id_products: item.id_products || null,
            id_services: item.id_services || null
            }
        }
        
        catch(error){
            console.log(error);
            await conn.rollback();
            throw error;
        }
        finally{
            conn.release();
        }
    }
,
    
    update: async (item) => {
   
    const conn = await pool.getConnection();

    try {
      
        await conn.beginTransaction();

       
        const sqlItem = `
            UPDATE itens 
            SET value = ?, quantity = ?, subtotal = ?, id_sales = ?, id_products = ?, id_services = ? 
            WHERE id = ?;
        `;
        
        const [rowsItem] = await conn.execute(sqlItem, [
            item.value ?? 0.00,
            item.quantity ?? 1,
            item.subtotal ?? ((item.value ?? 0.00) * (item.quantity ?? 1)), 
            item.id_products ?? null,
            item.id_services ?? null,
            item.id
        ]);
        await conn.commit();
        
        return {
            item: rowsItem
        };
    }
    catch (error) {
        await conn.rollback();
        console.error(error);
        throw error;
    }
    finally {
        conn.release();
    }
}}


export default itemRepository;
