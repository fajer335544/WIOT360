import { Router } from "express";
import {
  createSchedule,
  getAllSchedules,
  updateSchedule,
  deleteSchedule,
  getScheduleById,
} from "../Controllers/schedule.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { createScheduleSchema, updateScheduleSchema, idSchema } from "../validators/schedule.validator";

const router = Router();

 router.get("/", getAllSchedules);

 router.get("/:id", validateRequest(idSchema, "params"), getScheduleById);

 router.post("/", validateRequest(createScheduleSchema), createSchedule);
 router.put("/:id", validateRequest(idSchema, "params"), validateRequest(updateScheduleSchema), updateSchedule);
router.delete("/:id", validateRequest(idSchema, "params"), deleteSchedule);

export default router;
