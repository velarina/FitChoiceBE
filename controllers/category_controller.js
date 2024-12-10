const category = require("../models/category");

module.exports = {
  data: async (_req, res) => {
    try {
      const categories = await category.findAll();
      return res.status(200).json({
        status: 200,
        message: "Category succesfully sent.",
        categories: categories,
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
      const _category = await category.findOne({
        where: {
          categoryID: req.params.id,
        },
      });
      if (!_category) {
        return res.status(404).json({
          status: 404,
          message: "Category not found.",
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "Category succesfully sent.",
          category: _category,
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
      const _category = await category.create({
        categoryName: req.body.categoryName,
      });
      return res.status(201).json({
        status: 201,
        message: "Category succesfully created.",
        category: _category,
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
    const _category = await category.update(
      {
        categoryName: req.body.categoryName,
      },
      {
        where: {
          categoryID: req.params.id,
        },
      },
    );
    if (!_category) {
      return res.status(404).json({
        status: 404,
        message: "Category not found.",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Category successfully updated.",
      });
    }
  },
  delete: async (req, res) => {
    const _category = await category.destroy({
      where: {
        categoryID: req.params.id,
      },
    });
    if (!_category) {
      return res.status(404).json({
        status: 404,
        message: "Category not found.",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Category successfully deleted.",
      });
    }
  },
};
