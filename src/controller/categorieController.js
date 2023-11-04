const categorieModel = require('../model/categorieModel.js');


// ========== CREATE ===========

const createCategorie = async (req, res) => {
    const {body} = req;
    try {
        const [data] = await categorieModel.createCategorie(body);
        res.json({
            message: 'Get All Categories',
            data: data
        })
    } catch (error) {
        res.status(500),json({
            message: 'Server Error',
            serverMessage: 'error'
        })
    }
}

// ========== UPDATE ==========

const updateCategorie = async (req, res) => {
    const {ids} = req.params;
    const {body} = req;
    try {
        await categorieModel.updateCategorie(body, ids);
        res.json({
            message: 'Update Category success',
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

// ========== DELETE ==========

const deleteCategorie = async (req, res) => {
    const {ids} = req.params;
    try {
        await categorieModel.deleteCategorie(ids);
        res.json({
            message: 'DELETE Category success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

// ========== FIND ALL ==========

const findAllCategorie = async (req, res) => {
    try {
        const [data] = await categorieModel.getAllCategorie();
        res.json({
            message: 'This is the Category',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}



module.exports = {
    createCategorie,
    updateCategorie,
    deleteCategorie,
    findAllCategorie,
}