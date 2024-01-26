import BillboardClient from "@/components/BillboardClient";

const BillboardsPage = () => {
  return (
    <main className="flex-col">
      <section className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient />
      </section>
    </main>
  );
};

export default BillboardsPage;
