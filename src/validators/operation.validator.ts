import { z } from "zod";

export const createOperationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  vehicleTypes: z.array(
    z.object({
      type: z.string().min(1, "Type is required"),
      count: z.number().min(1, "Count must be greater than 0"),
    })
  ).min(1, "At least one vehicle type is required"),
});

export const updateOperationSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
 
});
