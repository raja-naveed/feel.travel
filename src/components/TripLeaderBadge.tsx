import React, { FC } from 'react'

export interface TripLeaderBadgeProps {
	className?: string
	leaderName?: string // Optional name of the trip leader
}

const TripLeaderBadge: FC<TripLeaderBadgeProps> = ({
	className = '',
	leaderName = '',
}) => {
	return (
		<div
			className={`nc-TripLeaderBadge flex items-center justify-center rounded-full   text-xs text-blue-50 ${className}`}
			data-nc-id="TripLeaderBadge"
		>
			<img src="/cardicons/iconloading.png" className='w-10 h-10' />
		</div>
	)
}

export default TripLeaderBadge
