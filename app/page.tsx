import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import FeaturedWork from '@/components/home/FeaturedWork';
import TestimonialsMarquee from '@/components/home/TestimonialsMarquee';
import CtaBand from '@/components/layout/CtaBand';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <FeaturedWork />
      <TestimonialsMarquee />
      <CtaBand variant="dark" />
    </>
  );
}
