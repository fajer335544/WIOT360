import { Router } from "express";
import { createOperation, getOperations, updateOperation, deleteOperation } from "../Controllers/operation.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { createOperationSchema, updateOperationSchema } from "../validators/operation.validator";

const router = Router();

// Create operation
router.post("/", validateRequest(createOperationSchema), createOperation);

// Get all operations
router.get("/", getOperations);

// Update operation
router.put("/:id", validateRequest(updateOperationSchema), updateOperation);

// Delete operation
router.delete("/:id", deleteOperation);

export default router;
