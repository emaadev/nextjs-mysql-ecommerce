import * as z from "zod";
import { VariantProps } from "class-variance-authority";
import { type DialogProps } from "@radix-ui/react-dialog";

import { Store, Billboard, Category } from "@prisma/client";

import { settingsFormSchema } from "@/components/Settings";
import { PopoverTrigger } from "@/components/ui/popover";
import { buttonVariants } from "@/components/ui/button";
import { billboardFormSchema } from "@/components/Billboard";
import { BillboardColumn } from "@/app/(dashboard)/[storeId]/(routes)/billboards/components/columns";
import { CategoryColumn } from "@/app/(dashboard)/[storeId]/(routes)/categories/components/columns";
import { categoryFormSchema } from "@/components/Category";

export interface DashboardPage {
  params: { storeId: string };
}

export interface SettingsPageProps {
  params: {
    storeId: string;
  };
}

export interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export interface useStoreModalInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export interface SettingsProps {
  initialData: Store;
}

export interface BillboardProps {
  initialData: Billboard | null;
}

export interface CategoryProps {
  initialData: Category | null;
  billboards: Billboard[];
}

export interface BillboardClientProps {
  data: BillboardColumn[];
}

export interface CategoryClientProps {
  data: CategoryColumn[];
}

export type SettingsFormValues = z.infer<typeof settingsFormSchema>;

export type BillboardFormValues = z.infer<typeof billboardFormSchema>;

export type CategoryFormValues = z.infer<typeof categoryFormSchema>;

export interface HeadingProps {
  title: string;
  description: string;
}

export type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

export interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export interface CommandDialogProps extends DialogProps {}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}