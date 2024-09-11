import { Router } from "express";
import {
  acceptRequest,
  createGroup,
  deleteRequest,
  getAllGroups,
  getGroupDetails,
  getGroupsByHashtag,
  getGroupsByPopularity,
  joinGroup,
  removePerson,
  sendMessage,
} from "../controllers/group.controller.js";
import {adminRoute} from "../middleware/adminRoute.js";

const router = Router();

router.get("/", getAllGroups);
router.get("/popular", getGroupsByPopularity);
router.get("/hashtag/:hashtag", getGroupsByHashtag);
router.get("/:groupId", getGroupDetails);
router.post("/create", createGroup);
router.post("/join/:groupId", joinGroup);
router.post("/:groupId/acceptRequest/:id",adminRoute, acceptRequest);
router.post("/:groupId/deleteRequest/:id",adminRoute, deleteRequest);
router.post("/:groupId/remove/:id", adminRoute, removePerson);
router.post("/:groupId/message/send", sendMessage);

export default router;
