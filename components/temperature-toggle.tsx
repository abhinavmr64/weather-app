"use client"

import { Button } from "@/components/ui/button"

interface TemperatureToggleProps {
  isCelsius: boolean
  onToggle: () => void
}

export function TemperatureToggle({ isCelsius, onToggle }: TemperatureToggleProps) {
  return (
    <div className="flex items-center bg-white rounded-lg p-1 shadow-sm border border-gray-200">
      <Button
        variant={isCelsius ? "default" : "ghost"}
        size="sm"
        onClick={onToggle}
        className="px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md"
        style={{
          backgroundColor: isCelsius ? "#111827" : "transparent",
          color: isCelsius ? "#ffffff" : "#4b5563",
        }}
      >
        °C
      </Button>
      <Button
        variant={!isCelsius ? "default" : "ghost"}
        size="sm"
        onClick={onToggle}
        className="px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md"
        style={{
          backgroundColor: !isCelsius ? "#111827" : "transparent",
          color: !isCelsius ? "#ffffff" : "#4b5563",
        }}
      >
        °F
      </Button>
    </div>
  )
}
