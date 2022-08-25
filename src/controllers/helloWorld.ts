import { Router } from "express";

const router = Router();

router.get("/hello", async (req, res) => {
  res.status(200).json({
    name: "Hello",
    surname: "World",
  });
});

export default router;
