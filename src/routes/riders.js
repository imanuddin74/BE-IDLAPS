const express = require("express");

const RidersController = require("../controller/riders.js");

const router = express.Router();

// CREATE - POST
router.post("/", RidersController.createNewRider);

// READ - GET
router.get("/", RidersController.getRiders);
router.get("/:idRider", RidersController.getRider);
router.get("/category/:id", RidersController.getRidersByCategory);

// UPDATE - PATCH
router.patch("/clear", RidersController.updateClears);
router.patch("/:idRider", RidersController.updateRider);
router.patch("/:idRider/note/:note", RidersController.updateRiderNote);
router.patch("/parcel/:note", RidersController.updateRidersNote);

// DELETE - DELETE
router.delete("/:idRider", RidersController.deleteRider);

module.exports = router;
