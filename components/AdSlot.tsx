'use client'

interface AdSlotProps {
  slot: 'header' | 'sidebar' | 'in-content' | 'footer' | 'in-content-2'
  className?: string
}

const slotConfigs = {
  header: { width: '728px', height: '90px', label: 'Leaderboard (728×90)', adSlotId: 'XXXXXXXXXX-header' },
  sidebar: { width: '300px', height: '250px', label: 'Medium Rectangle (300×250)', adSlotId: 'XXXXXXXXXX-sidebar' },
  'in-content': { width: '336px', height: '280px', label: 'Large Rectangle (336×280)', adSlotId: 'XXXXXXXXXX-content1' },
  'in-content-2': { width: '336px', height: '280px', label: 'Large Rectangle (336×280)', adSlotId: 'XXXXXXXXXX-content2' },
  footer: { width: '728px', height: '90px', label: 'Leaderboard (728×90)', adSlotId: 'XXXXXXXXXX-footer' },
}

export default function AdSlot({ slot, className = '' }: AdSlotProps) {
  const config = slotConfigs[slot]

  return (
    <div
      className={`ad-slot ad-slot--${slot} flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 rounded text-gray-400 text-xs font-mono ${className}`}
      style={{ minWidth: config.width, minHeight: config.height, maxWidth: '100%' }}
      data-ad-slot={config.adSlotId}
      aria-label="Advertisement"
    >
      {/* 
        ADSENSE PLACEHOLDER
        Replace this div content with your actual AdSense code:
        
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true">
        </ins>
        
        And add the AdSense script to app/layout.tsx
      */}
      <div className="text-center p-2">
        <div className="text-gray-400">Advertisement</div>
        <div className="text-gray-300 text-[10px]">{config.label}</div>
      </div>
    </div>
  )
}
