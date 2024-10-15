import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    content: "The Next.js course was incredibly helpful. I've learned so much and feel confident in building complex web applications now.",
    avatar: "JD",
  },
  {
    name: "Jane Smith",
    role: "Full-Stack Engineer",
    content: "I highly recommend this course to anyone looking to master Next.js. The instructors are knowledgeable and the content is top-notch.",
    avatar: "JS",
  },
  {
    name: "Mike Johnson",
    role: "Software Architect",
    content: "This course has been a game-changer for my career. The advanced patterns section was particularly enlightening.",
    avatar: "MJ",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${testimonial.avatar}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}