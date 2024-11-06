import React from 'react'
import HeroSection from './Components/Hero'
import { SecondSection } from './Components/secondSection'
import ServicesSection from './Components/Services'
import TestimonialsSection from './Components/Testomonial'
import PlatformsCarousel from './Components/Carousel'
import ContactForm from './Components/Form'
import Footer from './Components/Footer'

export const Home = () => {
  return (
    <div>
          <HeroSection />
          <SecondSection />
          <ServicesSection />
          <TestimonialsSection />
          <PlatformsCarousel />
          <ContactForm />
          <Footer />
    </div>
  )
}
