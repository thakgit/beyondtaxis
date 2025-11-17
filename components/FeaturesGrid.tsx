'use client'

import { motion } from 'framer-motion'
import { Calculator, Atom, Brain, Sparkles, Cpu, BookOpen, Users } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Calculator,
    title: 'Mathematics',
    description: 'Explore 4D geometry, tesseracts, and mathematical models of time as a dimension.',
    href: '/explore/mathematics',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Atom,
    title: 'Physics',
    description: 'Understand spacetime, relativity, and how physics reveals the 4th dimension.',
    href: '/explore/physics',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Learn how the brain processes time and how to develop 4D neural pathways.',
    href: '/explore/neurology',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Sparkles,
    title: 'Spirituality',
    description: 'Connect 4D consciousness with spiritual traditions and mystical experiences.',
    href: '/explore/spirituality',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: BookOpen,
    title: 'Religion',
    description: 'Explore how religious texts and traditions describe time and higher dimensions.',
    href: '/explore/religion',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'See how AI, VR, and modern tech can enhance 4D perception and understanding.',
    href: '/explore/technology',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: BookOpen,
    title: 'History',
    description: 'Discover how historical figures and cultures understood time and dimensions.',
    href: '/explore/history',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Users,
    title: 'Relationships',
    description: 'Maintain and reconnect with college friends and relationships across time.',
    href: '/explore/relationships',
    color: 'from-teal-500 to-cyan-500',
  },
]

export default function FeaturesGrid() {
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
            Explore <span className="text-gradient">All Dimensions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            BeyondTAxis combines mathematics, physics, neurology, spirituality, religion, 
            technology, and history to provide a complete understanding of 4D consciousness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={feature.href}
                  className="block glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

