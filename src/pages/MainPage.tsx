import { useEffect, useState } from 'react';
import { banner } from '../assets';
import { PageNav, PostContainer } from '../components';
import { colors, Flex } from '../untils';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import ChannelService from '../ChannelService';

export const MainPage = () => {
  // useEffect(() => {
  //   ChannelService.loadScript();

  //   ChannelService.boot({
  //     pluginKey: import.meta.env.VITE_CHNNEL_KEY || '',
  //   });
  // }, []);

  const [datas, setDatas] = useState<[{ title: string; date: string }]>([
    {
      title: '1',
      date: '2020.01.02',
    },
    {
      title: '2',
      date: '2020.01.02',
    },
    {
      title: '3',
      date: '2020.01.02',
    },
    {
      title: '4',
      date: '2020.01.02',
    },
    {
      title: '5',
      date: '2020.01.02',
    },
    {
      title: '6',
      date: '2020.01.02',
    },
    {
      title: '7',
      date: '2020.01.02',
    },
    {
      title: '8',
      date: '2020.01.02',
    },
    {
      title: '9',
      date: '2020.01.02',
    },
    {
      title: '10',
      date: '2020.01.02',
    },
    {
      title: '11',
      date: '2020.01.02',
    },
    {
      title: '12',
      date: '2020.01.02',
    },
    {
      title: '13',
      date: '2020.01.02',
    },
    {
      title: '14',
      date: '2020.01.02',
    },
  ]);

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 5;
  const currentPosts = datas.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const writeClick = () => {
    navigate('/write');
  };

  const pageClick = () => {
    navigate('/post/1');
  };
  return (
    <AllContainer>
      <BannerContainer src={banner} alt="banner" />
      <Flex isColumn={true} alignItems="center" width="100%" gap={32}>
        <Container>
          <Flex gap={20} isColumn={true} width="100%">
            {currentPosts.map((data) => (
              <PostContainer
                title={data.title}
                date={data.date}
                onClick={pageClick}
              />
            ))}
          </Flex>
        </Container>
        <Btn onClick={writeClick}>글 작성하기</Btn>
        <PageNav
          totalPages={Math.ceil(datas.length / postsPerPage)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Flex>
    </AllContainer>
  );
};
const Btn = styled.button`
  font-size: 16px;
  padding: 12px 26px;
  width: fit-content;
  position: fixed;
  bottom: 120px;
  right: 50px;
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

const BannerContainer = styled.img`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  padding: 0 100px;
  display: flex;
  align-items: center;
`;

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
