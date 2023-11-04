const express = require('express');

const locationController = require('../controller/locationController.js');

const router = express.Router();


router
    .post("/", locationController.createLocation);

router
    .put("/:id", locationController.updateLocation);

router
    .delete('/:id', locationController.deleteLocation);

router
    .get("/", locationController.findAllLocation);


module.exports = router;