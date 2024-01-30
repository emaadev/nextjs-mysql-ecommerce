import { redirect } from "next/navigation";

import Settings from "@/components/Settings";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

import { SettingsPageProps } from "@/interfaces";

const SettingsPage = async ({ params }: SettingsPageProps) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <main className="flex-col">
      <section className="flex-1 space-y-4 p-8 pt-6">
        <Settings initialData={store} />
      </section>
    </main>
  );
};

export default SettingsPage;
