import PhoneService from "../services/phoneService.js";

class PhoneController {
    async create(req, res) {
        try {
            const phoneId = await PhoneService.createPhone(req.body);
            return res.status(201).json({ message: "Telefone criado com sucesso!", id: phoneId });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async findByUser(req, res) {
        try {
            const phones = await PhoneService.getPhonesByUser(req.params.id_users);
            return res.status(200).json(phones);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await PhoneService.deletePhone(req.params.id);
            return res.status(200).json({ message: "Telefone deletado com sucesso!" });
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

export default new PhoneController();