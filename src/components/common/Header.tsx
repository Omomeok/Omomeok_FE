import styled from 'styled-components';
import { OmomeokLogo } from '../../assets';
import { colors } from '../../untils';
import { useState } from 'react';
import { LoginModal } from '../modal';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const loginClick = () => {
    setIsOpen(true);
  };

  const logoClick = () => {
    navigate('/');
  };

  return (
    <>
      <Container>
        <OmomeokLogo onClick={logoClick} />
        <LoginBtn onClick={loginClick}>로그인</LoginBtn>
      </Container>
      {isOpen && <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

const LoginBtn = styled.button`
  padding: 9px 26px;
  width: fit-content;
  border-radius: 8px;
  background-color: ${colors.main[400]};
  color: ${colors.gray[50]};
  display: flex;
  justify-content: center;
  align-content: baseline;
  &:hover {
    background-color: ${colors.main[600]};
    transition: 0.3s ease-in-out;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 64px;
  border-bottom: 1px solid ${colors.gray[100]};
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 72px;
  background-color: ${colors.gray[50]};
  z-index: 10;
`;
