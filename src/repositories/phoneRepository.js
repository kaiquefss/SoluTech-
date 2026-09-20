import { pool } from "../configs/database.js";

class PhoneRepository {
    async create(phone) {
        const query = "INSERT INTO phones (number, id_users) VALUES (?, ?)";
        const [result] = await pool.execute(query, [phone.number, phone.id_users]);
        return result.insertId;
    }

    async findByUserId(id_users) {
        const query = "SELECT * FROM phones WHERE id_users = ?";
        const [rows] = await pool.execute(query, [id_users]);
        return rows;
    }

    async delete(id) {
        const query = "DELETE FROM phones WHERE id = ?";
        const [result] = await pool.execute(query, [id]);
        return result.affectedRows;
    }
}

export default new PhoneRepository();