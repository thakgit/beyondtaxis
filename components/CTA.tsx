'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass rounded-2xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-primary-800/20" />
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-full mb-6"
            >
              <Sparkles className="w-8 h-8 text-primary-400" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Begin Your <span className="text-gradient">4D Journey</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Start developing your mental eye to perceive time as a dimension. 
              Learn to live in 4D consciousness 24/7, just like you naturally navigate 3D space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/explore"
                className="group inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 glow-effect"
              >
                Explore Concepts
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-4 glass hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Read Articles
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

