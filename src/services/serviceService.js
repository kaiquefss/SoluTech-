import ServiceRepository from "../repositories/serviceRepository.js";
import Service from "../models/Service.js";

class ServiceService {
    async createService(data) {
        const { name, description, quantity, value, duration } = data;
        
        if (!name || !value) {
            throw new Error("Nome e valor são obrigatórios para o serviço.");
        }

        const newService = new Service(name, description, quantity || 0, value, duration);
        return await ServiceRepository.create(newService);
    }

    async getAllServices() {
        return await ServiceRepository.findAll();
    }

    async getServiceById(id) {
        const service = await ServiceRepository.findById(id);
        if (!service) {
            throw new Error("Serviço não encontrado.");
        }
        return service;
    }

    async updateService(id, data) {
        await this.getServiceById(id); // Garante que o serviço existe
        const { name, description, quantity, value, duration } = data;
        
        const updatedService = new Service(name, description, quantity, value, duration);
        return await ServiceRepository.update(id, updatedService);
    }

    async deleteService(id) {
        await this.getServiceById(id);
        return await ServiceRepository.delete(id);
    }
}

export default new ServiceService();