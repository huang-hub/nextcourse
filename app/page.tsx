import Hero from '@/components/Hero'
import CourseList from '@/components/CourseList'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <CourseList />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  )
}