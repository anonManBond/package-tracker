import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Ensure this import is correct
import 'leaflet/dist/leaflet.css';
import StatusBadge from '../components/StatusBadge';
import Header from '../components/Header';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

const DeliveryMap = ({ lat, lon, address }) => {
  if (!lat || !lon) return <p>Loading map...</p>;

  return (
    <MapContainer center={[lat, lon]} zoom={13} style={{ height: '300px', width: '100%', marginTop: '1rem' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lon]}>
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  );
};

const OrderDetailPage = () => {
  const { id } = useParams(); // This gets the id from the URL
  const [order, setOrder] = useState(null);
  const [location, setLocation] = useState({ lat: null, lon: null, address: '' });

  useEffect(() => {
    // Fetch orders from the mock API
    axios
      .get('https://my.api.mockaroo.com/orders.json?key=e49e6840')
      .then((res) => {
        const found = res.data.find((o) => String(o.id) === id); // Find the order by ID
        if (found) {
          setOrder(found);
          setLocation({
            lat: found.location_coordinate_latitude,
            lon: found.location_coordinate_longitude,
            address: found.location_name,
          });
        } else {
          console.error('Order not found!');
        }
      })
      .catch((error) => {
        console.error('Error fetching order data:', error);
        if (error.response) {
          console.log('Server responded with an error:', error.response.status);
          console.log('Error details:', error.response.data);
        } else if (error.request) {
          console.log('No response received:', error.request);
        } else {
          console.log('Error in setting up the request:', error.message);
        }
      });
  }, [id]);  

  if (!order) return <p>Loading details...</p>; // Show loading if order data isn't available yet

  return (
    <>
      <Header />
      <Container>
        <BackLink to="/">← Back to All Orders</BackLink>
        <h2>Order #{order.id}</h2>
        <StatusBadge status={order.status} />
        <p><strong>Estimated Arrival:</strong> {new Date(order.eta).toLocaleString()}</p>
        <p><strong>Pickup Location:</strong> {order.location_name}</p>
        <p><strong>Delivery Address:</strong> {order.location_name}</p>
        <p><strong>Customer:</strong> {order.user_name}</p>
        
        {/* Render the map with the fetched coordinates */}
        <DeliveryMap lat={location.lat} lon={location.lon} address={location.address} />
      </Container>
    </>
  );
};

export default OrderDetailPage;