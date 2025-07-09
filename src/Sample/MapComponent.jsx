// components/MapComponent.tsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconR from "leaflet/dist/images/marker-icon-2x.png";
import iconU from "leaflet/dist/images/marker-icon.png";
import iconS from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet's default marker icon path (important for Vite, Webpack, etc.)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconR,
  iconUrl: iconU,
  shadowUrl: iconS,
});

const locations = [
  {
    position: [10.6667, 122.95],
    title: "Negros Occidental",
    description: "Relocation Survey & Topographic Survey - 92,200 sqm",
  },

  {
    position: [11.8333, 125.0],
    title: "Samar",
    description: "Relocation Survey & Topographic Survey - 92,200 sqm",
  },

  {
    position: [10.3157, 123.8854],
    title: "Cebu City",
    description: "Relocation Survey & Topographic Survey - 92,200 sqm",
  },

  {
    position: [10.7202, 122.5621],
    title: "Ilo-ilo City",
    description: "Relocation Survey & Topographic Survey - 92,200 sqm",
  },

  {
    position: [13.7565, 121.0583],
    title: "Batangas City",
    description: "Relocation Survey & Topographic Survey - 92,200 sqm",
  },

  {
    position: [9.85, 124.1435],
    title: "Bohol",
    description: "Relocation Survey & Topographic Survey - 92,200 sqm",
  },

  {
    position: [15.485, 120.5963],
    title: "Tarlac",
    description: "Relocation Survey & Topographic Survey - 92,200 sqm",
  },

  {
    position: [10.5929, 122.6325],
    title: "Misamis Oriental",
    description: "Relocation Survey & Topographic Survey - 92,200 sqm",
  },

  {
    position: [18.2569, 121.7076],
    title: "Cagayan",
    description: "Relocation Survey & Topographic Survey - 92,200 sqm",
  },

  {
    position: [11.707, 122.3647],
    title: "Aklan",
    description: "Relocation Survey & Topographic Survey - 92,200 sqm",
  },

  {
    position: [9.8432, 118.7384],
    title: "Palawan",
    description: "Relocation Survey & Topographic Survey - 92,200 sqm",
  },

  // Add more locations here
];

export default function MapComponent() {
  return (
    <div className="w-full h-[700px] md:w-1/2 lg:h-[600px] rounded-lg shadow-md overflow-hidden">
      <MapContainer
        center={[12.8797, 121.774]}
        zoom={6}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc, i) => (
          <Marker position={loc.position} key={i}>
            <Popup>
              <div className="text-sm">
                <h2 className="font-semibold">{loc.title}</h2>
                <p className="text-xs">{loc.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
