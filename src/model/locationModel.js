const dbPool = require('../config/database');

const getAllLocation = () => {
    const query = 'SELECT * FROM business_location';

    return dbPool.execute(query);
}

const createLocation  = (body) => {
    const query = `  INSERT INTO business_location (ids_location, 
                                                        address1, 
                                                        address2,
                                                        address3,
                                                        city,
                                                        zip_code,
                                                        state,
                                                        display_address ) 
                        VALUES ('${body.ids_location}', 
                                  '${body.address1}', 
                                  '${body.address2}', 
                                  '${body.address3}',
                                  '${body.city}',
                                  '${body.zip_code}',
                                  '${body.state}',
                                  '${body.display_address}',
                                  )`;

    return dbPool.execute(query);
}

const updateLocation  = (body, ids) => {
    const query = `  UPDATE business_location 
                        SET 
                        address1='${body.address1}', 
                        address2='${body.address2}',
                        address3='${body.address3}',
                        city='${body.city}',
                        zip_code='${body.zip_code}',
                        state='${body.state}',
                        display_address='${body.display_address}',  
                        WHERE ids_location=${ids}`;

    return dbPool.execute(query);
}

const deleteLocation = (ids) => {
    const query = `DELETE FROM business_location WHERE ids_location=${ids}`;

    return dbPool.execute(query);
}

module.exports = {
    getAllLocation,
    createLocation,
    updateLocation,
    deleteLocation,
}
