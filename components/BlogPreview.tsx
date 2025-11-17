'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'
import { format } from 'date-fns'

const blogPosts = [
  {
    slug: 'introduction-to-4d-perception',
    title: 'Introduction to 4D Perception: Developing Your Mental Eye',
    excerpt: 'Learn how to develop the mental eye to perceive time as a spatial dimension, just like you naturally see height, width, and depth in 3D space.',
    date: new Date('2024-01-15'),
    category: 'Foundation',
  },
  {
    slug: 'time-as-fourth-dimension',
    title: 'Time as the Fourth Dimension: Beyond Linear Thinking',
    excerpt: 'Explore how time functions as a dimension rather than a linear progression, and how this understanding transforms your perception of reality.',
    date: new Date('2024-01-20'),
    category: 'Physics',
  },
  {
    slug: 'maintaining-college-friendships',
    title: 'Maintaining Connections Across Time: Reconnecting with College Friends',
    excerpt: 'Discover how 4D consciousness helps you maintain and rekindle relationships across years, understanding that time doesn\'t diminish connection.',
    date: new Date('2024-01-25'),
    category: 'Relationships',
  },
  {
    slug: 'mathematics-of-4d',
    title: 'The Mathematics of 4D: Tesseracts and Hypercubes',
    excerpt: 'Dive into the mathematical foundations of 4D geometry, understanding tesseracts, hypercubes, and how mathematicians visualize higher dimensions.',
    date: new Date('2024-02-01'),
    category: 'Mathematics',
  },
]

export default function BlogPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Latest from the <span className="text-gradient">Blog</span>
            </h2>
            <p className="text-xl text-gray-300">
              Deep dives into 4D consciousness, perception, and living
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full group"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs font-semibold text-primary-400 px-2 py-1 rounded bg-primary-500/20">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{format(post.date, 'MMM d, yyyy')}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center text-primary-400 group-hover:text-primary-300 transition-colors">
                  <span className="text-sm font-medium">Read more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center md:hidden"
        >
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <span>View All Posts</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

