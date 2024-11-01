const RegistrationServices = require("../services/RegistrationServices.js");
const Controller = require("./Controller.js");

const registrationServices = new RegistrationServices();

class RegistrationController extends Controller{

    constructor(){
        super(registrationServices);
    }

};

module.exports = RegistrationController;