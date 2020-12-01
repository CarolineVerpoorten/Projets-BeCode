import React, {Component} from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const myIcon = L.icon({
  iconUrl: 'noun_Tree_13389.png',
	iconSize: [25, 41],
	iconAnchor: [12.5, 41],
	popupAnchor: [0, -41],
	
});

	class MapPage extends Component {
		state = 
			{
				lat: 50.6412,
				lng: 5.5718,
				zoom: 13,
			}
			render()
			{
				const position = [this.state.lat, this.state.lng]
			return (
				<Map className="map" center={position} zoom={this.state.zoom}>
					<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={position} icon={myIcon}>
					
					<Popup>
					  A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
					</Marker>
				</Map>
					
				);
			}
	}

export default MapPage;