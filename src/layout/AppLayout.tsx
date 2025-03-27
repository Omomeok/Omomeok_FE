import styled from 'styled-components';
import { Header } from '../components';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../untils';

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <GlobalStyle />
    </>
  );
};

const Main = styled.main`
  width: 100vw;
  margin-top: 64px;
`;
