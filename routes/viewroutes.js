import { Router } from "express";
import { getViewJiko , getViewTeam } from "../controllers/viewcontroller.js";

const viewRouter = Router();

viewRouter.get("/jiko", getViewJiko);
viewRouter.get("/team", getViewTeam)

export default viewRouter;
