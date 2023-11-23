import { Router } from "express";
import { getAllTeam, InsertTeam, UpdateTeam, DeleteTeam } from "../controllers/teamcontroller.js";

const teamRouter = Router();

teamRouter.get("/", getAllTeam);
teamRouter.post("/", InsertTeam);
teamRouter.put("/", UpdateTeam);
teamRouter.delete("/:teamId", DeleteTeam);

export default teamRouter;
