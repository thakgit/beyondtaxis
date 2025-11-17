'use client'

import { motion } from 'framer-motion'
import { Box, Boxes, Grid3x3 } from 'lucide-react'

const dimensions = [
  {
    dimension: '3D',
    icon: Box,
    title: 'Current Reality',
    description: 'Height, Width, Depth',
    examples: [
      'Perceiving your body in space',
      'Understanding spatial relationships',
      'Navigating physical environments',
      'Auto-mode awareness',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    dimension: '4D',
    icon: Boxes,
    title: 'BeyondTAxis Reality',
    description: 'Height, Width, Depth, Time',
    examples: [
      'Perceiving time as spatial dimension',
      'Navigating temporal relationships',
      'Understanding cause-effect across time',
      '24/7 conscious time awareness',
    ],
    color: 'from-purple-500 to-pink-500',
  },
]

export default function DimensionsComparison() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Why <span className="text-gradient">4D</span> Over 3D?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            While 3D perception is powerful, 4D consciousness unlocks capabilities that go beyond 
            spatial awareness—enabling you to navigate time, relationships, and reality itself.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {dimensions.map((dim, index) => {
            const Icon = dim.icon
            return (
              <motion.div
                key={dim.dimension}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${dim.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">{dim.dimension}</div>
                    <div className="text-lg text-gray-300">{dim.title}</div>
                    <div className="text-sm text-primary-400">{dim.description}</div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {dim.examples.map((example, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${dim.color} mt-2 flex-shrink-0`} />
                      <span className="text-gray-300">{example}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-4xl mx-auto glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gradient">
            The Key Difference
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            <strong className="text-white">3D thinking</strong> is limited to spatial relationships and immediate cause-effect. 
            <strong className="text-white"> 4D consciousness</strong> allows you to perceive temporal patterns, understand 
            relationships across time, maintain connections with people across years, and make decisions with full awareness 
            of their temporal implications—just like you naturally navigate space, but now with time as your fourth axis.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

