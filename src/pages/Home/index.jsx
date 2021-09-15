import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { database } from '../../services/firebase';
import { Container } from './styles';
import gitHubLogo from '../../assets/gitHubLogo.svg';
import { Button } from '../../components/Button';

function Home() {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const inputRef = useRef('');
  const handleLoginWithUser = async () => {
    const logedUser = await users.map((v) => v.user.includes(inputRef.current.value));
    console.log(logedUser);

    if (inputRef.current.value !== '') {
      if (logedUser) return history.push(`/repos/${inputRef.current.value}`);
      const usersRef = await database.collection('users');
      const dbRef = await usersRef.doc(usersRef.key).set({
        user: inputRef.current.value,
      });

      history.push(`/repos/${inputRef.current.value}`);
    }
    return toast.error('Inisra um nome de usuário');
  };

  useEffect(() => {
    (async function getUsers() {
      const usersRef = await database.collection('users');
      const dataGet = await usersRef.get();
      const usersRegistred = [];
      const data = await dataGet.forEach((v) => usersRegistred.push(v.data()));
      setUsers(usersRegistred);
    }());
  }, []);

  return (
    <Container>
      <Toaster toastOptions={{
        style: {
          fontFamily: 'Inter',
          fontWeight: 500,
        },
      }}
      />
      <main>
        <div className="logo-title">
          <img src={gitHubLogo} alt="Logo do GitHub" />
          <h1>RepoS</h1>
        </div>
        <div className="box-main">
          <h2>Insira seu usuário do GitHub</h2>
          <input
            ref={inputRef}
            type="text"
            name="userGitHub"
            placeholder="Usuário do GitHub"
            onKeyDown={(e) => (e.keyCode === 13 ? handleLoginWithUser() : null)}
          />
          <Button title="Entrar" onClick={handleLoginWithUser} />
        </div>
      </main>
    </Container>
  );
}

export default Home;
