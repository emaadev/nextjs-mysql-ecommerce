import prismadb from "@/lib/prismadb";

import Category from "@/components/Category";

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <main className="flex-col">
      <section className="flex-1 space-y-4 p-8 pt-6">
        <Category billboards={billboards} initialData={category} />
      </section>
    </main>
  );
};

export default CategoryPage;
