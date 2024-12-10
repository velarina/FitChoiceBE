const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin_controller");
const categoryController = require("../controllers/category_controller");
const favoriteController = require("../controllers/favorite_controller");
const ingredientController = require("../controllers/ingredient_controller");
const memberController = require("../controllers/member_controller");
const nutritionistController = require("../controllers/nutritionist_controller");
const productController = require("../controllers/product_controller");

router.get("/admin", adminController.data);
router.get("/admin/:adminID", adminController.index);
router.post("/admin", adminController.store);
router.put("/admin/:adminID", adminController.update);
router.delete("/admin/:adminID", adminController.delete);

router.get("/category/", categoryController.data);
router.get("/category/id/:categoryID", categoryController.index);
router.post("/category", categoryController.store);
router.put("/category/:categoryID", categoryController.update);
router.delete("/category/:categoryID", categoryController.delete);

router.get("/favorite/", favoriteController.data);
router.get("/favorite/id/:favoriteID", favoriteController.index);
router.post("/favorite", favoriteController.store);
router.put("/favorite/:favoriteID", favoriteController.update);
router.delete("/favorite/:favoriteyID", favoriteController.delete);

router.get("/ingredient/", ingredientController.data);
router.get("/ingredient/id/:ingredientID", ingredientController.index);
router.post("/ingredient", ingredientController.store);
router.put("/ingredient/:ingredientID", ingredientController.update);
router.delete("/ingredient/:ingredientID", ingredientController.delete);

router.get("/member/", memberController.data);
router.get("/member/id/:memberID", memberController.index);
router.post("/member", memberController.store);
router.put("/member/:memberID", memberController.update);
router.delete("/member/:memberID", memberController.delete);

router.get("/nutritionist/", nutritionistController.data);
router.get("/nutritionist/id/:nutritionistID", nutritionistController.index);
router.post("/nutritionist", nutritionistController.store);
router.put("/nutritionist/:nutritionistID", nutritionistController.update);
router.delete("/nutritionist/:nutritionistID", nutritionistController.delete);

router.get("/product/", productController.data);
router.get("/product/id/:productID", productController.index);
router.post("/product", productController.store);
router.put("/product/:productID", productController.update);
router.delete("/product/:productID", productController.delete);

module.exports = router;
