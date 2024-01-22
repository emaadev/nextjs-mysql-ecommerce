import prismadb from "@/lib/prismdb";

interface DashboardPage {
  params: { storeId: string };
}

const DashboardPage = async ({ params }: DashboardPage) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Active Store: {store?.name}</div>;
};

export default DashboardPage;
