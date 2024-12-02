const product = require("./models/product");

module.exports = {
  data: async (_req, res) => {
    try {
      const products = await product.findAll();
      return res.status(200).json({
        status: 200,
        message: "data succesfully sent",
        data: products,
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
      const products = await product.findOne({
        where: {
          productID: req.params.id,
        },
      });
      if (product == null) {
        return res.status(404).json({
          status: 404,
          message: "data not found",
          data: null,
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "data succesfully sent",
          data: products,
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
      const products = await product.create({
        productsName: req.body.productsName,
        productsBrand: req.body.productsBrand,
        comment: req.body.comment,
        approval: req.body.approval,
        certification: req.body.certification,
        yearsOfExperience: req.body.yearsOfExperience,
      });
      return res.status(201).json({
        status: 201,
        message: "data succesfully created",
        data: products,
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
    console.log("type of:", req.body.productID);
    const products = await product.update(
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
          productID: req.params.id,
        },
      }
    );
    if (products == null) {
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
    const products = product.destroy({
      where: {
        productID: req.params.id,
      },
    });
    if (products == null) {
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
