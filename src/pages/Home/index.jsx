import React, { useRef } from 'react';

import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import gitHubLogo from '../../assets/gitHubLogo.svg';

function Home() {
  const history = useHistory();
  const inputRef = useRef(null);
  const handleLoginWithUser = () => {
    history.push(`/repos/${inputRef.current.value}`);
  };

  return (
    <Container>
      <main>
        <div className="logo-title">
          <img src={gitHubLogo} alt="Logo do GitHub" />
          <h1>RepoS</h1>
        </div>
        <div className="box-main">
          <h2>Insira seu usuário do GitHub</h2>
          <input ref={inputRef} type="text" name="userGitHub" id="" placeholder="Usuário do GitHub" />
          <button type="button" onClick={handleLoginWithUser}>Entrar</button>
        </div>
      </main>
    </Container>
  );
}

export default Home;
