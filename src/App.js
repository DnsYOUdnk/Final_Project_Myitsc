import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { dataContext } from "./dataContext/dataContext";
import { useState } from "react";
import './styles/style.css';
import './styles/media.css';
import { getLikedData, changeLikedData } from "./utils/changeMarkedLike";

function App() {
  const [searchValue, setSearchValue] = useState('');
  const likedData = getLikedData();
  const [markedElements, setMarkedElements] = useState(likedData);

  return (
      <dataContext.Provider value = {{ searchValue, setSearchValue, markedElements, setMarkedElements, changeLikedData }}>
        <div className="App">
          < Header /> 
          < Main />
          < Footer />
        </div>
      </dataContext.Provider>
  );
}

export default App;