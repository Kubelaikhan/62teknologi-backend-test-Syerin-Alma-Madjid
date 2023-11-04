const express = require('express');

const businessController = require('../controller/businessController.js');

const router = express.Router();


router
    .post("/", businessController.createBusiness);

router
    .put("/:id", businessController.updateBusiness);

router
    .delete('/:id', businessController.deleteBusiness);

router
    .get("/search", businessController.searchBusiness);

module.exports = router;