import styled from 'styled-components';
import { colors, Flex } from '../../untils';
import { Arrow } from '../../assets';

interface IPageNav {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const PageNav = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: IPageNav) => {
  return (
    <Flex alignItems="center" gap={20}>
      <NavChange onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
        <Arrow />
      </NavChange>
      {Array.from({ length: totalPages }, (_, i) => (
        <Nav
          key={i}
          isActive={currentPage === i + 1}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </Nav>
      ))}
      <NavChange
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
      >
        <Arrow isLeft={true} />
      </NavChange>
    </Flex>
  );
};
const NavChange = styled.button`
  cursor: pointer;
  background-color: transparent;
  width: fit-content;
`;

const Nav = styled.nav<{ isActive: boolean }>`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ isActive }) =>
    isActive ? colors.main[400] : colors.gray[50]};
  border: 1px solid ${colors.main[400]};
  color: ${({ isActive }) => (isActive ? colors.gray[50] : colors.main[400])};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in;
  &:hover {
    background-color: ${colors.main[400]};
    border: 1px solid ${colors.main[400]};
    color: ${colors.gray[50]};
    transition: 0.3s ease-in;
  }
`;
