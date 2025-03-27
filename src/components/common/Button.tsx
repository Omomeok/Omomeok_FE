import styled from 'styled-components';
import { colors } from '../../untils';

interface IButtonType {
  children: string;
  width?: string;
  backgroundColor?: string;
  color?: string;
  backgroundHoverColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  borderColor?: string;
  colorHoverColor?: string;
  isBlocked?: boolean;
}

export const Button = ({
  children,
  onClick,
  width = '100%',
  backgroundColor = colors.main[400],
  color = colors.gray[50],
  backgroundHoverColor = colors.main[600],
  borderColor = 'transparent',
  colorHoverColor = colors.gray[50],
  isBlocked,
}: IButtonType) => {
  return (
    <BtnContainer
      isBlocked={isBlocked}
      width={width}
      backgroundColor={backgroundColor}
      color={color}
      backgroundHoverColor={backgroundHoverColor}
      onClick={onClick}
      borderColor={borderColor}
      colorHoverColor={colorHoverColor}
    >
      {children}
    </BtnContainer>
  );
};

const BtnContainer = styled.button<Omit<IButtonType, 'children'>>`
  transition: 0.3s ease-in;
  width: ${({ width }) => width};
  opacity: ${({ isBlocked }) => (isBlocked ? 0.5 : 1)};
  pointer-events: ${({ isBlocked }) => (isBlocked ? 'none' : 'cursor')};
  height: 50px;
  border-radius: 12px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  font-size: 16px;
  font-weight: 600;
  padding: 14px 60px;
  border: 1px solid ${({ borderColor }) => borderColor};
  &:hover {
    background-color: ${({ backgroundHoverColor }) => backgroundHoverColor};
    color: ${({ colorHoverColor }) => colorHoverColor};
  }
`;
