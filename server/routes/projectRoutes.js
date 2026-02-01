
import express from "express";

const projectRouter = express.Router();

// TEMP TEST ROUTES
projectRouter.get("/test", (req, res) => {
  res.json({ message: "project router working" });
});

export default projectRouter;
