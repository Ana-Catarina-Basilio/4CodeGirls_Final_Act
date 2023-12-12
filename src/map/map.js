// Map.js
import React, { useState, useEffect } from 'react';
import './map.css';
import osm from "./map_custom_tiler.js";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import MarkerClusterGroup from "react-leaflet-cluster";
import BookButton from '../BookButton.js';



function Map({ selectedCategories }) {
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    if (selectedCategories && selectedCategories.length > 0) {
      // Fetch events based on selected categories
      fetch(`http://127.0.0.1:3000/api/events?categories=${selectedCategories.join(',')}`)
        .then(response => response.json())
        .then(data => {
          // Filter the events to include only those belonging to the selected categories
          const filteredData = data.filter(event => selectedCategories.includes(event.category));
          setFilteredEvents(filteredData);
        })
        .catch(error => console.error('Error fetching events:', error));
    } else {
      console.log("No categories selected, clear the filtered events");
      setFilteredEvents([]);
    }
  }, [selectedCategories]);



  const mapPinIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/8944/8944264.png",
    iconSize: [50, 50]
  });

  return (
    <MapContainer center={[51.509204, -0.136817]} zoom={13} maxZoom={15}>
      <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
      <MarkerClusterGroup chunkedLoading>
        {filteredEvents.map((event, index) => (
          <Marker key={index} position={[event.latitude, event.longitude]} icon={mapPinIcon}>
            <Popup><strong>Event: </strong>{event.name} <br/>
            <strong>Location: </strong>{event.location} <br/>
            <strong>Time: </strong>{event.event_time}  <br/> 
            <strong>Date: </strong>{event.event_date} <br/>
            <strong>Details: </strong> {event.event_info}<br/>
              <img src={require(`../images/${event.event_image}`)} alt={event.name} width="100%" height="100%" />
              <br/>
             <BookButton/>
             </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default Map;
