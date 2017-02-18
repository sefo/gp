module.exports = function(sequelize, DataTypes) {
	var Client = sequelize.define("Client", {
		id : {
			type : DataTypes.INTEGER,
			primaryKey: true,
			allowNull : false,
			autoIncrement: true
		},
		name : {
			type : DataTypes.STRING,
			allowNull : false
		},
		telephone : {
			type : DataTypes.STRING,
			allowNull : false
		},
		address : {
			type : DataTypes.STRING,
			allowNull : false
		},
		zip : {
			type : DataTypes.STRING,
			allowNull : false
		},
		city : {
			type : DataTypes.STRING,
			allowNull : false
		}
	}, {
		tableName: 'client',
		timestamps: false
	});
	return Client;
};