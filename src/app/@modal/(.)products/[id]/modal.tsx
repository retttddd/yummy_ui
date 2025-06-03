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
    <div className="inset-0 bg-black/70 flex items-center justify-center z-[1000]">
      <dialog
        ref={dialogRef}
        className="w-[80%] max-w-[500px] max-h-[500px] bg-white rounded-xl p-5 relative flex items-center justify-center text-4xl font-medium"
        onClose={onDismiss}
      >
        {children}
        <button
          onClick={onDismiss}
          className="absolute top-2.5 right-2.5 w-12 h-12 flex items-center justify-center text-2xl font-medium rounded-[15px] hover:bg-gray-200"
        >
          x
        </button>
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}
