import styled from 'styled-components';
import { Button, Inputs, TextArea } from '../components';
import { colors, Flex, Text } from '../untils';
import { useState } from 'react';

export const Write = () => {
  const [datas, setDatas] = useState<{ title: string; content: string }>({
    title: '',
    content: '',
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
            게시글 작성하기
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
        <Button width="fit-content">게시하기</Button>
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 60px 300px 0 300px;
`;
