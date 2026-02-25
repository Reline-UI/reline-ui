"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { cn } from "../../utils/cn";

/* ---------------------------------- */
/* Animated Counter Hook              */
/* ---------------------------------- */

function useCounter(end, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
}

/* ---------------------------------- */
/* Testimonial Card                   */
/* ---------------------------------- */

export function TestimonialCard({
  review,
  name,
  designation,
  image,
  variant = "default", // "default" | "glass"
  className,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-500",
        "hover:-translate-y-2 hover:shadow-2xl hover:rotate-3",
        variant === "default" &&
          "bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800",
        variant === "glass" &&
          "backdrop-blur-xl bg-white/10 border border-white/20 dark:bg-white/5",
        className,
      )}
    >
      {/* Subtle Gradient Border */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-transparent via-transparent to-neutral-200/30 dark:to-white/10" />

      <p className="relative text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 ">
        {review}
      </p>

      <div className="relative flex items-center gap-3 mt-6">
        <img
          src={image}
          alt={name}
          className="h-10 w-10 rounded-md object-cover"
        />
        <div>
          <p className="text-sm font-medium text-neutral-900 dark:text-white">
            {name}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {designation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------------------------- */
/* Image Counter Card                 */
/* ---------------------------------- */

export function ImageCounterCard({ image, value, label, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  const numericValue = parseInt(value);
  const counter = useCounter(isInView ? numericValue : 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
      }
      transition={{ duration: 0.6 }}
      className={cn(
        "relative rounded-2xl overflow-hidden min-h-[220px]",
        " transition-all duration-500 group hover:-rotate-1 hover:shadow-2xl",
        className,
      )}
    >
      <img
        src={image}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white group-hover:-translate-y-2 transition-all ease-in duration-300">
        <p className="text-3xl font-bold ">
          {counter}
          {value.includes("%") && "%"}
          {value.includes("+") && "+"}
        </p>
        <p className="text-sm opacity-80">{label}</p>
      </div>
    </motion.div>
  );
}

/* ---------------------------------- */
/* Bento Testimonials                 */
/* ---------------------------------- */

export function BentoTestimonials({
  layout = "default", // "default" | "reverse"
  variant = "default",
}) {
  const isReverse = layout === "reverse";

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-neutral-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-neutral-900 dark:text-white">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Row 1 */}
          <TestimonialCard
            review="Reline helped us ship premium UI faster than ever."
            name="Arjun Mehta"
            designation="Frontend Lead"
            image="https://randomuser.me/api/portraits/men/32.jpg"
            variant={variant}
          />

          <TestimonialCard
            review="The design system feels modern, scalable, and incredibly polished."
            name="Sarah Lee"
            designation="Product Designer"
            image="https://randomuser.me/api/portraits/women/44.jpg"
            variant={variant}
          />

          <ImageCounterCard
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            value="88%"
            label="Deployment efficiency"
          />

          {/* Row 2 Dynamic */}
          {isReverse ? (
            <>
              <TestimonialCard
                review="Our team productivity has doubled."
                name="Noah Brown"
                designation="Founder"
                image="https://randomuser.me/api/portraits/men/75.jpg"
                variant={variant}
              />
              <ImageCounterCard
                image="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
                value="120+"
                label="Projects completed"
              />
              <TestimonialCard
                review="Smooth animations and perfect dark mode."
                name="Liam Johnson"
                designation="Product Manager"
                image="https://randomuser.me/api/portraits/men/41.jpg"
                variant={variant}
              />
            </>
          ) : (
            <>
              <ImageCounterCard
                image="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
                value="120+"
                label="Projects completed"
              />
              <TestimonialCard
                review="Our team productivity has doubled."
                name="Noah Brown"
                designation="Founder"
                image="https://randomuser.me/api/portraits/men/75.jpg"
                variant={variant}
              />
              <TestimonialCard
                review="Smooth animations and perfect dark mode."
                name="Liam Johnson"
                designation="Product Manager"
                image="https://randomuser.me/api/portraits/men/41.jpg"
                variant={variant}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
