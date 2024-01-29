"use client";

import { useRouter, useParams } from "next/navigation";
import { Plus } from "lucide-react";

import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/shared/DataTable";

import { ColorClientProps } from "@/interfaces";
import { columns } from "./columns";
import ApiList from "@/components/shared/ApiList";

const ColorClient = ({ data }: ColorClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <main>
      <section className="flex items-center justify-between">
        <Heading
          title={`Colors (${data.length})`}
          description="Manage colors for your products"
        />

        <Button
          className=""
          onClick={() => router.push(`/${params.storeId}/colors/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </section>

      <Separator className="mt-4 mb-8" />

      {/* TODO: Create a button to select the searchKey */}
      <DataTable searchKey="name" columns={columns} data={data} />

      <Heading title="API" description="API calls for Colors" />
      <Separator className="mt-4 mb-8" />

      <ApiList entityName="colors" entityIdName="colorId" />
    </main>
  );
};

export default ColorClient;
