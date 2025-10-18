'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Je recommande vivement Jacques-Henri pour son approche structurée, sa vision business claire et sa capacité à relier la théorie à la pratique. Grâce à ses exercices et à l'expérimentation d'outils IA, il transforme l'apprentissage en une expérience immédiatement actionnable",
    author: "Thomas Legrand",
    role: "AI & Data Product Builder @ Kaora Partners",
    rating: 5
  },
  {
    text: "Un super coup de boost reçu par Jacques Henri à travers une formation de qualité, qui nous a permis de nous acculturer avec l'IA, comprendre l'importance de son utilisation, et de prendre en main assez rapidement les différents outils à disposition. Depuis on a développé notre propre IA en interne et on se s'en sépare plus ! Je recommande vivement !",
    author: "Heba Makhoul",
    role: "co CEO de Kaora Partners (ESN 120 collaborateurs)",
    rating: 5
  },
  {
    text: "J'ai eu la chance de bénéficier de l'accompagnement de Jacques-Henri Marin de Lenouvion Consulting lors du lancement de ma société, OKKO Consulting, et je peux témoigner de la valeur remarquable de son approche. Ce qui distingue Jacques-Henri, c'est sa capacité à démystifier l'IA et à la rendre accessible aux TPE/PME. Son approche est résolument pédagogique et pragmatique : chaque conseil est immédiatement applicable, expliqué simplement et adapté à la réalité des petites structures comme la mienne.",
    author: "Corinne Leber",
    role: "Fondatrice OKKO Consulting",
    rating: 5
  }
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const TestimonialsCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const testimonialIndex = Math.abs(page % testimonials.length);
  
  // Assurez-vous que l'index est toujours positif
  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };

  const paginate = (newDirection: number) => {
    const newPage = wrap(0, testimonials.length, page + newDirection);
    setPage([newPage, newDirection]);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full"
          >
            <div className="bg-brand-50 rounded-xl shadow-lg p-8 mx-auto max-w-2xl">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current h-6 w-6" />
                ))}
              </div>
              <blockquote className="text-xl italic text-gray-700 mb-6">
                "{testimonials[testimonialIndex].text}"
              </blockquote>
              <div className="text-center">
                <p className="font-bold text-brand-600 text-lg">
                  {testimonials[testimonialIndex].author}
                </p>
                <p className="text-gray-600">
                  {testimonials[testimonialIndex].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage([index, index > testimonialIndex ? 1 : -1])}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === testimonialIndex ? 'bg-brand-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;