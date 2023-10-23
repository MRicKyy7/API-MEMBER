import { Router } from "express";
import {
    addNewJiko,
    deleteJiko,
    editJiko,
    getAllJiko,
} from "../controllers/jikocontroller.js";

const jikoRouter = Router();

jikoRouter.get("/", getAllJiko);
jikoRouter.post("/", addNewJiko);
jikoRouter.put("/", editJiko);
jikoRouter.delete("/", deleteJiko);

export default jikoRouter;