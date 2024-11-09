"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
};

function Modal({ children, show, onClose }: ModalProps) {
  if (!show) return null;

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div
        ref={modalRef}
        className="p-8 border w-96 shadow-lg rounded-md bg-white"
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
}

export default Modal;
