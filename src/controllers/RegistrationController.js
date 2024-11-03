const { Sequelize } = require("sequelize");
const RegistrationServices = require("../services/RegistrationServices.js");
const Controller = require("./Controller.js");

const registrationServices = new RegistrationServices();

class RegistrationController extends Controller{

    constructor(){
        super(registrationServices);
    }

    async getRegistrationsListFromStudent(req, res){
        const { student_id } = req.params;

        try {
            const registrationStudentList = await registrationServices.getRegistersAndCount({
                where: {student_id: Number(student_id), status: "matriculado"},
                limit: 2,
                order: [["id", "ASC"]]
            });
            res.status(200).json(registrationStudentList);
        } catch (error) {
            return res.status(500).json({ Error: `Error in count student: ${error.message}`});
        }
    }

    async getRegistrationsListFromCourse(req, res){
        const { quantity = 2 } = req.query;

        try {
            const registrationList = await registrationServices.getRegistersAndCount({
                where: {status: "matriculado"},
                attributes: ["course_id"],
                group: ["course_id"],
                having: Sequelize.literal(`count(course_id) >= ${quantity}`)
            });
            res.status(200).json(registrationList);
        } catch (error) {
            return res.status(500).json({ Error: `Error in count student: ${error.message}`});
        }
    }

};

module.exports = RegistrationController;