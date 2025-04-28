import { Request, Response } from "express";
import  prisma  from "../prisma/client";

import { successResponse, errorResponse } from "../utils/Response";
import {
  createVehicleTypeService,
  getAllVehicleTypesService,
  getVehicleTypeByIdService,
  updateVehicleTypeService,
  deleteVehicleTypeService,
  checkOperationExistsService,
} from "../Services/vehicleType.service";

export const createVehicleType = async (req: Request, res: Response) => {
  try {
    const { type, count, operationId } = req.body;

    const operationExists = await checkOperationExistsService(operationId);
    if (!operationExists) {
     return  errorResponse(res, "Operation not found with the provided ID.", 404);
    }

    const newVehicleType = await createVehicleTypeService(type, count, operationId);

 
    successResponse(res, "newVehicleType added successfully", newVehicleType);
  } catch (error) {
    errorResponse(res, "Failed to add newVehicleType");
  }
};

export const getAllVehicleTypes = async (req: Request, res: Response) => {
 
  try {
   
    
    

    const vehicleTypes = await getAllVehicleTypesService();
    // console.log("test",vehicleTypes)
    if (vehicleTypes.length === 0) {
      return errorResponse(res, "No vehicleTypes found.");
    }
    successResponse(res, "vehicleTypes Getted successfully", vehicleTypes);
  } catch (error) {
    console.error("Error fetching vehicleTypes:", error);
    errorResponse(res, "un expected error while getting VehicleTypes");
   
  }
};

export const getVehicleTypeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const vehicleType = await getVehicleTypeByIdService(id);

    if (!vehicleType) {
      return errorResponse(res, "VehicleType not found.", 404);
    }
   

    successResponse(res, "Vehicl Getted successfully", vehicleType);
  } catch (error) {
    errorResponse(res, "un expected error while get this VehicleType");
   
  }
};

export const updateVehicleType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { type, count,operationId } = req.body;

    const operationExists = await checkOperationExistsService(operationId);
    if (!operationExists) {
      return errorResponse(res, "Operation not found with the provided ID.", 404);
    }

    const updatedVehicleType = await updateVehicleTypeService(id, type, count, operationId);
 
    successResponse(res, "Vehicle updated successfully", updatedVehicleType);
  } catch (error) {
    errorResponse(res, "un expected error while update this VehicleType");
   
  }
};

export const deleteVehicleType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteVehicleTypeService(id);

    successResponse(res, "Vehicle type deleted successfully");
  } catch (error) {
    errorResponse(res, "un expected error while Deleting this VehicleType");
    
  }
};
