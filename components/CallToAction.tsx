import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Next.js Journey?</h2>
        <p className="text-xl mb-8">Join thousands of developers who have transformed their careers with our courses.</p>
        <Button size="lg" variant="secondary">Enroll Now</Button>
      </div>
    </section>
  )
}