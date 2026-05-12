import type { Metadata } from 'next'
import Link from 'next/link'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'HVAC & Appliance Serial Number Tips — Blog',
  description: 'Expert guides on reading HVAC and appliance serial numbers, understanding equipment age, repair vs replace decisions, and more.',
}

const posts = [
  {
    slug: 'how-to-read-hvac-serial-number',
    title: 'How to Read an HVAC Serial Number: A Complete Guide',
    excerpt: 'Learn where to find your HVAC serial number and what each section means. We cover all major brands including Carrier, Trane, Lennox, and Rheem.',
    category: 'HVAC',
    date: '2024-01-15',
    readTime: '8 min',
  },
  {
    slug: 'hvac-lifespan-when-to-replace',
    title: 'HVAC Lifespan: When Should You Replace Instead of Repair?',
    excerpt: 'The 5,000 rule, the 50% rule, and other expert frameworks for deciding when to repair your HVAC and when to cut your losses.',
    category: 'HVAC',
    date: '2024-01-20',
    readTime: '6 min',
  },
  {
    slug: 'appliance-serial-number-guide',
    title: 'How to Decode Appliance Serial Numbers (Whirlpool, GE, Samsung)',
    excerpt: 'Major appliance brands hide manufacture dates in their serial numbers. Here\'s how to crack the code for the top brands.',
    category: 'Appliances',
    date: '2024-02-01',
    readTime: '7 min',
  },
  {
    slug: 'hvac-warranty-serial-number',
    title: 'Using Your Serial Number for Warranty Claims',
    excerpt: 'Your serial number is the key to warranty claims. Learn how manufacturers use it to verify purchase dates and eligibility.',
    category: 'Tips',
    date: '2024-02-10',
    readTime: '5 min',
  },
  {
    slug: 'home-inspection-hvac-age',
    title: 'Home Inspection: Why HVAC Age Matters for Buyers and Sellers',
    excerpt: 'Real estate agents and home inspectors look at HVAC age. Learn how to use serial numbers during a home inspection.',
    category: 'Real Estate',
    date: '2024-02-18',
    readTime: '6 min',
  },
  {
    slug: 'energy-efficiency-old-hvac',
    title: 'How Much Money Are You Wasting With an Old HVAC Unit?',
    excerpt: 'A 15-year-old AC can cost 50% more to run than a new unit. We break down the numbers so you can make an informed decision.',
    category: 'Energy',
    date: '2024-03-01',
    readTime: '7 min',
  },
]

const categories = ['All', 'HVAC', 'Appliances', 'Tips', 'Real Estate', 'Energy']

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Serial Number Tips & Guides
        </h1>
        <p className="text-gray-500 text-lg">
          Expert advice on HVAC age, appliance dates, warranty claims, and repair decisions.
        </p>
      </div>

      {/* In-Content Ad */}
      <div className="flex justify-center mb-10">
        <AdSlot slot="in-content" />
      </div>

      {/* Category Filter (visual only) */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${cat === 'All' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {posts.map(post => (
          <article
            key={post.slug}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-blue-200 transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-gray-400">{post.date}</span>
              <span className="text-xs text-gray-400">· {post.readTime} read</span>
            </div>
            <h2 className="font-bold text-gray-800 text-lg mb-2 leading-snug">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-700 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>

      {/* Second Ad */}
      <div className="flex justify-center mb-10">
        <AdSlot slot="in-content-2" />
      </div>

      {/* Newsletter Placeholder */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Get HVAC & Appliance Tips</h2>
        <p className="text-gray-500 text-sm mb-4">New guides on serial numbers, maintenance, and money-saving decisions.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-400"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  )
}
