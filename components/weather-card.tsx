"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Sun, CloudRain, Snowflake, MapPin, Loader2 } from "lucide-react"

interface WeatherCardProps {
  isCelsius: boolean
  weatherData: {
    location: string
    condition: string
    temperature: number
    humidity: number
    windSpeed: number
    icon: string
  }
  isLoading?: boolean
}

export function WeatherCard({ isCelsius, weatherData, isLoading }: WeatherCardProps) {
  const displayTemperature = isCelsius ? weatherData.temperature : Math.round((weatherData.temperature * 9) / 5 + 32)
  const displayWindSpeed = isCelsius ? weatherData.windSpeed : Math.round(weatherData.windSpeed * 0.621371)

  const getWeatherIcon = (condition: string) => {
    if (isLoading) {
      return <Loader2 className="w-20 h-20 text-gray-400 animate-spin" />
    }

    switch (condition.toLowerCase()) {
      case "sunny":
        return <Sun className="w-20 h-20 text-yellow-500" />
      case "rainy":
        return <CloudRain className="w-20 h-20 text-blue-500" />
      case "cloudy":
        return <Cloud className="w-20 h-20 text-gray-500" />
      case "snowy":
        return <Snowflake className="w-20 h-20 text-blue-300" />
      default:
        return <Sun className="w-20 h-20 text-yellow-500" />
    }
  }

  return (
    <Card className="bg-white border border-gray-200 shadow-lg">
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0">{getWeatherIcon(weatherData.condition)}</div>
            <div>
              <div
                className={`text-6xl md:text-7xl font-bold text-gray-900 transition-opacity duration-500 ${isLoading ? "opacity-50" : "opacity-100"}`}
              >
                {displayTemperature}°{isCelsius ? "C" : "F"}
              </div>
              <div
                className={`text-2xl text-gray-600 transition-opacity duration-500 ${isLoading ? "opacity-50" : "opacity-100"}`}
              >
                {weatherData.condition}
              </div>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end gap-2 mb-6">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span
                className={`text-xl font-medium text-gray-900 transition-opacity duration-500 ${isLoading ? "opacity-50" : "opacity-100"}`}
              >
                {weatherData.location}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`bg-gray-50 rounded-lg p-4 border border-gray-100 transition-opacity duration-500 ${isLoading ? "opacity-50" : "opacity-100"}`}
              >
                <div className="text-gray-500 text-sm font-medium mb-1">Humidity</div>
                <div className="text-xl font-semibold text-gray-900">{weatherData.humidity}%</div>
              </div>
              <div
                className={`bg-gray-50 rounded-lg p-4 border border-gray-100 transition-opacity duration-500 ${isLoading ? "opacity-50" : "opacity-100"}`}
              >
                <div className="text-gray-500 text-sm font-medium mb-1">Wind</div>
                <div className="text-xl font-semibold text-gray-900">
                  {displayWindSpeed} {isCelsius ? "km/h" : "mph"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
