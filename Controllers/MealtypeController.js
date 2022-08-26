const MealtypeModel = require("../Models/MealtypeModel");

module.exports.getMealType = async (request, response) => {
  try {
    let result = await MealtypeModel.find();
    response.status(200).send({
      status: true,
      result,
    });
  } catch (error) {
    response.status(500).send({
      status: true,
      error,
    });
  }
};
