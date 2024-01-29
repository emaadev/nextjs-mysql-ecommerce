"use client";

import { useRouter, useParams } from "next/navigation";
import { Plus } from "lucide-react";

import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/shared/DataTable";

import { CategoryClientProps } from "@/interfaces";
import { columns } from "./columns";
import ApiList from "@/components/shared/ApiList";

const CategoryClient = ({ data }: CategoryClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <main>
      <section className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage categories for your store"
        />

        <Button
          className=""
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </section>

      <Separator className="mt-4 mb-8" />

      {/* TODO: Create a button to select the searchKey (filters) */}
      <DataTable searchKey="name" columns={columns} data={data} />

      <Heading title="API" description="API calls for Categories" />
      <Separator className="mt-4 mb-8" />

      <ApiList entityName="categories" entityIdName="categoryId" />
    </main>
  );
};

export default CategoryClient;
