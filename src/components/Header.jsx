import styled from 'styled-components';
import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleContext';

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LocaleSelect = styled.select`
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 6px;
  padding: 0.4rem 0.6rem;
  font-weight: 500;
`;

const Header = () => {
  const { locale, setLocale } = useContext(LocaleContext);

  return (
    <HeaderWrapper>
      <Brand>
        📦 <span>YellowTrack</span>
      </Brand>
      <LocaleSelect value={locale} onChange={(e) => setLocale(e.target.value)}>
      <option value="en">🇬🇧 English</option>
        <option value="sv">🇸🇪 Svenska</option>
      </LocaleSelect>
    </HeaderWrapper>
  );
};

export default Header;
