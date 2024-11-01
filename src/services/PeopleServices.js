const Services = require("./Services.js");

class PeopleServices extends Services {
    constructor(){
        super("People");
    }

    async getRegistrationsForStudent(id){
        const student = await super.getOneRegister(id);
        const registrationList = await student.getCourseRegistrations(); // MIXIN: This method is standard of ORM, it was just changed in model to "courseRegistrations"
        return registrationList;
    }
}

module.exports = PeopleServices;