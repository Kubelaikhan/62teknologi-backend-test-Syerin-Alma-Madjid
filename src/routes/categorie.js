const express = require('express');

const categorieController = require('../controller/categorieController.js');

const router = express.Router();


router
    .post("/", categorieController.createCategorie);

router
    .put("/:id", categorieController.updateCategorie);

router
    .delete('/:id', categorieController.deleteCategorie);

router
    .get("/", categorieController.findAllCategorie);


module.exports = router;