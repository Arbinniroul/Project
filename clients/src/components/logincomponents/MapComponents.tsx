import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

interface Location {
  id: string;
  name: string;
  type: "farm" | "market";
  lat: number;
  lng: number;
}

interface MapComponentProps {
  onRouteSelect: (route: any) => void;
  sourceLocation: Location | null;
  destinationLocation: Location | null;
  showRoute: boolean;
}

const MapComponents: React.FC<MapComponentProps> = ({
  onRouteSelect,
  sourceLocation,
  destinationLocation,
  showRoute,
}) => {
  const mapRef = useRef<L.Map | null>(null);
  const routingControlRef = useRef<L.Routing.Control | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !mapRef.current) {
      // Initialize the map
      mapRef.current = L.map("map", {
        center: [28.3949, 84.124], // Center the map at Nepal
        zoom: 7,
        layers: [
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
          }),
        ],
      });

      // Force a resize of the map after a short delay
      setTimeout(() => {
        mapRef.current?.invalidateSize();
      }, 100);

      // Define custom icons for farm and market
      const farmIcon = L.icon({
        iconUrl: "/farm-icon.png",
        iconSize: [25, 25],
      });

      const marketIcon = L.icon({
        iconUrl: "/market-icon.png",
        iconSize: [25, 25],
      });

      // Add locations to the map
      const locations = [
        { name: "Jhapa Farm", type: "farm", lat: 26.6398, lng: 87.8942 },
        { name: "Chitwan Farm", type: "farm", lat: 27.5291, lng: 84.3542 },
        { name: "Kaski Farm", type: "farm", lat: 28.2096, lng: 83.9856 },
        { name: "Kathmandu Market", type: "market", lat: 27.7172, lng: 85.324 },
        { name: "Pokhara Market", type: "market", lat: 28.2096, lng: 83.9856 },
        { name: "Biratnagar Market", type: "market", lat: 26.4831, lng: 87.2834 },
      ];

      locations.forEach((loc) => {
        L.marker([loc.lat, loc.lng], { icon: loc.type === "farm" ? farmIcon : marketIcon })
          .addTo(mapRef.current!)
          .bindPopup(loc.name);
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (mapRef.current && sourceLocation && destinationLocation && showRoute) {
      if (routingControlRef.current) {
        mapRef.current.removeControl(routingControlRef.current);
      }

      routingControlRef.current = L.Routing.control({
        waypoints: [
          L.latLng(sourceLocation.lat, sourceLocation.lng),
          L.latLng(destinationLocation.lat, destinationLocation.lng),
        ],
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: "#6366f1", opacity: 0.6, weight: 4 }],
        },
        show: false, // Hide the itinerary
        addWaypoints: false, // Disable adding waypoints
        draggableWaypoints: false, // Disable dragging waypoints
        fitSelectedRoutes: true, // Fit the map to the selected route
      }).addTo(mapRef.current);

      routingControlRef.current.on("routeselected", (e) => {
        onRouteSelect(e.route);

        // Zoom to the route
        const bounds = L.latLngBounds(e.route.coordinates);
        mapRef.current?.fitBounds(bounds, { padding: [50, 50] });
      });
    } else if (mapRef.current && routingControlRef.current && !showRoute) {
      mapRef.current.removeControl(routingControlRef.current);
      routingControlRef.current = null;
      mapRef.current.setView([28.3949, 84.124], 7); // Reset view to default Nepal
    }
  }, [sourceLocation, destinationLocation, onRouteSelect, showRoute]);

  return (
    <div className="w-full h-full">
      <div id="map" className="h-[calc(100vh-24rem)] w-full rounded-lg overflow-hidden" />
    </div>
  );
};

export default MapComponents;
