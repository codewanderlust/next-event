import { useState } from "react";

// Centralizes modal control
export function useModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return { modalOpen, close, open };
}
