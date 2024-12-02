const category = require("./models/category");

module.exports = {
  data: async (_req, res) => {
    try {
      const categories = await category.findAll();
      return res.status(200).json({
        status: 200,
        message: "data succesfully sent",
        data: categories,
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
      const categories = await category.findOne({
        where: {
          categoryID: req.params.id,
        },
      });
      if (category == null) {
        return res.status(404).json({
          status: 404,
          message: "data not found",
          data: null,
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "data succesfully sent",
          data: categories,
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
      const categories = await category.create({
        categoryName: req.body.categoryName,
      });
      return res.status(201).json({
        status: 201,
        message: "data succesfully created",
        data: categories,
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
    console.log("type of:", req.body.categoryID);
    const categories = await category.update(
      {
        categoryName: req.body.categoryName,
      },
      {
        where: {
          categoryID: req.params.id,
        },
      }
    );
    if (categories == null) {
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
    const categories = category.destroy({
      where: {
        categoryID: req.params.id,
      },
    });
    if (categories == null) {
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
