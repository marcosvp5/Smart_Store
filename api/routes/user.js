const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");
const { verifyTokenAdmin } = require("../middelware/auth.middelware");

router.get("/:_id", UserController.findOneUser);

router.post("/create", UserController.createUser);
router.post("/ordenes/:_id", UserController.addProduct);
router.post("/favoritos/:_id", UserController.addFav);
router.post("/carrito/:_id", UserController.addToCart);
router.post("/cat", UserController.createCategory);

router.get("/", verifyTokenAdmin, UserController.getAllUser);

router.put("/deleteFav/:_id", UserController.deleteFav);
router.put("/deletecarrito/:_id", UserController.deleteCart); 
router.put("/deletecarritoAll/:_id", UserController.deleteCartAll);
router.put("/:_id", verifyTokenAdmin, UserController.deleteUser);
router.put("/admin/:_id", verifyTokenAdmin, UserController.addAdmin);
router.put("/dadmin/:_id", verifyTokenAdmin, UserController.deleteAdmin);
router.put("/cat/edit/:_id", UserController.editCategory);
router.put("/cat/:_id", UserController.deleteCategory);

module.exports = router;
