const Services = require("./Services.js");
const dataSource = require("../database/models/index.js");

class PeopleServices extends Services {
    constructor(){
        super("People");
        this.registrationServices = new Services("Registration");
    }

    // only registrations with status = "matriculado"
    async getRegistrationsForStudent(id){
        const student = await super.getOneRegisterWhere({id});
        if(!student) throw new Error("Student id desable");
        const registrationList = await student.getCourseRegistrations(); // MIXIN: This method is standard of ORM, it was just changed in model to "courseRegistrations"
        return registrationList;
    }

    async getAllRegistrationsForStudent(id){
        const student = await super.getOneRegister(id);
        const registrationList = await student.getAllCourseRegistrations(); // MIXIN: This method is standard of ORM, it was just changed in model to "courseRegistrations"
        return registrationList;
    }

    async getPeopleFromScopeAllRegisters(){
        const peopleList = await super.getAllRegisterFromScope("allRegisters");
        return peopleList;
    }

    async cancelRegistrationAndStudent(student_id){
        return dataSource.sequelize.transaction( async (transact) => {
            await super.updateRegister({ active: false},  {id: student_id}, transact);
            await this.registrationServices.updateRegister({ status: x}, {student_id}, transact);
        });
    }
}

module.exports = PeopleServices;