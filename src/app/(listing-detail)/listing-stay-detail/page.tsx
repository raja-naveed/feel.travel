'use client'

import { FC, Fragment, useEffect, useState } from 'react'
import { Dialog, Transition, TransitionChild } from '@headlessui/react'
import { ArrowRightIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import CommentListing from '@/components/CommentListing'
import FiveStartIconForRate from '@/components/FiveStartIconForRate'
import StartRating from '@/components/StartRating'
import Avatar from '@/shared/Avatar'
import Badge from '@/shared/Badge'
import ButtonCircle from '@/shared/ButtonCircle'
import ButtonPrimary from '@/shared/ButtonPrimary'
import ButtonSecondary from '@/shared/ButtonSecondary'
import ButtonClose from '@/shared/ButtonClose'
import Input from '@/shared/Input'
import LikeSaveBtns from '@/components/LikeSaveBtns'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Amenities_demos, PHOTOS } from './constant'
import StayDatesRangeInput from './StayDatesRangeInput'
import GuestsInput from './GuestsInput'
import SectionDateRange from '../SectionDateRange'
import { Route } from 'next'
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";


export interface ListingStayDetailPageProps { }

const ListingStayDetailPage: FC<ListingStayDetailPageProps> = ({ }) => {
	//

	let [isOpenModalAmenities, setIsOpenModalAmenities] = useState(false)
		const [villaDetails, setVillaDetails] = useState(null)
		  const [isLoading, setIsLoading] = useState(false)

	const thisPathname = usePathname()
	const router = useRouter()

	useEffect(() => {
		// Fetch data from API
		const fetchVillaDetails = async () => {
			try {
				const response = await fetch('') // Replace with your API endpoint
				const data = await response.json()
				setVillaDetails(data)
				setIsLoading(false)
			} catch (error) {
				console.error('Error fetching villa details:', error)
			}
		}

		fetchVillaDetails()
	}, [])

	

	function closeModalAmenities() {
		setIsOpenModalAmenities(false)
	}

	function openModalAmenities() {
		setIsOpenModalAmenities(true)
	}

	const handleOpenModalImageGallery = () => {
		router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE` as Route)
	}

	const renderSection1 = () => {
		return (
			<div className="listingSection__wrap !space-y-6">
				{/* 1 */}
				<div className="flex items-center justify-end">
					{/* <Badge name="Wooden house" /> */}
					<LikeSaveBtns />
				</div>

				{/* 2 */}
				<h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
					Seafront Coral Villa
				</h2>

				{/* 3 */}
				<div className="flex items-center space-x-4">
					<StartRating />
					<span>·</span>
					<span>
						<i className="las la-map-marker-alt"></i>
						<span className="ml-1">
							Lisbon, Portugal
							<button className="ml-2 text-xs text-blue-500 hover:underline">
								(view map)
							</button>
						</span>
					</span>
				</div>

				{/* 4
				<div className="flex items-center">
					<Avatar hasChecked sizeClass="h-10 w-10" radius="rounded-full" />
					<span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
						Hosted by{' '}
						<span className="font-medium text-neutral-900 dark:text-neutral-200">
							Kevin Francis
						</span>
					</span>
				</div> */}

				{/* 5 */}
				<div className="w-full border-b border-neutral-100 dark:border-neutral-700" />

				{/* 6 */}
				<div className="flex items-center justify-between space-x-8 text-sm text-neutral-700 dark:text-neutral-300 xl:justify-center xl:space-x-12">

					{/* New Section for Villa Details, Rooms, Co-Working Trips, and Calendar */}
					<div className="flex items-center space-y-x flex-col">
						<i className="las la-home text-5xl"></i>
						<span className="hidden sm:inline-block">Villa Details</span>
					</div>
					<div className="flex items-center space-y-x flex-col">
						<i className="las la-door-closed text-5xl"></i>
						<span className="hidden sm:inline-block">Rooms</span>
					</div>
					<div className="flex items-center space-y-x flex-col">
						<i className="las la-briefcase text-5xl"></i>
						<span className="hidden sm:inline-block">Co-Working Trips</span>
					</div>
					<div className="flex items-center space-y-x flex-col">
						<i className="las la-calendar text-5xl"></i>
						<span className="hidden sm:inline-block">Calendar</span>
					</div>
				</div>

			</div>
		)
	}


	const UpcomingTrips = () => {
		const trips = [
			{
				userImage: 'https://picsum.photos/50',
				tripName: 'Digital Nomad Adventure',
				startDate: '2024-09-15',
				endDate: '2024-09-22',
				price: ' 78€ p.N.'
			},
			{
				userImage: 'https://picsum.photos/50',
				tripName: 'Remote Work Escape',
				startDate: '2024-10-01',
				endDate: '2024-10-07',
				price: ' 78€ p.N.'
			},
			{
				userImage: 'https://picsum.photos/50',
				tripName: 'Global Freelancer Meetup',
				startDate: '2024-11-05',
				endDate: '2024-11-12',
				price: ' 78€ p.N.'
			},
			// Add more trips here
		];

		return (
			<div className="flex">
				{/* Trips Section (3/4 of the page) */}
				<div className="w-3/4 p-8 space-y-8">
					<h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Upcoming Co-Working Trips at this Villa</h2>
					<div className="space-y-6">
						{trips.map((trip, index) => (
							<div key={index} className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
								{/* Left side: User Image */}
								<div className="flex-shrink-0 w-16 h-16">
									<img src={trip.userImage} alt="User" className="w-full h-full object-cover rounded-full border-2 border-blue-500" />
								</div>

								{/* Center: Trip Details */}
								<div className="flex-1 px-4">
									<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{trip.tripName}</h3>
									<div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
										<span>{trip.startDate} - {trip.endDate}</span>
										<span className="ml-4 font-semibold text-gray-800 dark:text-gray-200">Starting from <span className="text-lg">{trip.price}</span></span>
									</div>
								</div>

								{/* Right side: View Trip Detail button */}
								<div className="flex items-center justify-end">
									<ButtonPrimary className="px-4 py-2">
										View Trip Detail
									</ButtonPrimary>
								</div>
							</div>
						))}
					</div>

				</div>

				{/* Right side: Image (1/4 of the page) */}
				<div className="w-1/4 p-8 flex items-center justify-center">
					<img src="https://picsum.photos/500" alt="Random" className="w-full h-full object-cover rounded-xl shadow-lg" />
				</div>

			</div>
		);
	};




	const renderSection2 = () => {
		return (
			<div className="listingSection__wrap">
				<h2 className="text-2xl font-semibold">About Villa</h2>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
				<div className="text-neutral-6000 dark:text-neutral-300">
					<span>
						Seafront villa, with direct access to the beach, infinity pool and
						BBQ area.
					</span>
					<br />
					<br />
					<span>
						Eastern Discovery (Start New Orleans) includes accommodation in a
						hotel as well as an expert guide, meals, transport and more. Start
						in New Orleans and end in New York City! With the discovery tour
						Eastern Discovery (Start New Orleans), you have a 14 day tour
						package taking you from New Orleans to New York City and through New
						Orleans, USA and 14 other destinations in USA. Eastern Discovery
						(Start New Orleans) includes accommodation in a hotel as well as an
						expert guide, meals, transport and more.
					</span>
				</div>
			</div>
		)
	}
	const renderSectionNeighbourhood = () => {
		return (
			<div className="listingSection__wrap">
				<h2 className="text-2xl font-semibold">What’s in neighbourhood</h2>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
				<div className="text-neutral-6000 dark:text-neutral-300">
					<span>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
					</span>
					<br />
					<br />
					<span>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
					</span>
				</div>
			</div>
		)
	}

	const AvailableRooms = () => {
		const rooms = [
			{
				image: 'https://picsum.photos/200',
				title: 'Ocean View Villa',
				description: 'Start in New Orleans and end in New York City! With the discovery tour Eastern Discovery (Start New Orleans), you have a 14 day tour package taking you from New Orleans to New York.',
				length: '40 sqm',
				bed: '1 Bed',
				bath: '1 Bath Tub',
				table: '1 Table',
				price: '$150'
			},
			{
				image: 'https://picsum.photos/400',
				title: 'Queen Room',
				description: 'Start in New Orleans and end in New York City! With the discovery tour Eastern Discovery (Start New Orleans), you have a 14 day tour package taking you from New Orleans to New York.',
				length: '40 sqm',
				bed: '1 Bed',
				bath: '1 Bath Tub',
				table: '1 Table',
				price: '$150'
			},
			// Add more room objects here
		];

		return (
			<div className="listingSection__wrap !space-y-8">
				<h2 className="text-2xl font-semibold">Availabe Rooms</h2>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
				{rooms.map((room, index) => (
					<div key={index} className="flex border-b border-neutral-100 dark:border-neutral-700 pb-6">
						{/* Left side: Image */}
						<div className="flex-shrink-0 w-1/4">
							<img src={room.image} alt={room.title} className="w-full h-44 object-cover rounded-lg" />
						</div>

						{/* Center: Heading, Description, Icons */}
						<div className="flex-1 px-4">
							<h3 className="text-xl font-semibold">{room.title}</h3>
							<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{room.description}</p>
							<div className="mt-4 flex space-x-4">
								<div className="flex items-center flex-col space-y-1">
									<i className="las la-ruler text-4xl"></i>
									<span className="text-sm">{room.length}</span>
								</div>
								<div className="flex items-center flex-col space-y-1">
									<i className="las la-bed text-4xl"></i>
									<span className="text-sm">{room.bed}</span>
								</div>
								<div className="flex items-center flex-col space-y-1">
									<i className="las la-bath text-4xl"></i>
									<span className="text-sm">{room.bath}</span>
								</div>
								<div className="flex items-center flex-col space-y-1">
									<i className="las la-table text-4xl"></i>
									<span className="text-sm">{room.table}</span>
								</div>
							</div>
						</div>

						{/* Right side: Price, List, and View Calendar button */}
						<div className="w-1/4 border-l flex flex-col justify-between border-neutral-100 dark:border-neutral-700 pl-4">
							<div className="text-base font-semibold mb-4">from <span className="font-semibold text-lg">{room.price}</span>/night</div>
							<ul className="list-disc list-inside mb-4 text-sm text-neutral-600 dark:text-neutral-400">
								<li>Check availability</li>
								<li>View potential Roommates</li>
								<li>Choose your best price</li>
							</ul>
							<ButtonPrimary className="px-4 py-2">
								View Calendar
							</ButtonPrimary>
						</div>
					</div>
				))}
			</div>
		);
	};


	const renderSection3 = () => {
		return (
			<div className="listingSection__wrap">
				<div>
					<h2 className="text-2xl font-semibold">Facilities </h2>
					{/* <span className="mt-2 block text-neutral-500 dark:text-neutral-400">
						{` About the property's amenities and services`}
					</span> */}
				</div>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
				{/* 6 */}
				<div className="grid grid-cols-1 gap-6 text-sm text-neutral-700 dark:text-neutral-300 xl:grid-cols-3">
					{Amenities_demos.filter((_, i) => i < 6).map((item) => (
						<div key={item.name} className="flex items-center space-x-3">
							<i className={`las text-3xl ${item.icon}`}></i>
							<span className=" ">{item.name}</span>
						</div>
					))}
				</div>

				<div className="w-14 border-b border-neutral-200"></div>
				<div>
					<ButtonSecondary onClick={openModalAmenities}>
						View more  amenities
					</ButtonSecondary>
				</div>
				{renderMotalAmenities()}
			</div>
		)
	}

	const renderMotalAmenities = () => {
		return (
			<Transition appear show={isOpenModalAmenities} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-50 overflow-y-auto"
					onClose={closeModalAmenities}
				>
					<div className="min-h-screen px-4 text-center">
						<TransitionChild
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-black bg-opacity-40" />
						</TransitionChild>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<TransitionChild
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="inline-block h-screen w-full max-w-4xl py-8">
								<div className="inline-flex h-full w-full transform flex-col overflow-hidden rounded-2xl bg-white pb-2 text-left align-middle shadow-xl transition-all dark:border dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100">
									<div className="relative flex-shrink-0 border-b border-neutral-200 px-6 py-4 text-center dark:border-neutral-800">
										<h3
											className="text-lg font-medium leading-6 text-gray-900"
											id="headlessui-dialog-title-70"
										>
											Amenities
										</h3>
										<span className="absolute left-3 top-3">
											<ButtonClose onClick={closeModalAmenities} />
										</span>
									</div>
									<div className="divide-y divide-neutral-200 overflow-auto px-8 text-neutral-700 dark:text-neutral-300">
										{Amenities_demos.filter((_, i) => i < 1212).map((item) => (
											<div
												key={item.name}
												className="flex items-center space-x-5 py-2.5 sm:py-4 lg:space-x-8 lg:py-5"
											>
												<i
													className={`las text-4xl text-neutral-6000 ${item.icon}`}
												></i>
												<span>{item.name}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</TransitionChild>
					</div>
				</Dialog>
			</Transition>
		)
	}

	const renderSection4 = () => {
		return (
			<div className="listingSection__wrap">
				{/* HEADING */}
				<div>
					<h2 className="text-2xl font-semibold">Room Rates </h2>
					<span className="mt-2 block text-neutral-500 dark:text-neutral-400">
						Prices may increase on weekends or holidays
					</span>
				</div>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
				{/* CONTENT */}
				<div className="flow-root">
					<div className="-mb-4 text-sm text-neutral-6000 dark:text-neutral-300 sm:text-base">
						<div className="flex items-center justify-between space-x-4 rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800">
							<span>Monday - Thursday</span>
							<span>$199</span>
						</div>
						<div className="flex items-center justify-between space-x-4 rounded-lg p-4">
							<span>Monday - Thursday</span>
							<span>$199</span>
						</div>
						<div className="flex items-center justify-between space-x-4 rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800">
							<span>Friday - Sunday</span>
							<span>$219</span>
						</div>
						<div className="flex items-center justify-between space-x-4 rounded-lg p-4">
							<span>Rent by month</span>
							<span>-8.34 %</span>
						</div>
						<div className="flex items-center justify-between space-x-4 rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800">
							<span>Minimum number of nights</span>
							<span>1 night</span>
						</div>
						<div className="flex items-center justify-between space-x-4 rounded-lg p-4">
							<span>Max number of nights</span>
							<span>90 nights</span>
						</div>
					</div>
				</div>
			</div>
		)
	}

	const renderSection6 = () => {
		return (
			<div className="listingSection__wrap">
				{/* HEADING */}
				<h2 className="text-2xl font-semibold">Reviews (23 reviews)</h2>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

				{/* Content */}
				<div className="space-y-5">
					<FiveStartIconForRate iconClass="w-6 h-6" className="space-x-0.5" />
					<div className="relative">
						<Input
							fontClass=""
							sizeClass="h-16 px-4 py-3"
							rounded="rounded-3xl"
							placeholder="Share your thoughts ..."
						/>
						<ButtonCircle
							className="absolute right-2 top-1/2 -translate-y-1/2 transform"
							size=" w-12 h-12 "
						>
							<ArrowRightIcon className="h-5 w-5" />
						</ButtonCircle>
					</div>
				</div>

				{/* comment */}
				<div className="divide-y divide-neutral-100 dark:divide-neutral-800">
					<CommentListing className="py-8" />
					<CommentListing className="py-8" />
					<CommentListing className="py-8" />
					<CommentListing className="py-8" />
					<div className="pt-8">
						<ButtonSecondary>View more 20 reviews</ButtonSecondary>
					</div>
				</div>
			</div>
		)
	}
	const renderFAQSection = () => {
		const faqs = [
			{
				question: 'What is your return policy?',
				answer:
					'Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.',
			},
			{
				question: 'How can I track my order?',
				answer:
					'You will receive an email with a tracking number once your order has shipped. You can track your order using the link provided in the email.',
			},
			{
				question: 'Do you offer international shipping?',
				answer:
					'Yes, we offer international shipping to most countries. Shipping costs and delivery times vary depending on your location.',
			},
			{
				question: 'How can I contact customer support?',
				answer:
					'You can contact our customer support team via email at support@example.com or by phone at 1-800-123-4567.',
			},
		]
		return (
			<div className="listingSection__wrap">
				{/* Heading */}
				<h2 className="text-2xl text-center  font-semibold">Frequently Asked Questions</h2>
				{/* <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div> */}

				{/* Content */}
				<div className="mt-6 space-y-5">
					{faqs.map((faq, index) => (
						<Disclosure
							key={index}
							as="div"
							className="border-b border-neutral-200 last:border-none dark:border-neutral-800"
						>
							{({ open }) => (
								<>
									<DisclosureButton className="flex w-full items-center justify-between rounded-lg bg-neutral-50 px-4 py-3 hover:bg-neutral-100 focus:outline-none dark:bg-neutral-900 dark:hover:bg-neutral-800">
										<span className="font-semibold">{faq.question}</span>
										<FaChevronDown
											className={`h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'
												}`}
											aria-hidden="true"
										/>
									</DisclosureButton>
									<DisclosurePanel className="mt-2 rounded-lg bg-white px-4 py-3 dark:bg-neutral-800">
										<p className="text-neutral-600 dark:text-neutral-400">
											{faq.answer}
										</p>
									</DisclosurePanel>
								</>
							)}
						</Disclosure>
					))}
				</div>


			</div>
		)
	}

	const renderSection7 = () => {
		return (
			<div className="listingSection__wrap">
				{/* HEADING */}
				<div>
					<h2 className="text-2xl font-semibold">Location</h2>
					<span className="mt-2 block text-neutral-500 dark:text-neutral-400">
						San Diego, CA, United States of America (SAN-San Diego Intl.)
					</span>
				</div>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

				{/* MAP */}
				<div className="aspect-h-5 aspect-w-5 z-0 rounded-xl ring-1 ring-black/10 sm:aspect-h-3">
					<div className="z-0 overflow-hidden rounded-xl">
						<iframe
							width="100%"
							height="100%"
							loading="lazy"
							allowFullScreen
							referrerPolicy="no-referrer-when-downgrade"
							src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY&q=Eiffel+Tower,Paris+France"
						></iframe>
					</div>
				</div>
			</div>
		)
	}


	const renderSidebar = () => {
		return (
			<div className="listingSectionSidebar__wrap shadow-xl">
				{/* PRICE */}
				<div className="flex justify-between">
					<span className="text-3xl font-semibold">
						$119
						<span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
							/night
						</span>
					</span>
					<StartRating />
				</div>

				{/* FORM */}
				<form className="flex flex-col rounded-3xl border border-neutral-200 dark:border-neutral-700">
					<StayDatesRangeInput className="z-[11] flex-1" />
					<div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
					<GuestsInput className="flex-1" />
				</form>

				{/* SUM */}
				<div className="flex flex-col space-y-4">
					<div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
						<span>$119 x 3 night</span>
						<span>$357</span>
					</div>
					<div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
						<span>Service charge</span>
						<span>$0</span>
					</div>
					<div className="border-b border-neutral-200 dark:border-neutral-700"></div>
					<div className="flex justify-between font-semibold">
						<span>Total</span>
						<span>$199</span>
					</div>
				</div>

				{/* SUBMIT */}
				<ButtonPrimary href={'/checkout'}>Reserve</ButtonPrimary>
			</div>
		)
	}

	return (
		<div className="nc-ListingStayDetailPage">
			{/*  HEADER */}
			<header className="rounded-md sm:rounded-xl">
				<div className="relative grid grid-cols-3 gap-1 sm:grid-cols-4 sm:gap-2">
					<div
						className="relative col-span-2 row-span-3 cursor-pointer overflow-hidden rounded-md sm:row-span-2 sm:rounded-xl"
						onClick={handleOpenModalImageGallery}
					>
						<Image
							fill
							className="rounded-md object-cover sm:rounded-xl"
							src={PHOTOS[0]}
							alt=""
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
						/>
						<div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity hover:opacity-100"></div>
					</div>
					{PHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
						<div
							key={index}
							className={`relative overflow-hidden rounded-md sm:rounded-xl ${index >= 3 ? 'hidden sm:block' : ''
								}`}
						>
							<div className="aspect-h-3 aspect-w-4 sm:aspect-h-5 sm:aspect-w-6">
								<Image
									fill
									className="rounded-md object-cover sm:rounded-xl"
									src={item || ''}
									alt=""
									sizes="400px"
								/>
							</div>

							{/* OVERLAY */}
							<div
								className="absolute inset-0 cursor-pointer bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity hover:opacity-100"
								onClick={handleOpenModalImageGallery}
							/>
						</div>
					))}

					<button
						className="absolute bottom-3 left-3 z-10 hidden rounded-xl bg-neutral-100 px-4 py-2 text-neutral-500 hover:bg-neutral-200 md:flex md:items-center md:justify-center"
						onClick={handleOpenModalImageGallery}
					>
						<Squares2X2Icon className="h-5 w-5" />
						<span className="ml-2 text-sm font-medium text-neutral-800">
							Show all photos
						</span>
					</button>
				</div>
			</header>

			{/* MAIN */}
			<main className="relative z-10 mt-11 flex flex-col lg:flex-row">
				{/* CONTENT */}
				{isLoading ? (<>hi</> )
				
				:(<div className="w-full space-y-8 lg:w-full lg:space-y-10 lg:pr-10 xl:w-full">
					{renderSection1()}
					{renderSection2()}
					{renderSection3()}
					{AvailableRooms()}
					{renderSection4()}
					{renderSectionNeighbourhood()}
					{UpcomingTrips()}

					{/* <SectionDateRange />*/}
					{renderSection6()}
					{renderSection7()}
					{renderFAQSection()}
				</div>)}

				{/* SIDEBAR
				<div className="mt-14 hidden flex-grow lg:mt-0 lg:block">
					<div className="sticky top-28">{renderSidebar()}</div>
				</div> */}
			</main>
		</div>
	)
}

export default ListingStayDetailPage
