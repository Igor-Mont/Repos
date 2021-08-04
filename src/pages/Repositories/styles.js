import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  main {
    padding: 32px;
    width: 800px;
    height: 600px;
    border-radius: 16px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .options-repos {
      /* background-color: red; */
      display: flex;
      justify-content: space-around;

      h2 {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        display: flex;
        position: relative;
        padding-bottom: 8px;
        cursor: pointer;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: #000;
          transition: all 200ms ease-in-out;
        }

        &:hover::after {
          left: 25%;
          width: 50%;
        }
      }
    }

    .content {
      /* background-color: red; */
      height: 90%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .my-repos {
        padding: 32px;
        border-radius: 16px;
        border: 1px solid #000;
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 16px;
        overflow-y: auto;

        
      }
    }

  }
`;
