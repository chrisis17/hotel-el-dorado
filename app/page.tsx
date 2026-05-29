import { Navigation } from '@/components/navigation';
import { Carousel } from '@/components/carousel';
import { HeroSection } from '@/components/hero-section';
import { RoomsSection } from '@/components/rooms-section';
import { LocationSection } from '@/components/location-section';
import { EventsSection } from '@/components/events-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  const carouselImages = [
    { src: '/fachada.jpeg', alt: 'Fachada del Hotel El Dorado' },
    { src: '/terraza.jpeg', alt: 'Terraza del hotel' },
    { src: '/doble.jpeg', alt: 'Habitación Doble' },
    { src: '/matrimonial.jpeg', alt: 'Habitación Matrimonial' },
    { src: '/queen.jpeg', alt: 'Habitación Queen' },
    { src: '/lobby.jpeg', alt: 'Elegante lobby del Hotel El Dorado' },
  ];

  return (
    <>
      <Navigation />
      <Carousel images={carouselImages} autoplay={true} interval={5000} />
      <HeroSection />
      <RoomsSection />
      <LocationSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
