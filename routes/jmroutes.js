import { Router } from "express";
import { deleteJM, getAllJM, addNewJM, updateJM } from "../controllers/jmcontroller.js";

const jmRouter = Router();

jmRouter.get("/", getAllJM);
jmRouter.post("/", addNewJM);
jmRouter.put("/", updateJM);
jmRouter.delete("/:memberId", deleteJM);

export default jmRouter;
