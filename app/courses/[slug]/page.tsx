"use client"

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Lesson {
  id: number
  title: string
  content: string
  is_free: boolean
}

interface Course {
  id: number
  title: string
  description: string
  price: number
  lessons: Lesson[]
}

export default function CoursePage() {
  const [course, setCourse] = useState<Course | null>(null)
  const [userHasAccess, setUserHasAccess] = useState(false)
  const params = useParams()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const fetchCourse = async () => {
      const { data: courseData, error: courseError } = await supabase
        .from('courses')
        .select('*')
        .eq('slug', params.slug)
        .single()

      if (courseData) {
        const { data: lessonData, error: lessonError } = await supabase
          .from('lessons')
          .select('*')
          .eq('course_id', courseData.id)
          .order('id')

        if (lessonData) {
          setCourse({ ...courseData, lessons: lessonData })
        }
      }
    }

    const checkUserAccess = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data, error } = await supabase
          .from('user_courses')
          .select('*')
          .eq('user_id', user.id)
          .eq('course_id', course?.id)
          .single()

        setUserHasAccess(!!data)
      }
    }

    fetchCourse()
    if (course) {
      checkUserAccess()
    }
  }, [supabase, params.slug, course?.id])

  const handleEnroll = async () => {
    // Implement Stripe checkout here
    console.log('Enrolling in course...')
  }

  if (!course) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-xl mb-8">{course.description}</p>
      {!userHasAccess && (
        <Button onClick={handleEnroll} className="mb-8">
          Enroll for ${course.price}
        </Button>
      )}
      <div className="space-y-4">
        {course.lessons.map((lesson) => (
          <Card key={lesson.id}>
            <CardHeader>
              <CardTitle>{lesson.title}</CardTitle>
              <CardDescription>
                {lesson.is_free ? 'Free Preview' : 'Premium Content'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {lesson.is_free || userHasAccess ? (
                <p>{lesson.content}</p>
              ) : (
                <p>This lesson is locked. Enroll in the course to access it.</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}