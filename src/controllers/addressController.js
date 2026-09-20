import AddressService from "../services/addressService.js";

class AddressController {
    async create(req, res) {
        try {
            const addressId = await AddressService.createAddress(req.body);
            return res.status(201).json({ message: "Endereço criado com sucesso!", id: addressId });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async findByUser(req, res) {
        try {
            const addresses = await AddressService.getAddressesByUser(req.params.id_users);
            return res.status(200).json(addresses);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await AddressService.deleteAddress(req.params.id);
            return res.status(200).json({ message: "Endereço deletado com sucesso!" });
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

export default new AddressController();