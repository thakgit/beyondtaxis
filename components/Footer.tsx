import Link from 'next/link'
import { Sparkles, Youtube, Twitter, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-primary-400" />
              <span className="text-lg font-display font-bold text-gradient">
                BeyondTAxis.life
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Exploring the 4th dimension of time and consciousness. 
              Living in 4D awareness, 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  Concepts
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Topics</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/explore/mathematics" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  Mathematics
                </Link>
              </li>
              <li>
                <Link href="/explore/physics" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  Physics
                </Link>
              </li>
              <li>
                <Link href="/explore/neurology" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  Neurology
                </Link>
              </li>
              <li>
                <Link href="/explore/spirituality" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  Spirituality
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://youtube.com/@beyondtaxis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://twitter.com/beyondtaxis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com/beyondtaxis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} BeyondTAxis.life. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

