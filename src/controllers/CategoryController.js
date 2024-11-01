const CategoryServices = require("../services/CategoryServices.js");
const Controller = require("./Controller.js");

const categoryServices = new CategoryServices();

class CategoryController extends Controller{

    constructor(){
        super(categoryServices);
    }

};

module.exports = CategoryController;