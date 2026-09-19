import pool from '../configs/Database.js'

const clienteRepository = {
    select: async() => {
        const sql = 'SELECT * FROM clients;'
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
    
    create: async (name, cpf, email) => {
        
        const sql = 'INSERT INTO clients VALUES(null, ?, ?);'
        const [rows] = await pool.execute(sql, [name, email, cpf])
        return rows
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
