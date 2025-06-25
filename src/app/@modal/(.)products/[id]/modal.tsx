'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { motion } from "framer-motion"; // Use framer-motion, not "motion/react"

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      try {
        dialog.showModal();
      } catch (e) {
        console.error('Dialog showModal error:', e);
      }
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const onDismiss = () => {
    router.back();
  };

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center"
    >
      <dialog
        ref={dialogRef}
        className="w-[80%] max-w-[500px] max-h-[90vh] bg-white rounded-xl p-5 relative overflow-auto border-none m-auto"
        onClose={onDismiss}
      >
        <div className="flex flex-col items-center justify-center">
          {children}
        </div>
        <button
          onClick={onDismiss}
          className="absolute top-2.5 right-2.5 w-10 h-10 flex items-center justify-center text-xl font-medium rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          ✕
        </button>
      </dialog>
    </motion.div>,
    modalRoot
  );
}
