const locationModel = require('../model/locationModel.js');


// ========== CREATE ===========

const createLocation = async (req, res) => {
    const {body} = req;
    try {
        const [data] = await locationModel.createLocation(body);
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

const updateLocation = async (req, res) => {
    const {ids} = req.params;
    const {body} = req;
    try {
        await locationModel.updateLocation(body, ids);
        res.json({
            message: 'Update Location success',
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

const deleteLocation = async (req, res) => {
    const {ids} = req.params;
    try {
        await locationModel.deleteLocation(ids);
        res.json({
            message: 'DELETE Location success',
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

const findAllLocation = async (req, res) => {
    try {
        const [data] = await locationModel.getAllLocation();
    
        res.json({
            message: 'This is the Location',
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
    createLocation,
    updateLocation,
    deleteLocation,
    findAllLocation,
}