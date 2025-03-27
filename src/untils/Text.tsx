import styled from 'styled-components';
import { colors } from './theme';

interface ITextType {
  children?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  position?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  isOverFlow?: boolean;
  width?: string;
}

export const Text = ({
  onClick,
  children,
  fontSize = 16,
  fontWeight = 500,
  color = colors.gray[400],
  position,
  isOverFlow,
  width = '100%',
}: ITextType) => {
  return (
    <TextContainer
      onClick={onClick}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      position={position}
      isOverFlow={isOverFlow}
      width={width}
    >
      {children}
    </TextContainer>
  );
};

const TextContainer = styled.div<Omit<ITextType, 'children'>>`
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  position: ${({ position }) => position};
  text-overflow: ${({ isOverFlow }) => (isOverFlow ? 'ellipsis' : 'clip')};
`;
