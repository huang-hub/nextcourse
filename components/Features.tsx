import { CheckCircle } from 'lucide-react'

const features = [
  "Learn from industry experts",
  "Hands-on projects and exercises",
  "Comprehensive course materials",
  "24/7 support from instructors",
  "Certificate upon completion",
  "Access to exclusive community",
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Our Courses?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <CheckCircle className="text-green-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}