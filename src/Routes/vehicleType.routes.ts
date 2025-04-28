import express from "express";
import {
  createVehicleType,
  getAllVehicleTypes,
  getVehicleTypeById,
  updateVehicleType,
  deleteVehicleType,
} from "../Controllers/vehicleType.controller";


import { updateVehicleTypeSchema, createVehicleTypeSchema,objectIdParamSchema } from "../validators/vehicleType.validator";
import { validateRequest } from "../middlewares/validateRequest";
const router = express.Router();

router.post("/",validateRequest(createVehicleTypeSchema), createVehicleType);
router.get("/", getAllVehicleTypes);
router.get("/:id", getVehicleTypeById);
router.put("/:id",validateRequest(updateVehicleTypeSchema), updateVehicleType);

router.delete("/:id",validateRequest(objectIdParamSchema, "params"), deleteVehicleType);

export default router;
