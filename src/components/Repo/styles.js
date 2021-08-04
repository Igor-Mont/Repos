import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1a1a1a;
  color: #fff;
  border-radius: 16px;
  padding: 10px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h2 {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 18px;
  }
  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
  }
  h4 {
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }
  svg {
    cursor: pointer;
  }
`;
