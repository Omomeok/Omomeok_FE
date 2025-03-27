import styled from 'styled-components';
import { colors, Flex, Text } from '../../untils';

interface IPostType {
  title: string;
  date: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const PostContainer = ({ title, date, onClick }: IPostType) => {
  return (
    <Container onClick={onClick}>
      <Flex gap={8} isColumn={true}>
        <Text color={colors.gray[400]} fontWeight={600}>
          {title}
        </Text>
        <Text color={colors.gray[200]} fontWeight={400} fontSize={12}>
          {date}
        </Text>
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
  width: 100%;
  height: 76px;
  border-radius: 16px;
  background-color: ${colors.gray[700]};
  padding: 16px 24px;
  &:hover {
    background-color: ${colors.gray[600]};
    transition: 0.5s ease-in-out;
    transform: translateY(-8px);
  }
`;
