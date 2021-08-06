import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;

  main {

    .test {
      width: 500px;
      height: 100px;
      background-color: #fff;
    }
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
