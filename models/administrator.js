
module.exports = function(sequelize, DataTypes) {
  var Administrator = sequelize.define("Administrator", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

  Administrator.associate = function(models) {
    // Associating Administrator with Students
    // When an Author is deleted, also delete any associated Posts
    Administrator.hasMany(models.Cohort, {
      onDelete: "cascade"
    });
  };
  return Administrator;
};
