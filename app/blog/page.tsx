import { Metadata } from 'next'
import Link from 'next/link'
import { format } from 'date-fns'
import { Calendar, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - BeyondTAxis.life',
  description: 'Articles and insights about 4D perception, consciousness, and living in the 4th dimension.',
}

const blogPosts = [
  {
    slug: 'introduction-to-4d-perception',
    title: 'Introduction to 4D Perception: Developing Your Mental Eye',
    excerpt: 'Learn how to develop the mental eye to perceive time as a spatial dimension, just like you naturally see height, width, and depth in 3D space. This foundational article explores the basics of 4D consciousness and practical steps to begin your journey.',
    date: new Date('2024-01-15'),
    category: 'Foundation',
    readTime: '8 min read',
  },
  {
    slug: 'time-as-fourth-dimension',
    title: 'Time as the Fourth Dimension: Beyond Linear Thinking',
    excerpt: 'Explore how time functions as a dimension rather than a linear progression, and how this understanding transforms your perception of reality. We dive into the physics, philosophy, and practical implications of temporal dimensionality.',
    date: new Date('2024-01-20'),
    category: 'Physics',
    readTime: '12 min read',
  },
  {
    slug: 'maintaining-college-friendships',
    title: 'Maintaining Connections Across Time: Reconnecting with College Friends',
    excerpt: 'Discover how 4D consciousness helps you maintain and rekindle relationships across years, understanding that time doesn\'t diminish connection. Learn practical strategies for staying connected with friends from your past.',
    date: new Date('2024-01-25'),
    category: 'Relationships',
    readTime: '10 min read',
  },
  {
    slug: 'mathematics-of-4d',
    title: 'The Mathematics of 4D: Tesseracts and Hypercubes',
    excerpt: 'Dive into the mathematical foundations of 4D geometry, understanding tesseracts, hypercubes, and how mathematicians visualize higher dimensions. This article makes complex mathematical concepts accessible.',
    date: new Date('2024-02-01'),
    category: 'Mathematics',
    readTime: '15 min read',
  },
  {
    slug: 'neurology-time-perception',
    title: 'How the Brain Processes Time: Neurological Foundations of 4D',
    excerpt: 'Explore the neuroscience behind time perception and how we can train our brains to develop 4D neural pathways. Understanding the biological basis of temporal consciousness.',
    date: new Date('2024-02-08'),
    category: 'Neurology',
    readTime: '14 min read',
  },
  {
    slug: 'spirituality-4d-consciousness',
    title: '4D Consciousness in Spiritual Traditions',
    excerpt: 'Connect 4D consciousness with spiritual traditions from around the world. Discover how mystics, sages, and spiritual teachers have described experiences that align with 4D perception.',
    date: new Date('2024-02-15'),
    category: 'Spirituality',
    readTime: '11 min read',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            The <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-gray-300">
            Deep explorations into 4D perception, consciousness, and living beyond the third dimension
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-xs font-semibold text-primary-400 px-3 py-1 rounded-full bg-primary-500/20">
                  {post.category}
                </span>
                <div className="flex items-center space-x-1 text-gray-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{format(post.date, 'MMMM d, yyyy')}</span>
                </div>
                <span className="text-gray-500 text-sm">•</span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-white hover:text-primary-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">{post.excerpt}</p>
              
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
              >
                <span className="font-medium">Read article</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

