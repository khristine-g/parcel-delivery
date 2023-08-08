import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Dap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA6_uYX3TQ2UB_niV-bxgSGI5hJDyYNYTk",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}
export default Dap;
