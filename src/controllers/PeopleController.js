const PeopleServices = require("../services/PeopleServices.js");
const Controller = require("./Controller.js");

const peopleService = new PeopleServices();

class PeopleController extends Controller{

    constructor(){
        super(peopleService);
    }

    async getRegistrations (req, res){
        const { student_id } = req.params;
        try {
            
            const registrationList = await peopleService.getRegistrationsForStudent(Number(student_id));
            return res.status(200).json(registrationList);

        } catch (error) {
            return res.status(500).json({Error: "Error in get registrations of people: " + error.message});
        }
    }

    async getAllRegistrations (req, res){
        const { student_id } = req.params;
        try {
            
            const registrationList = await peopleService.getAllRegistrationsForStudent(Number(student_id));
            return res.status(200).json(registrationList);

        } catch (error) {
            return res.status(500).json({Error: "Error in get all registrations of people: " + error.message});
        }
    }

    async getAllPeopleRegisters(req, res){
        try {
            const peopleList = await peopleService.getPeopleFromScopeAllRegisters();
            return res.status(200).json(peopleList);
        } catch (error) {
            return res.status(500).json({Error: "Error in get registrations of people: " + error.message});
        }
    }
    async studentRegisterCancel(req, res){
        const { student_id } = req.params;
        try {

            await peopleService.cancelRegistrationAndStudent(Number(student_id));
            return res.status(200).json({message: "Registration and Student cancel with successfull"});

        } catch (error) {
            return res.status(500).json({Error: "Error in get registrations of people: " + error.message});
        }
    }
};

module.exports = PeopleController;