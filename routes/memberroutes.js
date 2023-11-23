import { Router } from "express";
import { addNewMember, deleteMemberbyId, editJumlahShow, editMember, getAllMembers, getMembersById } from "../controllers/membercontroller.js";

const memberRouter = Router();

memberRouter.get("/", getAllMembers);
memberRouter.post("/", addNewMember);
memberRouter.patch("/jumlah-show", editJumlahShow);
memberRouter.put("/", editMember);
memberRouter.delete("/:memberId", deleteMemberbyId);
memberRouter.get("/:memberId", getMembersById);

export default memberRouter;
