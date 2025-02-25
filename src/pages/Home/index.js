import { useState } from "react";
import { Header } from "../../components/Header";
import ItemList from "../../components/ItemList";

import './styles.css';
import background from '../../assets/img/git.svg';

function App() {

  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio } = newUser;
      setCurrentUser({ avatar_url, name, bio });

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleGetData();
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} className="background" alt="background" />
        <div className="info">
          <div>
            <input 
              name="username" 
              value={user} 
              onChange={event => setUser(event.target.value)} 
              onKeyUp={handleKeyPress}
              placeholder="@username" 
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? (<>
            <div className="profile">
              <img src={currentUser.avatar_url} className="photo" alt="avatar" />
              <div>
                <h3>{currentUser.name}</h3>
                <span>@{user}</span>
                <p>{currentUser.bio}</p>
              </div>
            </div>
            <hr />
          </>
          ) : null}

          {repos?.length ? (
            <div>
              <h4 className="repo">Repositórios</h4>
              {repos.map(repo => (
                <ItemList
                  key={repo.id}
                  title={<span>{repo.name}</span>}
                  link={repo.html_url}
                  description={repo.description}
                />
              ))}
            </div>
          ) : null}

        </div>
      </div>
    </div>
  );
}

export default App;
