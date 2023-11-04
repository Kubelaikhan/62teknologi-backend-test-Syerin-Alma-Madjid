const attributesModel = require('../model/attributesModel.js');


// ========== CREATE ===========

const createAttributes = async (req, res) => {
    const {body} = req;
    try {
        const [data] = await attributesModel.createAttribute(body);
        res.status(201).json({
            message: 'Create an Attributes',
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

const updateAttributes = async (req, res) => {
    const {ids} = req.params;
    const {body} = req;
    try {
        await attributesModel.updateAttribute(body, ids);
        res.json({
            message: 'Update an Attribute success',
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

const deleteAttributes = async (req, res) => {
    const {ids} = req.params;
    try {
        await attributesModel.deleteAttribute(ids);
        res.json({
            message: 'Deleted an Attributes success',
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

const findAllAttributes = async (req, res) => {
    try {
        const [data] = await attributesModel.getAllAttribute();
    
        res.json({
            message: 'This is the Attributes.',
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
    createAttributes,
    updateAttributes,
    deleteAttributes,
    findAllAttributes
}