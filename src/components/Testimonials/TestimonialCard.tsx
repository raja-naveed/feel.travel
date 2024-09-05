/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import StartRating from '@/components/StartRating';

export interface TestimonialCardProps {
  className?: string;
  data: {
    id: string;
    review: string;
    userImage: string;
    userName: string;
    rating: number;
    userPosition: string;
    testimonialImage: string;
  };
}

const TestimonialCard: FC<TestimonialCardProps> = ({ className = '', data }) => {
  const { review, userImage, userName, rating, userPosition, testimonialImage } = data;

  return (
		<div
			className={`nc-TestimonialCard flex flex-col-reverse items-center md:flex-row ${className}`}
		>
			<div className="p-6 md:w-1/2">
				<p className="mb-2 text-xl font-bold text-neutral-900 dark:text-white">
					{' '}
					Our Guests Love Us{' '}
				</p>

				<p className="text-lg text-neutral-900 dark:text-white">“ {review} ”</p>
				<div className="mt-4 flex items-center">
					<img
						className="h-12 w-12 rounded-full ring-2 ring-white"
						src={'https://randomuser.me/api/portraits/women/29.jpg'}
						alt={userName}
					/>
					<div className="ml-4">
						<h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
							{userName}
						</h3>
						<span className="text-sm text-neutral-500 dark:text-neutral-400">
							{'Guest'}
						</span>
						<StartRating reviewCount={rating} point={rating} />
					</div>
				</div>
			</div>
			<div className="md:w-1/2 ">
				<img
					className="h-[400px] w-full rounded-lg object-cover"
					src={'https://picsum.photos/900'}
					alt="Testimonial"
				/>
			</div>
		</div>
	)
};

export default TestimonialCard;
