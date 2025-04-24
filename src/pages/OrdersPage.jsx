import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderCard from '../components/OrderCard';
import Header from '../components/Header';
import styled from 'styled-components';

const Grid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://my.api.mockaroo.com/orders.json?key=e49e6840')
      .then(res => setOrders(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />
      <Grid>
        {loading ? (
          <p>Loading orders...</p>
        ) : (
          orders.map(order => <OrderCard key={order.id} order={order} />)
        )}
      </Grid>
    </>
  );
};

export default OrdersPage;
