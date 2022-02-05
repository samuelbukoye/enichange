import styled from 'styled-components';

export const MessageStyle = styled.pre<{ error?: string }>`
  font-size: 10px;
  margin: 5px 5px 15px;
  color: ${(p) => (p.error ? 'red' : 'green')};
`;
