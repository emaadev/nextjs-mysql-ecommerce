"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const MainNav = () => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Dashboard",
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav className="flex items-center justify-center mx-6 space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`text-sm font-medium transitions-colors hover:text-primary ${
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          }`}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
