"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";

import { Trash } from "lucide-react";
import toast from "react-hot-toast";

import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import AlertModal from "@/components/modals/AlertModal";
import { Input } from "@/components/ui/input";
import ApiAlert from "@/components/shared/ApiAlert";

import { SettingsFormValues, SettingsProps } from "@/interfaces";

export const formSchema = z.object({
  name: z.string().min(1),
});

const Settings = ({ initialData }: SettingsProps) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const onSubmit = async (data: SettingsFormValues) => {
    try {
      setLoading(true);
      await axios.patch(`/api/stores/${params.storeId}`, data);
      router.refresh();
      toast.success("Store updated successfully.");
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);

      await axios.delete(`/api/stores/${params.storeId}`);
      router.refresh();
      router.push("/");
      toast.success("Store deleted.");
    } catch (error) {
      toast.error("Make sure you removed all products and categories first.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <main>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />

      <header className="flex items-center justify-between mb-2">
        <Heading title="Settings" description="Manage store preferences" />

        {/* TODO: Create "disabled action" ☑️ */}
        <Button
          variant="destructive"
          size="sm"
          disabled={loading}
          onClick={() => setOpen(true)}
        >
          <Trash className="h-4 w-4" />
        </Button>
      </header>

      <Separator className="mb-4" />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>

                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Store name"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button disabled={loading} className="ml-auto" type="submit">
            Save changes
          </Button>
        </form>
      </Form>

      <Separator className="my-4" />

      <ApiAlert
        title="NEXT_PUBLIC_API_URL"
        description={`${origin}/api/${params.storeId}`}
        variant="public"
      />
    </main>
  );
};

export default Settings;
