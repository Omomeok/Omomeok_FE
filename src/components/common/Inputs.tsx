import { useState } from 'react';
import { Eyes } from '../../assets';
import styled from 'styled-components';
import { colors, Flex } from '../../untils';

interface IInputsType {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  width?: string;
  isPwd?: boolean;
  label?: string;
  errorMsg?: string;
}

export const Inputs = ({
  value,
  onChange,
  placeholder,
  width = '100%',
  isPwd,
  label,
  errorMsg = '비밀번호가 일치하지 않습니다',
}: IInputsType) => {
  const [isEye, setIsEye] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const eyeClick = () => {
    setIsEye(!isEye);
  };

  const handleBlurChange = () => {
    setIsError(true);
  };

  return (
    <Flex isColumn={true} alignItems="end" gap={4} width="100%">
      <Flex isColumn={true} gap={4} width="100%">
        <Label>{label}</Label>
        <EyesContainer>
          <Input
            isError={isPwd ? isError : false}
            onBlur={handleBlurChange}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            width={width}
            type={isEye ? 'password' : 'text'}
          />
          {isPwd && <Eyes onClick={eyeClick} isEye={isEye} />}
        </EyesContainer>
      </Flex>
      {isPwd && isError && <Error>{errorMsg}</Error>}
    </Flex>
  );
};

const Error = styled.div`
  font-size: 8px;
  color: ${colors.extra.error};
  font-weight: 600;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.gray[400]};
`;

const Input = styled.input<{ width: string; isError: boolean }>`
  width: ${({ width }) => width};
  height: 44px;
  border-radius: 12px;
  border: 1px solid
    ${({ isError }) => (isError ? colors.extra.error : colors.gray[100])};
  padding: 15px 38px 15px 16px;
  background-color: ${colors.gray[50]};
  font-size: 12px;
  color: ${colors.gray[400]};

  &::placeholder {
    font-size: 12px;
    color: ${colors.gray[100]};
  }
`;

const EyesContainer = styled.div<Pick<IInputsType, 'width'>>`
  width: ${({ width }) => width};
  height: fit-content;
  position: relative;
`;
