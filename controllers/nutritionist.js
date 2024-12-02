const nutritionist = require("./models/nutritionist");

module.exports = {
  data: async (_req, res) => {
    try {
      const nutritionists = await nutritionist.findAll();
      return res.status(200).json({
        status: 200,
        message: "data succesfully sent",
        data: nutritionists,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        message: error,
        data: null,
      });
    }
  },
  index: async (req, res) => {
    try {
      const nutritionists = await nutritionist.findOne({
        where: {
          nutritionistID: req.params.id,
        },
      });
      if (nutritionist == null) {
        return res.status(404).json({
          status: 404,
          message: "data not found",
          data: null,
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "data succesfully sent",
          data: nutritionists,
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        message: error.body,
        data: null,
      });
    }
  },
  store: async (req, res) => {
    try {
      const nutritionists = await nutritionist.create({
        nutritionistName: req.body.nutritionistName,
        nutritionistEmail: req.body.nutritionistEmail,
        password: req.body.password,
        specialization: req.body.specialization,
        certification: req.body.certification,
        yearsOfExperience: req.body.yearsOfExperience,
      });
      return res.status(201).json({
        status: 201,
        message: "data succesfully created",
        data: nutritionists,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        message: error.message,
        data: null,
      });
    }
  },
  update: async (req, res) => {
    console.log("type of:", req.body.nutritionistID);
    const nutritionists = await nutritionist.update(
      {
        nutritionistName: req.body.nutritionistName,
        nutritionistEmail: req.body.nutritionistEmail,
        password: req.body.password,
        specialization: req.body.specialization,
        certification: req.body.certification,
        yearsOfExperience: req.body.yearsOfExperience,
      },
      {
        where: {
          nutritionistID: req.params.id,
        },
      }
    );
    if (nutritionists == null) {
      return res.status(404).json({
        status: 404,
        message: "data not found",
        data: null,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "data successfully updated",
      });
    }
  },
  delete: async (req, res) => {
    const nutritionists = nutritionist.destroy({
      where: {
        nutritionistID: req.params.id,
      },
    });
    if (nutritionists == null) {
      return res.status(404).json({
        status: 404,
        message: "data not found",
        data: null,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "data successfully deleted",
      });
    }
  },
};
