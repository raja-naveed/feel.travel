import React, { FC, ReactNode } from 'react';
import BlogCard from './BlogCard';
import Heading from "@/shared/Heading";


const DEMO_BLOGS = [
	{
		id: '1',
		title: 'Top 10 Tips for Remote Work Success',
		image: 'https://picsum.photos/200',
		excerpt:
			'Discover the top 10 tips to stay productive and maintain a work-life balance while working remotely...',
		date: 'August 25, 2024',
		author: 'John Doe',
	},
	{
		id: '2',
		title: 'The Future of Co-working Spaces',
		image: 'https://picsum.photos/300',
		excerpt:
			'Explore how co-working spaces are evolving to meet the needs of the modern workforce...',
		date: 'August 26, 2024',
		author: 'Jane Smith',
	},
	{
		id: '3',
		title: 'How to Build a Remote Team Culture',
		image: 'https://picsum.photos/500',
		excerpt:
			'Learn how to foster a strong team culture even when your team is spread across the globe...',
		date: 'August 27, 2024',
		author: 'Alice Johnson',
	},
	{
		id: '4',
		title: 'Why Co-working Spaces are Here to Stay',
		image: 'https://picsum.photos/600',
		excerpt:
			'Co-working spaces are more than just a trend; they are the future of work. Here’s why...',
		date: 'August 28, 2024',
		author: 'Robert Brown',
	},
]

export interface SectionGridFeatureBlogsProps {
  blogListings?: typeof DEMO_BLOGS;
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
}

const SectionGridFeatureBlogs: FC<SectionGridFeatureBlogsProps> = ({
  blogListings = DEMO_BLOGS,
  gridClass = '',
  heading = 'Blogs',
  subHeading = 'Discover the latest insights and trends from our blog',
  headingIsCenter,
}) => {
  return (
    <div className="nc-SectionGridFeatureBlogs relative">
      <div className="">
            <Heading desc={subHeading}>{heading}</Heading>

      </div>
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 ${gridClass}`}
      >
        {blogListings.map((blog) => (
          <BlogCard key={blog.id} data={blog} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridFeatureBlogs;
