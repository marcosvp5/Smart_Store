const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/products.controller");
const { verifyToken, verifyTokenAdmin } = require("../middelware/auth.middelware");

router.post("/", ProductController.createProduct);
router.post("/review/:_id", ProductController.addReview);
router.post("/qualify", ProductController.addQualification)

router.get("/", ProductController.getAllProduct);
router.get("/:_id", ProductController.getProductById);
router.get("/name/:name", ProductController.getProductByName);
router.get("/cat/:category", ProductController.getProductByCategory);
router.get("/cat/show", ProductController.getAllCategories);
router.get("/showReviews/:_id", ProductController.getOneProductReviews);

router.put("/edit/:_id", ProductController.editProduct);
router.put("/delete/:_id", ProductController.deleteProduct);

module.exports = router;