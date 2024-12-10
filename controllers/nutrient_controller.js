const nutrient = require("../models/nutrient");
const products = require("../models/product");

module.exports = {
  data: async (req, res) => {
    try {
      const nutrients = await nutrient.findAll();

      return res.status(200).json({
        status: 200,
        message: "Nutrients successfully sent.",
        nutrients: nutrients,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  index: async (req, res) => {
    try {
      const _nutrient = await nutrient.findOne({
        where: {
          id: req.params.id,
        },
        include: {
          model: products,
        },
      });

      if (!_nutrient) {
        return res.status(404).json({
          status: 404,
          message: "Nutrient not found.",
        });
      }

      return res.status(200).json({
        status: 200,
        message: "Nutrient sent successfully.",
        nutrient: _nutrient,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  store: async (req, res) => {
    try {
      const _nutrient = await nutrient.create({
        nutrientName: req.body.nutrientName,
      });

      return res.status(201).json({
        status: 201,
        message: "Nutrient successfully created.",
        nutrient: _nutrient,
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
    try {
      const _nutrient = await nutrient.update(
        {
          nutrientName: req.body.nutrientName,
        },
        { where: { nutrientID: req.params.id } },
      );

      if (!_nutrient) {
        return res.status(404).json({
          status: 404,
          message: "Nutrient not found.",
        });
      }

      return res.status(200).json({
        status: 200,
        message: "Nutrient updated.",
        nutrient: _nutrient,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  delete: async (req, res) => {
    try {
      await nutrient.destroy({ where: { nutrientID: req.params.id } });

      return res.status(200).json({
        status: 200,
        message: "Nutrient successfully deleted.",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
};
