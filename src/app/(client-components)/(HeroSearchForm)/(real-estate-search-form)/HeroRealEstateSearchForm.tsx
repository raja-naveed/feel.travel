'use client'

import React, { FC } from 'react'
import StaySearchForm from '../(stay-search-form)/StaySearchForm'

export interface HeroRealEstateSearchFormProps {
	className?: string
}

const HeroRealEstateSearchForm: FC<HeroRealEstateSearchFormProps> = ({
	className = '',
}) => {
	return (
		<div
			className={`nc-HeroRealEstateSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}
		>
			<StaySearchForm />
		</div>
	)
}

export default HeroRealEstateSearchForm
