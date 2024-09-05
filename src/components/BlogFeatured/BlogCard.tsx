import React, { FC } from 'react';
import Link from 'next/link';

export interface BlogCardProps {
  className?: string;
  data: {
    id: string;
    title: string;
    image: string;
    excerpt: string;
    date: string;
    author: string;
  };
}

const BlogCard: FC<BlogCardProps> = ({ className = '', data }) => {
  const { title, image, excerpt, date, author, id } = data;

  const renderContent = () => {
    return (
      <div className="mt-3 space-y-3">
        <h2 className="text-base font-semibold capitalize text-neutral-900 dark:text-white">
          <span className="line-clamp-1">{title}</span>
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
          <span>{date}</span>
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-BlogCard group relative ${className}`}>
      <div className="relative w-full">
        <img
          className="rounded-lg object-cover w-full "
          src={image}
          alt={title}
        />
      </div>
      <Link href={`/blog/${id}`}>{renderContent()}</Link>
    </div>
  );
};

export default BlogCard;
