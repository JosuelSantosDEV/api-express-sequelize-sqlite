const dataSource = require("../database/models/index.js");

class Services {
    constructor(modelName){
        this.model = modelName;
    }

    async getAllRegister(where = {}){
        return dataSource[this.model].findAll({ where: { ...where } });
    }

    async getAllRegisterFromScope(scope){
        return dataSource[this.model].scope(scope).findAll();
    }
    
    async getOneRegister(id){
        return dataSource[this.model].scope("allRegisters").findByPk(id);
    }

    async getOneRegisterWhere(where){
        return dataSource[this.model].findOne({where: {...where}});
    }

    async getRegistersAndCount(options){
        return dataSource[this.model].findAndCountAll({...options});
    }
    
    async createRegister(registerData){
        return dataSource[this.model].create(registerData);
    }

    async updateRegister(registerData, where, transact = {}){
        const listUpdatedRegister = await dataSource[this.model].update(
            registerData,
            {
                where: { ...where },
                transaction: transact
            }
        );

        if(listUpdatedRegister[0] === 0) return false;
        else return true;
    }

    async deleteRegister(id){
        return dataSource[this.model].destroy({where:{id:id}});
    }
    

}

module.exports = Services;