import { z } from "zod";



const objectIdRegex = /^[a-f\d]{24}$/i;

export const createVehicleTypeSchema = z.object({
  type: z.string({
    required_error: "Vehicle type is required",
  }),
  count: z
    .number({
      required_error: "Vehicle count is required",
    })
    .int()
    .min(1, "Count must be at least 1"),
    operationId: z.string().regex(objectIdRegex, "Invalid MongoDB ObjectId format"),
 
});


export const updateVehicleTypeSchema = z.object({
  type: z.string().optional(),
  count: z.number().int().min(1).optional(),
  operationId: z.string().regex(objectIdRegex, "Invalid MongoDB ObjectId format"),
});

export const objectIdParamSchema = z.object({
    id: z.string().regex(objectIdRegex, "Invalid MongoDB ObjectId format"),
  });