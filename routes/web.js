const express = require("express");

const router = express.Router();

const { StudentController } = require("../controllers/studentController");

router.get("/", StudentController.getAllDoc);

router.post("/", StudentController.createDoc);
router.get("/edit/:id", StudentController.editDoc);
router.post("/update/:id", StudentController.updateDocById);
router.post("/delete/:id", StudentController.deleteDocById);


module.exports = router;
