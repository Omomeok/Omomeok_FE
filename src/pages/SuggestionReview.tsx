import { useState } from 'react';
import { colors, Flex, Text } from '../untils';
import styled from 'styled-components';
import { PostPeople } from '../components/post/PostPeople';
import { PageNav } from '../components';
import { useNavigate } from 'react-router-dom';

export const SuggestionReview = () => {
  const [datas, setDatas] = useState<{
    title: string;
    date: string;
    content: { title: string; content: string; isAcceptance: boolean }[];
  }>({
    title: '7월 급식 메뉴 건의함',
    date: '2025.07.01',
    content: [
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: true,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: true,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: true,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
      {
        title: 'd',
        content: 's',
        isAcceptance: false,
      },
    ],
  });

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 5;
  const currentPosts = datas.content.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const postClick = () => {
    navigate('/suggestion-review-detail/:id');
  };

  return (
    <Container>
      <Flex isColumn={true} gap={62} width="100%" alignItems="center">
        <Flex isColumn={true} gap={62} width="100%">
          <Flex isColumn={true} gap={8} width="100%">
            <Text color={colors.gray[400]} fontSize={24} fontWeight={600}>
              {datas.title}
            </Text>
            <Text color={colors.gray[200]} fontSize={16} fontWeight={400}>
              {datas.date}
            </Text>
          </Flex>
          <Flex isColumn={true} gap={20} width="100%">
            {currentPosts.map((data) => (
              <PostPeople
                onClick={postClick}
                title={data.title}
                content={data.content}
                isAcceptance={data.isAcceptance}
              />
            ))}
          </Flex>
        </Flex>
        <PageNav
          totalPages={Math.ceil(datas.content.length / postsPerPage)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
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
