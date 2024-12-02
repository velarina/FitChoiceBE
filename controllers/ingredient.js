const ingredient = require("./models/ingredient");

module.exports = {
  data: async (_req, res) => {
    try {
      const ingredients = await ingredient.findAll();
      return res.status(200).json({
        status: 200,
        message: "data succesfully sent",
        data: ingredients,
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
      const ingredients = await ingredient.findOne({
        where: {
          ingredientID: req.params.id,
        },
      });
      if (ingredient == null) {
        return res.status(404).json({
          status: 404,
          message: "data not found",
          data: null,
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "data succesfully sent",
          data: ingredients,
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
      const ingredients = await ingredient.create({
        ingredientName: req.body.ingredientName,
      });
      return res.status(201).json({
        status: 201,
        message: "data succesfully created",
        data: ingredients,
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
    console.log("type of:", req.body.ingredientID);
    const ingredients = await ingredient.update(
      {
        ingredientName: req.body.ingredientName,
      },
      {
        where: {
          ingredientID: req.params.id,
        },
      }
    );
    if (ingredients == null) {
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
    const ingredients = ingredient.destroy({
      where: {
        ingredientID: req.params.id,
      },
    });
    if (ingredients == null) {
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
