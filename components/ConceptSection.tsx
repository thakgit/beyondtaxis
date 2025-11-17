'use client'

import { motion } from 'framer-motion'
import { Brain, Clock, Eye, Infinity } from 'lucide-react'

const concepts = [
  {
    icon: Eye,
    title: '4D Perception',
    description: 'Develop the mental eye to perceive time as a spatial dimension, just like you naturally see height, width, and depth.',
  },
  {
    icon: Clock,
    title: 'Time as Dimension',
    description: 'Understand time not as a linear progression, but as a dimension you can navigate, observe, and interact with consciously.',
  },
  {
    icon: Brain,
    title: '24/7 Awareness',
    description: 'Live in 4D consciousness continuously—aware and using it naturally, without worry, in auto mode like your 3D body perception.',
  },
  {
    icon: Infinity,
    title: 'Beyond Limits',
    description: 'Transcend the limitations of 3D thinking and unlock new ways of understanding reality, relationships, and existence.',
  },
]

export default function ConceptSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            The <span className="text-gradient">4D Concept</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We live in 3D unconsciously—aware of height, depth, and width of our body and perception, 
            operating in auto mode without worry. Similarly, develop the perception to live in 4D with 
            that mental eye, aware and using it 24/7, taking time as an extra dimension in everyday life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {concepts.map((concept, index) => {
            const Icon = concept.icon
            return (
              <motion.div
                key={concept.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{concept.title}</h3>
                <p className="text-gray-400 leading-relaxed">{concept.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

