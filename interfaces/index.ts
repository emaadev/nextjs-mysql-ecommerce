import * as z from "zod";
import { VariantProps } from "class-variance-authority";
import { type DialogProps } from "@radix-ui/react-dialog";

import {
  Store,
  Billboard,
  Category,
  Size,
  Color,
  Product,
  Image,
} from "@prisma/client";

import { settingsFormSchema } from "@/components/Settings";
import { PopoverTrigger } from "@/components/ui/popover";
import { buttonVariants } from "@/components/ui/button";
import { billboardFormSchema } from "@/components/Billboard";
import { BillboardColumn } from "@/app/(dashboard)/[storeId]/(routes)/billboards/components/columns";
import { CategoryColumn } from "@/app/(dashboard)/[storeId]/(routes)/categories/components/columns";
import { categoryFormSchema } from "@/components/Category";
import { SizeColumn } from "@/app/(dashboard)/[storeId]/(routes)/sizes/components/columns";
import { sizeFormSchema } from "@/components/Size";
import { ColorColumn } from "@/app/(dashboard)/[storeId]/(routes)/colors/components/columns";
import { colorFormSchema } from "@/components/Color";
import { ProductColumn } from "@/app/(dashboard)/[storeId]/(routes)/products/components/columns";
import { productFormSchema } from "@/components/Product";

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

export interface ProductProps {
  initialData:
    | (Product & {
        images: Image[];
      })
    | null;
  categories: Category[];
  colors: Color[];
  sizes: Size[];
}

export interface SizeProps {
  initialData: Size | null;
}

export interface ColorProps {
  initialData: Color | null;
}

export interface CategoryProps {
  initialData: Category | null;
  billboards: Billboard[];
}

export interface BillboardClientProps {
  data: BillboardColumn[];
}

export interface ProductClientProps {
  data: ProductColumn[];
}

export interface SizesClientProps {
  data: SizeColumn[];
}

export interface ColorClientProps {
  data: ColorColumn[];
}

export interface CategoryClientProps {
  data: CategoryColumn[];
}

export type SettingsFormValues = z.infer<typeof settingsFormSchema>;

export type BillboardFormValues = z.infer<typeof billboardFormSchema>;

export type ProductFormValues = z.infer<typeof productFormSchema>;

export type CategoryFormValues = z.infer<typeof categoryFormSchema>;

export type SizeFormValues = z.infer<typeof sizeFormSchema>;

export type ColorFormValues = z.infer<typeof colorFormSchema>;

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