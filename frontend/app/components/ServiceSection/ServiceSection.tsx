"use client";
import { useState } from "react";
import Modal from "../Shared/Modal";
import ButtonSection from "./ButtonSection";
import DetailSection from "./DetailSection";
import ImageCard from "./ImageCard";
import Link from "next/link";
import ModalTrigger from "../Shared/ModalTrigger";

function ServiceSection() {
  return (
    <div className="flex items-start flex-wrap justify-between px-10 pt-28 pb-9">
      <div
        className="flex flex-row gap-10
      "
      >
        <ImageCard />
        <DetailSection />
      </div>
      <ButtonSection />

      <ModalTrigger content={<div>This is a modal</div>}>
        <button>SUMMON THE MODAL</button>
      </ModalTrigger>
    </div>
  );
}

export default ServiceSection;
