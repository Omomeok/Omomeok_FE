import styled from 'styled-components';
import { Button, Inputs, TextArea } from '../components';
import { colors, Flex, Text } from '../untils';
import { useState } from 'react';

export const Edit = () => {
  const [datas, setDatas] = useState<{ title: string; content: string }>({
    title: '7월 급식 메뉴 건의함',
    content:
      '급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.',
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatas((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLAreaElement>) => {
    setDatas((prev) => ({
      ...prev,
      content: e.target.value,
    }));
  };

  console.log(datas);
  return (
    <Container>
      <Flex isColumn={true} gap={62} width="100%" alignItems="end">
        <Flex isColumn={true} gap={62} width="100%">
          <Text color={colors.gray[400]} fontSize={24} fontWeight={600}>
            게시글 수정하기
          </Text>
          <Flex width="100%" isColumn={true} gap={36}>
            <Inputs
              placeholder={'제목을 입력하세요'}
              label={'제목'}
              onChange={handleTitleChange}
              value={datas.title}
            />
            <TextArea
              placeholder="내용을 입력하세요"
              label="내용"
              onChange={handleContentChange}
              value={datas.content}
            />
          </Flex>
        </Flex>
        <Button width="fit-content">수정하기</Button>
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 60px 300px 0 300px;
`;
