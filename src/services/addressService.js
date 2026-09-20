import AddressRepository from "../repositories/addressRepository.js";
import Address from "../models/Address.js";

class AddressService {
    async createAddress(data) {
        const { street, number, neighborhood, city, state, zip_code, id_users } = data;

        if (!street || !city || !state || !id_users) {
            throw new Error("Rua, cidade, estado e o ID do usuário são obrigatórios.");
        }

        const newAddress = new Address(
            null,
            street,
            number || null,
            neighborhood || null,
            city,
            state,
            zip_code || null,
            id_users
        );

        const addressId = await AddressRepository.create(newAddress);
        return addressId;
    }

    async getAddressesByUser(id_users) {
        const addresses = await AddressRepository.findByUserId(id_users);
        return addresses;
    }

    async deleteAddress(id) {
        const affectedRows = await AddressRepository.delete(id);
        if (affectedRows === 0) {
            throw new Error("Endereço não encontrado.");
        }
        return affectedRows;
    }
}

export default new AddressService();