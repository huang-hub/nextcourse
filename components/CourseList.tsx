import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const courses = [
  {
    id: 1,
    title: "Next.js Fundamentals",
    description: "Learn the basics of Next.js and server-side rendering.",
    price: 49.99,
  },
  {
    id: 2,
    title: "Advanced Next.js Patterns",
    description: "Master advanced concepts and patterns in Next.js development.",
    price: 79.99,
  },
  {
    id: 3,
    title: "Full-Stack Next.js",
    description: "Build complete web applications with Next.js and popular backend technologies.",
    price: 99.99,
  },
]

export default function CourseList() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">${course.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Enroll Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}