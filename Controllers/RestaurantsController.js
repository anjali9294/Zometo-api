const RestaurantMode = require("../Models/RestaurantModel");
module.exports.Home = (request, response) => {
  try {
    response.status(200).send({
      status: true,
    });
  } catch (error) {
    response.status(500).send({
      status: true,
      error,
    });
  }
};
module.exports.getRestaurantList = async (request, response) => {
  try {
    let result = await RestaurantMode.find();
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

module.exports.getRestaurantByLocationId = async (request, response) => {
  try {
    let loc_id = request.params.loc_id;
    let result = await RestaurantMode.find({ location_id: loc_id });
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

module.exports.getRestaurantDetailById = async (request, response) => {
  try {
    let rest_id = request.params.id;
    let result = await RestaurantMode.find({ _id: rest_id });
    if (result) {
      response.status(200).send({
        status: true,
        result,
      });
    } else {
      response.status(200).send({
        status: true,
        message: "restaurent not found",
      });
    }
  } catch (error) {
    response.status(500).send({
      status: true,
      error,
    });
  }
};

module.exports.filterData = async (request, response) => {
  let { meal_type, location, cuisine, lcost, hcost, sort, page } = request.body;
  sort = sort === undefined ? 1 : sort;
  let filter = {};

  if (location !== undefined) filter["location_id"] = location;
  if (meal_type !== undefined) filter["mealtype_id"] = meal_type;
  if (cuisine !== undefined) filter["cuisine_id"] = { $in: cuisine };
  if (hcost !== undefined && lcost !== undefined)
    filter["min_price"] = { $gte: lcost, $lte: hcost };
  console.log(filter);
  let result = await RestaurantMode.find(filter).sort({
    min_price: sort,
  });
  response.status(200).send({
    status: true,
    result,
  });
};
