import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProfitEstimatorProps {
  selectedVegetable: string
  transportDetails: any
}

const vegetablePrices: { [key: string]: number } = {
  Tomatoes: 50,
  Potatoes: 30,
  Spinach: 40,
  Cauliflower: 60,
  Cucumber: 45,
}

const growingCosts: { [key: string]: number } = {
  Tomatoes: 20,
  Potatoes: 15,
  Spinach: 18,
  Cauliflower: 25,
  Cucumber: 22,
}

const ProfitEstimator: React.FC<ProfitEstimatorProps> = ({ selectedVegetable, transportDetails }) => {
  if (!selectedVegetable || !transportDetails) {
    return null
  }

  const marketPrice = vegetablePrices[selectedVegetable]
  const growingCost = growingCosts[selectedVegetable]
  const transportCost = transportDetails.costPerKg

  const profitPerKg = marketPrice - growingCost - transportCost

  return (
    <Card className="text-white bg-black">
      <CardHeader>
        <CardTitle>Profit Estimation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 ">
        <p>Vegetable: {selectedVegetable}</p>
        <p>Market Price: NPR {marketPrice}/kg</p>
        <p>Growing Cost: NPR {growingCost}/kg</p>
        <p>Transport Cost: NPR {transportCost.toFixed(2)}/kg</p>
        <p className="font-bold">Estimated Profit: NPR {profitPerKg.toFixed(2)}/kg</p>
      </CardContent>
    </Card>
  )
}

export default ProfitEstimator

