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
        const sql = 'DELETE FROM clients WHERE id = ?;'
        const [rows] = await pool.execute(sql, [clientId])
        return rows
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
    
    update: async (name, email , cpf, userId) => {
        const sql = 'UPDATE clients SET name = ?, email = ?, cpf = ? WHERE id = ?;'
        const [rows] = await pool.execute(sql, [name, email, cpf,userId])
        return rows
    },
    
    selectEmail: async (email) => {
        const sql = 'SELECT * FROM clients WHERE email = ?;'
        const [rows] = await pool.execute(sql, [email])
        return rows
    }



}

export default clienteRepository;
