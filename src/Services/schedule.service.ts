import prisma from "../prisma/client";

export const createScheduleService = async (data: any) => {
  return prisma.schedule.create({
    data,
  });
};

export const getAllSchedulesService = async () => {
  return prisma.schedule.findMany({
    include: { vehicleType: true },
  });
};

export const getScheduleByIdService = async (id: string) => {
  return prisma.schedule.findUnique({
    where: { id },
    include: { vehicleType: true },
  });
};

export const updateScheduleService = async (id: string, data: any) => {
  return prisma.schedule.update({
    where: { id },
    data,
  });
};

export const deleteScheduleService = async (id: string) => {
  return prisma.schedule.delete({
    where: { id },
  });
};

export const checkVehicleTypeExistsService = async (vehicleTypeId: string) => {
  return prisma.vehicleType.findUnique({
    where: { id: vehicleTypeId },
  });
};

export const checkVehicleTypesExistService = async () => {
  return prisma.vehicleType.findMany();
};
