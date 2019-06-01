module.exports = function(sequelize, DataTypes) {
    var Calculation = sequelize.define("Calculation", {
      Calc: DataTypes.STRING,
      createdAt: { type: DataTypes.DATE, defaultValue: sequelize.NOW },
      updatedAt: { type: DataTypes.DATE, defaultValue: sequelize.NOW }
    });
    return Calculation;
  };
  