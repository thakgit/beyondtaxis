import { Metadata } from 'next'
import { Sparkles, Target, Eye, Infinity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About - BeyondTAxis.life',
  description: 'Learn about BeyondTAxis.life and our mission to help people develop 4D consciousness.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500/20 rounded-full mb-6">
            <Sparkles className="w-10 h-10 text-primary-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            About <span className="text-gradient">BeyondTAxis.life</span>
          </h1>
          <p className="text-xl text-gray-300">
            Exploring the 4th dimension of time and consciousness
          </p>
        </div>

        <div className="space-y-12">
          <section className="glass rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              BeyondTAxis.life is dedicated to helping people develop 4D consciousness—the ability 
              to perceive and live with time as a tangible dimension in everyday life, just like we 
              naturally perceive height, width, and depth in 3D space.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe that developing this &ldquo;mental eye&rdquo; for 4D perception can transform how we 
              understand reality, maintain relationships, make decisions, and experience life itself.
            </p>
          </section>

          <section className="glass rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-white">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Comprehensive</h3>
                <p className="text-gray-400">
                  We combine mathematics, physics, neurology, spirituality, religion, technology, and history 
                  to provide a complete understanding of 4D consciousness.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Practical</h3>
                <p className="text-gray-400">
                  Our content includes practical exercises, techniques, and strategies for developing 
                  4D perception in your daily life.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Infinity className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Accessible</h3>
                <p className="text-gray-400">
                  We make complex concepts accessible through clear explanations, visualizations, 
                  and real-world examples.
                </p>
              </div>
            </div>
          </section>

          <section className="glass rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">The Concept</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Just as we live in 3D unconsciously—aware of the height, depth, and width of our body 
              and perception, operating in auto mode without worry—we can develop the perception to 
              live in 4D with that mental eye.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              The goal is to be aware and use 4D consciousness 24/7, taking time as an extra dimension 
              in everyday life, just like our 3D body, height, weight, and length.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              This isn&apos;t about escaping time or transcending it—it&apos;s about fully integrating temporal 
              awareness into your daily experience, making it as natural as spatial awareness.
            </p>
          </section>

          <section className="glass rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">Join the Journey</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you&apos;re interested in the mathematics of 4D geometry, the physics of spacetime, 
              the neurology of time perception, or the spiritual dimensions of temporal consciousness, 
              BeyondTAxis.life offers resources to support your journey into 4D awareness.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

