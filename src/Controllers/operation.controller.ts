import { Request, Response } from "express";


import { successResponse, errorResponse } from "../utils/Response";
import { createOperationService, getAllOperationsService, updateOperationService, deleteOperationAndRelatedData } from "../Services/operation.service";
export const createOperation = async (req: Request, res: Response) => {
  try {
    
    const validatedData = req.body;
console.log("ok")
    // Create the operation
    const newOperation = await createOperationService(validatedData);

    successResponse(res, "Added successfully", newOperation);
  } catch (error) {
    errorResponse(res, "Failed to Added data");
  }
};

export const getOperations = async (req: Request, res: Response) => {
  try { 
    //get the operations with his vehicles
    const operations = await getAllOperationsService();
    successResponse(res, "Fetched successfully", operations);
   
  } catch (error) {
    errorResponse(res, "Failed to fetched data");
  }
};

export const updateOperation = async (req: Request, res: Response) => {
  try {
    // get the name from request body
    const {name} = req.body;
 
    console.log("Updated Operation")
    // Update the name of operation 
   
    const updatedOperation = await updateOperationService(req.params.id,name)


  
    successResponse(res, "Updated successfully", updatedOperation);
  } catch (error) {
    errorResponse(res, "Failed to Updated data");
  }
};

export const deleteOperation = async (req: Request, res: Response) => {
  try {

    const operationId = req.params.id;

   
    await deleteOperationAndRelatedData(operationId);

   
    successResponse(res, "Operation deleted successfully");
  } catch (error) {
    return res.status(400).json({ message: "Error deleting operation." });
  }
};
