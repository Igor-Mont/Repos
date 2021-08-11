import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .close {
    align-self: flex-end;
  }

  .box {
    display: flex;
    flex-direction: column;
    gap: 4px;
    
    >button {
      outline: 0;
      border: none;
      background: transparent;
    }

    .content {
      border-radius: 8px;
      padding: 16px;
      width: 300px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
  
      input {
        width: 100%;
        height: 30px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        padding: 4px;
  
        ::placeholder {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
        }
      }
    }
  }

`;
