import prisma from "../prisma/client";

export const createVehicleTypeService = async (type: string, count: number, operationId: string) => {
  return prisma.vehicleType.create({
    data: { type, count, operationId },
  });
};

export const getAllVehicleTypesService = async () => {
  return prisma.vehicleType.findMany();
};

export const getVehicleTypeByIdService = async (id: string) => {
  return prisma.vehicleType.findUnique({
    where: { id },
  });
};

export const updateVehicleTypeService = async (id: string, type: string, count: number, operationId: string) => {
  return prisma.vehicleType.update({
    where: { id },
    data: { type, count, operationId },
  });
};

export const deleteVehicleTypeService = async (id: string) => {
  return prisma.vehicleType.delete({
    where: { id },
  });
};

export const checkOperationExistsService = async (operationId: string) => {
  return prisma.operation.findUnique({
    where: { id: operationId },
  });
};
