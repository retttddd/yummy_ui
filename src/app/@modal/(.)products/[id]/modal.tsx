'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-[1000]">
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
    </div>,
    document.getElementById('modal-root')!
  );
}
