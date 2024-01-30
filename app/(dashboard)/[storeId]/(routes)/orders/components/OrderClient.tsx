"use client";

import Heading from "@/components/shared/Heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/shared/DataTable";

import { OrderClientProps } from "@/interfaces";
import { columns } from "./columns";

const OrderClient = ({ data }: OrderClientProps) => {
  return (
    <main>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />

      <Separator className="mt-4 mb-8" />

      {/* TODO: Create a button to select the searchKey */}
      <DataTable searchKey="products" columns={columns} data={data} />
      <Separator className="mt-4 mb-8" />
    </main>
  );
};

export default OrderClient;
