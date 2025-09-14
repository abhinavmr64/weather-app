"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Music, Coffee, BookOpen, Gamepad2, ExternalLink, Home, Snowflake } from "lucide-react"

interface MoodForecastProps {
  weatherCondition: string
}

export function MoodForecast({ weatherCondition }: MoodForecastProps) {
  const getMoodSuggestion = (weather: string) => {
    switch (weather.toLowerCase()) {
      case "sunny":
        return {
          title: "Perfect Day Vibes",
          description: "The sunny weather calls for upbeat energy and outdoor activities! ☀️",
          recommendations: [
            {
              type: "music",
              title: "Upbeat Summer Playlist",
              description: "Energetic tracks to match the sunshine",
              icon: <Music className="w-5 h-5" />,
              emoji: "🎵",
              action: "Open Spotify",
              onClick: () => window.open("https://open.spotify.com/search/sunny%20day%20playlist", "_blank"),
            },
            {
              type: "drink",
              title: "Iced Coffee",
              description: "Cool down with a refreshing cold brew",
              icon: <Coffee className="w-5 h-5" />,
              emoji: "☕",
              action: "Find Recipe",
              onClick: () => window.open("https://www.google.com/search?q=iced+coffee+recipe", "_blank"),
            },
            {
              type: "activity",
              title: "Outdoor Reading",
              description: "Take your book to the park",
              icon: <BookOpen className="w-5 h-5" />,
              emoji: "📚",
              action: "Get Ideas",
              onClick: () =>
                window.open("https://www.google.com/search?q=best+outdoor+reading+spots+near+me", "_blank"),
            },
            {
              type: "game",
              title: "Frisbee or Sports",
              description: "Perfect weather for outdoor games",
              icon: <Gamepad2 className="w-5 h-5" />,
              emoji: "🥏",
              action: "Find Activities",
              onClick: () =>
                window.open("https://www.google.com/search?q=outdoor+sports+activities+sunny+weather", "_blank"),
            },
          ],
        }
      case "rainy":
        return {
          title: "Cozy Indoor Vibes",
          description: "Rainy weather is perfect for staying cozy and enjoying indoor comforts! 🌧️",
          recommendations: [
            {
              type: "music",
              title: "Chill Rain Playlist",
              description: "Relaxing tunes for a rainy day",
              icon: <Music className="w-5 h-5" />,
              emoji: "🎶",
              action: "Open Spotify",
              onClick: () => window.open("https://open.spotify.com/search/rainy%20day%20chill%20playlist", "_blank"),
            },
            {
              type: "drink",
              title: "Hot Tea or Cocoa",
              description: "Warm up with a comforting hot drink",
              icon: <Coffee className="w-5 h-5" />,
              emoji: "🍵",
              action: "Find Recipe",
              onClick: () => window.open("https://www.google.com/search?q=hot+tea+cocoa+recipe+rainy+day", "_blank"),
            },
            {
              type: "activity",
              title: "Indoor Reading",
              description: "Perfect time for that book you've been meaning to read",
              icon: <BookOpen className="w-5 h-5" />,
              emoji: "📖",
              action: "Get Ideas",
              onClick: () => window.open("https://www.google.com/search?q=best+books+to+read+rainy+day", "_blank"),
            },
            {
              type: "game",
              title: "Board Games",
              description: "Cozy indoor games and puzzles",
              icon: <Gamepad2 className="w-5 h-5" />,
              emoji: "🎲",
              action: "Find Games",
              onClick: () => window.open("https://www.google.com/search?q=indoor+board+games+rainy+day", "_blank"),
            },
          ],
        }
      case "cloudy":
        return {
          title: "Mellow Day Mood",
          description: "Cloudy skies create the perfect atmosphere for relaxed activities! ☁️",
          recommendations: [
            {
              type: "music",
              title: "Indie & Acoustic",
              description: "Mellow tunes for a cloudy day",
              icon: <Music className="w-5 h-5" />,
              emoji: "🎸",
              action: "Open Spotify",
              onClick: () => window.open("https://open.spotify.com/search/cloudy%20day%20indie%20acoustic", "_blank"),
            },
            {
              type: "drink",
              title: "Warm Coffee",
              description: "A perfect companion for cloudy weather",
              icon: <Coffee className="w-5 h-5" />,
              emoji: "☕",
              action: "Find Recipe",
              onClick: () => window.open("https://www.google.com/search?q=warm+coffee+recipes+cloudy+day", "_blank"),
            },
            {
              type: "activity",
              title: "Art & Creativity",
              description: "Great lighting for creative projects",
              icon: <BookOpen className="w-5 h-5" />,
              emoji: "🎨",
              action: "Get Ideas",
              onClick: () => window.open("https://www.google.com/search?q=creative+art+projects+cloudy+day", "_blank"),
            },
            {
              type: "game",
              title: "Casual Walks",
              description: "Perfect for a peaceful stroll",
              icon: <Gamepad2 className="w-5 h-5" />,
              emoji: "🚶",
              action: "Find Routes",
              onClick: () => window.open("https://www.google.com/search?q=peaceful+walking+routes+near+me", "_blank"),
            },
          ],
        }
      case "snowy":
        return {
          title: "Winter Wonderland",
          description: "Snowy weather brings magical winter activities and cozy moments! ❄️",
          recommendations: [
            {
              type: "music",
              title: "Winter Chill",
              description: "Cozy winter vibes and holiday tunes",
              icon: <Music className="w-5 h-5" />,
              emoji: "🎄",
              action: "Open Spotify",
              onClick: () => window.open("https://open.spotify.com/search/winter%20snow%20chill%20playlist", "_blank"),
            },
            {
              type: "drink",
              title: "Hot Chocolate",
              description: "Warm up with rich, creamy hot chocolate",
              icon: <Coffee className="w-5 h-5" />,
              emoji: "🍫",
              action: "Find Recipe",
              onClick: () => window.open("https://www.google.com/search?q=hot+chocolate+recipe+snowy+day", "_blank"),
            },
            {
              type: "activity",
              title: "Winter Sports",
              description: "Skiing, snowboarding, or building snowmen",
              icon: <Snowflake className="w-5 h-5" />,
              emoji: "⛷️",
              action: "Get Ideas",
              onClick: () => window.open("https://www.google.com/search?q=winter+snow+activities+near+me", "_blank"),
            },
            {
              type: "game",
              title: "Cozy Indoor Games",
              description: "Board games by the fireplace",
              icon: <Home className="w-5 h-5" />,
              emoji: "🏠",
              action: "Find Games",
              onClick: () => window.open("https://www.google.com/search?q=cozy+indoor+winter+games", "_blank"),
            },
          ],
        }
      default:
        return {
          title: "Perfect Day Vibes",
          description: "Great weather for any activity you choose! 🌤️",
          recommendations: [
            {
              type: "music",
              title: "Feel Good Playlist",
              description: "Uplifting tracks for any mood",
              icon: <Music className="w-5 h-5" />,
              emoji: "🎵",
              action: "Open Spotify",
              onClick: () => window.open("https://open.spotify.com/search/feel%20good%20playlist", "_blank"),
            },
            {
              type: "drink",
              title: "Your Favorite Drink",
              description: "Whatever suits your mood today",
              icon: <Coffee className="w-5 h-5" />,
              emoji: "☕",
              action: "Find Recipe",
              onClick: () => window.open("https://www.google.com/search?q=favorite+drink+recipes", "_blank"),
            },
            {
              type: "activity",
              title: "Flexible Activities",
              description: "Indoor or outdoor - your choice!",
              icon: <BookOpen className="w-5 h-5" />,
              emoji: "🌟",
              action: "Get Ideas",
              onClick: () => window.open("https://www.google.com/search?q=fun+activities+any+weather", "_blank"),
            },
            {
              type: "game",
              title: "Any Game",
              description: "Perfect for whatever you're in the mood for",
              icon: <Gamepad2 className="w-5 h-5" />,
              emoji: "🎮",
              action: "Find Activities",
              onClick: () => window.open("https://www.google.com/search?q=fun+games+activities", "_blank"),
            },
          ],
        }
    }
  }

  const moodSuggestion = getMoodSuggestion(weatherCondition)

  return (
    <div className="space-y-6">
      <Card className="bg-white border border-gray-200 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-black">🌈 Mood Forecast</CardTitle>
          <p className="text-black text-lg text-pretty">{moodSuggestion.description}</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {moodSuggestion.recommendations.map((rec, index) => (
              <Card
                key={index}
                className="bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="text-3xl drop-shadow-sm"
                      style={{
                        color: "#000000",
                        textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                        filter: "contrast(1.2) brightness(1.1)",
                      }}
                    >
                      {rec.emoji}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-black mb-2 text-lg">{rec.title}</h4>
                      <p className="text-sm text-black mb-4 text-pretty leading-relaxed">{rec.description}</p>
                      <Button
                        size="sm"
                        className="shadow-lg hover:shadow-xl transition-all duration-300"
                        style={{ backgroundColor: "#1f2937", color: "#ffffff" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#000000"
                          e.currentTarget.style.color = "#ffffff"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#1f2937"
                          e.currentTarget.style.color = "#ffffff"
                        }}
                        onClick={rec.onClick}
                      >
                        {rec.icon}
                        <span className="ml-2" style={{ color: "#ffffff" }}>
                          {rec.action}
                        </span>
                        <ExternalLink className="w-3 h-3 ml-1" style={{ color: "#ffffff" }} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="font-bold text-lg py-6 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: "#1f2937", color: "#ffffff" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#000000"
            e.currentTarget.style.color = "#ffffff"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#1f2937"
            e.currentTarget.style.color = "#ffffff"
          }}
          onClick={moodSuggestion.recommendations[0]?.onClick}
        >
          <Music className="w-6 h-6 mr-3" style={{ color: "#ffffff" }} />
          <span style={{ color: "#ffffff" }}>Open Spotify Playlist</span>
          <ExternalLink className="w-5 h-5 ml-3" style={{ color: "#ffffff" }} />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-2 font-bold text-lg py-6 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-transparent"
          style={{
            borderColor: "#1f2937",
            backgroundColor: "#ffffff",
            color: "#000000",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1f2937"
            e.currentTarget.style.color = "#ffffff"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ffffff"
            e.currentTarget.style.color = "#000000"
          }}
          onClick={moodSuggestion.recommendations[2]?.onClick}
        >
          <Gamepad2 className="w-6 h-6 mr-3" />
          <span>Get Activity Ideas</span>
          <ExternalLink className="w-5 h-5 ml-3" />
        </Button>
      </div>
    </div>
  )
}
