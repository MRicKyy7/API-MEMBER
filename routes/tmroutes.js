import { Router } from "express";
import { deleteTM, moveMember, getAllTM, addNewTM } from "../controllers/tmcontroller.js";

const tmRouter = Router();

tmRouter.get("/", getAllTM);
tmRouter.post("/", addNewTM);
tmRouter.put("/", moveMember);
tmRouter.delete("/:memberId", deleteTM);

export default tmRouter;
