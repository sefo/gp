module.exports = function(sequelize, DataTypes) {
	var Access = sequelize.define("Access", {
		id : {
			type : DataTypes.INTEGER,
			primaryKey: true,
			allowNull : false,
			autoIncrement: true
		},
		hash : {
			type : DataTypes.STRING,
			allowNull : false
		}
	}, {
		tableName: 'access',
		timestamps: false
	});
	return Access;
};