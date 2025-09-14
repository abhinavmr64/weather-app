"use client"

import { useState, useEffect } from "react"
import { WeatherCard } from "@/components/weather-card"
import { MoodForecast } from "@/components/mood-forecast"
import { TemperatureToggle } from "@/components/temperature-toggle"
import { LocationSelector } from "@/components/location-selector"
import { RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MoodCastApp() {
  const [isCelsius, setIsCelsius] = useState(true)
  const [weatherData, setWeatherData] = useState({
    location: "San Francisco, CA",
    condition: "Sunny",
    temperature: 22,
    humidity: 65,
    windSpeed: 15,
    icon: "sunny",
  })
  const [currentLocation, setCurrentLocation] = useState("San Francisco, CA")
  const [isLocationLoading, setIsLocationLoading] = useState(false)

  const mockWeatherData: Record<string, any> = {
    "San Francisco, CA": { condition: "Sunny", temperature: 22, humidity: 65, windSpeed: 15 },
    "New York, NY": { condition: "Cloudy", temperature: 18, humidity: 72, windSpeed: 12 },
    "London, UK": { condition: "Rainy", temperature: 15, humidity: 85, windSpeed: 20 },
    "Tokyo, Japan": { condition: "Cloudy", temperature: 25, humidity: 68, windSpeed: 8 },
    "Mumbai, India": { condition: "Sunny", temperature: 32, humidity: 78, windSpeed: 10 },
    "Delhi, India": { condition: "Sunny", temperature: 35, humidity: 45, windSpeed: 14 },
    "Bangalore, India": { condition: "Cloudy", temperature: 28, humidity: 70, windSpeed: 6 },
    "Chennai, India": { condition: "Sunny", temperature: 34, humidity: 82, windSpeed: 12 },
    "Kolkata, India": { condition: "Cloudy", temperature: 30, humidity: 75, windSpeed: 8 },
    "Hyderabad, India": { condition: "Sunny", temperature: 33, humidity: 55, windSpeed: 11 },
    "Pune, India": { condition: "Cloudy", temperature: 26, humidity: 68, windSpeed: 9 },
    "Ahmedabad, India": { condition: "Sunny", temperature: 36, humidity: 42, windSpeed: 13 },
    "Kochi, Kerala": { condition: "Rainy", temperature: 29, humidity: 88, windSpeed: 18 },
    "Thiruvananthapuram, Kerala": { condition: "Rainy", temperature: 31, humidity: 85, windSpeed: 16 },
    "Kozhikode, Kerala": { condition: "Cloudy", temperature: 30, humidity: 80, windSpeed: 14 },
    "Thrissur, Kerala": { condition: "Rainy", temperature: 28, humidity: 87, windSpeed: 15 },
    "Kottayam, Kerala": { condition: "Rainy", temperature: 27, humidity: 89, windSpeed: 12 },
    "Kochi, India": { condition: "Rainy", temperature: 29, humidity: 88, windSpeed: 18 },
    "Thiruvananthapuram, India": { condition: "Rainy", temperature: 31, humidity: 85, windSpeed: 16 },
    "Kozhikode, India": { condition: "Cloudy", temperature: 30, humidity: 80, windSpeed: 14 },
    "Thrissur, India": { condition: "Rainy", temperature: 28, humidity: 87, windSpeed: 15 },
    "Kottayam, India": { condition: "Rainy", temperature: 27, humidity: 89, windSpeed: 12 },
  }

  useEffect(() => {
    console.log("[v0] Location changed to:", currentLocation)
    const locationWeather = mockWeatherData[currentLocation] || mockWeatherData["San Francisco, CA"]
    console.log("[v0] Found weather data:", locationWeather)

    setWeatherData({
      location: currentLocation,
      condition: locationWeather.condition,
      temperature: locationWeather.temperature,
      humidity: locationWeather.humidity,
      windSpeed: locationWeather.windSpeed,
      icon: locationWeather.condition.toLowerCase(),
    })

    console.log("[v0] Updated weather data with temperature:", locationWeather.temperature)
  }, [currentLocation])

  const getBackgroundClass = (weather: string) => {
    switch (weather.toLowerCase()) {
      case "sunny":
        return "bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100"
      case "rainy":
        return "bg-gradient-to-br from-slate-100 via-gray-50 to-stone-100"
      case "cloudy":
        return "bg-gradient-to-br from-gray-100 via-stone-50 to-slate-100"
      case "snowy":
        return "bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-100"
      default:
        return "bg-gradient-to-br from-background via-muted/30 to-accent/10"
    }
  }

  const handleLocationChange = (newLocation: string) => {
    setIsLocationLoading(true)
    setCurrentLocation(newLocation)

    setTimeout(() => {
      setIsLocationLoading(false)
    }, 800)
  }

  const handleRefresh = () => {
    setIsLocationLoading(true)
    setTimeout(() => {
      const currentData = mockWeatherData[currentLocation] || mockWeatherData["San Francisco, CA"]
      setWeatherData((prev) => ({
        ...prev,
        temperature: currentData.temperature + Math.floor(Math.random() * 3) - 1,
        humidity: Math.max(30, Math.min(95, currentData.humidity + Math.floor(Math.random() * 6) - 3)),
      }))
      setIsLocationLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <LocationSelector
            currentLocation={currentLocation}
            onLocationChange={handleLocationChange}
            isLoading={isLocationLoading}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isLocationLoading}
            className="border-gray-300 bg-transparent"
          >
            <RefreshCw className={`w-4 h-4 ${isLocationLoading ? "animate-spin" : ""}`} />
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900">MoodCast</h1>
          <p className="text-gray-600 text-lg md:text-xl">Weather that matches your mood</p>
        </div>

        <div className="flex justify-center mb-8">
          <TemperatureToggle isCelsius={isCelsius} onToggle={() => setIsCelsius(!isCelsius)} />
        </div>

        <div className="mb-12">
          <WeatherCard isCelsius={isCelsius} weatherData={weatherData} isLoading={isLocationLoading} />
        </div>

        <MoodForecast weatherCondition={weatherData.condition} />
      </div>
    </div>
  )
}
