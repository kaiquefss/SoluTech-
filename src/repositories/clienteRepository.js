import pool from '../configs/Database.js'

const clienteRepository = {
    select: async() => {
        const sql = `SELECT 
                        c.*,
                        p.id AS "id_tel", p.ddd, p.number, p.observation,
                        a.id As "id_end", a.street, a.number, a.district, a.city, a.state, a.cep
                    FROM clients AS c
                    INNER JOIN phones AS p
                        ON c.id = p.id_clients
                            INNER JOIN address AS a ON c.id = a.id_clients;`
        const [rows] = await pool.execute(sql)
        return rows
    },
    selectId: async(clientId) => {
        const sql = 'SELECT * FROM clients WHERE id;'
        const [rows] = await pool.execute(sql, [clientId])
        return rows
    },
    delete: async (clientId) => {

        const conn = await pool.getConnection();
        
        try {
        
            await conn.beginTransaction();

            const sqlTel = 'DELETE FROM phones WHERE id_clients = ?;'
            const [rowsTel] = await conn.execute(sqlTel, [clientId]);

            const sqlEnd = 'DELETE FROM address WHERE id_clients = ?;'
            const [rowsEnd] = await conn.execute(sqlEnd, [clientId]);

            const sqlCli = 'DELETE FROM clients WHERE id = ?;';
            const [rowsCli] = await conn.execute(sqlCli, [clientId]);
            
            await conn.commit();

            return {
                cliente: rowsCli,
                phone: rowsTel,
                address: rowsEnd
            };
        }
        catch(error) {
            console.error("Erro ao deletar cliente no repository:", error);
            await conn.rollback();
            throw error;
        }
        finally {
            conn.release();
        }
    },
    create: async (cliente) => {
        const conn = await pool.getConnection();
        try{
            await conn.beginTransaction();
            //SQL para inserir cli
            
            const sqlCli = 'INSERT INTO clients VALUES(null, ?, ?, ?);'
            const [rowsCli] = await pool.execute(sqlCli, [cliente.name, cliente.cpf, cliente.email])

            //SQL para inserir tel
            const idCliente = rowsCli.insertId;
            
            const sqlTel = 'INSERT INTO phones VALUES(null, ?, ?, ?, ?);'
            const [rowsTel] = await pool.execute(sqlTel, [cliente.phone.observation, cliente.phone.number, cliente.phone.ddd, idCliente]);

            console.log(cliente.address.street, cliente.address.number, cliente.address.district, cliente.address.city, cliente.address.state, cliente.address.cep, idCliente);
            
            //SQL para inserir end
            const sqlEnd = 'INSERT INTO address VALUES(null, ?, ?, ?, ?, ?, ?, ?);'
            const [rowsEnd] = await pool.execute(sqlEnd, [cliente.address.street, cliente.address.number, cliente.address.district, cliente.address.city, cliente.address.state, cliente.address.cep, idCliente])


            await conn.commit();

            return {
                cliente: rowsCli,
                phone: rowsTel,
                address: rowsEnd
            };
        }
        catch(error){
            console.log(error);
            await conn.rollback();
            throw error;
        }
        finally{
            conn.release();
        }
    },
    
    update: async (client) => {

        const conn = await pool.getConnection();

        try{
            await conn.beginTransaction();

            const sqlCli = 'UPDATE clients SET name = ?, email = ?, cpf = ? WHERE id = ?;';
            const [rowsCli] = await pool.execute(sqlCli, [
                client.name || null, 
                client.email || null, 
                client.cpf || null, 
                client.id
                ]
            );

            const sqlTel = 'UPDATE phones SET observation = ?, number = ?, ddd = ? WHERE id_clients = ?;'; 
            const [rowsTel] = await pool.execute(sqlTel, [
                client.phone?.observation || null,
                client.phone?.number || null,
                client.phone?.ddd || null,
                client.id 
                ]
            );

            const sqlEnd = 'UPDATE address SET street = ?, number = ?, district = ?, city = ?, state = ?, cep = ? WHERE id_clients = ?;';
            const [rowsEnd] = await pool.execute(sqlEnd, [
                client.address?.street || null,
                client.address?.number || null,
                client.address?.district || null,
                client.address?.city || null,
                client.address?.state || null,
                client.address?.cep || null,
                client.id 
                ]
            );

            await conn.commit();
            
            return {
                cliente: rowsCli,
                phone: rowsTel,
                address: rowsEnd
                };
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
}

export default clienteRepository;
