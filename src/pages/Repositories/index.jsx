/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { BoxRepo } from '../../components/Repo';

import { Container } from './styles';

function Repositories() {
  const [repos, setRepos] = useState([]);
  const { user } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://api.github.com/users/${user}/repos`);
      const data = await response.json();
      setRepos(data);
    }
    getData();
  }, []);

  const handleBackToHome = () => {
    history.push('/');
  };

  return (
    <Container>
      <main>
        <div className="options-repos">
          <div className="selected">
            <h2>Meus repositórios</h2>
          </div>
          <div>
            <h2>Todos os repositórios</h2>
          </div>
          <div>
            <h2>Favoritos</h2>
          </div>
        </div>
        <div className="content">
          <div className="my-repos">
            { repos.message ? (
              <div className="user-not-found">
                <h1>Usuário não encontrado.</h1>
                <Button title="Voltar para página inicial" onClick={handleBackToHome} />
              </div>
            ) : repos.map((v, i) => <BoxRepo key={i} title={v.name} owner={v.owner.login} language={v.language} />)}
          </div>
        </div>
      </main>
    </Container>
  );
}

export default Repositories;
