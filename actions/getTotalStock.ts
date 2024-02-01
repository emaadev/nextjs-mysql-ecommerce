import prismadb from "@/lib/prismadb";

export const getTotalStock = async (storeId: string) => {
  const stockCount = await prismadb.product.count({
    where: {
      storeId,
      isArchived: true,
    },
  });

  return stockCount;
};
