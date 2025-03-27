import styled from 'styled-components';
import { colors, Flex, Text } from '../../untils';

interface IPostType {
  title: string;
  content: string;
  isAcceptance: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const PostPeople = ({
  title,
  content,
  isAcceptance,
  onClick,
}: IPostType) => {
  return (
    <Container onClick={onClick}>
      <Flex gap={8} isColumn={true} width="100%">
        <Flex alignItems="center" gap={8} width="fit-content">
          <Text color={colors.gray[400]} fontWeight={600}>
            {title}
          </Text>
          <Keyword isAcceptance={isAcceptance}>
            {isAcceptance ? '수락' : '거절'}
          </Keyword>
        </Flex>
        <Text
          color={colors.gray[200]}
          fontWeight={400}
          fontSize={12}
          isOverFlow={true}
          width="256px"
        >
          {content}
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

const Keyword = styled.div<Pick<IPostType, 'isAcceptance'>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  padding: 4px 12px;
  font-size: 8px;
  border-radius: 100px;
  border: 0.8px solid
    ${({ isAcceptance }) => (isAcceptance ? '#4E86FF' : '#ff8989')};
  background-color: ${({ isAcceptance }) =>
    isAcceptance ? '#4e86ff44' : '#ff666643'};
  color: ${({ isAcceptance }) => (isAcceptance ? '#4E86FF' : '#ff4e4e')};
`;
