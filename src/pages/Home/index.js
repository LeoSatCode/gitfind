import React from "react";
import { Header } from "../../components/Header";
import ItemList from "../../components/ItemList";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AppContext, AppProvider } from "../../context/appContext";

import './styles.css';
import background from '../../assets/img/git.svg';

function App() {

  return (
    <AppProvider>
      <div className="App">
        <Header />
        <div className="content">
          <img src={background} className="background" alt="background" />
          <div className="info">
            <div>
              <Input />
              <Button />
            </div>
            <AppContent />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

const AppContent = () => {
  const { currentUser, repos, user } = React.useContext(AppContext);

  return (
    <>
      {currentUser?.name ? (
        <>
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
    </>
  );
}

export default App;
