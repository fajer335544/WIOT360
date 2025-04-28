import { Response } from "express";


export const successResponse = (
  res: Response,
  message: string,
  data: any = null,
  status: number = 200
) => {
  return res.status(status).json({
    status,
    message,
    data,
  });
};


export const errorResponse = (
  res: Response,
  message: string,
  status: number = 400
) => {
  return res.status(status).json({
    status,
    message,
  });
};
