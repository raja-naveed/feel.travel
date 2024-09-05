import SectionSliderNewCategories from '@/components/SectionSliderNewCategories'
import React from 'react'
import SectionSubscribe2 from '@/components/SectionSubscribe2'
import SectionOurFeatures from '@/components/SectionOurFeatures'
import SectionHowItWork from '@/components/SectionHowItWork'
import BackgroundSection from '@/components/BackgroundSection'
import { TaxonomyType } from '@/data/types'
import SectionGridAuthorBox from '@/components/SectionGridAuthorBox'
//
import logo1 from '@/images/logos/nomal/1.png'
import logo1Dark from '@/images/logos/dark/1.png'
//
import logo2 from '@/images/logos/nomal/2.png'
import logo2Dark from '@/images/logos/dark/2.png'
//
import logo3 from '@/images/logos/nomal/3.png'
import logo3Dark from '@/images/logos/dark/3.png'
//
import logo4 from '@/images/logos/nomal/4.png'
import logo4Dark from '@/images/logos/dark/4.png'
//
import logo5 from '@/images/logos/nomal/5.png'
import logo5Dark from '@/images/logos/dark/5.png'
//
import HIW1img from '@/images/HIW2-1.png'
import HIW2img from '@/images/HIW2-2.png'
import HIW3img from '@/images/HIW2-3.png'
import HIW1imgDark from '@/images/HIW2-1-dark.png'
import HIW2imgDark from '@/images/HIW2-2-dark.png'
import HIW3imgDark from '@/images/HIW2-3-dark.png'
import rightImgPng from '@/images/our-features-2.png'
import SectionHero2 from '@/app/(server-components)/SectionHero2'
import Image from 'next/image'
import SectionGridFeatureProperty from './(home)/SectionGridFeatureProperty'
import SectionDowloadApp from './(home)/SectionDowloadApp'
import SectionGridFeaturePlaces from '@/components/SectionGridFeaturePlaces'
import SectionGridFeatureBlogs from '@/components/BlogFeatured/SectionGridFeatureBlogs'
import SectionSliderTestimonials from '@/components/Testimonials/SectionSliderTestimonials'
import Gallery from '@/components/Gallery/Gallery'

const DEMO_CATS_2: TaxonomyType[] = [
	{
		id: '1',
		href: '/listing-real-estate',
		name: 'Enjoy the great cold',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
	},
	{
		id: '2',
		href: '/listing-real-estate',
		name: 'Sleep in a floating way',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
	{
		id: '3',
		href: '/listing-real-estate',
		name: "In the billionaire's house",
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
	{
		id: '4',
		href: '/listing-real-estate',
		name: 'Cool in the deep forest',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
	{
		id: '5',
		href: '/listing-real-estate',
		name: "In the billionaire's house",
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
	{
		id: '6',
		href: '/listing-real-estate',
		name: 'Sleep in a floating way',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
	{
		id: '7',
		href: '/listing-real-estate',
		name: "In the billionaire's house",
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
]

function PageHome2() {
	return (
		<main className="nc-PageHome2 relative overflow-hidden">
			<div className="container relative mb-24 space-y-24 lg:mb-28 lg:space-y-28">
				<SectionHero2 className="" />
			{/* <div className="ncSectionLogos grid grid-cols-3 gap-5 sm:gap-16 lg:grid-cols-5">
					<div className="flex items-end justify-center">
						<Image className="block dark:hidden" src={logo1} alt="logo1" />
						<Image className="hidden dark:block" src={logo1Dark} alt="logo1" />
					</div>
					<div className="flex items-end justify-center">
						<Image className="block dark:hidden" src={logo4} alt="logo4" />
						<Image className="hidden dark:block" src={logo4Dark} alt="logo4" />
					</div>
					<div className="flex items-end justify-center">
						<Image className="block dark:hidden" src={logo2} alt="logo2" />
						<Image className="hidden dark:block" src={logo2Dark} alt="logo2" />
					</div>
					<div className="flex items-end justify-center">
						<Image className="block dark:hidden" src={logo3} alt="logo3" />
						<Image className="hidden dark:block" src={logo3Dark} alt="logo3" />
					</div>

					<div className="flex items-end justify-center">
						<Image className="block dark:hidden" src={logo5} alt="logo5" />
						<Image className="hidden dark:block" src={logo5Dark} alt="logo5" />
					</div>
			</div> */}
				<SectionHowItWork
					data={[
						{
							id: 1,
							img: HIW1img,
							imgDark: HIW1imgDark,
							title: 'Pick your Spot & Price',
							desc: "Choose your dream co-working villa and name your price. TripLeader or not, we've got you covered with Feel, your digital travel buddy!",
						},
						{
							id: 2,
							img: HIW2img,
							imgDark: HIW2imgDark,
							title: 'Join the Party',
							desc: 'Select your room, meet future roomies, and join our vibrant community of like-minded travelers. Our community is your new travel family!',
						},
						{
							id: 3,
							img: HIW3img,
							imgDark: HIW3imgDark,
							title: 'Save & Celebrate',
							desc: 'More friends, more fun, more savings! Cash in or grab a bonus voucher. With Feel.travel, every journey is a new adventure waiting to happen!',
						},
					]}
				/>
				<div className="relative py-16">
					<BackgroundSection />
					<SectionGridFeaturePlaces />
				</div>
				<Gallery />
				<div className="relative py-16">
					<BackgroundSection />
					<SectionGridFeatureBlogs />
				</div>
				<SectionOurFeatures type="type2" rightImg={rightImgPng} />
				<SectionSliderTestimonials />
				{/* <SectionDowloadApp />
				<SectionSliderNewCategories
					categories={DEMO_CATS_2}
					categoryCardType="card4"
					itemPerRow={4}
					heading="Suggestions for discovery"
					subHeading="Popular places to stay that Chisfis recommends for you"
				/> */}
				{/* <div className="relative py-16">
					<BackgroundSection className="bg-neutral-100 dark:bg-black dark:bg-opacity-20" />
					<SectionGridAuthorBox boxCard="box2" />
				</div> */}
				{/* <SectionSliderNewCategories
					heading="Explore by types of stays"
					subHeading="Explore houses based on 10 types of stays"
					categoryCardType="card5"
					itemPerRow={5}
				/> */}
				<div className="relative py-16">
					<BackgroundSection />
				<SectionSubscribe2 />
				</div>
			</div>
		</main>
	)
}

export default PageHome2
