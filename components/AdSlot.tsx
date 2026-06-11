'use client'

interface AdSlotProps {
  slot: 'header' | 'sidebar' | 'in-content' | 'footer' | 'in-content-2'
  className?: string
}

// Ad slots are disabled until AdSense approval.
// After approval: restore the <ins className="adsbygoogle"> markup here
// using your ca-pub-6054162439232478 client ID and real slot IDs.
export default function AdSlot({ slot, className = '' }: AdSlotProps) {
  return null
}
