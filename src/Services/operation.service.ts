import prisma from "../prisma/client";

export const createOperationService = async (data: any) => {
  return  prisma.operation.create({
      data: {
        name: data.name,
        vehicleTypes: {
          create: data.vehicleTypes.map((vehicle:any) => ({
            type: vehicle.type,
            count: vehicle.count,
          })),
        },
      },
    });
};

export const getAllOperationsService = async () => {
  return prisma.operation.findMany({
        include: {
          vehicleTypes: true,
        },
      });
};

export const updateOperationService = async (id: string, data: any) => {
  console.log("updateOperationService")

  return prisma.operation.update({
    where: { id: id },
    data:{name: data},
  });
};

export const deleteOperationAndRelatedData = async (operationId: string) => {
  // Fetch vehicle types related to the operation
  const vehicleTypes = await prisma.vehicleType.findMany({
    where: { operationId },
  });

  const vehicleTypeIds = vehicleTypes.map(v => v.id);

  // Delete schedules related to those vehicle types
  await prisma.schedule.deleteMany({
    where: {
      vehicleTypeId: { in: vehicleTypeIds }
    }
  });

  // Delete the vehicle types
  await prisma.vehicleType.deleteMany({
    where: { operationId }
  });

  // Delete the operation itself
  await prisma.operation.delete({
    where: { id: operationId }
  });
};
