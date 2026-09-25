import serviceRespositories from "../repositories/serviceRepositories.js";
import Service from "../models/service.js";

const serviceService = {
    select: async () => {
        const result = await serviceRespositories.select();
        return result;
    },
    service: async (id) => {
        const result = await serviceRespositories.service(id);
        return result;
    },
    createService: async (service) => {
        const newService = new Service(null, service.name, service.description, service.quantity, service.value, service.duration);
        const result = await serviceRespositories.create(newService);
        return result;
    },
    updateService: async (id, service) => {
        const updatedService = new Service(id, service.name, service.description, service.quantity, service.value, service.duration);
        const result = await serviceRespositories.update(id, updatedService);
        return result;
    },
    deleteService: async (id) => {
        const result = await serviceRespositories.delete(id);
        return result;
    }
}
// class serviceService {
//     async createService(data) {
//         const { name, description, quantity, value, duration } = data;

//         if (!name || !value) {
//             throw new Error("Nome e valor são obrigatórios para o serviço.");
//         }

//         const newService = new Service(name, description, quantity || 0, value, duration);
//         return await ServiceRepository.create(newService);
//     }

//     async getAllServices() {
//         return await ServiceRepository.findAll();
//     }

//     async getServiceById(id) {
//         const service = await ServiceRepository.findById(id);
//         if (!service) {
//             throw new Error("Serviço não encontrado.");
//         }
//         return service;
//     }

//     async updateService(id, data) {
//         await this.getServiceById(id); // Garante que o serviço existe
//         const { name, description, quantity, value, duration } = data;

//         const updatedService = new Service(name, description, quantity, value, duration);
//         return await ServiceRepository.update(id, updatedService);
//     }

//     async deleteService(id) {
//         await this.getServiceById(id);
//         return await ServiceRepository.delete(id);
//     }
// }

export default new serviceService();