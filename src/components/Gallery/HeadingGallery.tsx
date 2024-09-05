import React, { HTMLAttributes, ReactNode } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fontClass?: string;
  isCenter?: boolean;
}

const HeadingGallery: React.FC<HeadingProps> = ({
  children,
  className = "mb-10 text-neutral-900 dark:text-neutral-50",
  isCenter = false,
  ...args
}) => {
  return (
    <div className={`nc-Section-Heading relative ${className}`}>
      <div
        className={
          isCenter ? "text-center w-full max-w-2xl mx-auto mb-4" : "max-w-2xl"
        }
      >
        <h2 className={`text-3xl md:text-4xl font-semibold`} {...args}>
          {children || `Section Heading`}
        </h2>
      </div>
    </div>
  );
};

export default HeadingGallery;
