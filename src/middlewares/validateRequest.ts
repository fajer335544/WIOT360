import { Request, Response, NextFunction } from "express";
import { ZodError  ,AnyZodObject } from "zod";

export const validateRequest = (schema: AnyZodObject, type: "body" | "params" = "body") => {

  // console.log("i am here validateRequest")

  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req[type]);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
};
