"use client";

import { useRouter, useParams } from "next/navigation";
import { Plus } from "lucide-react";

import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/shared/DataTable";

import { SizesClientProps } from "@/interfaces";
import { columns } from "./columns";
import ApiList from "@/components/shared/ApiList";

const SizeClient = ({ data }: SizesClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <main>
      <section className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
        />

        <Button
          className=""
          onClick={() => router.push(`/${params.storeId}/sizes/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </section>

      <Separator className="mt-4 mb-8" />

      {/* TODO: Create a button to select the searchKey */}
      <DataTable searchKey="name" columns={columns} data={data} />

      <Heading title="API" description="API calls for Sizes" />
      <Separator className="mt-4 mb-8" />

      <ApiList entityName="sizes" entityIdName="sizeId" />
    </main>
  );
};

export default SizeClient;
