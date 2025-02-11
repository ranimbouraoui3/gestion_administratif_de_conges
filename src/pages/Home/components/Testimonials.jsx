
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./styles/Testimonials.css"

const testimonials = [
    {
        name: "John Doe",
        role: "Frontend Developer",
        content:
            "ReactIdeas has revolutionized the way I build web applications. The components are intuitive and the performance is outstanding.",
    },
    {
        name: "Jane Smith",
        role: "UX Designer",
        content:
            "I love how ReactIdeas combines beautiful design with powerful functionality. It's a game-changer for creating engaging user experiences.",
    },
    {
        name: "Mike Johnson",
        role: "Product Manager",
        content:
            "The flexibility and ease of use of ReactIdeas have significantly sped up our development process. Highly recommended!",
    },
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <h2 className="title">What Our Users Say</h2>
                <div className="testimonial-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="testimonial-card"
                        >
                            <p className="testimonial-text">{testimonials[currentIndex].content}</p>
                            <p className="testimonial-name">{testimonials[currentIndex].name}</p>
                            <p className="testimonial-role">{testimonials[currentIndex].role}</p>
                        </motion.div>
                    </AnimatePresence>
                    <button className="arrow-button left" onClick={prevTestimonial}>
                        <ChevronLeft size={24} />
                    </button>
                    <button className="arrow-button right" onClick={nextTestimonial}>
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    )
}