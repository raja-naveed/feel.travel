"use client"
import React, { FC, ReactNode ,useState , useEffect } from "react";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import StayCard from "./StayCard";
import StayCard2 from "./StayCard2";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 4);

//
export interface SectionGridFeaturePlacesProps {
  stayListings?: StayDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
  cardType?: "card1" | "card2";
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
	stayListings = DEMO_DATA,
	gridClass = '',
	heading = 'Featured Co-Working Villas',
	subHeading = 'Popular villas to stay that Feel Travel recommends for you',
	headingIsCenter,
	tabs = ['New York', 'Tokyo', 'Paris', 'London'],
	cardType = 'card2',
}) => {

// 	const [stayListings, setStayListings] = useState<StayDataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/stays'); // Replace with your API endpoint
//         setStayListings(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);



	const renderCard = (stay: StayDataType) => {
		let CardName = StayCard
		switch (cardType) {
			case 'card1':
				CardName = StayCard2
				break
			case 'card2':
				CardName = StayCard2
				break

			default:
				CardName = StayCard2
		}

		return <CardName key={stay.id} data={stay} />
	}

	return (
		<div className="nc-SectionGridFeaturePlaces relative">
			<HeaderFilter
				tabActive={'New York'}
				subHeading={subHeading}
				tabs={tabs}
				heading={heading}
			/>
			{isLoading ? (
				<div className="flex items-center justify-center py-8">
					<div className="h-12 w-12 animate-spin rounded-full border-4 border-dotted border-blue-500"></div>
				</div>
			) : (
				<div
					className={`grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
				>
					{stayListings.map((stay) => renderCard(stay))}
				</div>
			)}
			{/* <div className="flex mt-16 justify-center items-center"> */}
			{/* <ButtonPrimary loading>Show me more</ButtonPrimary> */}
			{/* </div> */}
		</div>
	)
}

export default SectionGridFeaturePlaces;
