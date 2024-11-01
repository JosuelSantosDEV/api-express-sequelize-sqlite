class Controller {
    constructor(serviceEntity){
        this.serviceEntity = serviceEntity;
    }

    async getAll(req, res){
        try {
            const list = await this.serviceEntity.getAllRegister();
            return res.status(200).json(list);
        } catch (error) {
            return res.status(400).json({Error:"Error in get register list: " + error});
        }
    }

    async getOne(req, res){
        const {id} = req.params;
        try {
            const register = await this.serviceEntity.getOneRegister(id);
            return res.status(200).json(register);
        } catch (error) {
            return res.status(400).json({Error:"Error in get one register: " + error});
        }
        
    }

    async create(req, res){
        const datas = req.body;
        try {
            const newRegister = await this.serviceEntity.createRegister(datas);
            return res.status(200).json(newRegister);
        } catch (error) {
            return res.status(400).json({Error:"Error in create register: " + error});
        }
    }

    async update(req, res){
        const {id} = req.params;
        const datas = req.body;
        
        try {
            const isUpdated = await this.serviceEntity.updateRegister(datas, Number(id));
            if(!isUpdated){
                return res.status(400).json({Error: `The register Id: ${id} not updated`});
            }
            else return res.status(200).json({message: `The register Id: ${id} updated with success`});
        } catch (error) {
            return res.status(400).json({Error: "Error in update register: " + error});
        }

    }

    async delete(req, res){
        try {
            const {id} = req.params;
            await this.serviceEntity.deleteRegister(id);
            return res.status(200).json({message: `The register Id: ${id} deleted with success`});
        } catch (error) {
            return res.status(400).json({Error:"Error in delete register: " + error});
        }
    }
}

module.exports = Controller;