"use client";

import { useRouter, useParams } from "next/navigation";

import { Plus } from "lucide-react";
import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const BillboardClient = () => {
  const router = useRouter();
  const params = useParams();

  return (
    <main>
      <section className="flex items-center justify-between">
        <Heading
          title="Billboards (0)"
          description="Manage billboards for your store"
        />

        <Button
          className=""
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </section>

      <Separator className="mt-4" />
    </main>
  );
};

export default BillboardClient;
