import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { colors, Flex } from '../../untils';
import { omomeokLogoColumn } from '../../assets';
import { Button, Inputs } from '../common';

interface ILoginType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginModal = ({ isOpen, setIsOpen }: ILoginType) => {
  const [datas, setDatas] = useState<{ id: string; password: string }>({
    id: '',
    password: '',
  });

  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatas((prev) => ({
      ...prev,
      id: e.target.value,
    }));
  };

  const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatas((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };

  const backRef = useRef<HTMLDivElement>(null);

  const backClick = (e: MouseEvent) => {
    if (backRef.current === e.target) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (datas.id === '' || datas.password === '') {
      setIsBlocked(true);
    } else {
      setIsBlocked(false);
    }
  }, [datas]);

  return (
    <BackGround ref={backRef} onClick={backClick}>
      <ModalContainer>
        <Flex isColumn={true} alignItems="center" gap={24}>
          <img src={omomeokLogoColumn} alt="omomeokLogo" />
          <Flex isColumn={true} width="320px" gap={50}>
            <Flex isColumn={true} gap={32} width="100%">
              <Inputs
                value={datas.id}
                onChange={handleIdChange}
                placeholder={'아이디를 입력하세요'}
                label={'아이디'}
              />
              <Inputs
                value={datas.password}
                onChange={handlePwdChange}
                isPwd={true}
                placeholder={'비밀번호를 입력하세w요'}
                label={'비밀번호'}
              />
            </Flex>
            <Button isBlocked={isBlocked}>로그인</Button>
          </Flex>
        </Flex>
      </ModalContainer>
    </BackGround>
  );
};

const ModalContainer = styled.div`
  width: fit-content;
  padding: 48px 92px;
  border-radius: 20px;
  background-color: ${colors.gray[50]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  width: 100vw;
  height: 100vh;
  background: rgba(108, 108, 108, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
