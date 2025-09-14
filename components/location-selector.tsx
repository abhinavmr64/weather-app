"use client"

import { useState, useRef, useEffect } from "react"
import { MapPin, Search, Loader2, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LocationSelectorProps {
  currentLocation: string
  onLocationChange: (location: string) => void
  isLoading?: boolean
}

const RECENT_CITIES = ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Miami, FL", "Seattle, WA"]

const POPULAR_CITIES = [
  "Mumbai, India",
  "Delhi, India",
  "Bangalore, India",
  "Chennai, India",
  "Kolkata, India",
  "Hyderabad, India",
  "Pune, India",
  "Ahmedabad, India",
  "Kochi, Kerala",
  "Thiruvananthapuram, Kerala",
  "Kozhikode, Kerala",
  "Thrissur, Kerala",
  "Kottayam, Kerala",
  "London, UK",
  "Paris, France",
  "Tokyo, Japan",
  "Sydney, Australia",
  "Toronto, Canada",
]

export function LocationSelector({ currentLocation, onLocationChange, isLoading = false }: LocationSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isGettingLocation, setIsGettingLocation] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filteredCities = [...RECENT_CITIES, ...POPULAR_CITIES].filter((city) =>
    city.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleCitySelect = (city: string) => {
    onLocationChange(city)
    setSearchQuery("")
    setIsOpen(false)
  }

  const handleUseMyLocation = async () => {
    setIsGettingLocation(true)
    try {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("[v0] Location obtained:", position.coords.latitude, position.coords.longitude)
            setTimeout(() => {
              onLocationChange(`${position.coords.latitude.toFixed(2)}, ${position.coords.longitude.toFixed(2)}`)
              setIsGettingLocation(false)
            }, 1000)
          },
          (error) => {
            console.log("[v0] Geolocation error:", error)
            let errorMessage = "Unable to get location"

            switch (error.code) {
              case error.PERMISSION_DENIED:
                errorMessage = "Location access denied. Please enable location permissions."
                break
              case error.POSITION_UNAVAILABLE:
                errorMessage = "Location information unavailable."
                break
              case error.TIMEOUT:
                errorMessage = "Location request timed out."
                break
              default:
                errorMessage = "An unknown error occurred while getting location."
                break
            }

            alert(errorMessage)
            setIsGettingLocation(false)
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 300000,
          },
        )
      } else {
        console.log("[v0] Geolocation not supported")
        alert("Geolocation is not supported by this browser.")
        setIsGettingLocation(false)
      }
    } catch (error) {
      console.log("[v0] Geolocation catch error:", error)
      alert("Failed to access location services.")
      setIsGettingLocation(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative flex items-center gap-2" ref={dropdownRef}>
      <div className="flex items-center gap-2 min-w-0">
        <MapPin className="w-4 h-4 text-black flex-shrink-0" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-medium text-black hover:text-gray-600 transition-colors truncate text-left"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="hidden sm:inline">Updating...</span>
            </div>
          ) : (
            currentLocation
          )}
        </button>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleUseMyLocation}
        disabled={isGettingLocation || isLoading}
        className="bg-white border border-gray-300 hover:bg-gray-50 p-2"
        style={{ color: "#000000" }}
      >
        {isGettingLocation ? <Loader2 className="w-4 h-4 animate-spin" /> : <Navigation className="w-4 h-4" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 max-w-[90vw] bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search for a city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border border-gray-300 text-black placeholder:text-gray-500"
                style={{ color: "#000000" }}
                autoFocus
              />
            </div>
          </div>

          <div className="max-h-60 overflow-y-auto">
            {searchQuery && (
              <div className="p-2">
                <p className="text-xs text-gray-500 mb-2 px-2">Search Results</p>
                {filteredCities.length === 0 ? (
                  <div className="px-2 py-3 text-sm text-gray-500">No cities found</div>
                ) : (
                  filteredCities.slice(0, 5).map((city) => (
                    <button
                      key={city}
                      onClick={() => handleCitySelect(city)}
                      className="w-full text-left px-2 py-2 text-sm text-black hover:bg-gray-100 rounded transition-colors"
                    >
                      {city}
                    </button>
                  ))
                )}
              </div>
            )}

            {!searchQuery && (
              <>
                <div className="p-2">
                  <p className="text-xs text-gray-500 mb-2 px-2">Recent Cities</p>
                  {RECENT_CITIES.map((city) => (
                    <button
                      key={city}
                      onClick={() => handleCitySelect(city)}
                      className="w-full text-left px-2 py-2 text-sm text-black hover:bg-gray-100 rounded transition-colors"
                    >
                      {city}
                    </button>
                  ))}
                </div>

                <div className="p-2 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-2 px-2">Popular Cities</p>
                  {POPULAR_CITIES.map((city) => (
                    <button
                      key={city}
                      onClick={() => handleCitySelect(city)}
                      className="w-full text-left px-2 py-2 text-sm text-black hover:bg-gray-100 rounded transition-colors"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
