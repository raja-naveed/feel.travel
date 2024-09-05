import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker'

const DatePickerCustomHeaderOneMonth = ({
	monthDate,
	decreaseMonth,
	increaseMonth,
}: ReactDatePickerCustomHeaderProps) => {
	return (
		<div className="mb-2 flex items-center justify-between">
			<button
				aria-label="Previous Month"
				className="react-datepicker__navigation react-datepicker__navigation--previous rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
				onClick={decreaseMonth}
				type="button"
			>
				<ChevronLeftIcon className="h-5 w-5" />
			</button>
			<span className="react-datepicker__current-month">
				{monthDate.toLocaleString('en-US', {
					month: 'long',
					year: 'numeric',
				})}
			</span>
			<button
				aria-label="Next Month"
				className="react-datepicker__navigation react-datepicker__navigation--next rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
				onClick={increaseMonth}
				type="button"
			>
				<ChevronRightIcon className="h-5 w-5" />
			</button>
		</div>
	)
}

export default DatePickerCustomHeaderOneMonth
