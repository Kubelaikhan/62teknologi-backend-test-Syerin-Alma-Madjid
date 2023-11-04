const express = require('express');

const attributesController = require('../controller/attributesController.js');

const router = express.Router();


router
    .post("/", attributesController.createAttributes);

router
    .put("/:id", attributesController.updateAttributes);

router
    .delete('/:id', attributesController.deleteAttributes);

router
    .get("/", attributesController.findAllAttributes);


module.exports = router;