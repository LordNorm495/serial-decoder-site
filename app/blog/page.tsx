import type { Metadata } from 'next'
import Link from 'next/link'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'HVAC & Appliance Serial Number Tips — Blog',
  description: 'Expert guides on reading HVAC and appliance serial numbers, understanding equipment age, repair vs replace decisions, and more.',
}

const posts = [
  {
    slug: 'whirlpool-warranty-check',
    title: 'Whirlpool Warranty Check: How to Tell If Your Appliance Is Still Covered',
    excerpt: 'Check your Whirlpool warranty by serial number in three steps: decode the manufacture date, know the standard coverage for your appliance, and verify it on Whirlpool’s site — fridges, washers, dryers, dishwashers, and more.',
    category: 'Appliances',
    date: '2026-07-09',
    readTime: '6 min',
  },
  {
    slug: 'whirlpool-refrigerator-serial-number',
    title: 'Whirlpool Refrigerator Serial Number Lookup: Find the Age, Model & Warranty',
    excerpt: 'Find your Whirlpool refrigerator serial number, decode its manufacture date, look up the model number, and check warranty and recall status — for every Whirlpool fridge style.',
    category: 'Appliances',
    date: '2026-06-30',
    readTime: '7 min',
  },
  {
    slug: 'whirlpool-serial-number-lookup',
    title: 'Whirlpool Serial Number Lookup: Find the Age, Model, and Warranty of Any Whirlpool Appliance',
    excerpt: 'How to find and read a Whirlpool serial number on a fridge, washer, dishwasher, or microwave — where the label is, what the code means, model vs. serial, and how to check your warranty.',
    category: 'Appliances',
    date: '2026-06-23',
    readTime: '8 min',
  },
  {
    slug: 'how-old-is-my-air-conditioner',
    title: 'How Old Is My Air Conditioner? 4 Reliable Ways to Find Out',
    excerpt: 'Four proven ways to find the exact age of your air conditioner — from the serial number to the model number, the inspection record, and the manufacturer. Plus what the age means for your wallet.',
    category: 'HVAC',
    date: '2026-06-22',
    readTime: '7 min',
  },
  {
    slug: 'ac-refrigerant-r22-r410a-r454b',
    title: 'R-22, R-410A, and R-454B: What Your AC\'s Refrigerant Means for Repair Costs',
    excerpt: 'How to tell which refrigerant your air conditioner uses, why it matters for repair and replacement decisions, and how the unit\'s age gives you the answer in seconds.',
    category: 'HVAC',
    date: '2026-06-22',
    readTime: '7 min',
  },
  {
    slug: 'rheem-ruud-serial-number-age',
    title: 'Rheem & Ruud Serial Number Decoder: How to Find the Age of Your Unit',
    excerpt: 'Decode any Rheem or Ruud serial number to find the manufacture date of your AC, furnace, heat pump, or water heater. Includes the week-and-year date code format with real examples.',
    category: 'HVAC',
    date: '2026-06-16',
    readTime: '6 min',
  },
  {
    slug: 'real-estate-hvac-age-inspection',
    title: 'How to Check HVAC Age When Buying a Home (Before You Close)',
    excerpt: 'A real estate buyer\'s guide to checking HVAC and appliance age during a home purchase. How to read serial numbers, what ages to watch for, and how to negotiate.',
    category: 'Real Estate',
    date: '2026-06-08',
    readTime: '6 min',
  },
  {
    slug: 'hvac-maintenance-checklist',
    title: 'HVAC Maintenance Checklist: What to Do Every Month, Season, and Year',
    excerpt: 'A complete HVAC maintenance checklist from an EPA-certified technician. Monthly, seasonal, and annual tasks to maximize system lifespan and efficiency.',
    category: 'HVAC',
    date: '2026-05-29',
    readTime: '6 min',
  },
  {
    slug: 'hvac-repair-vs-replace',
    title: 'HVAC Repair vs. Replace: How to Make the Right Call Every Time',
    excerpt: 'Should you repair or replace your HVAC system? An HVAC technician explains the exact decision framework, cost benchmarks, and age thresholds to guide your choice.',
    category: 'HVAC',
    date: '2026-05-21',
    readTime: '5 min',
  },
  {
    slug: 'how-long-does-an-hvac-system-last',
    title: 'How Long Does an HVAC System Last? A Technician\'s Honest Guide',
    excerpt: 'Wondering how long your furnace, AC, or heat pump will last? An HVAC technician breaks down real-world lifespans, warning signs, and when to repair vs. replace.',
    category: 'HVAC',
    date: '2026-05-13',
    readTime: '5 min',
  },
  {
    slug: 'water-heater-age-serial-number',
    title: 'How to Find Your Water Heater\'s Age From the Serial Number',
    excerpt: 'Decode your water heater serial number to find the manufacture date. Covers Rheem, Bradford White, AO Smith, State, American, and Kenmore water heaters.',
    category: 'Appliances',
    date: '2026-05-04',
    readTime: '5 min',
  },
  {
    slug: 'refrigerator-age-serial-number',
    title: 'How to Find the Age of Your Refrigerator From the Serial Number',
    excerpt: 'Learn how to decode your refrigerator\'s serial number to find its manufacture date. Covers Whirlpool, GE, LG, Samsung, Maytag, Frigidaire, and more.',
    category: 'Appliances',
    date: '2026-04-24',
    readTime: '6 min',
  },
  {
    slug: 'goodman-serial-number-age',
    title: 'Goodman Serial Number Age: How to Tell How Old Your Goodman Is',
    excerpt: 'Decode your Goodman HVAC serial number to find the manufacture date. Includes the complete Goodman date code format for all units made since 1992.',
    category: 'HVAC',
    date: '2026-04-16',
    readTime: '6 min',
  },
  {
    slug: 'lennox-serial-number-decoder',
    title: 'Lennox Serial Number Decoder: How to Find Your Lennox\'s Age',
    excerpt: 'Decode Lennox HVAC serial numbers to find the manufacture date of your furnace, air conditioner, or heat pump. Includes format guide for all Lennox serial number styles.',
    category: 'HVAC',
    date: '2026-04-07',
    readTime: '4 min',
  },
  {
    slug: 'trane-serial-number-age',
    title: 'Trane Serial Number Age: How to Find When Your Trane Was Made',
    excerpt: 'Decode Trane serial numbers to find the manufacture date of your furnace, AC, or heat pump. Includes the complete Trane date code chart and real examples.',
    category: 'HVAC',
    date: '2026-03-27',
    readTime: '4 min',
  },
  {
    slug: 'carrier-serial-number-decoder',
    title: 'Carrier Serial Number Decoder: How to Read Any Carrier Unit\'s Age',
    excerpt: 'Learn how to decode Carrier HVAC serial numbers to find the manufacture date of any furnace, air conditioner, or heat pump. Includes format guide for all Carrier serial number styles.',
    category: 'HVAC',
    date: '2026-03-18',
    readTime: '4 min',
  },
  {
    slug: 'what-does-hvac-serial-number-tell-you',
    title: 'What Does an HVAC Serial Number Tell You? (More Than You Think)',
    excerpt: 'HVAC serial numbers encode manufacture date, factory, and production info. Learn what each section means, why it matters, and how to decode it for any brand.',
    category: 'HVAC',
    date: '2026-03-09',
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
