const converterIds = require("../utils/converterStringHelper.js"); 

class Controller {
    constructor(serviceEntity){
        this.serviceEntity = serviceEntity;
    }

    async getAll(req, res){
        try {
            const list = await this.serviceEntity.getAllRegister();
            return res.status(200).json(list);
        } catch (error) {
            return res.status(500).json({Error:"Error in get register list: " + error.message});
        }
    }

    async getOne(req, res){
        const {id} = req.params;
        try {
            const register = await this.serviceEntity.getOneRegister(id);
            return res.status(200).json(register);
        } catch (error) {
            return res.status(500).json({Error:"Error in get one register: " + error.message});
        }
        
    }

    async getOneWhere(req, res){
        const {...params} = req.params;

        const where = converterIds(params);

        try {
            const register = await this.serviceEntity.getOneRegisterWhere(where);
            return res.status(200).json(register);
        } catch (error) {
            return res.status(500).json({Error:"Error in get one register: " + error.message});
        }
        
    }

    async create(req, res){
        const datas = req.body;
        try {
            const newRegister = await this.serviceEntity.createRegister(datas);
            return res.status(200).json(newRegister);
        } catch (error) {
            return res.status(500).json({Error:"Error in create register: " + error.message});
        }
    }

    async update(req, res){
        const {...params} = req.params;
        const datas = req.body;

        const where = converterIds(params);
        
        try {
            const isUpdated = await this.serviceEntity.updateRegister(datas, where);
            if(!isUpdated){
                return res.status(400).json({Error: `The register Id: ${id} not updated`});
            }
            else return res.status(200).json({message: `The register Id: ${id} updated with success`});
        } catch (error) {
            return res.status(500).json({Error: "Error in update register: " + error.message});
        }

    }

    async delete(req, res){
        try {
            const {id} = req.params;
            await this.serviceEntity.deleteRegister(id);
            return res.status(200).json({message: `The register Id: ${id} deleted with success`});
        } catch (error) {
            return res.status(500).json({Error:"Error in delete register: " + error.message});
        }
    }
}

module.exports = Controller;