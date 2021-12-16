import express from "express";
import { requiresSignin } from "../middlewares";
import {
  login,
  register,
  currentUser,
  forgotPassword,
  
} from "../controllers/users";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/current-user", requiresSignin, currentUser);
router.post("/forgot-password", forgotPassword);
// router.put("/profile-update", requiresSignin, profileUpdate);

module.exports = router;
