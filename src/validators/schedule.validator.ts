import { z } from "zod";

// MongoDB ObjectId Regex
const objectIdPattern = /^[a-f\d]{24}$/i;

export const createScheduleSchema = z.object({
  source: z.string().min(1, "Source is required"),
  destination: z.string().min(1, "Destination is required"),
  duration: z.number().int().positive("Duration must be a positive number"),
  distance: z.number().positive("Distance must be a positive number"),
  vehicleTypeId: z.string().regex(objectIdPattern, "Invalid vehicleTypeId format"),
});

export const updateScheduleSchema = z.object({
  source: z.string().min(1).optional(),
  destination: z.string().min(1).optional(),
  duration: z.number().int().positive().optional(),
  distance: z.number().positive().optional(),
  vehicleTypeId: z.string().regex(objectIdPattern, "Invalid vehicleTypeId format").optional(),
});

export const idSchema = z.object({
  id: z.string().regex(objectIdPattern, "Invalid ID format"),
});
