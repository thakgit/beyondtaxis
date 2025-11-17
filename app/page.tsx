import Hero from '@/components/Hero'
import ConceptSection from '@/components/ConceptSection'
import DimensionsComparison from '@/components/DimensionsComparison'
import FeaturesGrid from '@/components/FeaturesGrid'
import BlogPreview from '@/components/BlogPreview'
import VideoChannel from '@/components/VideoChannel'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ConceptSection />
      <DimensionsComparison />
      <FeaturesGrid />
      <BlogPreview />
      <VideoChannel />
      <CTA />
    </div>
  )
}

