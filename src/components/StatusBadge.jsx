import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { useLocale } from '../context/LocaleContext';

const Badge = styled.span`
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  background-color: ${({ $color }) => $color};
  color: white;
  text-transform: capitalize;
`;

const statusColorMap = {
    delivered: 'success',
    'ready-for-pickup': 'primary',
    'on-the-way': 'warning',
    'order-info-received': 'border',
    delayed: 'danger',
  };
  
  const StatusBadge = ({ status }) => {
    const theme = useTheme();
    const { t } = useLocale();
  
    const normalized = status?.toLowerCase();
    const colorKey = statusColorMap[normalized] || 'border';
    const label = t(`status.${normalized}`) || t('status.default');
  
    return <Badge $color={theme.colors[colorKey]}>{label}</Badge>;
  };

export default StatusBadge;