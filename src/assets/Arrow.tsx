import styled from 'styled-components';
import { colors } from '../untils';

interface IArrow {
  size?: number;
  color?: string;
  isLeft?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Arrow = ({
  size = 24,
  color = colors.main[400],
  isLeft,
}: IArrow) => {
  return (
    <Container isLeft={isLeft}>
      <svg
        width={size}
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.46002 11.29L13.12 5.64004C13.213 5.54631 13.3236 5.47191 13.4454 5.42115C13.5673 5.37038 13.698 5.34424 13.83 5.34424C13.962 5.34424 14.0927 5.37038 14.2146 5.42115C14.3365 5.47191 14.4471 5.54631 14.54 5.64004C14.7263 5.8274 14.8308 6.08085 14.8308 6.34504C14.8308 6.60922 14.7263 6.86267 14.54 7.05004L9.59002 12.05L14.54 17C14.7263 17.1874 14.8308 17.4409 14.8308 17.705C14.8308 17.9692 14.7263 18.2227 14.54 18.41C14.4474 18.5045 14.337 18.5797 14.2151 18.6312C14.0932 18.6827 13.9623 18.7095 13.83 18.71C13.6977 18.7095 13.5668 18.6827 13.445 18.6312C13.3231 18.5797 13.2126 18.5045 13.12 18.41L7.46002 12.76C7.35851 12.6664 7.2775 12.5527 7.2221 12.4262C7.16669 12.2997 7.13809 12.1631 7.13809 12.025C7.13809 11.8869 7.16669 11.7503 7.2221 11.6238C7.2775 11.4973 7.35851 11.3837 7.46002 11.29V11.29Z"
          fill={color}
        />
      </svg>
    </Container>
  );
};

const Container = styled.button<Pick<IArrow, 'isLeft'>>`
  transform: ${({ isLeft }) => (isLeft ? 'rotate(180deg)' : 'rotate(0deg)')};
  width: fit-content;
  cursor: pointer;
  background-color: transparent;
`;
