const MenuitemModel = require("../Models/MenuitemModel");
module.exports.getMenuItemListByRestId = async (request, response) => {
  let data = request.params;
  try {
    let result = await MenuitemModel.find({ restaurantId: data.res_id });
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
