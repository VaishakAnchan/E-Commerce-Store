import express from "express";
import {
  logIn,
  logOut,
  signUp,
  refreshToken,
  getProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signUp);

router.post("/logIn", logIn);

router.post("/logOut", logOut);

router.post("/refresh-Token", refreshToken);

router.get("/profile", protectRoute, getProfile);

export default router;
