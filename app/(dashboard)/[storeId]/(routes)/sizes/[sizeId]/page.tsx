import Size from "@/components/Size";
import prismadb from "@/lib/prismadb";

const SizePage = async ({ params }: { params: { sizeId: string } }) => {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });

  return (
    <main className="flex-col">
      <section className="flex-1 space-y-4 p-8 pt-6">
        <Size initialData={size} />
      </section>
    </main>
  );
};

export default SizePage;
