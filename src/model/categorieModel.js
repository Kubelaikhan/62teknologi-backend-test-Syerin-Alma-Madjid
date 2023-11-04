const dbPool = require('../config/database.js');

const getAllCategorie = () => {
    const query = 'SELECT * FROM business_categories';

    return dbPool.execute(query);
}

const createCategorie  = (body) => {
    const query = `  INSERT INTO business_categories (ids_category, 
                                                        ids_business, 
                                                        attribute_value_categories, 
                                                        attribute_key_categories ) 
                        VALUES ('${body.ids_category}', 
                                  '${body.ids_business}', 
                                  '${body.attribute_value_categories}', 
                                  '${body.attribute_key_categories}'
                                  )`;

    return dbPool.execute(query);
}

const updateCategorie  = (body, ids) => {
    const query = `  UPDATE business_categories 
                        SET 
                        ids_business='${body.ids_business}', 
                        attribute_value_categories='${body.attribute_value_categories}', 
                        attribute_key_categories='${body.attribute_key_categories}', 
                        WHERE ids=${ids}`;

    return dbPool.execute(query);
}

const deleteCategorie = (ids) => {
    const query = `DELETE FROM business_categories WHERE ids_category=${ids}`;

    return dbPool.execute(query);
}

module.exports = {
    getAllCategorie,
    createCategorie,
    updateCategorie,
    deleteCategorie,
}
