const ReviewTable = {
  rating: {
    type: DataTypes.INTEGER,
  },
  dascription: {
    type: DataTypes.TEXT,
  },
};
const Review = sequelize.define("Review", ReviewTable);
module.exports = Review