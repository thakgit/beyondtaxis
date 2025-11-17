import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const topics: Record<string, {
  title: string
  icon: string
  description: string
  content: string
}> = {
  mathematics: {
    title: 'Mathematics',
    icon: '🔢',
    description: '4D geometry, tesseracts, and mathematical models',
    content: `# Mathematics of 4D

## Introduction

Mathematics provides the clearest framework for understanding 4D space. Through geometric models and mathematical structures, we can conceptualize what 4D reality might look like.

## Tesseracts and Hypercubes

### What is a Tesseract?

A tesseract is the 4D analog of a cube. Just as:
- A square is a 2D cube
- A cube is a 3D hypercube
- A tesseract is a 4D hypercube

### Properties of a Tesseract

- **16 vertices**: Points where edges meet
- **32 edges**: Lines connecting vertices
- **24 square faces**: 2D surfaces
- **8 cubic cells**: 3D volumes

## Visualizing 4D Objects

### Projections

Since we can't directly see 4D objects, we use:
- **3D projections**: Like shadows of 4D objects
- **Schlegel diagrams**: 3D representations of 4D structures
- **Rotation animations**: Showing 4D objects rotating

### Mathematical Representation

A point in 4D space is represented as (x, y, z, w), where:
- x, y, z are spatial coordinates
- w is the fourth dimension

## Distance in 4D

The distance formula extends naturally:

\`\`\`
d = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)² + (w₂-w₁)²]
\`\`\`

## Applications

4D mathematics helps us understand:
- Spacetime in physics
- Data visualization in higher dimensions
- Abstract mathematical structures
- The nature of dimensions themselves

## Conclusion

Mathematics provides the language for understanding 4D space, making abstract concepts concrete and visualizable.`
  },
  physics: {
    title: 'Physics',
    icon: '⚛️',
    description: 'Spacetime, relativity, and the physics of the 4th dimension',
    content: `# Physics of 4D

## Einstein's Revolution

Einstein's theory of relativity fundamentally changed our understanding of time and space, revealing them as interwoven dimensions of spacetime.

## Spacetime: The Unified Dimension

### The Fabric of Reality

Space and time are not separate—they form a unified 4D continuum called spacetime. Events exist at specific coordinates in this 4D space.

### Mathematical Representation

Spacetime coordinates: (x, y, z, t)
- x, y, z: Spatial dimensions
- t: Temporal dimension

## Special Relativity

### Time Dilation

Time passes differently for observers moving at different velocities. This reveals time as a dimension that can be "stretched" or "compressed."

### Length Contraction

Objects appear shorter when moving at high speeds, showing how spatial and temporal dimensions interact.

## General Relativity

### Curved Spacetime

Mass and energy curve spacetime, creating what we experience as gravity. This shows spacetime as a dynamic, 4D structure.

### Black Holes

Black holes represent extreme curvature of spacetime, where the 4D structure becomes most apparent.

## Quantum Mechanics and Time

### Temporal Uncertainty

Quantum mechanics reveals uncertainty in temporal measurements, suggesting time has quantum properties.

### Temporal Entanglement

Particles can be entangled across time, not just space, revealing temporal dimensionality.

## Practical Implications

Understanding spacetime helps us:
- Navigate using GPS (which accounts for relativistic effects)
- Understand the universe's structure
- Develop 4D consciousness

## Conclusion

Physics provides the scientific foundation for understanding time as a dimension, confirming what 4D consciousness reveals experientially.`
  },
  neurology: {
    title: 'Neurology',
    icon: '🧠',
    description: 'How the brain processes time and develops 4D awareness',
    content: `# Neurology of 4D Consciousness

## The Brain's Temporal Processing

Understanding how the brain processes time is crucial for developing 4D consciousness. The brain has specialized systems for temporal awareness.

## Key Brain Regions

### Hippocampus

- Forms episodic memories with temporal context
- Creates temporal sequences
- Essential for time-based navigation
- The "GPS" of time

### Prefrontal Cortex

- Plans for the future
- Maintains temporal context
- Integrates past, present, and future
- Executive temporal control

### Cerebellum

- Processes temporal intervals
- Coordinates timing
- Essential for temporal precision
- Temporal motor control

## Temporal Neural Networks

### Default Mode Network

Active during rest and involved in:
- Temporal thinking
- Connecting past and future
- Self-referential temporal processing

### Time Cells

Specialized neurons that fire at specific temporal intervals, creating a "temporal map" in the brain.

## Developing 4D Neural Pathways

### Neuroplasticity

The brain can reorganize itself to develop new temporal processing capabilities through:
- Practice and training
- Temporal awareness exercises
- 4D perception meditation

### Training Methods

1. **Temporal Meditation**: Focus on temporal awareness
2. **Memory Exercises**: Strengthen temporal memory networks
3. **Future Planning**: Exercise prefrontal temporal processing
4. **Temporal Visualization**: Develop temporal spatial thinking

## The Temporal Brain

### Temporal Integration

The brain naturally integrates temporal information, but we can enhance this through conscious practice and 4D perception training.

## Practical Applications

Understanding the neurology of time helps us:
- Develop 4D consciousness more effectively
- Understand individual differences in temporal awareness
- Create training programs for 4D perception

## Conclusion

The brain is already wired for temporal processing. By understanding and training these neural pathways, we can develop true 4D consciousness.`
  },
  spirituality: {
    title: 'Spirituality',
    icon: '✨',
    description: '4D consciousness in spiritual traditions and mystical experiences',
    content: `# Spirituality and 4D Consciousness

## Timeless Wisdom

Spiritual traditions from around the world have described experiences that align with 4D consciousness, suggesting this is a fundamental aspect of human experience.

## Eastern Traditions

### Buddhism

- **Timeless Awareness**: The concept of awareness beyond time
- **Interdependent Origination**: Understanding cause and effect across time
- **Mindfulness**: Present-moment awareness with temporal depth

### Hinduism

- **Kala (Time)**: Time as a fundamental dimension of reality
- **Eternal Present**: The concept of all time existing simultaneously
- **Reincarnation**: Temporal continuity across lifetimes

### Taoism

- **Temporal Flow**: Understanding time as a natural dimension
- **Wu Wei**: Action without temporal attachment
- **Temporal Harmony**: Aligning with temporal rhythms

## Western Mysticism

### Christian Mysticism

- **Eternal Now**: The experience of all time in the present
- **Divine Time**: Time as a dimension of the divine
- **Temporal Transcendence**: Moving beyond linear time

### Kabbalah

- **Time as Dimension**: Understanding time in mystical terms
- **Temporal Sefirot**: Time as part of divine structure
- **Eternal Present**: All moments existing simultaneously

## Indigenous Traditions

### Native American

- **Circular Time**: Time as a dimension to navigate
- **Ancestral Time**: Connection across temporal dimensions
- **Temporal Continuity**: Past, present, and future as one

## Common Themes

### Timeless Awareness

Many traditions describe awareness that transcends linear time, aligning with 4D consciousness.

### Temporal Unity

The experience of past, present, and future as unified, existing simultaneously.

### Temporal Navigation

The ability to move through time consciously, not just experience it passively.

## Modern Integration

4D consciousness bridges:
- Ancient wisdom and modern science
- Spiritual experience and neurological understanding
- Mystical insight and practical application

## Conclusion

Spiritual traditions have long described 4D-like experiences. By integrating this wisdom with modern understanding, we can develop a complete picture of 4D consciousness.`
  },
  religion: {
    title: 'Religion',
    icon: '📖',
    description: 'How religious texts describe time and higher dimensions',
    content: `# Religion and 4D Consciousness

## Sacred Texts and Time

Religious texts and traditions from around the world describe time in ways that align with 4D consciousness, suggesting a deeper understanding of temporal reality.

## Abrahamic Traditions

### Judaism

- **Eternal Time**: God exists outside of time
- **Temporal Prophecy**: Seeing across temporal dimensions
- **Sabbath**: Sacred time as a dimension

### Christianity

- **Eternal Life**: Existence beyond temporal limitations
- **Divine Omniscience**: Awareness across all time
- **Resurrection**: Temporal transcendence

### Islam

- **Divine Time**: Allah's relationship to time
- **Temporal Destiny**: Understanding fate across time
- **Eternal Paradise**: Beyond temporal constraints

## Eastern Religions

### Buddhism

- **Timeless Enlightenment**: Awakening beyond time
- **Karma**: Cause and effect across temporal dimensions
- **Reincarnation**: Temporal continuity

### Hinduism

- **Cyclical Time**: Time as a repeating dimension
- **Eternal Present**: All time existing now
- **Moksha**: Liberation from temporal constraints

## Indigenous Religions

### Native American

- **Sacred Time**: Time as a spiritual dimension
- **Ancestral Connection**: Relationships across time
- **Temporal Rituals**: Navigating time spiritually

## Common Themes

### Eternity

Most religions describe existence beyond temporal limitations, suggesting awareness of 4D reality.

### Temporal Prophecy

The ability to see across time, present in many traditions, aligns with 4D perception.

### Sacred Time

Time as a dimension to be navigated, not just experienced, appears in many religious practices.

## Modern Understanding

Religious insights about time, when combined with scientific understanding, provide a complete picture of 4D consciousness.

## Conclusion

Religious traditions offer profound insights into temporal reality, complementing scientific and experiential understanding of 4D consciousness.`
  },
  technology: {
    title: 'Technology',
    icon: '💻',
    description: 'How modern technology enhances 4D perception',
    content: `# Technology and 4D Consciousness

## Modern Tools for 4D Perception

Technology can enhance our understanding and development of 4D consciousness through visualization, simulation, and training tools.

## Virtual and Augmented Reality

### VR for 4D Visualization

- **4D Object Visualization**: See tesseracts and hypercubes in 3D space
- **Temporal Navigation**: Experience time as a navigable dimension
- **4D Training**: Practice 4D perception in virtual environments

### AR for Temporal Overlay

- **Temporal Information**: Overlay temporal data on physical space
- **Historical Context**: See past and future in present space
- **4D Awareness Tools**: Real-time temporal awareness aids

## Artificial Intelligence

### AI for Temporal Analysis

- **Pattern Recognition**: Identify temporal patterns in data
- **Predictive Modeling**: Understand temporal relationships
- **4D Data Visualization**: AI-powered 4D representations

### Machine Learning

- **Temporal Learning**: Models that understand time as dimension
- **4D Neural Networks**: Networks structured for temporal processing
- **Temporal Prediction**: Advanced temporal forecasting

## Data Visualization

### 4D Data Representation

- **Temporal Dashboards**: Visualizing data across time
- **4D Graphs**: Representing multi-dimensional temporal data
- **Interactive Timelines**: Navigating temporal information

## Training Applications

### 4D Perception Apps

- **Temporal Awareness**: Daily exercises for 4D consciousness
- **Meditation Apps**: Guided 4D meditation
- **Memory Training**: Strengthening temporal memory

## Future Technologies

### Quantum Computing

- **Temporal Computation**: Computing across time dimensions
- **4D Algorithms**: Algorithms that operate in 4D space

### Brain-Computer Interfaces

- **Direct Temporal Perception**: Enhanced temporal awareness
- **4D Neural Training**: Direct brain training for 4D

## Practical Applications

Technology helps us:
- Visualize 4D concepts
- Train 4D perception
- Understand temporal data
- Develop 4D consciousness

## Conclusion

Modern technology provides powerful tools for developing and understanding 4D consciousness, making abstract concepts tangible and trainable.`
  },
  history: {
    title: 'History',
    icon: '📚',
    description: 'How historical figures and cultures understood time',
    content: `# History and 4D Consciousness

## Temporal Wisdom Through the Ages

Historical figures and cultures have understood time in ways that align with 4D consciousness, providing wisdom for our modern understanding.

## Ancient Civilizations

### Ancient Egypt

- **Cyclical Time**: Time as repeating cycles
- **Eternal Life**: Existence beyond temporal death
- **Temporal Architecture**: Structures aligned with temporal dimensions

### Ancient Greece

- **Plato's Forms**: Eternal realities beyond time
- **Aristotle's Time**: Time as a dimension of change
- **Mythological Time**: Gods existing outside temporal constraints

### Ancient India

- **Cyclical Ages**: Time as repeating dimensions
- **Eternal Present**: All time existing simultaneously
- **Temporal Meditation**: Practices for temporal awareness

## Medieval Period

### Islamic Golden Age

- **Temporal Philosophy**: Deep thinking about time
- **Astronomical Time**: Understanding temporal cycles
- **Eternal Truth**: Knowledge beyond temporal limitations

### European Mysticism

- **Eternal Now**: Mystical experiences of timelessness
- **Temporal Vision**: Seeing across time
- **Divine Time**: Understanding God's relationship to time

## Modern Era

### Einstein

- **Spacetime**: Time as fourth dimension
- **Relativity**: Temporal relationships
- **Revolutionary Insight**: Changing how we see time

### Contemporary Thinkers

- **Temporal Philosophy**: Modern temporal understanding
- **4D Mathematics**: Mathematical models of time
- **Consciousness Research**: Understanding temporal awareness

## Cultural Perspectives

### Eastern Cultures

- **Circular Time**: Time as repeating dimension
- **Temporal Harmony**: Aligning with temporal rhythms
- **Ancestral Time**: Connection across generations

### Western Cultures

- **Linear Time**: Time as progression
- **Temporal Progress**: Moving forward through time
- **Historical Consciousness**: Understanding temporal context

## Lessons from History

Historical understanding of time shows:
- Time has always been seen as more than linear
- Different cultures have different temporal perspectives
- 4D-like understanding appears across cultures

## Conclusion

History provides rich insights into how humans have understood time, offering wisdom for developing modern 4D consciousness.`
  },
  relationships: {
    title: 'Relationships',
    icon: '👥',
    description: 'Maintaining connections across time with 4D consciousness',
    content: `# Relationships and 4D Consciousness

## Maintaining Connections Across Time

4D consciousness transforms how we maintain relationships, allowing us to stay connected with people across years and temporal distance.

## The Challenge of Temporal Distance

### Traditional 3D Thinking

In 3D thinking, relationships fade with time:
- Distance grows with temporal separation
- Connections weaken over years
- Reconnection becomes difficult

### 4D Understanding

In 4D consciousness, relationships exist across time:
- Connections persist across temporal dimensions
- Time doesn't diminish relationship quality
- Reconnection is always possible

## Reconnecting with College Friends

### Understanding Temporal Relationships

Your college friendships exist in 4D space. The connection you had years ago still exists—you just need to navigate to it.

### Practical Strategies

1. **Temporal Memory Navigation**
   - Remember shared experiences as existing in 4D space
   - Visualize your friendship timeline as a dimension you can navigate

2. **Regular Reconnection**
   - Set temporal checkpoints (monthly, quarterly)
   - Reach out not just to catch up, but to maintain the temporal connection

3. **Shared Temporal Experiences**
   - Create new memories that connect past and present
   - Celebrate anniversaries of your friendship

4. **Understanding Temporal Growth**
   - Recognize that both you and your friends have evolved
   - Appreciate the temporal journey you've each taken

## The 4D Approach to Relationships

### Temporal Continuity

With 4D consciousness:
- You see relationships as existing across time
- You understand that connection transcends temporal distance
- You actively maintain bonds across years

### Practical Benefits

- Easier reconnection after years apart
- Deeper understanding of relationship evolution
- Ability to maintain multiple temporal connections
- Appreciation for temporal growth in relationships

## Maintaining Long-Distance Friendships

### Temporal Proximity

Even when physically distant, temporal proximity can be maintained through:
- Regular communication
- Shared temporal experiences
- Understanding temporal growth
- Appreciating temporal continuity

## Conclusion

4D consciousness transforms how we maintain relationships. Time becomes a dimension we navigate, not a barrier that separates us. This allows us to maintain and rekindle connections across years, understanding that relationships exist in 4D space.`
  },
}

export async function generateStaticParams() {
  return Object.keys(topics).map((topic) => ({ topic }))
}

export async function generateMetadata({ params }: { params: { topic: string } }): Promise<Metadata> {
  const topicData = topics[params.topic]
  if (!topicData) {
    return { title: 'Topic Not Found' }
  }
  return {
    title: `${topicData.title} - BeyondTAxis.life`,
    description: topicData.description,
  }
}

export default function TopicPage({ params }: { params: { topic: string } }) {
  const topicData = topics[params.topic]
  
  if (!topicData) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/explore"
          className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Explore
        </Link>

        <div className="mb-8">
          <div className="text-6xl mb-4">{topicData.icon}</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            {topicData.title}
          </h1>
          <p className="text-xl text-gray-300">{topicData.description}</p>
        </div>

        <div className="glass rounded-xl p-8 prose prose-invert prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {topicData.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

