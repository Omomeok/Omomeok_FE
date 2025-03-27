import { useState } from 'react';
import { colors, Flex, Text } from '../untils';
import { Button } from '../components';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const PostDetail = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState<{
    title: string;
    date: string;
    content: string;
  }>({
    title: '7월 급식 메뉴 건의함',
    date: '2025.07.01',
    content:
      '급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.',
  });

  const editClick = () => {
    navigate('/edit');
  };

  const delClick = () => {
    //삭제 api
  };

  const checkClick = () => {
    navigate('/suggestion-review');
  };
  return (
    <Container>
      <Flex isColumn={true} gap={40}>
        <Flex alignItems="start" width="100%" justifyContent="space-between">
          <Flex isColumn={true} gap={20}>
            <Flex isColumn={true} gap={8}>
              <Text color={colors.gray[400]} fontSize={24} fontWeight={600}>
                {datas.title}
              </Text>
              <Text color={colors.gray[200]} fontSize={16} fontWeight={400}>
                {datas.date}
              </Text>
            </Flex>
            <Flex gap={10}>
              <Text
                color={colors.gray[200]}
                fontSize={16}
                fontWeight={400}
                onClick={editClick}
              >
                수정
              </Text>
              <Text
                color={colors.gray[200]}
                fontSize={16}
                fontWeight={400}
                onClick={delClick}
              >
                삭제
              </Text>
            </Flex>
          </Flex>
          <Button width="200px" onClick={checkClick}>
            건의 확인
          </Button>
        </Flex>
        <Text color={colors.gray[400]} fontSize={16} fontWeight={400}>
          {datas.content}
        </Text>
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 200px;
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;
