import { styled } from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ $invalid }) => ($invalid ? '#ef4444' : '#6b7280')};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0.9rem;
  font-size: 0.9rem;
  line-height: 1.5;

  background-color: ${({ $invalid }) => ($invalid ? '#fee2e2' : '#f9fafb')};
  color: ${({ $invalid }) => ($invalid ? '#b91c1c' : '#111827')};

  border: 1px solid ${({ $invalid }) => ($invalid ? '#ef4444' : '#d1d5db')};
  border-radius: 0.35rem;

  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  transition: all 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ $invalid }) => ($invalid ? '#ef4444' : '#6366f1')};
    box-shadow: 0 0 0 2px
      ${({ $invalid }) => ($invalid ? 'rgba(239,68,68,0.2)' : 'rgba(99,102,241,0.2)')};
    background-color: #ffffff;
  }

  &::placeholder {
    color: #9ca3af;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const ErrorMessage = styled.span`
  margin-top: 0.35rem;
  font-size: 0.7rem;
  color: #ef4444;
`;

export default function CustomInput({
  label,
  id,
  invalid = false,
  errorMessage,
  ...props
}) {
  return (
    <Wrapper>
      {label && <Label htmlFor={id} $invalid={invalid}>{label}</Label>}
      <Input id={id} $invalid={invalid} {...props} />
      {invalid && errorMessage && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </Wrapper>
  );
}
