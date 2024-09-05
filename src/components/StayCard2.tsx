import React, { FC } from 'react'
import GallerySlider from '@/components/GallerySlider'
import { DEMO_STAY_LISTINGS } from '@/data/listings'
import { StayDataType } from '@/data/types'
import StartRating from '@/components/StartRating'
import BtnLikeIcon from '@/components/BtnLikeIcon'
import LockedUnlockedVillaIcon from './LockedUnlockedVillaIcon'
import TripLeaderBadge from './TripLeaderBadge'
import Link from 'next/link'

export interface StayCard2Props {
	className?: string
	data?: StayDataType
	size?: 'default' | 'small'
}

const DEMO_DATA = DEMO_STAY_LISTINGS[0]

const StayCard2: FC<StayCard2Props> = ({
	size = 'default',
	className = '',
	data = DEMO_DATA,
}) => {
	const {
		galleryImgs,
		listingCategory,
		address,
		title,
		href,
		like,
		saleOff,
		price,
		reviewStart,
		reviewCount,
		id,
	} = data

	const renderSliderGallery = () => {
		return (
			<div className="relative w-full">
				<GallerySlider
					uniqueID={`StayCard2_${id}`}
					ratioClass="aspect-w-12 aspect-h-11"
					galleryImgs={galleryImgs}
					imageClass="rounded-lg"
					href={href}
				/>
				<BtnLikeIcon isLiked={like} className="absolute left-3 top-3" />
				{saleOff && (
					<div className="absolute right-3 top-3 flex gap-x-2">
						<LockedUnlockedVillaIcon />
						<TripLeaderBadge />
					</div>
				)}
			</div>
		)
	}

	const renderUserAvatars = () => (
		<div className="flex space-x-2 ">
      <div className="flex items-center -space-x-2">
			<img
				className="h-4 w-4 rounded-full  ring-1 ring-white"
				src="https://randomuser.me/api/portraits/men/85.jpg"
				alt="User 1"
			/>
			<img
				className="h-4 w-4 rounded-full ring-1 ring-white"
				src="https://randomuser.me/api/portraits/men/28.jpg"
				alt="User 2"
			/>
			<img
				className="h-4 w-4 rounded-full ring-1 ring-white"
				src="https://randomuser.me/api/portraits/men/32.jpg"
				alt="User 3"
			/>
      </div>
			<span className="text-sm text-neutral-500 dark:text-neutral-400">
				3+ 
			</span>
		</div>
	)

	const renderContent = () => {
		return (
			<div className="mt-3 space-y-3">
				<div className="flex items-center justify-between">
					<h2 className="text-base font-semibold capitalize text-neutral-900 dark:text-white">
						<span className="line-clamp-1">{title}</span>
					</h2>
					{renderUserAvatars()}
				</div>
				<div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
					<div className="flex items-center space-x-1.5">
						<svg
							className="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						<span>{address}</span>
					</div>
					<span>3 weeks</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-base font-semibold">
						{price}
						
					</span>
					{!!reviewStart && (
						<StartRating reviewCount={reviewCount} point={reviewStart} />
					)}
				</div>
			</div>
		)
	}

	return (
		<div className={`nc-StayCard2 group relative ${className}`}>
			{renderSliderGallery()}
			<Link href={href}>{renderContent()}</Link>
		</div>
	)
}

export default StayCard2
