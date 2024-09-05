'use client'

import converSelectedDateToString from '@/utils/converSelectedDateToString'
import React, { useState } from 'react'
import { GuestsObject } from '../../type'
import GuestsInput from '../GuestsInput'
import LocationInput from '../LocationInput'
import DatesRangeInput from '../DatesRangeInput'

const StaySearchForm = () => {
	//
	const [fieldNameShow, setFieldNameShow] = useState<
		'location' | 'dates' | 'guests' | 'tripleader'
	>('location')
	//
	const [locationInputTo, setLocationInputTo] = useState('')
	const [guestInput, setGuestInput] = useState<GuestsObject>({
		guestAdults: 0,
		guestChildren: 0,
		guestInfants: 0,
	})
	const [startDate, setStartDate] = useState<Date | null>(
		new Date('2023/02/06'),
	)
	const [endDate, setEndDate] = useState<Date | null>(new Date('2023/02/23'))
	//

	const onChangeDate = (dates: [Date | null, Date | null]) => {
		const [start, end] = dates
		setStartDate(start)
		setEndDate(end)
	}

	const renderInputLocation = () => {
		const isActive = fieldNameShow === 'location'
		return (
			<div
				className={`w-full bg-white dark:bg-neutral-800 ${
					isActive
						? 'rounded-2xl shadow-lg'
						: 'rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]'
				}`}
			>
				{!isActive ? (
					<button
						className={`flex w-full justify-between p-4 text-sm font-medium`}
						onClick={() => setFieldNameShow('location')}
					>
						<span className="text-neutral-400">Where</span>
						<span>{locationInputTo || 'Location'}</span>
					</button>
				) : (
					<LocationInput
						defaultValue={locationInputTo}
						onChange={(value) => {
							setLocationInputTo(value)
							setFieldNameShow('dates')
						}}
					/>
				)}
			</div>
		)
	}

	const renderInputDates = () => {
		const isActive = fieldNameShow === 'dates'

		return (
			<div
				className={`w-full overflow-hidden bg-white dark:bg-neutral-800 ${
					isActive
						? 'rounded-2xl shadow-lg'
						: 'rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]'
				}`}
			>
				{!isActive ? (
					<button
						className={`flex w-full justify-between p-4 text-sm font-medium`}
						onClick={() => setFieldNameShow('dates')}
					>
						<span className="text-neutral-400">When</span>
						<span>
							{startDate
								? converSelectedDateToString([startDate, endDate])
								: 'Add date'}
						</span>
					</button>
				) : (
					<DatesRangeInput />
				)}
			</div>
		)
	}

	const renderInputGuests = () => {
		const isActive = fieldNameShow === 'guests'
		let guestSelected = ''
		if (guestInput.guestAdults || guestInput.guestChildren) {
			const guest =
				(guestInput.guestAdults || 0) + (guestInput.guestChildren || 0)
			guestSelected += `${guest} guests`
		}

		if (guestInput.guestInfants) {
			guestSelected += `, ${guestInput.guestInfants} infants`
		}

		return (
			<div
				className={`w-full overflow-hidden bg-white dark:bg-neutral-800 ${
					isActive
						? 'rounded-2xl shadow-lg'
						: 'rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]'
				}`}
			>
				{!isActive ? (
					<button
						className={`flex w-full justify-between p-4 text-sm font-medium`}
						onClick={() => setFieldNameShow('guests')}
					>
						<span className="text-neutral-400">Who</span>
						<span>{guestSelected || `Add guests`}</span>
					</button>
				) : (
					<GuestsInput defaultValue={guestInput} onChange={setGuestInput} />
				)}
			</div>
		)
	}

	const renderInputTripLeader = () => {
		const isActive = fieldNameShow === 'tripleader'
		let guestSelected = ''

		return (
			<div
				className={`w-full overflow-hidden bg-white dark:bg-neutral-800 ${
					isActive
						? 'rounded-2xl shadow-lg'
						: 'rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]'
				}`}
			>
				{!isActive ? (
					<button
						className={`flex w-full justify-between p-4 text-sm font-medium`}
						onClick={() => setFieldNameShow('tripleader')}
					>
						<span className="text-neutral-400">With</span>
						<span>{guestSelected || `Trip Leader`}</span>
					</button>
				) : (
					<div className={`relative flex flex-col p-5`}>
						<span className="mb-5 block text-xl font-semibold sm:text-2xl">
							{`Going with trip leader?`}
						</span>
						<div className="flex flex-col space-y-4">
							<button
								className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
								// onClick={() => handleSelectTripLeader(true)}
							>
								Yes
							</button>
							<button
								className="w-full rounded-lg bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
								// onClick={() => handleSelectTripLeader(false)}
							>
								No
							</button>
						</div>
					</div>
				)}
			</div>
		)
	}

	return (
		<div>
			<div className="w-full space-y-5">
				{/*  */}
				{renderInputLocation()}
				{/*  */}
				{renderInputDates()}
				{/*  */}
				{renderInputTripLeader()}
			</div>
		</div>
	)
}

export default StaySearchForm
