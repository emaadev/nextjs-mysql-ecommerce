import prismadb from "@/lib/prismdb";

import { format } from "date-fns";

import { CategoryColumn } from "./components/columns";
import CategoryClient from "./components/CategoryClient";

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <main className="flex-col">
      <section className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient data={formattedCategories} />
      </section>
    </main>
  );
};

export default CategoriesPage;
