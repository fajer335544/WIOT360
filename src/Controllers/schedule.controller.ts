import { Request, Response } from "express";
import prisma  from "../prisma/client"; 
import {idSchema} from "../validators/schedule.validator"
import { successResponse, errorResponse } from "../utils/Response";

import {
  createScheduleService,
  getAllSchedulesService,
  getScheduleByIdService,
  updateScheduleService,
  deleteScheduleService,
  checkVehicleTypeExistsService,
  checkVehicleTypesExistService,
} from "../Services/schedule.service";

export const createSchedule = async (req: Request, res: Response) => {
  try {
    // Validate the request body
    const validatedData =req.body;
   
    const vehicleTypes = await checkVehicleTypesExistService();
    if (vehicleTypes.length === 0) {
      return errorResponse(res, "Vehicle Type not found!");
    }

    const newSchedule = await createScheduleService(validatedData);

    
    successResponse(res, "Schedual Added successfully", newSchedule);
  } catch (error) {
    errorResponse(res, "Failed to Add Schedual");
  }
};
export const getAllSchedules = async (req: Request, res: Response) => {
  try {
    const schedules = await getAllSchedulesService();
    if (schedules.length === 0) {
      return errorResponse(res, "No schedules found.");
    }

 
    successResponse(res, "Scheduals Getted successfully", schedules);
  } catch (error) {
    console.log(error)
    errorResponse(res, "Failed to fetched scheduals");
  }
};



export const getScheduleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validatedId = idSchema.parse({ id });
console.log("test",validatedId)
    const schedule = await getScheduleByIdService(validatedId.id);
    if (!schedule) {
      return errorResponse(res, "Schedule not found.");
    }

  
    successResponse(res, "Schedual Getted successfully", schedule);
  } catch (error) {
    console.log(error)
    errorResponse(res, "Failed to fetched schedual");
  }
};

export const updateSchedule = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validatedId = idSchema.parse({ id });
    const validatedData = req.body;
  
    const vehicleType = await checkVehicleTypeExistsService(validatedData.vehicleTypeId);
    if (!vehicleType) {
      return errorResponse(res, "Vehicle type not found.");
    }

    const updatedSchedule = await updateScheduleService(validatedId.id, validatedData);
 
    successResponse(res, "updatedSchedule  successfully", updatedSchedule);
  } catch (error) {
    errorResponse(res, "Failed to Updated schedual");
  }
};

export const deleteSchedule = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validatedId = idSchema.parse({ id });

  
    await deleteScheduleService(validatedId.id)

   
    successResponse(res, "Schedual deleted successfully");
  } catch (error) {
    errorResponse(res, "Failed to delete0 schedual");
  }
};
