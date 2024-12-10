const ingredient = require("../models/ingredient");
const nutrient = require("../models/nutrient");
const product = require("../models/product");
const product_ingredient = require("../models/product_ingredient");
const product_nutrient = require("../models/product_nutrient");

module.exports = {
  data: async (_req, res) => {
    try {
      const products = await product.findAll();
      return res.status(200).json({
        status: 200,
        message: "Products succesfully sent",
        products: products,
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
      const _product = await product.findOne({
        where: {
          productID: req.params.id,
        },
      });
      if (!_product) {
        return res.status(404).json({
          status: 404,
          message: "Product not found.",
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "Product succesfully sent.",
          product: _product,
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
      const _product = await product.create({
        productsName: req.body.productsName,
        productsBrand: req.body.productsBrand,
        comment: req.body.comment,
        approval: req.body.approval,
        certification: req.body.certification,
        yearsOfExperience: req.body.yearsOfExperience,
      });

      const nutrients = req.body.nutrients.split(", ");

      for (const _nutrient of nutrients) {
        const isExist = await nutrient.findOne({
          where: { name: _nutrient.trim() },
        });
        if (isExist) {
          await product_nutrient.create({
            productID: _product.productID,
            nutrientID: isExist.nutrientID,
          });
        }
      }

      const ingriedients = req.body.ingredients.split(", ");
      for (const _ingredient of ingredients) {
        const isExist = await ingredient.findOne({
          where: { name: _ingredient.trim() },
        });
        if (isExist) {
          await product_ingredient.create({
            productID: _product.productID,
            ingredientID: isExist.ingredientID,
          });
        }
      }

      return res.status(201).json({
        status: 201,
        message: "Product succesfully created.",
        product: _product,
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
    const _product = await product.update(
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
      },
    );
    if (!_product) {
      return res.status(404).json({
        status: 404,
        message: "Product not found.",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Product successfully updated.",
        product: _product,
      });
    }
  },
  delete: async (req, res) => {
    await product.destroy({
      where: {
        productID: req.params.id,
      },
    });
    if (!_product) {
      return res.status(404).json({
        status: 404,
        message: "Product not found.",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Product successfully deleted.",
      });
    }
  },
};
