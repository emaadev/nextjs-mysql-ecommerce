import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { UserButton, auth } from "@clerk/nextjs";

import StoreSwitcher from "@/components/shared/StoreSwitcher";
import MainNav from "@/components/shared/MainNav";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <main className="border-b">
      <div className="flex h-16 items-center justify-center px-4">
        <StoreSwitcher items={stores} />

        <MainNav />

        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </main>
  );
};

export default Navbar;
