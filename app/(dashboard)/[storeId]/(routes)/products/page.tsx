import prismadb from "@/lib/prismdb";

import { format } from "date-fns";

import { ProductColumn } from "./components/columns";
import ProductClient from "./components/ProductClient";
import { formatter } from "@/lib/utils";

const ProductsPage = async ({ params }: { params: { storeId: string } }) => {
  const products = await prismadb.product.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedProducts: ProductColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    price: formatter.format(item.price.toNumber()),
    category: item.category.name,
    size: item.size.name,
    color: item.color.value,
    isFeatured: item.isFeatured,
    isArchived: item.isArchived,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <main className="flex-col">
      <section className="flex-1 space-y-4 p-8 pt-6">
        <ProductClient data={formattedProducts} />
      </section>
    </main>
  );
};

export default ProductsPage;
