import React, { FC } from "react";
import ButtonCircle from "@/shared/ButtonCircle";
import Badge from "@/shared/Badge";
import Input from "@/shared/Input";

export interface SectionSubscribe2Props {
  className?: string;
}

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionSubscribe2 flex flex-col items-center ${className}`}
      data-nc-id="SectionSubscribe2"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-4">Join Our Newsletter</h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          Subscribe to receive updates and exclusive offers directly to your inbox.
        </p>
       
      </div>
      <form className="relative max-w-sm w-full">
        <Input
          required
          placeholder="Enter your email"
          type="email"
          rounded="rounded-full"
          sizeClass="h-12 px-4 py-2"
        />
        <ButtonCircle
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          size="w-12 h-12"
        >
          <i className="las la-arrow-right text-lg"></i>
        </ButtonCircle>
      </form>
    </div>
  );
};

export default SectionSubscribe2;
