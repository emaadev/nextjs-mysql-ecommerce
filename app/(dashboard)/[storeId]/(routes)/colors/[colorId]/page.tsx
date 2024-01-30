import Color from "@/components/Color";
import prismadb from "@/lib/prismadb";

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  const color = await prismadb.color.findUnique({
    where: {
      id: params.colorId,
    },
  });

  return (
    <main className="flex-col">
      <section className="flex-1 space-y-4 p-8 pt-6">
        <Color initialData={color} />
      </section>
    </main>
  );
};

export default ColorPage;
