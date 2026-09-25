import { pool } from "../configs/database.js";

const ServiceRepository = {

    select: async () => {
        const sql = "SELECT * FROM services:";
        const [rows] = await pool.execute(sql,);
        return rows;
    },

    service: async (id) => {
        const sql = "SELECT * FROM services WHERE id = ?";
        const [rows] = await pool.execute(sql, [id]);
        return rows[0];
    }, 
    
    create: async (service) =>  {
        const sql = "INSERT INTO services (name, description, quantity, value, duration) VALUES (?, ?, ?, ?, ?)";
        const [rows] = await pool.execute(sql, [
            service.name,
            service.description,
            service.quantity,
            service.value,
            service.duration
        ]);
        return rows.insertId;
    },
    update: async (id, service) => {
        const sql = "UPDATE services SET name = ?, description = ?, quantity = ?, value = ?, duration = ? WHERE id = ?";
        const [rows] = await pool.execute(sql, [
            service.name,
            service.description,
            service.quantity,
            service.value,
            service.duration,
            id
        ]);
        return rows.affectedRows;
    },

    delete: async (id) => {
        const sql = "DELETE FROM services WHERE id = ?";
        const [rows] = await pool.execute(sql, [id]);
        return rows;
    }
}

export default new ServiceRepository();