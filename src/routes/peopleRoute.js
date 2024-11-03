const {Router} = require("express");

const PeopleController = require("../controllers/PeopleController.js");
const RegistrationController = require("../controllers/RegistrationController.js");

const peopleController = new PeopleController();
const registrationController = new RegistrationController();

const router = Router();

router.get("/people", (req, res) => peopleController.getAll(req, res));
router.get("/people/allregisters", (req, res) => peopleController.getAllPeopleRegisters(req, res));
router.get("/people/:id", (req, res) => peopleController.getOne(req, res));
router.post("/people", (req, res) => peopleController.create(req, res));
router.put("/people/:id", (req, res) => peopleController.update(req, res));
router.delete("/people/:id", (req, res) => peopleController.delete(req, res));

router.get("/people/:student_id/registration", (req, res) => peopleController.getRegistrations(req, res));
router.get("/people/:student_id/registration/all", (req, res) => peopleController.getAllRegistrations(req, res));
router.get("/people/:student_id/registration/confirmation", (req, res) => registrationController.getRegistrationsListFromStudent(req, res));
router.get("/people/registration/full", (req, res) => registrationController.getRegistrationsListFromCourse(req, res));
router.get("/people/:student_id/registration/:id", (req, res) => registrationController.getOneWhere(req, res));
router.post("/people/:student_id/registration", (req, res) => registrationController.create(req, res));
router.put("/people/:student_id/cancel", (req, res) => peopleController.studentRegisterCancel(req, res));
router.put("/people/:student_id/registration/:id", (req, res) => registrationController.update(req, res));
router.delete("/people/:student_id/registration/:id", (req, res) => registrationController.delete(req, res));

module.exports = router;