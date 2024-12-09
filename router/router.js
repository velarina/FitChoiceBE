const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin_controller");
const categoryController = require("../controllers/category_controller");
const favoriteController = require("../controllers/favorite_controller");
const ingredientController = require("../controllers/ingredient_controller");
const memberController = require("../controllers/member_controller");
const nutritionistController = require("../controllers/nutritionist_controller");

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

router.get("/member/", ingredientController.data);
router.get("/member/id/:memberID", ingredientController.index);
router.post("/member", ingredientController.store);
router.put("/member/:memberID", ingredientController.update);
router.delete("/member/:memberID", ingredientController.delete);

router.get("/member/", ingredientController.data);
router.get("/member/id/:memberID", ingredientController.index);
router.post("/member", ingredientController.store);
router.put("/member/:memberID", ingredientController.update);
router.delete("/member/:memberID", ingredientController.delete);

module.exports = router;
