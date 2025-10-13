import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

// ИСПРАВЛЕНО: POST вместо GET
router.post("/signup", signup);

// Для логина тоже нужно POST
/* router.post("/login", login); */ // если будет контроллер login

router.get("/logout", (req, res) => {
  res.send("Logout endpoint");
});

export default router;
