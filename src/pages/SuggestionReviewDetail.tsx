import { useState } from 'react';
import { colors, Flex, Text } from '../untils';
import { Button } from '../components';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const SuggestionReviewDetail = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState<{
    name: string;
    date: string;
    content: string;
  }>({
    name: '급식 마니 주세요',
    date: '2025.07.01',
    content:
      '급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.',
  });

  const delClick = () => {
    //삭제 api
  };

  const checkClick = () => {
    navigate('/suggestion-review');
  };
  return (
    <Container>
      <Flex isColumn={true} gap={40}>
        <Flex isColumn={true} gap={40}>
          <Flex isColumn={true} gap={8}>
            <Text color={colors.gray[400]} fontSize={24} fontWeight={600}>
              {datas.name}님
            </Text>
            <Text color={colors.gray[200]} fontSize={16} fontWeight={400}>
              {datas.date}
            </Text>
          </Flex>
          <Text color={colors.gray[400]} fontSize={16} fontWeight={400}>
            {datas.content}
          </Text>
        </Flex>
        <Flex gap={8}>
          <Btn>수락</Btn>
          <Btn isColor={true}>거절</Btn>
        </Flex>
      </Flex>
    </Container>
  );
};

const Btn = styled.button<{ isColor: boolean }>`
  padding: 8px 16px;
  width: 60px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 600;
  color: ${({ isColor }) => (isColor ? colors.gray[50] : colors.main[400])};
  background-color: ${({ isColor }) =>
    isColor ? colors.main[400] : colors.gray[50]};
  border: ${({ isColor }) => (isColor ? colors.gray[50] : colors.main[400])} 1px
    solid;
  &:hover {
    transition: 0.7s ease;
    color: ${({ isColor }) => (isColor ? colors.main[400] : colors.gray[50])};
    background-color: ${({ isColor }) =>
      isColor ? colors.gray[50] : colors.main[400]};
    border: ${({ isColor }) => (isColor ? colors.main[400] : colors.gray[50])}
      1px solid;
  }
`;

const Container = styled.div`
  padding: 0 200px;
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;
