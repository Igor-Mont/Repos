/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BoxRepo } from '../../components/Repo';

import { Container } from './styles';

function Repositories() {
  const [repos, setRepos] = useState([]);
  console.log(repos);

  const { user } = useParams();
  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://api.github.com/users/${user}/repos`);
      const data = await response.json();
      setRepos(data);
    }
    getData();
  }, []);

  return (
    <Container>
      <main>
        <div className="options-repos">
          <h2>Meus repositórios</h2>
          <h2>Todos os repositórios</h2>
          <h2>Favoritos</h2>
        </div>
        <div className="content">
          <div className="my-repos">
            {repos.map((v) => <BoxRepo title={v.name} owner={v.owner.login} language={v.language} />)}
          </div>
        </div>
      </main>
    </Container>
  );
}

export default Repositories;
