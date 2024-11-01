const dataSource = require("../models/index.js");

class Services {
    constructor(modelName){
        this.model = modelName;
    }

    async getAllRegister(){
        return dataSource[this.model].findAll();
    }

    
    async getOneRegister(id){
        return dataSource[this.model].findByPk(id);
    }
    
    async createRegister(registerData){
        return dataSource[this.model].create(registerData);
    }

    async updateRegister(registerData, id){
        const listUpdatedRegister =  dataSource[this.model].update(registerData, { where: { id }});

        if(listUpdatedRegister[0] === 0) return false;
        else return true;
    }

    async deleteRegister(id){
        return dataSource[this.model].destroy({where:{id:id}});
    }
    

}

module.exports = Services;