const ingredient = require("../models/ingredient");

module.exports = {
  data: async (_req, res) => {
    try {
      const ingredients = await ingredient.findAll();
      return res.status(200).json({
        status: 200,
        message: "Ingredients succesfully sent.",
        ingredients: ingredients,
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
      const _ingredient = await ingredient.findOne({
        where: {
          ingredientID: req.params.id,
        },
      });
      if (!_ingredient) {
        return res.status(404).json({
          status: 404,
          message: "Ingredient not found.",
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "Ingredient succesfully sent.",
          ingredient: _ingredient,
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
      const _ingredient = await ingredient.create({
        ingredientName: req.body.ingredientName,
      });
      return res.status(201).json({
        status: 201,
        message: "Ingredient succesfully created.",
        ingredient: _ingredient,
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
    const _ingredient = await ingredient.update(
      {
        ingredientName: req.body.ingredientName,
      },
      {
        where: {
          ingredientID: req.params.id,
        },
      },
    );
    if (!_ingredient) {
      return res.status(404).json({
        status: 404,
        message: "Ingredient not found.",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Ingredient successfully updated.",
        ingredient: _ingredient,
      });
    }
  },
  delete: async (req, res) => {
    const _ingredient = await ingredient.destroy({
      where: {
        ingredientID: req.params.id,
      },
    });
    if (_ingredient == null) {
      return res.status(404).json({
        status: 404,
        message: "Ingredient not found.",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Ingredient successfully deleted.",
      });
    }
  },
};
