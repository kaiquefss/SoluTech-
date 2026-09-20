import ServiceService from "../services/serviceService.js";

class ServiceController {
    async create(req, res) {
        try {
            const serviceId = await ServiceService.createService(req.body);
            return res.status(201).json({ message: "Serviço criado com sucesso!", id: serviceId });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const services = await ServiceService.getAllServices();
            return res.status(200).json(services);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const service = await ServiceService.getServiceById(req.params.id);
            return res.status(200).json(service);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            await ServiceService.updateService(req.params.id, req.body);
            return res.status(200).json({ message: "Serviço atualizado com sucesso!" });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await ServiceService.deleteService(req.params.id);
            return res.status(200).json({ message: "Serviço excluído com sucesso!" });
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

export default new ServiceController();