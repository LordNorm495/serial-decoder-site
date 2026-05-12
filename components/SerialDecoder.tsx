'use client'

import { useState, useCallback } from 'react'
import { decodeByBrand, autoDetect, DecodeResult, BrandKey } from '@/lib/decoders'
import { brandSelectOptions } from '@/lib/brands'

interface SerialDecoderProps {
  defaultBrand?: BrandKey
  showAutoDetect?: boolean
}

export default function SerialDecoder({ defaultBrand, showAutoDetect = true }: SerialDecoderProps) {
  const [serial, setSerial] = useState('')
  const [brand, setBrand] = useState<BrandKey | ''>(defaultBrand ?? '')
  const [result, setResult] = useState<DecodeResult | null>(null)
  const [suggestions, setSuggestions] = useState<{ brand: BrandKey; confidence: string }[]>([])
  const [isDecoding, setIsDecoding] = useState(false)

  const handleDecode = useCallback(() => {
    if (!serial.trim()) return

    setIsDecoding(true)
    setTimeout(() => {
      if (!brand) {
        // Auto-detect
        const detected = autoDetect(serial)
        if (detected.length > 0) {
          setSuggestions(detected)
          const topBrand = detected[0].brand
          const res = decodeByBrand(serial, topBrand)
          setResult(res)
        } else {
          setSuggestions([])
          setResult({
            brand: 'Unknown',
            year: null,
            month: null,
            week: null,
            age: null,
            monthName: null,
            confidence: 'low',
            notes: [],
            rawSerial: serial,
            error: 'Brand could not be auto-detected. Please select your brand from the dropdown.',
          })
        }
      } else {
        setSuggestions([])
        const res = decodeByBrand(serial, brand)
        setResult(res)
      }
      setIsDecoding(false)
    }, 100)
  }, [serial, brand])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleDecode()
  }

  const hvacBrands = brandSelectOptions.filter(b => b.category === 'hvac')
  const applianceBrands = brandSelectOptions.filter(b => b.category === 'appliance')

  const confidenceColor = {
    high: 'text-green-600',
    medium: 'text-yellow-600',
    low: 'text-red-500',
  }

  const confidenceLabel = {
    high: '✓ High',
    medium: '~ Medium',
    low: '✗ Low',
  }

  return (
    <div className="w-full">
      {/* Input Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="serial-input" className="block text-sm font-semibold text-gray-700 mb-2">
              Serial Number
            </label>
            <input
              id="serial-input"
              type="text"
              value={serial}
              onChange={e => setSerial(e.target.value.trim())}
              onKeyDown={handleKeyDown}
              placeholder="e.g. 0105E12345 or X4M123456"
              className="w-full text-lg px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors font-mono tracking-wider"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="characters"
              spellCheck={false}
            />
          </div>

          <div>
            <label htmlFor="brand-select" className="block text-sm font-semibold text-gray-700 mb-2">
              Brand <span className="font-normal text-gray-500">(optional — leave blank to auto-detect)</span>
            </label>
            <select
              id="brand-select"
              value={brand}
              onChange={e => setBrand(e.target.value as BrandKey | '')}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors bg-white text-gray-700"
            >
              <option value="">— Auto-detect brand —</option>
              <optgroup label="HVAC Systems">
                {hvacBrands.map(b => (
                  <option key={b.value} value={b.value}>{b.label}</option>
                ))}
              </optgroup>
              <optgroup label="Appliances">
                {applianceBrands.map(b => (
                  <option key={b.value} value={b.value}>{b.label}</option>
                ))}
              </optgroup>
            </select>
          </div>

          <button
            onClick={handleDecode}
            disabled={!serial.trim() || isDecoding}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-md hover:shadow-lg"
          >
            {isDecoding ? 'Decoding…' : '🔍 Decode Serial Number'}
          </button>
        </div>
      </div>

      {/* Auto-detect Suggestions */}
      {suggestions.length > 0 && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-sm font-semibold text-blue-700 mb-2">Auto-detected possible brands:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map(s => (
              <button
                key={s.brand}
                onClick={() => {
                  setBrand(s.brand)
                  const res = decodeByBrand(serial, s.brand)
                  setResult(res)
                  setSuggestions([])
                }}
                className="px-3 py-1 bg-white border border-blue-300 rounded-full text-sm text-blue-700 hover:bg-blue-100 transition-colors"
              >
                {brandSelectOptions.find(b => b.value === s.brand)?.label ?? s.brand}
                <span className="ml-1 text-xs text-blue-400">({s.confidence})</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="mt-6">
          {result.error && !result.year ? (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="text-red-700 font-semibold text-lg mb-2">⚠️ Could Not Decode</h3>
              <p className="text-red-600">{result.error}</p>
              <p className="text-sm text-gray-500 mt-3">
                Make sure you have the full serial number (not model number) and selected the correct brand.
              </p>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  📋 Decode Results — {result.brand}
                </h3>
                <span className={`text-sm font-semibold ${confidenceColor[result.confidence]}`}>
                  Confidence: {confidenceLabel[result.confidence]}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <ResultCard label="Year" value={result.year?.toString() ?? '—'} highlight={!!result.year} />
                <ResultCard label="Month" value={result.monthName ?? (result.month?.toString() ?? '—')} highlight={!!result.month} />
                <ResultCard label="Week" value={result.week?.toString() ?? '—'} highlight={!!result.week} />
                <ResultCard
                  label="Approx. Age"
                  value={result.age !== null ? `${result.age} yr${result.age !== 1 ? 's' : ''}` : '—'}
                  highlight={result.age !== null}
                  ageWarning={result.age !== null && result.age > 15}
                />
              </div>

              {result.notes.length > 0 && (
                <div className="bg-white bg-opacity-70 rounded-xl p-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Decode Steps</p>
                  <ul className="space-y-1">
                    {result.notes.map((n, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">→</span>
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {result.age !== null && result.age > 15 && (
                <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
                  ⚠️ <strong>This unit is over 15 years old.</strong> Consider scheduling a professional inspection. HVAC systems typically last 15–20 years.
                </div>
              )}

              <p className="mt-4 text-xs text-gray-400">
                Serial decoded: <code className="font-mono bg-white px-2 py-0.5 rounded">{result.rawSerial}</code>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function ResultCard({
  label,
  value,
  highlight,
  ageWarning,
}: {
  label: string
  value: string
  highlight: boolean
  ageWarning?: boolean
}) {
  return (
    <div className={`rounded-xl p-4 text-center ${highlight ? 'bg-white shadow-sm border border-blue-100' : 'bg-white bg-opacity-50'}`}>
      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{label}</div>
      <div className={`text-2xl font-bold ${ageWarning ? 'text-orange-500' : highlight ? 'text-blue-700' : 'text-gray-400'}`}>
        {value}
      </div>
    </div>
  )
}
