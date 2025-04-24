import styled from 'styled-components';
import StatusBadge from './StatusBadge';
import { Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';


const Card = styled(Link)`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  }
`;

const OrderCard = ({ order }) => {
    const { t } = useLocale();
  
    return (
      <Card to={`/order/${order.id}`}>
        <h3>📦 {t('order')} #{order.id}</h3>
        <p><strong>{t('estimatedArrival')}:</strong> {new Date(order.eta).toLocaleString()}</p>
        <p><strong>{t('pickupLocation')}:</strong> {order.pickup_location}</p>
        <StatusBadge status={order.status} />
      </Card>
    );
  };


export default OrderCard;