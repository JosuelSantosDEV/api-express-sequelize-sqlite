const { Op } = require("sequelize");
const CourseServices = require("../services/CourseServices.js");
const Controller = require("./Controller.js");

const courseServices = new CourseServices();

class CourseController extends Controller{

    constructor(){
        super(courseServices);
    }

    async getCourses(req, res){
        const { start_date, end_date } = req.query;

        const where = {};
        
        // Is exists params in query, make a prop {}
        start_date || end_date ? where.start_date = {} : null;
        // Is exists start_date, add in where with a prop gte
        start_date ? where.start_date[Op.gte] = start_date : null;
        // Is exists end_date, add in where with a prop lte
        end_date ? where.start_date[Op.lte] = end_date : null;

        try {
            const courseList = await courseServices.getAllRegister(where);
            return res.status(200).json(courseList);
        } catch (error) {
            return res.status(500).json({ Error: `Error in get course: ${error.message}`});
        }
    }

};

module.exports = CourseController;