"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

import { AlertModalProps } from "@/interfaces";

const AlertModal = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}: AlertModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted, setIsMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Are you sure to delete this store?"
      description="This action can't be undone."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default AlertModal;
