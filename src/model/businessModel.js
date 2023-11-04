const dbPool = require('../config/database');

const getAllBusiness = () => {
    const query = 'SELECT * FROM business';

    return dbPool.execute(query);
}

const createBusiness = (body) => {
    const query = `  INSERT INTO business (
                                            alias,
                                            name,
                                            term, 
                                            image_url,
                                            is_closed,
                                            review_count,
                                            rating,
                                            phone,
                                            display_phone,
                                            distance,
                                            longitude, 
                                            latitude, 
                                            location, 
                                            radius, 
                                            locale, 
                                            price_level, 
                                            open_now,
                                            open_at ) 
                        VALUES ('${body.alias}',
                                  '${body.name}',
                                  '${body.term}',
                                  '${body.image_url}',
                                  '${body.is_closed}',
                                  '${body.review_count}',
                                  '${body.rating}',
                                  '${body.phone}',
                                  '${body.display_phone}',
                                  '${body.state}'
                                  '${body.longitude}', 
                                  '${body.latitude}', 
                                  '${body.radius}',
                                  '${body.price_level}',
                                  '${body.open_now}',
                                  '${body.open_at}'
                                  )`;

    return dbPool.execute(query);
}

const updateBusiness = (body, ids) => {
    const query = `  UPDATE business 
                        SET alias='${body.alias}',
                            name='${body.name}',
                            term='${body.term}',
                            image_url='${body.image_url}',
                            is_closed= '${body.is_closed}',
                            price_level= '${body.price_level}',
                            review_count= '${body.review_count}',
                            rating= '${body.rating}',
                            phone= '${body.phone}',
                            display_phone= '${body.display_phone}',
                            distance= '${body.distance}', 
                            longitude='${body.longitude}', 
                            latitude='${body.latitude}',
                            location='${body.location}',
                            radius='${body.radius}',
                            locale='${body.locale}',
                            open_now='${body.open_now}',
                            open_at='${body.open_at}',
                        WHERE ids=${ids}`;

    return dbPool.execute(query);
}

// const filterBusiness = (params) => {

//   const {
//     term,
//     alias,
//     location,
//     latitude,
//     longitude,
//     radius,
//     categories,
//     locale,
//     limit,
//     offset,
//     sort_by,
//     price,
//     open_now,
//     open_at,
//     attributes
//   } = params;

    
//     const query = `SELECT b.*, 
//                     a.attribute_key, 
//                     p.price_name, 
//                     c.attribute_key_categories,
//                     l.display_address
//                       FROM business AS b 
//                         LEFT JOIN business_attribute AS a ON b.ids_business = a.ids_business 
//                         LEFT JOIN business_price AS p ON b.ids_prices= p.price_level 
//                         LEFT JOIN business_categories AS c ON b.ids_business = c.ids_business 
//                         LEFT JOIN business_location as l ON b.ids_loc = l.ids_location WHERE 1=1`;

//                         if(attributes){
//                           query += ` AND a.attribute_value_categories = ${attributes} AND a.attribute_value = 1`;
//                       }

//       if (term) {
//         query += ` AND term = '${term}'`;
//       }

//       if (alias) {
//         query += ` AND alias = '${alias}'`;
//       }

//       if (location) {
//         query += ` AND location = '${location}'`;
//       }

//       if (latitude && longitude) {
//         query += ` AND latitude = ${latitude} AND longitude = ${longitude}`;
//       }

//       if (price) {
//         query += ` AND ids_prices = ${price}`;
//       }

//       if (open_now != 0) {
//         query += ` AND open_now = '${open_now}'`;
//       }

//       if (open_at) {
//         query += ` AND open_at = '${open_at}'`;
//       }

//       if (radius){
//         query += ` AND radius = ${radius}`;
//       }

//       if(categories){
//         query += ` AND attribute_key_categories = ${categories} AND attribute_value_categories = 1`;
//       }

//       if(locale){
//         query += ` AND locale = ${locale}`;
//       }

//       if (sort_by === 'rating') {
//         query += `ORDER BY rating DESC`;
//       }
  
//       if (limit) {
//         query += ` LIMIT ${limit}`;
//       }
  
//       if (offset) {
//         query += ` OFFSET ${offset}`;
//       }

//       return dbPool.execute(query);

// }

const deleteBusiness = (ids) => {
    const query = `DELETE FROM business WHERE ids_business=${ids}`;
    return dbPool.execute(query);
}

const deleteCategorie = (ids) => {

  const query = `DELETE FROM business_categories WHERE ids_business=${ids}`;
  return dbPool.execute(query);
}

const deleteAttribute = (ids) => {

  const query = `DELETE FROM business_attributes WHERE ids_business=${ids}`;
  return dbPool.execute(query);
}

module.exports = {
    getAllBusiness,
    createBusiness,
    updateBusiness,
    deleteBusiness,
    deleteCategorie,
    deleteAttribute,
}
