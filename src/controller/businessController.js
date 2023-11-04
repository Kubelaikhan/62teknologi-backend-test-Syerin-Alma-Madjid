const businessModel = require('../model/businessModel.js');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
                                    host: process.env.DB_HOST,
                                    dialect: 'mysql',
                                });


// ========== CREATE ===========
const createBusiness = async (req, res) => {
    const {body} = req;
    try {
        const [data] = await businessModel.createBusiness(body);
        res.json({
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

const updateBusiness = async (req, res) => {
    const {ids} = req.params;
    const {body} = req;
    try {
        await businessModel.updateBusiness(body, ids);
        res.json({
            message: 'A business has been updated.',
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

const deleteBusiness = async (req, res) => {
    const { ids } = req.params;
    try {
        await businessModel.deleteBusiness(ids);
        await businessModel.deleteAttribute(ids);
        await businessModel.deleteCategorie(ids);
        res.json({
            message: 'Deleted a business.',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

// ========= GET BUSINESS BY SEARCH ==========

const Business = sequelize.define('business', {
    ids_business: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    alias: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    term: {
      type: DataTypes.STRING,
    },
    is_closed: {
      type: DataTypes.BOOLEAN,
    },
    longitude: {
      type: DataTypes.DECIMAL(10, 6),
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 6),
    },
    location: {
      type: DataTypes.STRING,
    },
    radius: {
      type: DataTypes.INTEGER,
    },
    locale: {
      type: DataTypes.STRING,
    },
    ids_location: {
      type: DataTypes.STRING,
    },
    price_level: {
      type: DataTypes.INTEGER,
    },
    review_count: {
      type: DataTypes.INTEGER,
    },
    image_url: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.CHAR(4),
    },
    phone: {
      type: DataTypes.STRING,
    },
    display_phone: {
      type: DataTypes.STRING,
    },
    distance: {
      type: DataTypes.INTEGER,
    },
    open_now: {
      type: DataTypes.BOOLEAN,
    },
    open_at: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,

  });

const Attributes = sequelize.define('business_attribute', {
    ids_attribute: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ids_business: {
      type: DataTypes.INTEGER,
      references: {
        model: Business,
        key: 'ids_business',
      },
    },
    attribute_key: {
      type: DataTypes.STRING,
    },
    attribute_value: {
      type: DataTypes.BOOLEAN,
    },
},{
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
 });

const Category = sequelize.define('business_categories', {
  ids_category: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ids_business: {
    type: DataTypes.INTEGER,
    references: {
      model: Business,
      key: 'ids_business', 
    },
  },
  attribute_key_categories: {
    type: DataTypes.STRING,
  },
  attribute_value_categories: {
    type: DataTypes.BOOLEAN,
  },
  // Definisikan kolom lain sesuai kebutuhan
}, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
 });

const Price = sequelize.define('business_price', {
    ids: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price_level: {
      type: DataTypes.CHAR(1),
      // Anda dapat menambahkan kolom lain sesuai kebutuhan
    },
    price_name: {
      type: DataTypes.STRING,
      // Sesuaikan dengan jenis data yang sesuai
    },
    // Definisikan kolom lain sesuai kebutuhan
  }, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
 });

const Location = sequelize.define('business_location', {
    ids_location: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address1: {
      type: DataTypes.STRING,
    },
    address2: {
      type: DataTypes.STRING,
    },
    address3: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    zip_code: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    display_address: {
      type: DataTypes.TEXT,
    },

  }, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
 } );
  



// Hubungan antara Business dan Category
Business.belongsTo(Category,  {
    foreignKey: 'ids_business', 
  });
Category.hasMany(Business,  {
    foreignKey: 'ids_business', 
  });

// Hubungan antara Business dan Attribute
Business.belongsTo(Attributes, {
    foreignKey: 'ids_business', 
  });
Attributes.hasMany(Business, {
    foreignKey: 'ids_business', 
  });

// Hubungan antara Business dan Price
Business.belongsTo(Price, {
    foreignKey: 'price_level', 
  });
Price.hasMany(Business, {
    foreignKey: 'price_level', 
  });

// Hubungan antara Business dan Location
Business.hasOne(Location, { foreignKey: 'ids_location' });
Location.belongsTo(Business, { foreignKey: 'ids_location' });
  
  
const searchBusiness = async (req, res) => {
    
    try {
        const {
            term,
            alias,
            location,
            latitude,
            longitude,
            radius,
            categories,
            locale,
            limit,
            offset,
            price,
            open_now,
            open_at,
            attributes
          } = req.query;
    
          
        const whereConditions = {};
    
        if (term) {
          whereConditions.term = term;
        }
        if (alias) {
          whereConditions.alias = alias;
        }
        if (location) {
          whereConditions.location = location;
        }
        if (latitude) {
          whereConditions.latitude = latitude;
        }
        if (longitude) {
          whereConditions.longitude = longitude;
        }
        if (radius) {
          whereConditions.radius = radius;
        }


        if (categories) {
          whereConditions.categories = categories; // Sesuaikan dengan nama kolom yang sesuai dalam model Business
        }

        if (price) {
            whereConditions.price = price; // Sesuaikan dengan nama kolom yang sesuai dalam model Business
        }

        if (attributes) {
            whereConditions.attributes = attributes; // Sesuaikan dengan nama kolom yang sesuai dalam model Business
        }


        if (locale) {
          whereConditions.locale = locale;
        }

        if(open_now){
            whereConditions.open_now = open_now;
        }

        if(open_at){
            whereConditions.open_at = open_at;
        }
    
    

      const businesses = await Business.findAll({
        include: [
            { model: Category },
            { model: Attributes },
            { model: Location },
            { model: Price },
        ], 
        where: whereConditions,
        limit: limit,
        offset: offset,
      });
  
      // Mengirim hasil pencarian sebagai respons
      res.json({ businesses });
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error: error });
    }
  };
  


module.exports = {
    createBusiness,
    updateBusiness,
    deleteBusiness,
    searchBusiness
}