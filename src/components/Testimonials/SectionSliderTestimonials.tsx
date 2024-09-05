'use client'
import React, { FC } from 'react'
import TestimonialCard from './TestimonialCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import {  Pagination } from 'swiper/modules'
import "./Testimonials.css"

const DEMO_TESTIMONIALS = [
	{
		id: '1',
		review:
			'This villa exceeded all my expectations. The atmosphere was so peaceful, and the staff were incredibly friendly. Highly recommend!',
		userImage: 'https://randomuser.me/api/portraits/women/68.jpg',
		userName: 'Emily Johnson',
		rating: 5,
		userPosition: 'Travel Blogger',
		testimonialImage: 'https://via.placeholder.com/600x400',
	},
	{
		id: '1',
		review:
			'This villa exceeded all my expectations. The atmosphere was so peaceful, and the staff were incredibly friendly. Highly recommend!',
		userImage: 'https://randomuser.me/api/portraits/women/68.jpg',
		userName: 'Emily Johnson',
		rating: 5,
		userPosition: 'Travel Blogger',
		testimonialImage: 'https://via.placeholder.com/600x400',
	},
	{
		id: '1',
		review:
			'This villa exceeded all my expectations. The atmosphere was so peaceful, and the staff were incredibly friendly. Highly recommend!',
		userImage: 'https://randomuser.me/api/portraits/women/68.jpg',
		userName: 'Emily Johnson',
		rating: 5,
		userPosition: 'Travel Blogger',
		testimonialImage: 'https://via.placeholder.com/600x400',
	},
	// Add more testimonials as needed
]

const SectionSliderTestimonials: FC = () => {
	return (
		<div className="nc-SectionSliderTestimonials py-10">
			<h2 className="mb-10 text-center text-2xl font-semibold">Testimonials</h2>
			<Swiper
				spaceBetween={30}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				modules={[ Pagination]}
				loop={true}
			>
				{DEMO_TESTIMONIALS.map((testimonial) => (
					<SwiperSlide key={testimonial.id}>
						<TestimonialCard data={testimonial} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default SectionSliderTestimonials
