import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1a1a1a;
  color: #fff;
  border-radius: 16px;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .repo-owner {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 4px;

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

  }
  .language {
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: center;
    /* border: 1p x solid red; */
    h4 {
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }
  }
  svg {
    cursor: pointer;
  }

  @media (max-width: 650px) {
  display: flex;
  justify-content: space-around;
  align-items: center;    
  gap: 8px;
  }
`;
