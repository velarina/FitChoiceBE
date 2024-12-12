const nutritionist = require("../models/nutritionist");
const bcrypt = require('bcrypt');

module.exports = {
  data: async (_req, res) => {
    try {
      const nutritionists = await nutritionist.findAll();
      return res.status(200).json({
        status: 200,
        message: "Nutritionists succesfully sent.",
        nutritionists: nutritionists,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  index: async (req, res) => {
    try {
      const _nutritionist = await nutritionist.findOne({
        where: {
          nutritionistID: req.params.id,
        },
      });
      if (!_nutritionist) {
        return res.status(404).json({
          status: 404,
          message: "Nutritionist not found.",
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "Nutritionist succesfully sent.",
          nutritionist: _nutritionist,
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  store: async (req, res) => {
    try {
      const _nutritionist = await nutritionist.create({
        nutritionistName: req.body.nutritionistName,
        nutritionistEmail: req.body.nutritionistEmail,
        password: await bcrypt.hash(req.body.password, 10),
        specialization: req.body.specialization,
        certification: req.body.certification,
        yearsOfExperience: req.body.yearsOfExperience,
      });
      return res.status(201).json({
        status: 201,
        message: "Nutritionist succesfully created.",
        nutritionist: _nutritionist,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  update: async (req, res) => {
    const _nutritionist = await nutritionist.update(
      {
        nutritionistName: req.body.nutritionistName,
        nutritionistEmail: req.body.nutritionistEmail,
        password: await bcrypt.hash(req.body.password, 10),
        specialization: req.body.specialization,
        certification: req.body.certification,
        yearsOfExperience: req.body.yearsOfExperience,
      },
      {
        where: {
          nutritionistID: req.params.id,
        },
      },
    );
    if (!_nutritionist) {
      return res.status(404).json({
        status: 404,
        message: "Nutritionist not found.",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Nutritionist successfully updated.",
        nutritionist: _nutritionist,
      });
    }
  },
  delete: async (req, res) => {
    const _nutritionist = nutritionist.destroy({
      where: {
        nutritionistID: req.params.id,
      },
    });
    if (!_nutritionist) {
      return res.status(404).json({
        status: 404,
        message: "Nutritionist not found.",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Nutritionist successfully deleted.",
      });
    }
  },
};
