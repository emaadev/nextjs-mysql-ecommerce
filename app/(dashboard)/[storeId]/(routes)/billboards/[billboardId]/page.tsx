import Billboard from "@/components/Billboard";
import prismadb from "@/lib/prismadb";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  return (
    <main className="flex-col">
      <section className="flex-1 space-y-4 p-8 pt-6">
        <Billboard initialData={billboard} />
      </section>
    </main>
  );
};

export default BillboardPage;
