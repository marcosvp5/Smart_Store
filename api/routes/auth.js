const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const AuthController = require("../controllers/auth.controller");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { verifyToken } = require("../middelware/auth.middelware");

router.post("/signup", AuthController.register);
router.post("/login", AuthController.signIn);
router.post("/logout", AuthController.logOut);

router.get("/me", verifyToken);

module.exports = router;
