/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { BoxRepo } from '../../components/Repo';

import { Container } from './styles';

function Repositories() {
  const [repos, setRepos] = useState([]);
  const { user } = useParams();
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);

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
      {modalOpen && (
      <Modal open={modalOpen} setOpen={setModalOpen}>
        <input type="text" placeholder="Nome de usuário" />
        <Button onClick={() => setModalOpen(!modalOpen)} title="Adicionar amigo" />
      </Modal>
      ) }

      <main>
        <div className="options-repos">
          <div>
            <h2>Meus repositórios</h2>
          </div>
          <div>
            <h2>Todos os repos</h2>
          </div>
          <div>
            <button
              type="button"
              onKeyDown={() => console.log('key')}
              onClick={() => setModalOpen(!modalOpen)}
            >
              Adicionar amigo
            </button>
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
