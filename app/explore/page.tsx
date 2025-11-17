import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, Atom, Brain, Sparkles, Cpu, BookOpen, Users, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Explore - BeyondTAxis.life',
  description: 'Explore 4D consciousness through mathematics, physics, neurology, spirituality, religion, technology, and history.',
}

const topics = [
  {
    slug: 'mathematics',
    icon: Calculator,
    title: 'Mathematics',
    description: 'Explore 4D geometry, tesseracts, hypercubes, and mathematical models of time as a dimension. Understand the mathematical foundations of higher-dimensional space.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    slug: 'physics',
    icon: Atom,
    title: 'Physics',
    description: 'Understand spacetime, relativity, quantum mechanics, and how physics reveals the 4th dimension. Explore Einstein\'s insights and modern physics.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    slug: 'neurology',
    icon: Brain,
    title: 'Neurology',
    description: 'Learn how the brain processes time, develops temporal awareness, and how to train neural pathways for 4D consciousness. Explore the neuroscience of time perception.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    slug: 'spirituality',
    icon: Sparkles,
    title: 'Spirituality',
    description: 'Connect 4D consciousness with spiritual traditions, mystical experiences, and timeless wisdom. Explore how mystics have described 4D-like experiences.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    slug: 'religion',
    icon: BookOpen,
    title: 'Religion',
    description: 'Explore how religious texts and traditions describe time, eternity, and higher dimensions. Understand the religious perspective on temporal consciousness.',
    color: 'from-red-500 to-rose-500',
  },
  {
    slug: 'technology',
    icon: Cpu,
    title: 'Technology',
    description: 'See how AI, VR, AR, and modern technology can enhance 4D perception and understanding. Explore tech tools for developing temporal awareness.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    slug: 'history',
    icon: BookOpen,
    title: 'History',
    description: 'Discover how historical figures, cultures, and civilizations understood time and dimensions. Learn from the temporal wisdom of the past.',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    slug: 'relationships',
    icon: Users,
    title: 'Relationships',
    description: 'Maintain and reconnect with college friends and relationships across time. Learn how 4D consciousness transforms how we maintain connections.',
    color: 'from-teal-500 to-cyan-500',
  },
]

export default function ExplorePage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Explore <span className="text-gradient">4D Consciousness</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive deep into the many dimensions of 4D perception. From mathematics to spirituality, 
            from physics to relationships—explore how 4D consciousness connects everything.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic) => {
            const Icon = topic.icon
            return (
              <Link
                key={topic.slug}
                href={`/explore/${topic.slug}`}
                className="group block glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${topic.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors">
                  {topic.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">{topic.description}</p>
                <div className="flex items-center text-primary-400 group-hover:text-primary-300 transition-colors">
                  <span className="text-sm font-medium">Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

