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
    if (inputRef.current.value !== '') {
      const usersRef = await database.collection('users');
      const dbRef = await usersRef.doc(usersRef.key).set({
        user: inputRef.current.value,
      });

      history.push(`/repos/${inputRef.current.value}`);
    }
    toast.error('Inisra um nome de usuário');
  };

  useEffect(() => {
    (async function getUsers() {
      const usersRef = await database.collection('users');
      const dataGet = await usersRef.get();
      const data = await dataGet.docs;
      setUsers(data);
    }());
  }, []);

  const { delegate } = users.length >= 1 ? users[0] : '';
  console.log(delegate);
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
        {/* <div className="test">
          {users.length >= 1 && users.map((value, i) => (
            <p key={i}>{value._delegate}</p>
          ))}
        </div> */}
        <div className="logo-title">
          <img src={gitHubLogo} alt="Logo do GitHub" />
          <h1>RepoS</h1>
        </div>
        <div className="box-main">
          <h2>Insira seu usuário do GitHub</h2>
          <input ref={inputRef} type="text" name="userGitHub" id="" placeholder="Usuário do GitHub" />
          <Button title="Entrar" onClick={handleLoginWithUser} />
        </div>
      </main>
    </Container>
  );
}

export default Home;
