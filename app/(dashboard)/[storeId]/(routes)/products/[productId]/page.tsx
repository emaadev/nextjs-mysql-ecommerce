import Product from "@/components/Product";
import prismadb from "@/lib/prismdb";

const ProductPage = async ({
  params,
}: {
  params: { storeId: string; productId: string };
}) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
    },
  });

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <main className="flex-col">
      <section className="flex-1 space-y-4 p-8 pt-6">
        <Product
          initialData={product}
          categories={categories}
          colors={colors}
          sizes={sizes}
        />
      </section>
    </main>
  );
};

export default ProductPage;
