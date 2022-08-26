const UserModel = require("../Models/UserModel");
module.exports.login = async (request, response) => {
  let data = request.body;
  try {
    let result = await UserModel.findOne({
      email: data.email,
      password: data.password,
    });
    if (result == null) {
      response.status(200).send({
        status: true,
        message: "wrong username or password",
      });
    } else {
      response.status(200).send({
        status: true,
        message: "Login Successfully!!",
      });
    }
  } catch (error) {
    response.status(500).send({
      status: true,
      error,
    });
  }
};

module.exports.signUp = async (request, response) => {
  let data = request.body;
  try {
    //create instance
    let newUser = new UserModel({
      full_name: data.full_name,
      email: data.email,
      mobile: data.mobile,
      password: data.password,
    });
    //   save method
    let result = await newUser.save();

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
