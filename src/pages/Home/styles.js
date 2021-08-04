import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;

  main {
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    background-color: #fff;
    border-radius: 16px;
    padding: 24px 16px;

    .logo-title {
      display: flex;
      gap: 12px;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      img {
        animation: scaleAnimation 2.5s ease-in-out infinite;

      @keyframes scaleAnimation {
        0% {
          transform: scale(0.93);
        }
        50% {
          transform: scale(1);
        }
        100% {
          transform: scale(0.93);
        }
      }
    }

    h1 {
      font-family: 'Inter', sans-serif;
      font-weight: 600;
    }
  }
    

    .box-main {
      width: 90%;
      justify-content: center;
      align-items: center;
      display: flex;
      gap: 16px;
      flex-direction: column;
      
      h2 {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
      }

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

      button {
        width: 60%;
        padding: 8px 12px;
        background-color: #1A1A1A;
        color: #fff;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        border: none;
        border-radius: 8px;
        box-shadow: 1px 2px 2px #000000;

        &:hover {
          background-color: #000000;
          box-shadow: 1px 2px 2px #1A1A1A;
        }
      }
    }
  }

  @media (max-width: 450px) {
    main {
      .logo-title {
        img {
          width: 120px;
          height: 120px;
        }
      }
    }
  }
`;
