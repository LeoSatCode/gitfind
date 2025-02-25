import { Header } from "../../components/Header";
import './styles.css';
import background from '../../assets/img/git.svg';
import ItemList from "../../components/ItemList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} className="background" alt="background" />
        <div className="info">
          <div>
            <input name="username" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className="profile">
            <img src="https://avatars.githubusercontent.com/u/186056277?s=400&u=4fc90d4d6e061f2777a6e3dc3341ba4eaae6f00d&v=4" className="photo" alt="avatar" />
            <div>
              <h3>Leonardo Saturnino</h3>
              <span>@LeoSatCode</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />

          <div>
            <h4 className="repo">Repositórios</h4>
            <ItemList title="Projeto 1" description="Descrição do projeto 1" />
            <ItemList title="Projeto 2" description="Descrição do projeto 2" />
            <ItemList title="Projeto 3" description="Descrição do projeto 3" /> 
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
