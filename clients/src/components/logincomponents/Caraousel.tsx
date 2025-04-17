import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/no-one-cares-l_5MJnbrmrs-unsplash.jpg";
import photo3 from "../../assets/photo2.webp";
import photo4 from "../../assets/photo4.jpg";

// Use the imported images in the array
const images = [
  {
    url: photo1,
    alt: 'Farmer inspecting crops',
  },
  {
    url: photo2,
    alt: 'Agricultural landscape',
  },
  {
    url: photo3,
    alt: 'Climate change impact',
  },
  {
    url: photo4,
    alt: 'Data visualization',
  },
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Timer to automatically change the slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(goToNext, 3000); // Change every 3 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className={`${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          >
            <AspectRatio ratio={16 / 9}>
              <img
                src={image.url}
                alt={image.alt}
                className="rounded-lg object-cover w-full h-full"
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)} />
      <CarouselNext onClick={goToNext} />
    </Carousel>
  );
}
