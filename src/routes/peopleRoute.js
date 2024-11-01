const {Router} = require("express");

const PeopleController = require("../controllers/PeopleController.js");
const RegistrationController = require("../controllers/RegistrationController.js");

const peopleController = new PeopleController();
const registrationController = new RegistrationController();

const router = Router();

router.get("/people", (req, res) => peopleController.getAll(req, res));
router.get("/people/:id", (req, res) => peopleController.getOne(req, res));
router.post("/people", (req, res) => peopleController.create(req, res));
router.put("/people/:id", (req, res) => peopleController.update(req, res));
router.delete("/people/:id", (req, res) => peopleController.delete(req, res));

router.get("/people/:studentId/registration", (req, res) => peopleController.getRegistrations(req, res));
router.get("/people/:studentId/registration/:id", (req, res) => registrationController.getAll(req, res));
router.post("/people/:studentId/registration", (req, res) => registrationController.create(req, res));
router.delete("/people/:studentId/registration/:id", (req, res) => registrationController.delete(req, res));

module.exports = router;