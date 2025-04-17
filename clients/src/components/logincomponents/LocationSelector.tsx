import type React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface Location {
  id: string
  name: string
  type: "farm" | "market"
  lat: number
  lng: number
}

const locations: Location[] = [
  { id: "farm1", name: "Jhapa Farm", type: "farm", lat: 26.6398, lng: 87.8942 },
  { id: "farm2", name: "Chitwan Farm", type: "farm", lat: 27.5291, lng: 84.3542 },
  { id: "farm3", name: "Kaski Farm", type: "farm", lat: 28.2096, lng: 83.9856 },
  { id: "market1", name: "Kathmandu Market", type: "market", lat: 27.7172, lng: 85.324 },
  { id: "market2", name: "Pokhara Market", type: "market", lat: 28.2096, lng: 83.9856 },
  { id: "market3", name: "Biratnagar Market", type: "market", lat: 26.4831, lng: 87.2834 },
]

interface LocationSelectorProps {
  onSourceSelect: (location: Location) => void
  onDestinationSelect: (location: Location) => void
  onChitwanToKathmanduSelect: () => void
  onShowRoute: () => void
  sourceLocation: Location | null
  destinationLocation: Location | null
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  onSourceSelect,
  onDestinationSelect,

  onShowRoute,
  sourceLocation,
  destinationLocation,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow z-40 mb-24">
      <h2 className="text-xl font-semibold mb-4">Select Locations</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">
            Source (Farm)
          </label>
          <Select
            onValueChange={(value) => {
              const location = locations.find((loc) => loc.id === value)
              if (location) onSourceSelect(location)
            }}
          >
            <SelectTrigger id="source">
              <SelectValue placeholder="Select a farm" />
            </SelectTrigger>
            <SelectContent>
              {locations
                .filter((loc) => loc.type === "farm")
                .map((location) => (
                  <SelectItem key={location.id} value={location.id}>
                    {location.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
            Destination (Market)
          </label>
          <Select
            onValueChange={(value) => {
              const location = locations.find((loc) => loc.id === value)
              if (location) onDestinationSelect(location)
            }}
          >
            <SelectTrigger id="destination">
              <SelectValue placeholder="Select a market" />
            </SelectTrigger>
            <SelectContent>
              {locations
                .filter((loc) => loc.type === "market")
                .map((location) => (
                  <SelectItem key={location.id} value={location.id}>
                    {location.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end">
          <Button
            onClick={onShowRoute}
            className="w-full bg-green-500 text-white hover:bg-green-600"
            disabled={!sourceLocation || !destinationLocation}
          >
            Show Route
          </Button>
        </div>
      
      </div>
    </div>
  )
}

export default LocationSelector

