const LocationModel = require("../Models/LocationModel");
module.exports.getLocationList = async (req, res) => {
  try {
    let loc_id = req.params.loc_id;
    let result = await LocationModel.find();
    res.status(200).send({
      status: true,
      result,
    });
  } catch (error) {
    res.status(200).send({
      status: true,
      error,
    });
  }
};
