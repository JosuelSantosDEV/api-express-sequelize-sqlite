const PeopleServices = require("../services/PeopleServices.js");
const Controller = require("./Controller.js");

const peopleService = new PeopleServices();

class PeopleController extends Controller{

    constructor(){
        super(peopleService);
    }

    async getRegistrations (req, res){
        const { studentId} = req.params;
        try {
            
            const registrationList = await peopleService.getRegistrationsForStudent(Number(studentId));
            return res.status(200).json(registrationList);

        } catch (error) {
            console.log("Error in get registrations of people: " + error);
        }
    }
};

module.exports = PeopleController;