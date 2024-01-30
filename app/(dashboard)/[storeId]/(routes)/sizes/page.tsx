import prismadb from "@/lib/prismadb";

import { format } from "date-fns";

import { SizeColumn } from "./components/columns";
import SizeClient from "./components/SizeClient";

const SizesPage = async ({ params }: { params: { storeId: string } }) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <main className="flex-col">
      <section className="flex-1 space-y-4 p-8 pt-6">
        <SizeClient data={formattedSizes} />
      </section>
    </main>
  );
};

export default SizesPage;
