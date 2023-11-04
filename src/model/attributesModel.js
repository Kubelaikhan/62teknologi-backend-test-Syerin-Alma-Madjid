const dbPool = require('../config/database');

const getAllAttribute= () => {
    const query = 'SELECT * FROM business_attribute';

    return dbPool.execute(query);
}

const createAttribute = (body) => {
    const query = `  INSERT INTO business_attribute (ids_attribute, 
                                                        ids_business, 
                                                        attribute_key, 
                                                        attribute_value ) 
                        VALUES ('${body.ids_attribute}', 
                                  '${body.ids_business}', 
                                  '${body.attribute_key}', 
                                  '${body.attribute_value}'
                                  )`;

    return dbPool.execute(query);
}

const updateAttribute = (body, ids) => {
    const query = `  UPDATE business_attribute 
                        SET 
                        ids_business = '${body.ids_business}',
                        attribute_key='${body.attribute_key}', 
                        attribute_value='${body.attribute_value}', 
                        WHERE ids_attribute=${ids}`;

    return dbPool.execute(query);
}

const deleteAttribute = (ids) => {
    const query = `DELETE FROM business_attribute WHERE ids_attribute=${ids}`;

    return dbPool.execute(query);
}

module.exports = {
    getAllAttribute,
    createAttribute,
    updateAttribute,
    deleteAttribute,
}
