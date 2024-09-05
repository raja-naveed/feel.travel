import React, { FC } from 'react'
import HeadingGallery from './HeadingGallery'


const generateRandomImage = (width: number, height: number) =>
	`https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`

const PHOTO_COUNT = 6;

const Gallery: FC = () => {
	const photos = Array.from({ length: PHOTO_COUNT }, (_, i) => ({
		id: i,
		url: generateRandomImage(
			i % 3 === 0 ? 800 : 400, 
			i % 3 === 0 ? 600 : 400, 
		),
		size: i % 3 === 0 ? 'large' : 'small',
	}))

	return (
		<div className="nc-Gallery">
            <HeadingGallery >Community Pictures</HeadingGallery>
			<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
				{photos.map((photo) => (
					<div
						key={photo.id}
						className={`relative w-full ${
							photo.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
						} h-48 md:h-auto`}
					>
						<img
							src={photo.url}
							alt={`Gallery image ${photo.id}`}
							className="h-full w-full rounded-lg object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default Gallery
