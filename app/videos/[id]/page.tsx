import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Play, Youtube } from 'lucide-react'

const videos: Record<string, {
  title: string
  description: string
  duration: string
  category: string
  youtubeId?: string
  content: string
}> = {
  'intro-4d': {
    title: 'Introduction to 4D Perception',
    description: 'Understanding the basics of perceiving time as a dimension',
    duration: '12:34',
    category: 'Foundation',
    youtubeId: 'dQw4w9WgXcQ',
    content: `# Introduction to 4D Perception

This video introduces the fundamental concepts of 4D perception and how to begin developing your mental eye for temporal awareness.

## Key Topics Covered

- What is 4D consciousness?
- The difference between 3D and 4D perception
- How to start developing temporal awareness
- Practical first steps

## Next Steps

After watching this video, check out our blog posts and explore section for deeper dives into 4D consciousness.`
  },
  'developing-mental-eye': {
    title: 'Developing Your Mental Eye for 4D',
    description: 'Practical exercises and techniques to develop 4D consciousness',
    duration: '18:45',
    category: 'Practice',
    youtubeId: 'dQw4w9WgXcQ',
    content: `# Developing Your Mental Eye for 4D

Learn practical exercises and techniques to develop your 4D consciousness and temporal awareness.

## Exercises Covered

- Temporal visualization techniques
- Daily awareness practices
- Memory exercises for temporal processing
- Integration into daily life

## Practice Regularly

Consistency is key to developing 4D perception. Practice these exercises daily for best results.`
  },
  'time-dimension-explained': {
    title: 'Time as Dimension: Explained',
    description: 'Deep dive into how time functions as the 4th dimension',
    duration: '25:12',
    category: 'Theory',
    youtubeId: 'dQw4w9WgXcQ',
    content: `# Time as Dimension: Explained

A comprehensive exploration of how time functions as the 4th dimension, covering physics, philosophy, and practical implications.

## Topics Covered

- Einstein's spacetime
- Mathematical models
- Philosophical implications
- Practical applications

## Deep Dive

This video provides a thorough foundation for understanding temporal dimensionality.`
  },
  'maintaining-relationships': {
    title: 'Maintaining Relationships Across Time',
    description: 'How 4D consciousness helps you stay connected',
    duration: '15:30',
    category: 'Relationships',
    youtubeId: 'dQw4w9WgXcQ',
    content: `# Maintaining Relationships Across Time

Discover how 4D consciousness transforms how we maintain relationships and stay connected with people across years.

## Key Insights

- Understanding temporal relationships
- Strategies for reconnection
- Maintaining bonds across time
- Practical applications

## Apply These Concepts

Use these insights to strengthen your relationships and maintain connections across temporal distance.`
  },
}

export async function generateStaticParams() {
  return Object.keys(videos).map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const video = videos[params.id]
  if (!video) {
    return { title: 'Video Not Found' }
  }
  return {
    title: `${video.title} - BeyondTAxis.life`,
    description: video.description,
  }
}

export default function VideoPage({ params }: { params: { id: string } }) {
  const video = videos[params.id]
  
  if (!video) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/videos"
          className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Videos
        </Link>

        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-semibold text-primary-400 px-3 py-1 rounded-full bg-primary-500/20">
              {video.category}
            </span>
            <span className="text-gray-500 text-sm">{video.duration}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            {video.title}
          </h1>
          <p className="text-xl text-gray-300">{video.description}</p>
        </div>

        <div className="glass rounded-xl p-8 mb-8">
          <div className="relative aspect-video bg-dark-700 rounded-lg overflow-hidden mb-6">
            {video.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Play className="w-16 h-16 text-primary-400" />
              </div>
            )}
          </div>
          
          <div className="prose prose-invert max-w-none">
            <div className="text-gray-300 whitespace-pre-line">{video.content}</div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://youtube.com/@beyondtaxis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            <Youtube className="w-5 h-5" />
            <span>Subscribe on YouTube</span>
          </a>
        </div>
      </div>
    </div>
  )
}

