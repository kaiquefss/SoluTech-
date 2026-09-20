import PhoneRepository from "../repositories/phoneRepository.js";
import Phone from "../models/Phone.js";

class PhoneService {
    async createPhone(data) {
        const { number, id_users } = data;

        if (!number || !id_users) {
            throw new Error("O número de telefone e o ID do usuário são obrigatórios.");
        }

        const newPhone = new Phone(null, number, id_users);
        const phoneId = await PhoneRepository.create(newPhone);
        return phoneId;
    }

    async getPhonesByUser(id_users) {
        const phones = await PhoneRepository.findByUserId(id_users);
        return phones;
    }

    async deletePhone(id) {
        const affectedRows = await PhoneRepository.delete(id);
        if (affectedRows === 0) {
            throw new Error("Telefone não encontrado.");
        }
        return affectedRows;
    }
}

export default new PhoneService();