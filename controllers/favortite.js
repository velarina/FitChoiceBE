const favorite = require("../models/favorite");

module.exports = {
  data: async (_req, res) => {
    try {
      const favorites = await favorite.findAll();
      return res.status(200).json({
        status: 200,
        message: "data succesfully sent",
        data: favorites,
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
      const favorites = await favorite.findOne({
        where: {
          favoriteID: req.params.id,
        },
      });
      if (favorite == null) {
        return res.status(404).json({
          status: 404,
          message: "data not found",
          data: null,
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "data succesfully sent",
          data: favorites,
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
      const favorites = await favorite.create({
        favoriteName: req.body.favoriteName,
      });
      return res.status(201).json({
        status: 201,
        message: "data succesfully created",
        data: favorites,
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
    console.log("type of:", req.body.favoriteID);
    const favorites = await favorite.update(
      {
        favoriteName: req.body.favoriteName,
      },
      {
        where: {
          favoriteID: req.params.id,
        },
      },
    );
    if (favorites == null) {
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
    const favorites = favorite.destroy({
      where: {
        favoriteID: req.params.id,
      },
    });
    if (favorites == null) {
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
