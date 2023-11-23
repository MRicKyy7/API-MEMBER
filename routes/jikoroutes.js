import { Router } from "express";
import { addNewJiko, deleteJiko, editJiko, getAllJiko, getAllJikobyid } from "../controllers/jikocontroller.js";

const jikoRouter = Router();

jikoRouter.get("/", getAllJiko);
jikoRouter.get("/:jikoId", getAllJikobyid);
jikoRouter.post("/", addNewJiko);
jikoRouter.put("/", editJiko);
jikoRouter.delete("/:jikoId", deleteJiko);

export default jikoRouter;
