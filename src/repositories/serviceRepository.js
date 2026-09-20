import { pool } from "../configs/database.js";

class ServiceRepository {
    async create(service) {
        const query = "INSERT INTO services (name, description, quantity, value, duration) VALUES (?, ?, ?, ?, ?)";
        const [result] = await pool.execute(query, [
            service.name,
            service.description,
            service.quantity,
            service.value,
            service.duration
        ]);
        return result.insertId;
    }

    async findAll() {
        const query = "SELECT * FROM services";
        const [rows] = await pool.execute(query);
        return rows;
    }

    async findById(id) {
        const query = "SELECT * FROM services WHERE id = ?";
        const [rows] = await pool.execute(query, [id]);
        return rows[0];
    }

    async update(id, service) {
        const query = "UPDATE services SET name = ?, description = ?, quantity = ?, value = ?, duration = ? WHERE id = ?";
        const [result] = await pool.execute(query, [
            service.name,
            service.description,
            service.quantity,
            service.value,
            service.duration,
            id
        ]);
        return result.affectedRows;
    }

    async delete(id) {
        const query = "DELETE FROM services WHERE id = ?";
        const [result] = await pool.execute(query, [id]);
        return result.affectedRows;
    }
}

export default new ServiceRepository();