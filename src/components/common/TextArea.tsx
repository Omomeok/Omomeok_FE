import styled from 'styled-components';
import { colors, Flex } from '../../untils';

interface ITextAreaType {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLAreaElement>) => void;
  placeholder: string;
  width?: string;
  isPwd?: boolean;
  label?: string;
  errorMsg?: string;
}

export const TextArea = ({
  value,
  onChange,
  placeholder,
  width = '100%',
  label,
}: ITextAreaType) => {
  return (
    <Flex isColumn={true} gap={4} width="100%">
      <Label>{label}</Label>
      <TextAreaContainer
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        width={width}
      />
    </Flex>
  );
};

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.gray[400]};
`;

const TextAreaContainer = styled.textarea<Pick<ITextAreaType, 'width'>>`
  resize: none;
  width: ${({ width }) => width};
  height: 368px;
  border-radius: 12px;
  border: 1px solid ${colors.gray[100]};
  padding: 15px 16px;
  background-color: ${colors.gray[50]};
  font-size: 12px;
  color: ${colors.gray[400]};

  &::placeholder {
    font-size: 12px;
    color: ${colors.gray[100]};
  }
`;
