import * as z from "zod";
import { VariantProps } from "class-variance-authority";
import { type DialogProps } from "@radix-ui/react-dialog";

import { Store } from "@prisma/client";

import { formSchema } from "@/components/Settings";
import { PopoverTrigger } from "@/components/ui/popover";
import { buttonVariants } from "@/components/ui/button";

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

export type SettingsFormValues = z.infer<typeof formSchema>;

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
