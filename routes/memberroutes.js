import { Router } from "express";
import {
    addNewMember,
    // deleteMemberbyId,
    editJumlahShow,
    editMember,
    getAllMembers,
} from "../controllers/membercontroller.js";

const memberRouter = Router();

memberRouter.get("/", getAllMembers);
memberRouter.post("/", addNewMember);
memberRouter.put("/jumlah-show", editJumlahShow);
memberRouter.put("/", editMember);
// memberRouter.delete("/", deleteMemberbyId);

export default memberRouter;