import React, { useState, Suspense } from "react";
import LocationSelector from "@/components/logincomponents/LocationSelector";
import TransportCostCalculator from "@/components/logincomponents/Transportation";
import VegetableSelector from "@/components/logincomponents/VegetableSelector";
import ProfitEstimator from "@/components/logincomponents/ProfitEstimator";
import Navbar from "@/components/common/Navbar";
import { Footer } from "@/components/logincomponents/Footer";

const MapComponents = React.lazy(() => import("@/components/logincomponents/MapComponents"));

interface Location {
  id: string;
  name: string;
  type: "farm" | "market";
  lat: number;
  lng: number;
}

interface RouteDetails {
  summary: {
    totalDistance: number;
    totalAscend: number;
  };
}

export default function Home() {
  const [selectedVegetable, setSelectedVegetable] = useState("");
  const [selectedRoute, setSelectedRoute] = useState<RouteDetails | null>(null);
  const [transportDetails, setTransportDetails] = useState(null);
  const [sourceLocation, setSourceLocation] = useState<Location | null>(null);
  const [destinationLocation, setDestinationLocation] = useState<Location | null>(null);
  const [showRoute, setShowRoute] = useState(false);

  const handleChitwanToKathmanduSelect = () => {
    const chitwan = { id: "farm2", name: "Chitwan Farm", type: "farm" as const, lat: 27.5291, lng: 84.3542 };
    const kathmandu = { id: "market1", name: "Kathmandu Market", type: "market" as const, lat: 27.7172, lng: 85.324 };
    setSourceLocation(chitwan);
    setDestinationLocation(kathmandu);
    setShowRoute(true);
  };

  const handleShowRoute = () => {
    if (sourceLocation && destinationLocation) {
      setShowRoute(true);
    }
  };

  const handleSourceSelect = (location: Location) => {
    setSourceLocation(location);
    setShowRoute(false);
    setSelectedRoute(null);
    setTransportDetails(null);
  };

  const handleDestinationSelect = (location: Location) => {
    setDestinationLocation(location);
    setShowRoute(false);
    setSelectedRoute(null);
    setTransportDetails(null);
  };

  return (
    <div>
      <Navbar />
      <main className="bg-gray-50 min-h-screen flex flex-col items-center py-8 relative">
        <h1 className="text-4xl font-semibold text-center text-indigo-600 mb-8">Nepal Vegetable Transport System</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-screen-xl px-4">
          <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6 space-y-8">
            <LocationSelector
              onSourceSelect={handleSourceSelect}
              onDestinationSelect={handleDestinationSelect}
              onChitwanToKathmanduSelect={handleChitwanToKathmanduSelect}
              onShowRoute={handleShowRoute}
              sourceLocation={sourceLocation}
              destinationLocation={destinationLocation}
            />
            <div className="h-96 bg-gray-100 rounded-lg overflow-hidden">
              <Suspense fallback={<div className="flex items-center justify-center h-full">Loading map...</div>}>
                <MapComponents
                  onRouteSelect={setSelectedRoute}
                  sourceLocation={sourceLocation}
                  destinationLocation={destinationLocation}
                  showRoute={showRoute}
                />
              </Suspense>
            </div>
          </div>

          <div className="space-y-8 bg-white shadow-lg rounded-lg p-6 overflow-y-auto h-full">
            <VegetableSelector onSelect={setSelectedVegetable} />
            <TransportCostCalculator 
              selectedRoute={selectedRoute} 
              onCalculate={setTransportDetails} 
              selectedVegetable={selectedVegetable}
            />
            <ProfitEstimator 
              selectedVegetable={selectedVegetable} 
              transportDetails={transportDetails} 
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}