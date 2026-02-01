import express from "express";
import {
  createTask,
  updateTask,
  deleteTask,
  getProjectTasks
} from "../controllers/taskController.js";

const taskRouter = express.Router();

// get all tasks of a project
taskRouter.get("/project/:projectId", getProjectTasks);

// create task
taskRouter.post("/", createTask);

// update task
taskRouter.put("/:taskId", updateTask);

// delete task
taskRouter.delete("/:taskId", deleteTask);

export default taskRouter;
