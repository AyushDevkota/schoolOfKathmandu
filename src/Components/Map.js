import { MapContainer, TileLayer, Marker, MapConsumer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";
import data from "../data/data.json";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
	iconUrl: require("leaflet/dist/images/marker-icon.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = ({ changeState, setInfo }) => {
	const [coords, setCoords] = useState([27, 1]);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			setCoords([position.coords.latitude, position.coords.longitude]);
		});
	}, []);

	const refreshMap = (map) => {
		map.setView(coords);
	};
	return (
		<MapContainer
			center={coords}
			zoom={18}
			scrollWheelZoom={true}
			zoomControl={false}
			style={{ height: "100vh", width: "100vw", zIndex: 1 }}
		>
			<MapConsumer>
				{(map) => {
					refreshMap(map);
					return null;
				}}
			</MapConsumer>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			{data.features.map((school) => {
				if (school.geometry.type === "Polygon") {
					const co = [
						school.geometry.coordinates[0][0][1],
						school.geometry.coordinates[0][0][0],
					];
					return (
						<Marker
							position={co}
							key={school.id}
							eventHandlers={{
								click: () => {
									changeState(true);
									setCoords(co);
									setInfo({
										name: school.properties.name,
										buildingCount: school.properties.building_count,
										personnelCount: school.properties["personnel:count"],
										operatorType: school.properties["operator:type"],
										studentCount: school.properties["student:count"],
									});
								},
							}}
						></Marker>
					);
				}
			})}
		</MapContainer>
	);
};

export default Map;
