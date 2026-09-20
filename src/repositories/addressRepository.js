import { pool } from "../configs/database.js";

class AddressRepository {
    async create(address) {
        const query = "INSERT INTO address (street, number, neighborhood, city, state, zip_code, id_users) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const [result] = await pool.execute(query, [
            address.street,
            address.number,
            address.neighborhood,
            address.city,
            address.state,
            address.zip_code,
            address.id_users
        ]);
        return result.insertId;
    }

    async findByUserId(id_users) {
        const query = "SELECT * FROM address WHERE id_users = ?";
        const [rows] = await pool.execute(query, [id_users]);
        return rows;
    }

    async delete(id) {
        const query = "DELETE FROM address WHERE id = ?";
        const [result] = await pool.execute(query, [id]);
        return result.affectedRows;
    }
}

export default new AddressRepository();