import prismadb from "@/lib/prismdb";

import { format } from "date-fns";

import { ColorColumn } from "./components/columns";
import ColorClient from "./components/ColorClient";

const ColorsPage = async ({ params }: { params: { storeId: string } }) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedColors: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <main className="flex-col">
      <section className="flex-1 space-y-4 p-8 pt-6">
        <ColorClient data={formattedColors} />
      </section>
    </main>
  );
};

export default ColorsPage;
