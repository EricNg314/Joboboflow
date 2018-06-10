module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1-20]
        }
      },
      first_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1-30]
          }
      },
      last_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1-30]
          }
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [6-10]
          }
      },
      // rescued: {
      //   type: DataTypes.BOOLEAN,
      //   defaultValue: false    }
    });
  
    User.associate = function(models) {
  
      User.belongsTo(models.Cohort, {
        foreignKey: { 
          allowNull: false
        },
      });
      User.hasMany(models.Jobs, {
          onDelete: "cascade"
      });
    };
    return User;
  }