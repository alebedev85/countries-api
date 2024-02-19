import styled from 'styled-components';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from './Container';
import { useAppSelector as useSelector } from '../store';
import { useAppDispatch as useDispatch } from '../store';
import { themeLight, themeDark, selectTheme } from '../store/slices/themeSlice'
import { resetFilters } from '../store/slices/filtersSlice';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/countries-api',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

export default function Header () {
  const dispatch = useDispatch();
  const { theme } = useSelector(selectTheme)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  function hendelThemeSwitcher() {
    theme === 'light' ? dispatch(themeDark()) : dispatch(themeLight())
  }

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={() => dispatch(resetFilters())}>Where is the world?</Title>
          <ModeSwitcher onClick={hendelThemeSwitcher}>
          {theme === 'light' ? (
            <IoMoonOutline size="14px" />
          ) : (
            <IoMoon size="14px" />
          )}{' '}
          <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
        </ModeSwitcher>
      </Wrapper>
    </Container>
    </HeaderEl >
  );
};
