import type React from "react"

interface Vegetable {
  name: string
  season: "Summer" | "Winter" | "All-season"
}

const vegetables: Vegetable[] = [
  { name: "Tomatoes", season: "Summer" },
  { name: "Potatoes", season: "All-season" },
  { name: "Spinach", season: "Winter" },
  { name: "Cauliflower", season: "Winter" },
  { name: "Cucumber", season: "Summer" },
]

interface VegetableSelectorProps {
  onSelect: (vegetable: string) => void
}

const VegetableSelector: React.FC<VegetableSelectorProps> = ({ onSelect }) => {
  return (
    <div className="p-4 bg-black text-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Select Vegetable</h2>
      <select onChange={(e) => onSelect(e.target.value)} className="w-full p-2 border rounded bg-black">
        <option value="">Select a vegetable</option>
        {vegetables.map((veg) => (
          <option key={veg.name} value={veg.name}>
            {veg.name} ({veg.season})
          </option>
        ))}
      </select>
    </div>
  )
}

export default VegetableSelector

