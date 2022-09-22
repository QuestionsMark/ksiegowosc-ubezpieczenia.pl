import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const Map = () => {
    return (
        <div className="map">
            <MapContainer
                center={[50.0328454, 19.9222375]}
                zoom={15}
                boxZoom={true}
                scrollWheelZoom={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker position={[50.0328454, 19.9222375]}>
                    <Popup>
                        Tutaj znajduje sie nasze biuro.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};